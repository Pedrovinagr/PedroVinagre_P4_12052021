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
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.getElementById('locations');
const checkbox = document.getElementsByClassName('checkbox-input-town');
const checkbox1 = document.getElementById('checkbox1');
const validation = document.getElementById('btn_submit')

const firsError = document.getElementById('firstError');
const lastError = document.getElementById('lastError');
const emailError = document.getElementById('emailError');
const birthdateError = document.getElementById('birthdateError');
const quantityError = document.getElementById('quantityError');
const locationsError = document.getElementById('locationsError');
const checkbox1Error = document.getElementById('checkbox1Error');


//#1 TODO : fermer le modale
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

//#2 Validation des données

form.addEventListener('submit', function(event) {
  console.log('form submit');

  firstError.innerHTML = '';
  lastError.innerHTML = '';
  emailError.innerHTML = '';
  birthdateError.innerHTML = '';
  quantityError.innerHTML = '';
  locationsError.innerHTML = '';
  checkbox1Error.innerHTML = '';

  firstName.style.border = '';
  lastName.style.border = '';
  email.style.border = '';
  birthdate.style.border = '';
  quantity.style.border = '';

  event.preventDefault();
  
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailFormat = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
  const birthDateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();
  let formIsValid = false;

  console.log(form.value);

  if(firstValue != '' && firstValue.length >= 2) {

  } else{ 
    firstError.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ de Prénom.';
    firstError.style.color = 'red';
    firstError.style.fontSize = '0.9rem';
    firstName.style.border = '2px solid red';
    
  }
  
  if(lastValue != '' && lastValue.length >= 2) {

  } else {
    lastError.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ de Nom.';
    lastError.style.color = 'red';
    lastError.style.fontSize = '0.9rem';
    lastName.style.border = '2px solid red';
  }
  
  if(emailFormat.test(email.value)) {

  } else {
    emailError.innerHTML = 'Veuillez entrer une adresse mail valide.';
    emailError.style.color = 'red';
    emailError.style.fontSize = '0.9rem';
    email.style.border = '2px solid red';
  }

  if(birthDateValue != '' && birthDateValue.length >= 8) {

  } else {
    birthdateError.innerHTML = 'Vous devez entrer votre date de naissance.';
    birthdateError.style.color = 'red';
    birthdateError.style.fontSize = '0.9rem';
    birthdate.style.border = '2px solid red';
  }

  if(quantityValue != '' && quantityValue.length >= 1) {

  } else {
    quantityError.innerHTML = 'Vous devez entrer une valeur numérique.';
    quantityError.style.color = 'red';
    quantityError.style.fontSize = '0.9rem';
    quantity.style.border = '2px solid red';
  }

  var townIsSelected = false;

  for(var i = 0; i < checkbox.length - 1; i++) {
    console.log(checkbox[i].checked);
    if(checkbox[i].checked) {
      townIsSelected = true;
    }
    if(townIsSelected.checked) {
      formIsValid = true;
    } else {
      if(!checkbox[i].checked) {
        locationsError.innerHTML = 'Vous devez choisir une option.';
        locationsError.style.color = 'red';
        locationsError.style.fontSize = '0.9rem';
      }
    }
    if(checkbox1.checked) {
      formIsValid = true;
    } else {
      if(!checkbox1.checked) {
        checkbox1Error.innerHTML = 'Vous devez vérifier que vous acceptez les termes et conditions.';
        checkbox1Error.style.color = 'red';
        checkbox1Error.style.fontSize = '0.9rem';
      }
    }
  }
   
});


//if(checkbox[0].checked) {
  //   checkboxLoc = true;
  // } 
  // else if(checkbox[1].checked) {
  //   checkboxLoc = true;
  // } 
  // else if(checkbox[2].checked) {
  //   checkboxLoc = true;
  // }
  // else if(checkbox[3].checked) {
  //   checkboxLoc = true;
  // }
  // else if(checkbox[4].checked) {
  //   checkboxLoc = true;
  // }
  // else if(checkbox[5].checked) {
  //   checkboxLoc = true;
  // }
  
  // else {
  //   locationsError.innerHTML = 'Vous devez choisir une option.';
  //   locationsError.style.color = 'red';
  //   locationsError.style.fontSize = '0.9rem';
  // }

  // if (checkbox1.checked) {
  //   checkbox1Cond = true;

  // } else {
  //   checkbox1Error.innerHTML = 'Vous devez vérifier que vous acceptez les termes et conditions.';
  //   checkbox1Error.style.color = 'red';
  //   checkbox1Error.style.fontSize = '0.9rem';
  // }
  // return false;





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

// firstName.addEventListener('input', function (event) {
//   event.preventDefault();

//   if (firstName.validity.valid) {
//     firstError.innerHTML ="";
//   }
// },false);

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   if (!firstName.validity.valid) {
//     error.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ de Prénom.";
//   }
// }, false);