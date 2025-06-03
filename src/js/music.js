import refs from './refs.js';

class AudioManager {
  constructor() {
    this.backgroundMusic = document.getElementById('background-music');
    this.completionSound = new Audio('./audio/completion.mp3');
    this.volume = localStorage.getItem('volume') || 0.5;
    this.isMuted = localStorage.getItem('isMuted') === 'true';
    this.init();
  }

  init() {
    this.setVolume(this.volume);
    this.setMuted(this.isMuted);
    this.attachEventListeners();
  }

  attachEventListeners() {
    const volumeControl = document.getElementById('volume-control');
    const musicToggle = document.getElementById('music-toggle');

    if (volumeControl) {
      volumeControl.value = this.volume * 100;
      volumeControl.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        this.setVolume(volume);
      });
    }

    if (musicToggle) {
      musicToggle.setAttribute('aria-pressed', !this.isMuted);
      musicToggle.addEventListener('click', () => this.toggleMute());
    }
  }

  setVolume(value) {
    this.volume = value;
    this.backgroundMusic.volume = value;
    this.completionSound.volume = value;
    localStorage.setItem('volume', value);
    
    const volumeDisplay = document.getElementById('volume-display');
    if (volumeDisplay) {
      volumeDisplay.textContent = `${Math.round(value * 100)}%`;
    }
  }

  setMuted(value) {
    this.isMuted = value;
    this.backgroundMusic.muted = value;
    this.completionSound.muted = value;
    localStorage.setItem('isMuted', value);
    
    const musicToggle = document.getElementById('music-toggle');
    if (musicToggle) {
      musicToggle.setAttribute('aria-pressed', !value);
      musicToggle.querySelector('.btn-text').textContent = value ? 'Unmute' : 'Mute';
    }
  }

  toggleMute() {
    this.setMuted(!this.isMuted);
  }

  playBackgroundMusic() {
    this.backgroundMusic.play().catch(console.error);
  }

  playCompletionSound() {
    this.completionSound.play().catch(console.error);
  }
}

// Initialize audio manager
const audioManager = new AudioManager();
export default audioManager;
