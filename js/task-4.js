const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value.trim() === '' ||
    event.target.elements.password.value.trim() === ''
  ) {
    alert('All form fields must be filled in');
    return;
  }
  console.log({
    [event.target.elements.email.name]:
      event.target.elements.email.value.trim(),
    [event.target.elements.password.name]:
      event.target.elements.password.value.trim(),
  });
  form.reset();
}
