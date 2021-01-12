import refs from './refs.js';

// Функція оновлення інтерфейсу
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  updateClockface() {
    const nowDate = Date.now();
    const time = this.targetDate - nowDate;
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.seconds.textContent = `${seconds}`;
  }

  // Форматуємо наш запис наших цифр у форматі 00 01 02 03 ... 11...23...45..59
  pad(value) {
    return String(value).padStart(2, '0');
  }
  //  Функція закінчення таймера !
  timeFinish(time) {
    if (this.targetDate - Date.now() < 0) {
      clearInterval(this.setInt);
      refs.timerRef.textContent = '"So.... Have a good meeting”';
      refs.timerRef.style.textShadow =
        '0 0 5px white, 0 0 10px white, 0 0 15px white, 0 0 20px rebeccapurple';
      refs.timerRef.style.fontSize = '50px';
    }
  }
  // Інтервал оновлення часу
  setInt = setInterval(() => {
    this.updateClockface();
    this.timeFinish();
  }, 1000);
}
// Плагін тут змінюємо дату на вам потрібну)))
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 15, 17:00:00 2021'),
});
timer.updateClockface();
