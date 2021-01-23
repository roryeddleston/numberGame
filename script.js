'use strict';

console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
setTimeout(() => {
  document.querySelector('.message').textContent = 'Correct Number!';
}, 3000);
