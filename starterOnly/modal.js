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

var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

function validation(email) {
	return (expressionReguliere.test(email.value))
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

//Vérifie les champs du formulaire à la soumission.
form.addEventListener('submit', function (event) {
	//Ne prend pas en compte l'action par default du bouton de soumission "c'est partie".
	event.preventDefault();

	//Si formulaire valide, transforme le formulaire d'inscription en fenêtre de confirmation de réservation.
	if (validateForm()) {
		//Cache tous les enfants .formData du formulaire #reserve
		for (child of reserveChildren) {
			if (child.className == 'formData') {
				child.classList.add('select-hide');
			}
		}
		//cache le bouton close
		document.querySelector('.close').classList.add('select-hide');
		//cache le bouton btn_submit de formulaire #reserve
		btn_submit.classList.add('select-hide');
		//change la classe et le texte du paragraphe "Quelle(s) ville(s)"
		document.querySelector('#reserve>p').classList.replace('text-label','text-label-valid-form');
		document.querySelector('#reserve>p').innerHTML = "Merci pour votre inscription ! Votre réservation a été enregistrée.";
		// ajoute class et texte au nouveau bonton "fermer"
		redCloseBtn.classList.add('btn-submit');
		redCloseBtn.innerHTML = 'fermer';
		// ajoute bouton dans HTML en enfant du formulaire.
		reserve.appendChild(redCloseBtn);
	}
	//si formulaire non validé, retourne FALSE
	return false;
})

// Met en visible et réinitialise tous les champs du formulaire d'inscription
function resumModal(){
	for (child of reserveChildren) {
		//rend visible toutes les div .formData et supprime la classe temporaire
		if (child.className == 'formData select-hide') {
			child.classList.replace('select-hide','select-block');
			child.classList.remove('select-block');
		}
	}
	//affiche le bouton close
	document.querySelector('.close').classList.replace('select-hide','select-block');
	document.querySelector('.close').classList.remove('select-block');
	//remet la class et le texte d'origine au paragraphe du formulaire de reservation.
	document.querySelector('#reserve>p').classList.replace('text-label-valid-form','text-label');
	document.querySelector('#reserve>p').innerHTML = 'Quelle(s) ville(s) ?';
	//supprime le bouton "fermer" du HTML
	reserve.removeChild(redCloseBtn);

	//bouton "C'est parti" passe de caché à visible et supprime la classe temporaire
	btn_submit.classList.replace('select-hide','select-block');
	btn_submit.classList.remove('select-block');
}

function initModal(){
	for (child of reserveChildren) {
		//vide les champs de texte
		if (child.querySelector('.text-control')){
			child.querySelector('.text-control').value = '';
		}
	}

	//Décoche les checkboxs cochées
	for (item of document.querySelectorAll('.checkbox-input:checked')){
		item.checked = false
	}	
}

// Lors du click sur le bouton "fermer" de la fenêtre de confirmation d'inscription, ferme et réinitialise de formulaire d'inscription.
redCloseBtn.addEventListener('click', function() {
	closeModal();
	resumModal();
	initModal();
})