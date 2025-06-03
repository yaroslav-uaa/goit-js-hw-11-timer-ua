import './sass/main.scss';
import './js/plugin';
import audioManager from './js/music';
import animationManager from './js/animation';

// Initialize service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

// Handle settings panel
const settingsPanel = document.getElementById('settings-panel');
const settingsToggle = document.getElementById('settings-toggle');
const saveSettings = document.getElementById('save-settings');
const cancelSettings = document.getElementById('cancel-settings');

settingsToggle.addEventListener('click', () => {
  settingsPanel.classList.toggle('active');
  settingsToggle.setAttribute('aria-expanded', settingsPanel.classList.contains('active'));
});

saveSettings.addEventListener('click', () => {
  settingsPanel.classList.remove('active');
  settingsToggle.setAttribute('aria-expanded', 'false');
});

cancelSettings.addEventListener('click', () => {
  settingsPanel.classList.remove('active');
  settingsToggle.setAttribute('aria-expanded', 'false');
});

// Handle share button
const shareButton = document.getElementById('share-timer');
shareButton.addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Meet Me! - Romantic Countdown Timer',
        text: 'Check out this romantic countdown timer!',
        url: window.location.href
      });
    } catch (err) {
      console.log('Error sharing: ', err);
    }
  } else {
    // Fallback for browsers that don't support Web Share API
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  }
});

// Handle loading screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';
});
