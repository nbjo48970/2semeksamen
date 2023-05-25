let formInput = document.getElementById("besked-input");
function ContactForm(input)
{

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailError = document.getElementById("email-error");
  let emailInput = document.getElementById("email-input");
  let navnInput = document.getElementById("name-input");
  let virksomhedInput = document.getElementById("virksomhed-input");
  let telefonInput = document.getElementById("telefon-input");
  let beskedError = document.getElementById("besked-error");
  let nameError = document.getElementById("name-error");
  let virksomhedError = document.getElementById("virksomhed-error");
  let telefonError = document.getElementById("telefon-error");




if (inArray(input.value)) {
  emailError.innerHTML = "Du har en tidligere henvendelse<br> under behandling";
  emailError.style.color = "red";
  emailInput.style.borderColor = "red";
  return false;
}

if  (navnInput.value=="" || virksomhedInput.value=="" || telefonInput.value==""){
    return false;
}
// if (navnInput.value==""){
//   nameError.innerHTML = "Feltet må ikke være tomt";
//   nameError.style.color = "red";
//   nameInput.style.borderColor = "red";
//   document.contactform.navn.focus();
// }
//   else {
//     // nameError.innerHTML = "";
//   return true;
// }

//Alt under a goodiebags
  if (input.value.match(validRegex)){
    emailError.innerHTML = "";
    emailInput.style.borderColor = "rgb(35, 82, 88)";
  }
    else {
    emailError.innerHTML = "Indtast gyldig e-mailadresse";
    emailError.style.color = "red";
    emailInput.style.borderColor = "red";
    document.contactform.email.focus();
    return false;
  }
  //sæt funktion her efter test Xander
  if (watchIt()) {
    //alt er okay
    beskedError.innerHTML = "Tak for din henvendelse!";
    beskedError.style.color = "green";
    emailInput.value = '';
    navnInput.value = '';
    virksomhedInput.value = '';
    telefonInput.value = '';
    formInput.value = '';
    formInput.style.borderColor = "rgb(35, 82, 88)";
    document.contactform.email.focus();
    return false;
  } else {
    //alt er ikke okay ;( skriv en fejlmeddelse og stop med at submitte
    beskedError.innerHTML = "Din besked indeholder sensitivt sprog";
    beskedError.style.color = "red";
    formInput.style.borderColor = "red";
    return false;
  }
}

let regUsers = ["pede@gmail.com", "thomas@mail.dk", "nicoline@mail.com"];
function inArray(inVal){
    for( var i=0, len=regUsers.length; i < len; i++){
        if (regUsers[i] == inVal) return true;
    }
    return false;
}


function watchIt() {
if (inArray2(formInput.value)) {
  return false;
}
else {
  return true;
}
}

function inArray2(inVal){
  let language = ["XD", "hest", "xD", "Niko", "Schmeter"];
    for( var i=0, len=language.length; i < len; i++){
        if (inVal.includes(language[i])) return true;
    }
    return false;
}
