import refs from './refs.js';

// Функція оновлення інтерфейсу
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = this.loadTargetDate(targetDate);
    this.isRunning = false;
    this.init();
  }

  init() {
    this.loadSettings();
    this.attachEventListeners();
    this.start();
  }

  loadSettings() {
    const savedSettings = localStorage.getItem('timerSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      this.targetDate = new Date(settings.targetDate);
      document.getElementById('target-date').value = settings.targetDate;
      if (settings.theme) {
        document.getElementById('theme-select').value = settings.theme;
        this.applyTheme(settings.theme);
      }
    }
  }

  saveSettings() {
    const settings = {
      targetDate: this.targetDate.toISOString(),
      theme: document.getElementById('theme-select').value
    };
    localStorage.setItem('timerSettings', JSON.stringify(settings));
  }

  attachEventListeners() {
    document.getElementById('target-date').addEventListener('change', (e) => {
      this.targetDate = new Date(e.target.value);
      this.saveSettings();
      this.updateClockface();
    });

    document.getElementById('theme-select').addEventListener('change', (e) => {
      this.applyTheme(e.target.value);
      this.saveSettings();
    });
  }

  applyTheme(theme) {
    document.body.className = `theme-${theme}`;
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.setInt = setInterval(() => {
        this.updateClockface();
        this.timeFinish();
      }, 1000);
    }
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.setInt);
    }
  }

  updateClockface() {
    const nowDate = Date.now();
    const time = this.targetDate - nowDate;
    
    if (time < 0) {
      this.timeFinish();
      return;
    }

    const timeUnits = this.calculateTimeUnits(time);
    this.updateDisplay(timeUnits);
  }

  calculateTimeUnits(time) {
    return {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((time % (1000 * 60)) / 1000)
    };
  }

  updateDisplay(timeUnits) {
    Object.entries(timeUnits).forEach(([unit, value]) => {
      const element = document.querySelector(`[data-value="${unit}"]`);
      if (element) {
        element.textContent = this.pad(value);
        this.animateValue(element);
      }
    });
  }

  animateValue(element) {
    element.classList.add('pulse');
    setTimeout(() => element.classList.remove('pulse'), 500);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  loadTargetDate(defaultDate) {
    const saved = localStorage.getItem('targetDate');
    return saved ? new Date(saved) : new Date(defaultDate);
  }

  timeFinish() {
    if (this.targetDate - Date.now() < 0) {
      this.stop();
      this.showCompletionEffect();
    }
  }

  showCompletionEffect() {
    const completionEffect = document.getElementById('completion-effect');
    completionEffect.classList.add('active');
    this.playCompletionSound();
    this.createConfetti();
  }

  playCompletionSound() {
    const audio = new Audio('./audio/completion.mp3');
    audio.play().catch(console.error);
  }

  createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confettiContainer.appendChild(confetti);
    }
  }
}

// Плагін тут змінюємо дату на вам потрібну)))
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 23:59:59 2023'),
});
timer.updateClockface();
