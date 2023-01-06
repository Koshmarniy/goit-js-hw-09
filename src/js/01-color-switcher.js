const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

btnStart.addEventListener('click', onStartClik);
btnStop.addEventListener('click', onStopClick);


