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
console.log(btnSub);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form

function closemodal() {
  modalbg.style.display = "none";
}
closeBtn.addEventListener("click", closemodal);



//verification des datas radio
const isChecked = (location) => {
  for (i = 0; i < location.length; i++) {
    if (location[i].checked === true) {
      console.log(true);
      return true
    }
    return false;
  }
}
// récupération du nom 
const isNameValid = (name) => {
  if (name.length > 2) {
      return true
    }
    return false;
  }



// récupération des données du formulaire
btnSub.addEventListener("click", (e) => {
  e.preventDefault();
  let location = document.querySelectorAll("input[name = 'location']");
})

// stockage des saisies dans le LS
// localStorage.setitem("first", document.querySelector("#first").value);
// console.log(document.querySelector("#first").value);
