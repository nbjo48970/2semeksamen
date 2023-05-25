
function ContactForm(input)
{

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailError = document.getElementById("email-error");
  let emailInput = document.getElementById("email-input");
  let navnInput = document.getElementById("name-input");
  let virksomhedInput = document.getElementById("virksomhed-input");
  let telefonInput = document.getElementById("telefon-input");


watchIt();

if (inArray(input.value)) {
  emailError.innerHTML = "Du har en tidligere henvendelse<br> under behandling";
  emailError.style.color = "rgb(80, 65, 57)";
  return false;
}

if  (navnInput.value=="" || virksomhedInput.value=="" || telefonInput.value==""){
    return false;
}
  if (input.value.match(validRegex)){
    emailError.innerHTML = "Tak for din henvendelse!";
    emailError.style.color = "green";
    emailInput.style.borderColor = "rgb(41, 43, 51)";
    emailInput.value = '';
    navnInput.value = '';
    virksomhedInput.value = '';
    telefonInput.value = '';
    formInput.value = '';
    document.contactform.email.focus();
    return false;
  }
    else {
    emailError.innerHTML = "Indtast gyldig e-mailadresse";
    emailError.style.color = "red";
    emailInput.style.borderColor = "red";
    document.contactform.email.focus();
    return false;
  }
  //sæt funktion her efter test Xander
}

let regUsers = ["pede@gmail.com", "thomas@mail.dk", "nicoline@mail.com"];
function inArray(inVal){
    for( var i=0, len=regUsers.length; i < len; i++){
        if (regUsers[i] == inVal) return true;
    }
    return false;
}


let formInput = document.getElementById("besked-input");


function watchIt(textaera) {

  // let chatError = document.getElementById("chat-error");



if (inArray2(document.getElementById("besked-input").value)) {
  // chatError.innerHTML = "Dit opslag indeholder sprog blokeret af admin";
  // chatError.style.color = "red";
  // formInput.style.border = "solid red";
  alert("BWAKH");
  return false;
}
else {
  return true;
}

}

let language = ["XD", "hest", "xD", "Niko", "Schmeter"];
function inArray2(inVal){
    for( var i=0, len=language.length; i < len; i++){
        if (inVal.includes(language[i])) return true;
    }
    return false;
}
