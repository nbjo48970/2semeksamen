
function ContactForm(input)
{

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailError = document.getElementById("email-error");
  let emailInput = document.getElementById("email-input");

if (inArray(input.value)) {
  emailError.innerHTML = "Du har en tidligere henvendelse<br> under behandling";
  emailError.style.color = "rgb(80, 65, 57)";
  return false;
}
  if (input.value.match(validRegex)){
    emailError.innerHTML = "Tak for din henvendelse!";
    emailError.style.color = "green";
    emailInput.style.borderColor = "rgb(41, 43, 51)";
    emailInput.value = '';
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
}

let regUsers = ["pede@gmail.com", "thomas@mail.dk", "nicoline@mail.com"];
function inArray(inVal){
    for( var i=0, len=regUsers.length; i < len; i++){
        if (regUsers[i] == inVal) return true;
    }
    return false;
}


