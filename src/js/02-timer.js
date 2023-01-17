// const flatpickr = require("flatpickr");
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const startEl = document.querySelector('button[data-start]');
startEl.disabled = true;
let timerCounterID = null;
let timerStarted = false; 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= new Date().getTime()) {
      Notify.failure('Please choose a date in the future');

      // Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startEl.disabled = false;
    }
  },
};
const inputEl = flatpickr('#datetime-picker', options);

const onStartClick = event => {
  if (timerStarted) {
    return;
  }

  let timeSelectedByUser = inputEl.selectedDates[0];

  timerCounterID = setInterval(() => {
    let timeNow = new Date();
    let timeDifference = timeSelectedByUser - timeNow;
    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    console.log(convertMs(timeDifference));
    console.log(seconds);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

    if (timeDifference <= 1000) {
      clearInterval(timerCounterID);
    }
  }, 1000);

  timerStarted = true;
};

startEl.addEventListener('click', onStartClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

//*Styles

console.log("hello");
