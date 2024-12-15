function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector('.change-color');
const backColor = document.querySelector('.widget');
const textSpanColor = document.querySelector('.color');
btnColor.addEventListener('click', () => {
  backColor.style.backgroundColor = getRandomHexColor();
  textSpanColor.textContent = backColor.style.backgroundColor;
});
