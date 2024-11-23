function startListening() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);
            microphone.connect(analyser);
            analyser.fftSize = 32768;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            //let lastUpdateTime = 0;

            function detectFrequency() {
                //const currentTime = Date.now();
                //if (currentTime - lastUpdateTime >= 100) { // Atualiza a cada 100 ms
                //lastUpdateTime = currentTime;
                analyser.getByteFrequencyData(dataArray);

                let maxIndex = 0;
                let maxValue = 0;

                // Ajustando o índice inicial para ignorar frequências muito baixas
                const startIndex = Math.floor(20 * bufferLength / (audioContext.sampleRate / 2));

                for (let i = startIndex; i < bufferLength; i++) {
                    if (dataArray[i] > maxValue) {
                        maxValue = dataArray[i];
                        maxIndex = i;
                    }
                }

                if (maxValue > 50) {  // Só processa se o som for forte o suficiente
                    const nyquist = audioContext.sampleRate / 2;
                    const rawFrequency = maxIndex * nyquist / bufferLength;
                    const nota = getNota(rawFrequency);
                    if (rawFrequency < 440) {
                        document.getElementById('nota').innerText = 'Nota detectada: ' + nota.nome;
                    } else {
                        document.getElementById('nota').innerText = nota.nome;
                    }

                    // Exibe a frequência base
                    document.getElementById('frequencia').innerText = 'Frequência base: ' + rawFrequency.toFixed(2) + ' Hz';

                    // Atualiza a barra de frequência
                    updateFrequencyBar(rawFrequency, nota);

                    const notaElement = document.getElementById('nota');
                    if (nota.afinado) {
                        notaElement.classList.add('afinado');
                        notaElement.classList.remove('desafinada');
                    } else {
                        notaElement.classList.add('desafinada');
                        notaElement.classList.remove('afinado');
                    }
                }
                //}
                requestAnimationFrame(detectFrequency);
            }

            detectFrequency();
        })
        .catch(function(err) {
            console.error('Erro ao acessar o microfone:', err);
        });
}

function getNota(frequency) {
    const notas = {
        55.00: { nome: "A", afinado: true },
        58.27: { nome: "A#", afinado: true },
        61.74: { nome: "B", afinado: true },
        65.41: { nome: "C", afinado: true },
        69.30: { nome: "C#", afinado: true },
        73.42: { nome: "D", afinado: true },
        77.78: { nome: "D#", afinado: true },
        82.41: { nome: "E", afinado: true },
        87.31: { nome: "F", afinado: true },
        92.50: { nome: "F#", afinado: true },
        98.00: { nome: "G", afinado: true },
        103.83: { nome: "G#", afinado: true },
        110.00: { nome: "A", afinado: true },
        116.54: { nome: "A#", afinado: true },
        123.47: { nome: "B", afinado: true },
        130.81: { nome: "C", afinado: true },
        138.59: { nome: "C#", afinado: true },
        146.83: { nome: "D", afinado: true },
        155.56: { nome: "D#", afinado: true },
        164.81: { nome: "E", afinado: true },
        174.61: { nome: "F", afinado: true },
        185.00: { nome: "F#", afinado: true },
        196.00: { nome: "G", afinado: true },
        207.65: { nome: "G#", afinado: true },
        220.00: { nome: "A", afinado: true },
        233.08: { nome: "A#", afinado: true },
        246.94: { nome: "B", afinado: true },
        261.63: { nome: "C", afinado: true },
        277.18: { nome: "C#", afinado: true },
        293.66: { nome: "D", afinado: true },
        311.13: { nome: "D#", afinado: true },
        329.63: { nome: "E", afinado: true },
        349.23: { nome: "F", afinado: true },
        369.99: { nome: "F#", afinado: true },
        392.00: { nome: "G", afinado: true },
        415.30: { nome: "G#", afinado: true }
    };

    if (frequency >= 440) {
        return { nome: "Frequência acima de 440Hz", afinado: false };
    }

    let notaMaisProxima = { nome: "Nota não detectada", afinado: false };
    let menorDiferenca = Number.MAX_VALUE;

    for (const freq in notas) {
        const freqNum = parseFloat(freq);
        const cents = 1200 * Math.log2(frequency / freqNum);
        const diff = Math.abs(cents);

        if (diff < menorDiferenca) {
            menorDiferenca = diff;
            notaMaisProxima = notas[freq];
        }
    }

    return notaMaisProxima;
}

function updateFrequencyBar(frequency, nota) {
    const bar = document.getElementById('frequencia-bar');

    // Normaliza a frequência para um valor entre 0 e 100
    const normalizedFrequency = Math.min(Math.max(frequency / 440, 0), 1) * 100; // Frequência normalizada, usando o A4 (440Hz) como referência

    // Atualiza a largura da barra
    bar.style.width = normalizedFrequency + '%';

    // Muda a cor da barra conforme a nota afinada ou desafinada
    if (nota.afinado) {
        bar.classList.add('afinado-bar');
        bar.classList.remove('desafinada-bar');
    } else {
        bar.classList.add('desafinada-bar');
        bar.classList.remove('afinado-bar');
    }
}