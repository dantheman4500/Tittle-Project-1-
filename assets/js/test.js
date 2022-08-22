var search = document.getElementById("modal-content");
var success = document.getElementById("success");
//lastFM api key: bd89cc2a593abd86e04ed01d5d0b7d7f

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });

var genre = [];
var checkbox = document.querySelectorAll("input[type=checkbox]:checked");
success.addEventListener("click", generatePlaylist());

function getCheckedValues() {
    return Array.from(document.querySelectorAll('input[type="checkbox"]'))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  }
 
  // function generatePlaylist() {

// console.log(genre);
// for(var i=0; i < checkbox.length; i++){
//     genre.push(checkbox[i].value)
// };
// console.log(genre);