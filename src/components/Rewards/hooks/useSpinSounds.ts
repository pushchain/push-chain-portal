import { useRef, useCallback } from 'react';

const useSpinSounds = () => {
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(false);
  const phaseRef = useRef<'fast' | 'decel'>('fast');
  const tickCountRef = useRef(0);

  const ctx = () => {
    if (!ctxRef.current) ctxRef.current = new AudioContext();
    return ctxRef.current;
  };

  const tick = useCallback((freq: number) => {
    const c = ctx();
    const g = gainRef.current!;

    const osc = c.createOscillator();
    const env = c.createGain();
    osc.type = 'square';
    osc.frequency.value = freq;
    env.gain.setValueAtTime(0.25, c.currentTime);
    env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.06);
    osc.connect(env);
    env.connect(g);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + 0.07);

    // Octave layer
    const osc2 = c.createOscillator();
    const env2 = c.createGain();
    osc2.type = 'square';
    osc2.frequency.value = freq * 2;
    env2.gain.setValueAtTime(0.08, c.currentTime);
    env2.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.04);
    osc2.connect(env2);
    env2.connect(g);
    osc2.start(c.currentTime);
    osc2.stop(c.currentTime + 0.05);
  }, []);

  const schedule = useCallback(() => {
    if (!activeRef.current) return;

    const scale = [523, 587, 659, 698, 784, 698, 659, 587];
    const freq = scale[tickCountRef.current % scale.length];
    tickCountRef.current++;
    tick(freq);

    // Fast phase: 10 slots per 0.6s rotation = ~60ms per tick
    // Decel phase: slow from 60ms to ~500ms over ~3s (matching power3.out)
    let delay: number;
    if (phaseRef.current === 'fast') {
      delay = 60;
    } else {
      // power3.out deceleration: each tick gets progressively slower
      const t = tickCountRef.current;
      delay = 60 + t * t * 1.5;
      if (delay > 500) {
        activeRef.current = false;
        return;
      }
    }

    timeoutRef.current = setTimeout(schedule, delay);
  }, [tick]);

  const playSpinSound = useCallback(() => {
    try {
      const c = ctx();
      const g = c.createGain();
      g.gain.value = 0.15;
      g.connect(c.destination);
      gainRef.current = g;
      activeRef.current = true;
      phaseRef.current = 'fast';
      tickCountRef.current = 0;
      schedule();
    } catch (_) {}
  }, [schedule]);

  const startDeceleration = useCallback(() => {
    phaseRef.current = 'decel';
    tickCountRef.current = 0;
  }, []);

  const stopSpinSound = useCallback(() => {
    activeRef.current = false;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (gainRef.current && ctxRef.current) {
      gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, ctxRef.current.currentTime);
      gainRef.current.gain.exponentialRampToValueAtTime(0.001, ctxRef.current.currentTime + 0.1);
    }
  }, []);

  const playWinSound = useCallback(() => {
    try {
      const c = ctx();
      const g = c.createGain();
      g.gain.value = 0.18;
      g.connect(c.destination);

      const notes = [
        { freq: 784, time: 0 },
        { freq: 988, time: 0.08 },
        { freq: 1175, time: 0.16 },
        { freq: 1568, time: 0.24 },
        { freq: 1319, time: 0.36 },
        { freq: 1568, time: 0.44 },
      ];

      notes.forEach(({ freq, time }) => {
        const osc = c.createOscillator();
        const env = c.createGain();
        osc.type = 'square';
        osc.frequency.value = freq;
        env.gain.setValueAtTime(0, c.currentTime + time);
        env.gain.linearRampToValueAtTime(0.3, c.currentTime + time + 0.02);
        env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + time + 0.15);
        osc.connect(env);
        env.connect(g);
        osc.start(c.currentTime + time);
        osc.stop(c.currentTime + time + 0.2);
      });

      [1568, 1976, 2349].forEach((freq) => {
        const osc = c.createOscillator();
        const env = c.createGain();
        osc.type = 'square';
        osc.frequency.value = freq;
        env.gain.setValueAtTime(0, c.currentTime + 0.55);
        env.gain.linearRampToValueAtTime(0.15, c.currentTime + 0.6);
        env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 1.2);
        osc.connect(env);
        env.connect(g);
        osc.start(c.currentTime + 0.55);
        osc.stop(c.currentTime + 1.3);
      });
    } catch (_) {}
  }, []);

  return { playSpinSound, startDeceleration, stopSpinSound, playWinSound };
};

export { useSpinSounds };
