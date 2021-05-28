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
const closeBtn = document.querySelectorAll('.close');
const form = document.getElementById('reserve');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const checkbox1 = document.getElementById('checkbox1');
const formData = document.getElementsByClassName('formData');
const btn_submit = document.getElementById('btn_submit');
const reserve = document.getElementById('reserve');
const reserveChildren = reserve.children;
const redCloseBtn = document.createElement('button');

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
// Check DATA
function validityText(text) {
	return (text.value !== '' && text.value.length >= 2);
}

function validityEmail(email) {
	return (/^([a-z|0-9](\.|_){0,1})+[a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(email.value));
}

function validityValue(val) {
	return val.value !== '';
}

function validityLocations(inputName) {
		return (inputName.checked);
	}

function validityCheckbox(checkbox) {
	return (checkbox.checked);
}

function refreshErrorMessage(domElement, isValid, message) {
	if (isValid) {
		domElement.setAttribute('data-error-visible', 'false');
	} else {
		domElement.setAttribute('data-error', message);
		domElement.setAttribute('data-error-visible', 'true');
	}
}

// Valid form
function validityForm() {

	//DATA	
	const inputsFormStatus = [
		validityText(first),
		validityText(last),
		validityEmail(email),
		validityValue(birthDate),
		validityValue(quantity),
		validityLocations('location'),
		validityCheckbox(checkbox1)];

	// error message
	refreshErrorMessage(
		first.parentElement,
		validityText(first),
		'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
	)

	refreshErrorMessage(
		last.parentElement,
		validityText(last),
		'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
	)

	refreshErrorMessage(
		email.parentElement,
		validityText(email),
		'Veuillez entrer une adresse mail valide.'
	)

	refreshErrorMessage(
		birthDate.parentElement,
		validityValue(birthDate),
		'Vous devez entrer votre date de naissance.'
	)

	refreshErrorMessage(
		quantity.parentElement,
		validityValue(quantity),
		'Vous devez entrer une valeur numérique.'
	)

	refreshErrorMessage(
		formData[5],
		validityLocations('location'),
		"Vous devez choisir une option."
	)

	refreshErrorMessage(
		checkbox1.parentElement,
		validityCheckbox(checkbox1),
		'Vous devez vérifier que vous acceptez les termes et conditions.'
	)

	return (inputsFormStatus.includes(false) !== true);
}

