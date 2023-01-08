// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// all modules
import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector('#datetime-picker'),
    btn: document.querySelector('[data-start]'),

    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('data-seconds'),
};

let intervalId = null;
let endTime = null;

refs.btn.addEventListener('click', onStartBtn);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      const currentTime = Date.now();
      const isPastDate = selectedDates[0] < currentTime;

      if (isPastDate) {
        Notiflix.Notify.failure('Please choose a date in the future');
        init();
        clearInterval(intervalId);
        return
      }

      refs.btn.disabled = false;
      endTime = selectedDates[0];

      updateWatchface(countDeltaTime());

    },
  };

  flatpickr(refs.input, options);

  init();

  function init() {
    
  }