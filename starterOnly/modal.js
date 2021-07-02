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

form.addEventListener('submit', function infoValid(event) {

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
  let firtIsValid = false;
  let lastIsValid = false;
  let emailIsValid = false;
  let birthdateIsValid = false;
  let quantityIsValid = false;
  let formIsValid = false;


  if(firstValue != '' && firstValue.length >= 2) {
    firtIsValid = true
  } else{ 
    firstError.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ de Prénom.';
    firstError.style.color = 'red';
    firstError.style.fontSize = '0.9rem';
    firstName.style.border = '2px solid red';
  }
  
  if(lastValue != '' && lastValue.length >= 2) {
    lastIsValid = true
  } else {
    lastError.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ de Nom.';
    lastError.style.color = 'red';
    lastError.style.fontSize = '0.9rem';
    lastName.style.border = '2px solid red';
  }
  
  if(emailFormat.test(email.value)) {
    emailIsValid = true
  } else {
    emailError.innerHTML = 'Veuillez entrer une adresse mail valide.';
    emailError.style.color = 'red';
    emailError.style.fontSize = '0.9rem';
    email.style.border = '2px solid red';
  }

  if(birthDateValue != '' && birthDateValue.length >= 8) {
    birthdateIsValid = true
  } else {
    birthdateError.innerHTML = 'Vous devez entrer votre date de naissance.';
    birthdateError.style.color = 'red';
    birthdateError.style.fontSize = '0.9rem';
    birthdate.style.border = '2px solid red';
  }

  if(quantityValue != '' && quantityValue.length >= 1) {
    quantityIsValid = true
  } else {
    quantityError.innerHTML = 'Vous devez entrer une valeur numérique.';
    quantityError.style.color = 'red';
    quantityError.style.fontSize = '0.9rem';
    quantity.style.border = '2px solid red';
  }

  var townIsSelected = false;
  var checkboxValue = [];

  for(var i = 0; i < checkbox.length - 1; i++) {
    checkboxValue.push(checkbox[i].checked);
    if(checkbox[i].checked) {
      townIsSelected = true;
    }
    if(townIsSelected.checked) {
      formIsValid = true;
    } else {
      if(!checkboxValue.includes(true)) {
        locationsError.innerHTML = 'Vous devez choisir une option.';
        locationsError.style.color = 'red';
        locationsError.style.fontSize = '0.9rem';
      }else {
        locationsError.innerHTML = "";
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
  
  var firstNameClose = document.getElementById('first_close');
  var lasttNameClose = document.getElementById('last_close');
  var emailClose = document.getElementById('email_close');
  var birthdateClose = document.getElementById('birthdate_close');
  var quantityClose = document.getElementById('quantity_close');
  var locationClose = document.getElementById('locations');
  var textLabelmessage = document.getElementById('text_label_Close');
  var checkboxInputClose = document.getElementById('checkbox-input_close')
  var closeBtnClose = document.getElementById('close')
  var NewBtn = document.getElementById('btn_submit')

  if(firtIsValid == true && lastIsValid == true && emailIsValid == true && birthdateIsValid ==true && quantityIsValid == true && formIsValid == true) {
    firstNameClose.style.display = 'none';
    lasttNameClose.style.display = 'none';
    emailClose.style.display = 'none';
    birthdateClose.style.display = 'none';
    quantityClose.style.display = 'none';
    locationClose.style.display = 'none';
    checkboxInputClose.style.display = 'none';
    closeBtnClose.style.display = 'none';

    textLabelmessage.innerHTML = 'Merci ! Votre réservation a été reçue.'
    textLabelmessage.style.fontSize = '2rem'
    NewBtn.value = "FERMER";
    var validForm = document.getElementById('reserve')
    var closeForm = document.querySelector('.bground')

    validForm.addEventListener('click', function(){
      closeForm.style.display = 'none';
      form.reset();
      window.location.reload();
    });
  }

  else {
    
  } 
});
