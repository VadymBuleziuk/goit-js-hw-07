const pageForm = document.querySelector('.login-form');
pageForm.addEventListener('submit', event => {
  event.preventDefault();
  if (pageForm.elements.email.value === '' || pageForm.elements.password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formValue = {
    [pageForm.elements.email.name]: pageForm.elements.email.value.trim(),
    [pageForm.elements.password.name]: pageForm.elements.password.value.trim(),
  };
  console.log(formValue);
  pageForm.reset();
});
