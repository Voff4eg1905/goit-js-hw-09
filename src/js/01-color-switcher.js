function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let startPressed = false;
let ColorChangeId = null;
const startButtonEl = document.querySelector('button[data-start]');
const stopButtonEl = document.querySelector('button[data-stop]');

const onStartClick = event => {
  console.log('Start Clicked');
  if (startPressed) {
    return;
  }
  startPressed = true;
  ColorChangeId = setInterval(changeColor, 1000);
  startButtonEl.disabled = true;
  function changeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
};

const onStopClick = event => {
  console.log('Stop Clicked');
  clearInterval(ColorChangeId);
  startPressed = false;
  document.body.style.backgroundColor = 'white';
  startButtonEl.disabled = false;
};
startButtonEl.addEventListener('click', onStartClick);
stopButtonEl.addEventListener('click', onStopClick);
