document.addEventListener('DOMContentLoaded', function () {
    const generatePlanBtn = document.getElementById('generate-plan-btn');
    const problemInput = document.getElementById('problem-input');
    const loadingIndicator = document.getElementById('loading-indicator');
    const planOutput = document.getElementById('plan-output');
    const planText = document.getElementById('plan-text');

    async function generatePlan() {
        const userPrompt = problemInput.value;
        if (!userPrompt) {
            alert('Por favor, descreva um problema antes de gerar um plano.');
            return;
        }

        loadingIndicator.classList.remove('hidden');
        planOutput.classList.add('hidden');

        const prompt = `Atue como um consultor de marketing e produtividade para pequenas empresas. Baseado no seguinte problema: "${userPrompt}", crie um plano de ação simples e direto com 3 a 4 passos. Responda apenas com o plano de ação, sem introduções ou conclusões. Use uma linguagem profissional e clara, focada em ações concretas.`;

        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            
            // Verificação de erro melhorada
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                planText.innerText = text;
                planOutput.classList.remove('hidden');
            } else {
                planText.innerText = `Erro ao gerar plano: A resposta da API não contém texto válido. Por favor, tente novamente com uma descrição diferente.`;
                planOutput.classList.remove('hidden');
            }

        } catch (error) {
            planText.innerText = `Erro ao gerar plano: ${error.message}`;
            planOutput.classList.remove('hidden');
        } finally {
            loadingIndicator.classList.add('hidden');
        }
    }

    generatePlanBtn.addEventListener('click', generatePlan);
});
