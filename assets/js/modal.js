//js for modal

var searchButton = document.querySelector('#trigger');
var modalBg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');
var mClose = document.querySelector('#close-modal');

searchButton.addEventListener('click', () => {
modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});
mClose.addEventListener('click', () => {
  modal.classList.remove('is-active');
});