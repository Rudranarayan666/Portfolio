// Web Audio API Procedural Sci-Fi Sound Synthesizer Engine

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.ambientGain = null;
    this.ambientOsc = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      this.startAmbient();
      this.playBeep(880, 0.08, "sine");
    } else {
      this.stopAmbient();
    }
    return this.enabled;
  }

  startAmbient() {
    if (!this.ctx || !this.enabled || this.ambientOsc) return;
    try {
      this.ambientOsc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();
      
      this.ambientOsc.type = "sine";
      this.ambientOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low sub drone 55Hz
      
      this.ambientGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.ambientGain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 2); // Soft volume
      
      this.ambientOsc.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);
      
      this.ambientOsc.start();
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  stopAmbient() {
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        if (this.ambientOsc) {
          this.ambientOsc.stop();
          this.ambientOsc.disconnect();
          this.ambientOsc = null;
        }
      }, 500);
    }
  }

  playHover() {
    if (!this.enabled) return;
    this.playBeep(1200, 0.03, "sine", 0.02);
  }

  playClick() {
    if (!this.enabled) return;
    this.playBeep(600, 0.08, "triangle", 0.05);
  }

  playWarp() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(120, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.6);
      
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.6);
    } catch (e) {
      console.warn("Warp sound error:", e);
    }
  }

  playBeep(freq = 880, duration = 0.05, type = "sine", vol = 0.04) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio suppressed or blocked by browser policy
    }
  }
}

export const soundFx = new SoundEngine();
