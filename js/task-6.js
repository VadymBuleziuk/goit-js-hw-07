function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numbersValue = document.querySelector('#controls input');
const newBox = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const createBoxes = amount => {
  let step = 30;
  const array = [];
  if (amount < 1 || amount > 100) {
    return;
  }
  for (let i = 0; i < amount; i++) {
    array.push(
      `<div style="width: ${step}px; height: ${step}px; background-color: ${getRandomHexColor()};"></div>`,
    );
    step += 10;
  }
  newBox.innerHTML = array.join('');
  numbersValue.value = '';
};
const destroyBoxes = () => {
  newBox.innerHTML = '';
  numbersValue.value = '';
};
createBtn.addEventListener('click', () => createBoxes(numbersValue.value));
destroyBtn.addEventListener('click', destroyBoxes);
