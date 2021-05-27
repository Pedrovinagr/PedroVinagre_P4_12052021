function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll('.close');

//const form = document.getElementById('reserve');
//const first = document.getElementById('first');
//const last = document.getElementById('last');
//const email = document.getElementById('email');
//const birthDate = document.getElementById('birthdate');
//const quantity = document.getElementById('quantity');
//const checkbox1 = document.getElementById('checkbox1');
//const formData = document.getElementsByClassName('formData');
//const btnSubmit = document.getElementById('btnSubmit');
//const reserve = document.getElementById('reserve');

//------------------------------------#1 TODO : fermer le modale------------------------------
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.classList.remove('select-hide');
	modalbg.classList.add('select-block');
}
// close modal event
closeBtn.forEach((btn) => btn.addEventListener('click', closeModal));

// close modal form
function closeModal() {
	modalbg.classList.remove('select-block');
	modalbg.classList.add('select-hide');
}

//------------------------------------#2 Validation des données ------------------------------
