'use strict';

// console.log(document.querySelector('.between').textContent);
// document.querySelector('.message').textContent = 'correct number';
// document.querySelector('.score').textContent = 18 ;
document.querySelector('.check').addEventListener('click', function () {
  const a = Number(document.querySelector('.guess').value);
  console.log(a);
});

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
// });
