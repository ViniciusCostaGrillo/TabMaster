import React, { useEffect, useState } from 'react';

// Interface para definir a estrutura de uma corda da guitarra
interface GuitarString {
  name: string;
  frequency: number;
}

const Tuner: React.FC = () => {
  const [frequency, setFrequency] = useState<number>(0);
  const [note, setNote] = useState<string>('');
  const [cents, setCents] = useState<number>(0);

  // Frequências das cordas da guitarra (em Hz)
  const guitarStrings: GuitarString[] = [
    { name: 'E4', frequency: 329.63 },
    { name: 'B3', frequency: 246.94 },
    { name: 'G3', frequency: 196.00 },
    { name: 'D3', frequency: 146.83 },
    { name: 'A2', frequency: 110.00 },
    { name: 'E2', frequency: 82.41 },
  ];

  useEffect(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    let source: MediaStreamAudioSourceNode;

    const startTuner = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const detectPitch = () => {
          analyser.getByteTimeDomainData(dataArray);
          const detectedFrequency = autoCorrelate(dataArray, audioContext.sampleRate);
          if (detectedFrequency !== -1) {
            setFrequency(detectedFrequency);
            findClosestNote(detectedFrequency);
          }
          requestAnimationFrame(detectPitch);
        };
        detectPitch();
      } catch (err) {
        console.error('Erro ao acessar o microfone:', err);
      }
    };

    startTuner();

    return () => {
      if (source) source.disconnect();
    };
  }, []);

  // Função para autocorrelação (detecção de frequência)
  const autoCorrelate = (buffer: Uint8Array, sampleRate: number): number => {
    const SIZE = buffer.length;
    const THRESHOLD = 0.2;
    let r1 = 0, r2 = SIZE - 1;

    for (let i = 0; i < SIZE / 2; ++i) {
      if (Math.abs(buffer[i]) < THRESHOLD) {
        r1 = i;
        break;
      }
    }

    for (let i = 1; i < SIZE / 2; ++i) {
      if (Math.abs(buffer[SIZE - i]) < THRESHOLD) {
        r2 = SIZE - i;
        break;
      }
    }

    const buf2 = buffer.slice(r1, r2);
    const c = new Array(buf2.length).fill(0);

    for (let i = 0; i < buf2.length; ++i) {
      for (let j = 0; j < buf2.length - i; ++j) {
        c[i] += buf2[j] * buf2[j + i];
      }
    }

    let d = 0;
    while (c[d] > c[d + 1]) d++;
    let maxval = -1, maxpos = -1;
    for (let i = d; i < buf2.length; ++i) {
      if (c[i] > maxval) {
        maxval = c[i];
        maxpos = i;
      }
    }
    const T0 = maxpos;

    if (c[T0] / c[0] < 0.3) return -1; // Sinal muito fraco
    return sampleRate / T0;
  };

  // Função para encontrar a nota mais próxima
  const findClosestNote = (frequency: number): void => {
    let minDiff = Infinity;
    let closestNote = '';
    let centsDiff = 0;

    guitarStrings.forEach((string) => {
      const diff = Math.abs(frequency - string.frequency);
      if (diff < minDiff) {
        minDiff = diff;
        closestNote = string.name;
        centsDiff = 1200 * Math.log2(frequency / string.frequency);
      }
    });

    setNote(closestNote);
    setCents(centsDiff);
  };

  return (
    <div>
      <h2>Afinador</h2>
      <p>Frequência detectada: {frequency.toFixed(2)} Hz</p>
      <p>Nota mais próxima: {note}</p>
      <p>{cents > 0 ? '+' : ''}{cents.toFixed(2)} cents</p>
    </div>
  );
};

export default Tuner;
