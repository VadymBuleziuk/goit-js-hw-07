const fieldEl = document.querySelector('#name-input');
const fieldSpan = document.querySelector('#name-output');

fieldEl.addEventListener('input', () => {
  fieldSpan.textContent = fieldEl.value.trim();
  if (fieldEl.value.trim() === '') {
    fieldSpan.textContent = 'Anonymous';
  }
});
