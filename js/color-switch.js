const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  bodyContent: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  isActive: false,
  colorGenerate: null
};

refs.startBtn.addEventListener("click", handleStartColorGenerateClick);
refs.stopBtn.addEventListener("click", handleStopColorGenerateClick);

function handleStartColorGenerateClick() {
  if (refs.isActive) {
    return;
  }

  refs.colorGenerate = setInterval(() => {
    refs.isActive = true;

    const colorRandom = randomIntegerFromInterval(0, colors.length);
    refs.bodyContent.style.backgroundColor = colors[colorRandom];
  }, 1000);
}

function handleStopColorGenerateClick() {
  clearInterval(refs.colorGenerate);
  refs.isActive = false;
}
