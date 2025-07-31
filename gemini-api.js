<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Infográfico: Da Ideia ao Site no Ar com IA</title>
    
    <!-- Chosen Palette: Energetic & Playful -->
    <!-- Application Structure Plan: The infographic is structured as a top-to-bottom narrative flow called "From Idea to Live Website," divided into four key stages: Creation, Publication, Management, and Analysis. This linear, process-oriented structure was chosen because the source material is a step-by-step guide. It allows users to easily follow the journey of creating a website, making the information highly digestible for beginners. Key interactions are minimal, focusing on chart tooltips to maintain a clean, infographic feel. A new Text-to-Speech feature is added to the Creation section for enhanced accessibility. -->
    <!-- Visualization & Content Choices: 
        - Report Info: Process of using Gemini. Goal: Organize. Viz/Presentation Method: Flowchart diagram. Interaction: New TTS button for audio playback. Justification: A flowchart clearly illustrates the creation sequence, and the TTS feature makes key sections accessible audibly. Library/Method: HTML/CSS with Tailwind, Gemini API for TTS (NO SVG/Mermaid).
        - Report Info: Steps to publish on GitHub Pages. Goal: Organize. Viz/Presentation Method: 3-step numbered list with icons. Interaction: None. Justification: Simplifies the technical process into three clear, visual steps. Library/Method: HTML/CSS with Tailwind (NO SVG/Mermaid).
        - Report Info: Site update cycle. Goal: Organize. Viz/Presentation Method: Cyclical process diagram. Interaction: None. Justification: A circular flow effectively represents the iterative nature of website management. Library/Method: HTML/CSS with Tailwind (NO SVG/Mermaid).
        - Report Info: Problems solved by GA4. Goal: Compare. Viz/Presentation Method: Bar Chart. Interaction: Tooltips on hover. Justification: A bar chart visually compares the impact of solving different user engagement problems, making the value of analytics tangible. Library/Method: Chart.js/Canvas, with required label wrapping and tooltip config (NO SVG/Mermaid).
    -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->

    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc;
        }
        .card {
            background-color: white;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
        }
        .step-arrow {
            color: #FFD166;
            font-size: 2.5rem;
            line-height: 1;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            height: 400px;
            max-height: 50vh;
        }
    </style>
</head>
<body class="text-gray-800">

    <div class="container mx-auto p-4 md:p-8 max-w-5xl">

        <header class="text-center my-12">
            <h1 class="text-4xl md:text-5xl font-extrabold text-[#073B4C] mb-4">Da Ideia ao Site no Ar com IA</h1>
            <p class="text-lg md:text-xl text-[#118AB2] max-w-3xl mx-auto">Um guia visual de como usar o Gemini e o GitHub para criar, publicar e analisar sua presença online de forma gratuita.</p>
        </header>

        <main class="space-y-16">

            <section id="creation" class="card p-6 md:p-8">
                <div class="text-center mb-8">
                    <span class="text-sm font-bold uppercase text-white bg-[#FF6B6B] py-1 px-3 rounded-full">Etapa 1</span>
                    <h2 class="text-3xl font-bold mt-2 text-[#073B4C]">A Faísca da Criação</h2>
                    <p id="tts-text" class="text-md text-gray-600 mt-2 inline-block">Use o Gemini como seu parceiro de desenvolvimento para transformar conceitos em conteúdo e código estruturado.</p>
                    <button id="tts-button" class="ml-2 text-xl align-middle text-[#118AB2] hover:text-[#073B4C] transition duration-300">
                      🔊
                    </button>
                    <div id="tts-loading" class="hidden ml-2 align-middle text-sm text-gray-500">
                        Carregando áudio...
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
                    <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p class="text-4xl mb-2">💡</p>
                        <h3 class="font-semibold text-[#118AB2]">Sua Ideia</h3>
                    </div>
                    <div class="step-arrow font-bold transform md:rotate-0 rotate-90">→</div>
                    <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p class="text-4xl mb-2">💬</p>
                        <h3 class="font-semibold text-[#FFD166]">Prompt no Gemini</h3>
                    </div>
                    <div class="step-arrow font-bold transform md:rotate-0 rotate-90">→</div>
                    <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p class="text-4xl mb-2">📄</p>
                        <h3 class="font-semibold text-[#06D6A0]">Código e Conteúdo</h3>
                    </div>
                </div>
            </section>

            <section id="publication" class="card p-6 md:p-8">
                <div class="text-center mb-8">
                    <span class="text-sm font-bold uppercase text-white bg-[#FFD166] py-1 px-3 rounded-full">Etapa 2</span>
                    <h2 class="text-3xl font-bold mt-2 text-[#073B4C]">Publicando para o Mundo</h2>
                    <p class="text-md text-gray-600 mt-2">Com o GitHub Pages, seu site estático vai ao ar em minutos, de graça.</p>
                </div>
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-full bg-[#118AB2] text-white flex items-center justify-center text-2xl font-bold mb-3">1</div>
                        <h3 class="font-semibold text-lg mb-1">Crie um Repositório</h3>
                        <p class="text-sm text-gray-500">No GitHub, crie um novo repositório público para seu projeto.</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-full bg-[#118AB2] text-white flex items-center justify-center text-2xl font-bold mb-3">2</div>
                        <h3 class="font-semibold text-lg mb-1">Faça o Upload do `index.html`</h3>
                        <p class="text-sm text-gray-500">Adicione o arquivo HTML da sua página ao repositório.</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-full bg-[#118AB2] text-white flex items-center justify-center text-2xl font-bold mb-3">3</div>
                        <h3 class="font-semibold text-lg mb-1">Ative o GitHub Pages</h3>
                        <p class="text-sm text-gray-500">Nas configurações, ative a hospedagem a partir do seu branch principal.</p>
                    </div>
                </div>
            </section>
            
            <section id="management" class="card p-6 md:p-8">
                <div class="text-center mb-8">
                    <span class="text-sm font-bold uppercase text-white bg-[#06D6A0] py-1 px-3 rounded-full">Etapa 3</span>
                    <h2 class="text-3xl font-bold mt-2 text-[#073B4C]">Evolua e Cresça</h2>
                    <p class="text-md text-gray-600 mt-2">Seu site não é estático. Edite e atualize facilmente seguindo um ciclo simples.</p>
                </div>
                 <div class="flex items-center justify-center space-x-4 md:space-x-8 text-center text-sm md:text-base">
                    <div class="p-4 rounded-lg bg-gray-100 font-semibold">Editar no Canvas</div>
                    <div class="step-arrow text-[#06D6A0]">→</div>
                    <div class="p-4 rounded-lg bg-gray-100 font-semibold">Salvar Arquivo</div>
                    <div class="step-arrow text-[#06D6A0]">→</div>
                    <div class="p-4 rounded-lg bg-gray-100 font-semibold">Re-upload no GitHub</div>
                    <div class="step-arrow text-[#06D6A0] transform rotate-90 md:rotate-0">↓</div>
                    <div class="p-4 rounded-lg bg-green-200 text-green-800 font-bold md:absolute md:transform md:translate-y-20">Site Atualizado!</div>
                </div>
            </section>

            <section id="analysis" class="card p-6 md:p-8">
                <div class="text-center mb-8">
                    <span class="text-sm font-bold uppercase text-white bg-[#118AB2] py-1 px-3 rounded-full">Etapa 4</span>
                    <h2 class="text-3xl font-bold mt-2 text-[#073B4C]">Entenda seu Público</h2>
                    <p class="text-md text-gray-600 mt-2">Use o Google Analytics 4 para transformar dados em decisões. Veja como o GA4 ajuda a resolver problemas comuns e a medir o impacto de cada solução.</p>
                </div>
                <div class="chart-container">
                    <canvas id="ga4Chart"></canvas>
                </div>
            </section>

        </main>

        <footer class="text-center mt-16 mb-8">
            <div class="max-w-3xl mx-auto space-y-4">
                <h3 class="text-2xl font-bold text-[#073B4C]">Transforme sua Ideia em Realidade Digital</h3>
                <p class="text-md text-gray-600">
                    Gostou do que viu? Este infográfico foi criado com o mesmo processo que ofereço para o desenvolvimento de páginas web. Se você deseja ter uma presença online profissional, prática e estratégica, entre em contato.
                </p>
                <div class="flex justify-center space-x-4">
                    <a href="http://wa.me/5567991615152" target="_blank" class="inline-block bg-[#118AB2] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#073B4C] transition duration-300">
                        Entre em Contato
                    </a>
                </div>
            </div>
            <p class="text-gray-500 mt-8">Infográfico criado com a ajuda do Gemini e por Andre P. Batista. Comece sua jornada digital hoje!</p>
        </footer>

    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const ctx = document.getElementById('ga4Chart').getContext('2d');
            
            const rawLabels = [
                'Visitantes saem da página rapidamente', 
                'Botão de ação principal não recebe cliques', 
                'Não sei qual rede social traz mais tráfego'
            ];

            const wrapLabels = (labels, maxWidth) => {
                return labels.map(label => {
                    if (label.length <= maxWidth) {
                        return label;
                    }
                    const words = label.split(' ');
                    let lines = [];
                    let currentLine = '';
                    words.forEach(word => {
                        if ((currentLine + word).length > maxWidth) {
                            lines.push(currentLine.trim());
                            currentLine = '';
                        }
                        currentLine += word + ' ';
                    });
                    lines.push(currentLine.trim());
                    return lines;
                });
            };

            const chartLabels = wrapLabels(rawLabels, 16);

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: chartLabels,
                    datasets: [{
                        label: 'Impacto da Solução no Crescimento',
                        data: [65, 85, 75],
                        backgroundColor: [
                            '#FFD166',
                            '#06D6A0',
                            '#118AB2'
                        ],
                        borderColor: [
                            '#E7B84B',
                            '#05A984',
                            '#0D6F8C'
                        ],
                        borderWidth: 2,
                        borderRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: {
                                display: false
                            },
                            ticks: {
                                font: {
                                    weight: '600'
                                }
                            }
                        },
                        y: {
                            grid: {
                                color: '#e2e8f0'
                            },
                            ticks: {
                                font: {
                                    size: 14,
                                    weight: '500'
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Problemas Comuns e o Impacto de Suas Soluções',
                            font: {
                                size: 18,
                                weight: 'bold'
                            },
                            padding: {
                                bottom: 20
                            }
                        },
                        tooltip: {
                            callbacks: {
                                title: function(tooltipItems) {
                                    const item = tooltipItems[0];
                                    let label = item.chart.data.labels[item.dataIndex];
                                    if (Array.isArray(label)) {
                                      return label.join(' ');
                                    } else {
                                      return label;
                                    }
                                }
                            }
                        }
                    }
                }
            });

            // Logica para o novo recurso de Text-to-Speech (TTS)
            const ttsButton = document.getElementById('tts-button');
            const ttsText = document.getElementById('tts-text').innerText;
            const ttsLoading = document.getElementById('tts-loading');

            async function speakText() {
                ttsButton.disabled = true;
                ttsLoading.classList.remove('hidden');

                const payload = {
                    contents: [{
                        parts: [{ text: ttsText }]
                    }],
                    generationConfig: {
                        responseModalities: ["AUDIO"],
                        speechConfig: {
                            voiceConfig: {
                                prebuiltVoiceConfig: { voiceName: "Puck" }
                            }
                        }
                    },
                    model: "gemini-2.5-flash-preview-tts"
                };

                const apiKey = ""; 
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;

                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    const result = await response.json();
                    
                    const part = result?.candidates?.[0]?.content?.parts?.[0];
                    const audioData = part?.inlineData?.data;
                    const mimeType = part?.inlineData?.mimeType;

                    if (audioData && mimeType && mimeType.startsWith("audio/")) {
                        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                        
                        const pcmData = Uint8Array.from(atob(audioData), c => c.charCodeAt(0)).buffer;
                        const pcm16 = new Int16Array(pcmData);

                        const buffer = audioContext.createBuffer(1, pcm16.length, 16000);
                        const channelData = buffer.getChannelData(0);
                        for (let i = 0; i < pcm16.length; i++) {
                            channelData[i] = pcm16[i] / 32768;
                        }

                        const source = audioContext.createBufferSource();
                        source.buffer = buffer;
                        source.connect(audioContext.destination);
                        source.start(0);

                        source.onended = () => {
                            ttsButton.disabled = false;
                            ttsLoading.classList.add('hidden');
                        };
                    } else {
                        alert('Erro ao gerar o áudio. Tente novamente.');
                    }
                } catch (error) {
                    alert(`Erro na API: ${error.message}`);
                    ttsButton.disabled = false;
                    ttsLoading.classList.add('hidden');
                }
            }

            ttsButton.addEventListener('click', speakText);
        });
    </script>
</body>
</html>
