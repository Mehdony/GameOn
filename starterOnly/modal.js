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
const closeBtn = document.querySelector(".close");
const btnSub = document.querySelector(".btn-submit");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// -----------Fonctions de vérification du formulaire

// Fermeture modal form

function closemodal() {
  modalbg.style.display = "none";
}
closeBtn.addEventListener("click", closemodal);


// Vérification  du nom et du prénom
const isNameValid = (name) => {
  if (name.length >= 2) {
    return true;
  }
  return false;
};

// Vérification du mail
const isEmailValid = (email) => {

  // Verifie si l'email est valide
  const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email)) {
    return true;
  }
  return false;
};

// Vérification des datas radio
const isChecked = (radio) => {
  for (let el of radio) {
    if (el.checked) {
      return true
    }
  }
  return false
}

// Conditions Générales
const isCGUCheked = (cgu) => {
  if (cgu.checked === true) {
    return true;
  }
  return false;
};

// Affichage des messages d'erreurs
const displayError = (condition, el, err ) => {
  if (condition) {
    el.closest('.formData').dataset.error ="";
    el.closest('.formData').dataset.errorVisible = false;
    return true;
  }
  el.closest('.formData').dataset.error = err;
  el.closest('.formData').dataset.errorVisible = true;
  return false;
}
const error = document.querySelectorAll(".formData[data-error]::after")
const errorVisible = document.querySelectorAll(".formData[data-error-visible='true']::after")

// -----------Fonctions de validation du formulaire
const ValidateForm = (e) => {
  e.preventDefault();

  // Récupération des données du formulaire

  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const location = document.querySelectorAll("input[name = 'location']");
  const cgu = document.getElementById("checkbox1");
  const birthdate = document.getElementById("birthdate").value;
  const quantity =  document.getElementById("quantity").value;

  // Affichage des erreurs en fonction des conditions (retourne true/ false)

  const checkFirstName = displayError(isNameValid(firstName), document.getElementById("first"), "Votre prénom doit contenir au moins 2 caractères");
  const checkLastName = displayError(isNameValid(lastName), document.getElementById("last"), "Votre nom doit contenir au moins 2 caractères");
  const checkEmail = displayError(isEmailValid(email), document.getElementById("email"), "Votre email n'est pas valide");
  const checkLocation = displayError(isChecked(location), document.querySelector("input[name = 'location']"), "Veuillez choisir une option");
  const checkCGU = displayError(isCGUCheked(cgu), document.getElementById("checkbox1"), "Veuillez accepter les conditions générales d'utilisation");
  const checkBirthDate = displayError(birthdate !== "", document.getElementById("birthdate"), "Veuillez choisir une date de naissance");
  const checkQuantity = displayError(quantity !== "", document.getElementById("quantity"), "Veuillez choisir une quantité");

  if (
    checkFirstName &&
    checkLastName  &&
    checkEmail &&
    checkLocation &&
    checkBirthDate &&
    checkQuantity&&
    checkCGU 
    ) 
    // Message de succès
    {
      console.log("formulaire valide");
      formData.forEach((el) => el.style.display = "none");
      document.querySelector(".sendForm").style.display = "none";
      document.querySelector("input[name='closeForm']").classList.remove("closeForm");
      document.querySelector("div[class='success']").style.display = "flex"
      return true;
    }
    else {
      console.log("formulaire invalide");
      return false;
    }
  }

  // Récupération des données du formulaire
  btnSub.addEventListener("click", (e) => ValidateForm(e));

  

  