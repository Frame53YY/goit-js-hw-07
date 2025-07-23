const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(element => {
  const heading = element.querySelector('h2');
  const item = element.querySelectorAll('ul li');
  console.log(`Category: ${heading.textContent}`);
  console.log(`Elements: ${item.length}`);
});
