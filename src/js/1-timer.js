import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/icon.svg';

const buttonStart = document.querySelector('[data-start]');
buttonStart.setAttribute('disabled', false);
const myInput = document.getElementById('datetime-picker');
let daysTimer = document.querySelector('[data-days]');
let hoursTimer = document.querySelector('[data-hours]');
let minutesTimer = document.querySelector('[data-minutes]');
let secondsTimer = document.querySelector('[data-seconds]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < options.defaultDate) {
      buttonStart.setAttribute('disabled', true);
      iziToast.show({
        iconUrl: icon,
        message: 'Please choose a date in the future',
        color: '#ef4040',
        messageColor: 'white',
        timeout: 3000,
        imageWidth: 50,
        position: 'topRight',
      });
    } else {
      buttonStart.removeAttribute('disabled');
      userSelectedDate = selectedDates[0];
    }
  },
};
flatpickr(myInput, options);

function updateTimerDisplay() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    let ms = userSelectedDate - currentTime;
    ms -= 1000;
    console.log(ms);
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    if (ms <= 0) {
      clearInterval(intervalId);
      buttonStart.removeAttribute('disabled');
      myInput.removeAttribute('disabled');
      return;
    }
    daysTimer.textContent = `${days}`.padStart(2, '0');
    hoursTimer.textContent = `${hours}`.padStart(2, '0');
    minutesTimer.textContent = `${minutes}`.padStart(2, '0');
    secondsTimer.textContent = `${seconds}`.padStart(2, '0');
  }, 1000);
}
buttonStart.addEventListener('click', function () {
  buttonStart.setAttribute('disabled', true);
  myInput.setAttribute('disabled', true);
  updateTimerDisplay();
});
