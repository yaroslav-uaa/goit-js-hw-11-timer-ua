import refs from './refs.js';

// Дадаю музончік
const kaleoRef = document.querySelector('audio');
refs.musicPlay.addEventListener('click', () => {
  refs.musicPlay.disabled = true;
  refs.musicMute.disabled = false;
  kaleoRef.muted = false;
  kaleoRef.play();
});

refs.musicMute.addEventListener('click', () => {
  refs.musicPlay.disabled = false;
  refs.musicMute.disabled = true;
  kaleoRef.muted = true;
});
