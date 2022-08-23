var search = document.getElementById("modal-content");
var success = document.getElementById("success");
var form = document.getElementById("StartCity")
var staringLocation = document.getElementById("endCity")
var endLocation = document.getElementById("inputButton")
var inputBtn = document.getElementById("form")
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

  var search = document.getElementById("modal-content");
  var generalSelected = []

  search.addEventListener("submit", function(e){
    e.preventDefault();
    var checkboxes = document.querySelectorAll('input[type="checkbox"]') 
    for (var i = 0; i < checkboxes.length; ++i) {
        if (checkboxes[i].checked == true)
        {
            generalSelected.push(checkboxes[i].value);
        }
    }
    console.log(generalSelected);

  });


// ---------------- Search Auto complete --------------//

function bingMapsReady() {
  Microsoft.Maps.loadModule("Microsoft.Maps.AutoSuggest", {
    callback: onLoad,
    credentials: 'AhY96IWC3yKWC_QLEHXFNfqY-xMFORlc9M8RPDG4YPiyzqM__YEPn42iuFQjJ5hR'
  });

  function onLoad() {
    var options = { maxResults: 5 };
    initAutosuggestControl(options, "StartCity", "searchBoxContainer" ,);
    initAutosuggestControl(options, "endCity", "searchBoxContainerAlt");
  }
}
function initAutosuggestControl(
  options,
  suggestionBoxId,
  suggestionContainerId,
) {
  var manager = new Microsoft.Maps.AutosuggestManager(options);
  manager.attachAutosuggest(
    "#" + suggestionBoxId,
    "#" + suggestionContainerId,
    selectedSuggestion,
  );
  
  var Obj = {};
  var Box = suggestionBoxId;
  var arr= [];
  Obj[Box]= arr;

 function selectedSuggestion(suggestionResult) {
   var lat = suggestionResult.location.latitude;
   var lot = suggestionResult.location.longitude;
   console.log(suggestionResult)
  arr.push(lat,lot).value
  console.log(Obj)
    
  };
}
// ---------------------------------------------------//
// key  = 'AhY96IWC3yKWC_QLEHXFNfqY-xMFORlc9M8RPDG4YPiyzqM__YEPn42iuFQjJ5hR';

// distanceAPI="http://dev.virtualearth.net/REST/v1/Routes?" ;

// dateTime = 08/22/2022 ; 

// travelMode = Driving


fetch( "http://dev.virtualearth.net/REST/v1/Routes?key=AhY96IWC3yKWC_QLEHXFNfqY-xMFORlc9M8RPDG4YPiyzqM__YEPn42iuFQjJ5hR&dateTime=08%2F22%2F2022&waypoint.1=33.8628,%20-118.003%5B1%5D&waypoint.2=33.6859,%20-117.825%5B2%5D&optimize=time%20&time%20=distance")
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  });



// --------------------------Distance Matrix -------------//































