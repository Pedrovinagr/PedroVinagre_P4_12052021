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
//DOM elements
const form = document.getElementById('reserve');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const firsError = document.getElementById('firstError');
const lastError = document.getElementById('lastError');

form.addEventListener('submit', function(event) {
    firstError.innerHTML = '';
    lastError.innerHTML = '';
    firstName.style.border = '';
    lastName.style.border = '';
    console.log('form submit');
    console.log(event);
    event.preventDefault();
    console.log('lastName value');
    const firstValue = first.value.trim();
    const lastValue = last.value.trim();

    console.log(lastValue);
    console.log(lastValue.length); 

    if(firstValue != '' && firstValue.length >= 2) {

    } else{ 
      firstError.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ de Prénom.';
      firstError.style.color = 'red';
      firstError.style.fontSize = '0.9rem'
      firstName.style.border = '2px solid red';
      
    }if(lastValue != '' && firstValue.length >= 2) {

    } else {
      lastError.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ de Nom.';
      lastError.style.color = 'red';
      lastError.style.fontSize = '0.9rem'
      lastName.style.border = '2px solid red';
    }



});


// //------------------------------------#2 Validation des données ------------------------------
// // Check DATA

// var exprRegulValueLenht = /'' && text.value.length >= 2/;
// function validityText(text){
// 	return (text.value !== exprRegulValueLenht);
// }

// var exprRegulEmail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
// function validation(email) {
// 	return (exprRegulEmail.test(email.value))
// }

// function validityValue(val) {
// 	return val.value !== '';
// }

// function validityLocations(inputName) {
// 		return (inputName.checked);
// 	}

// function validityCheckbox(checkbox) {
// 	return (checkbox.checked);
// }

// function errorMessage(domElement, isValid, message) {
// 	if (isValid) {
// 		domElement.setAttribute('data-error-visible', 'false');
// 	} else {
// 		domElement.setAttribute('data-error', message);
// 		domElement.setAttribute('data-error-visible', 'true');
// 	}
// }

// // Valid form
// function validityForm() {

// 	//SAVE DATA	
// 	var inputForm = 
// 		[validityText(first),
// 		validityText(last),
// 		validityEmail(email),
// 		validityValue(birthDate),
// 		validityValue(quantity),
// 		validityLocations('location'),
// 		validityCheckbox(checkbox1)];

// 	// error message
// 	errorMessage(
// 		first.parentElement,
// 		validityText(first),
// 		'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
// 	)

// 	errorMessage(
// 		last.parentElement,
// 		validityText(last),
// 		'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
// 	)

// 	errorMessage(
// 		email.parentElement,
// 		validityText(email),
// 		'Veuillez entrer une adresse mail valide.'
// 	)

// 	errorMessage(
// 		birthDate.parentElement,
// 		validityValue(birthDate),
// 		'Vous devez entrer votre date de naissance.'
// 	)

// 	errorMessage(
// 		quantity.parentElement,
// 		validityValue(quantity),
// 		'Vous devez entrer une valeur numérique.'
// 	)

// 	errorMessage(
// 		formData[5],
// 		validityLocations('location'),
// 		"Vous devez choisir une option."
// 	)

// 	errorMessage(
// 		checkbox1.parentElement,
// 		validityCheckbox(checkbox1),
// 		'Vous devez vérifier que vous acceptez les termes et conditions.'
// 	)

// 	return (inputForm.includes(false) !== true);
// }

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();

// 	if (validityForm()) {
// 		for (child of FormWindows) {
// 			if (child.className == 'formData') {
// 				child.classList.add('select-hide');
// 			}
// 		}

// 		var closeHide = document.querySelector('.close');
// 		closeHide.classList.add('select-hide');

// 		var submitHide = document.getElementById('btn_submit');
// 		submitHide.classList.add('select-hide');

// 		var formConf = document.querySelector('#reserve>p')
// 		formConf.classList.replace('text-label','text-label-valid-form');
// 		formConf.innerHTML = 
// 		"Merci pour votre inscription ! Votre réservation a été enregistrée.";

// 		var NewBtn = document.createElement('button');
// 		NewBtn.classList.add('btn-submit');
// 		NewBtn.innerHTML = 'fermer';
// 		form.appendChild(NewBtn);
// 	}
// 	return false;
// })
