const input = document.querySelector('#name-input');
console.dir(input);
const output = document.querySelector('#name-output');
console.dir(output.textContent);

input.addEventListener('input', handleInput);

function handleInput(event) {
  const value = event.currentTarget.value.trim();
  output.textContent = value || 'Anonymous';
}
