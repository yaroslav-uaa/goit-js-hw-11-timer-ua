const refs = {
  // Timer elements
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
  
  // Settings elements
  settingsPanel: document.getElementById('settings-panel'),
  settingsToggle: document.getElementById('settings-toggle'),
  targetDateInput: document.getElementById('target-date'),
  themeSelect: document.getElementById('theme-select'),
  backgroundUrlInput: document.getElementById('background-url'),
  volumeControl: document.getElementById('volume-control'),
  saveSettings: document.getElementById('save-settings'),
  cancelSettings: document.getElementById('cancel-settings'),
  
  // Music controls
  musicToggle: document.getElementById('music-toggle'),
  volumeDisplay: document.getElementById('volume-display'),
  
  // Effects
  completionEffect: document.getElementById('completion-effect'),
  confettiContainer: document.querySelector('.confetti-container'),
  
  // Text rotation
  textRotator: document.querySelector('.txt-rotate'),
  
  // Loading screen
  loadingScreen: document.getElementById('loading-screen'),
  
  // Accessibility
  reducedMotionNotice: document.querySelector('.reduced-motion-notice')
};

export default refs;
//
