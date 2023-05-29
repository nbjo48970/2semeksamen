let languageList = ["Dansk", "English", "Español", "Deutsch", "Français", "Italiano", "Português", "Nederlands",];
let langOptions = document.getElementById("lang-options");
let langOptionsTwo = document.getElementById("lang-options-two")

for (let i = 0; i < 4; i++) {
    let li = document.createElement('li');
    li.innerText = languageList[i];
    langOptions.appendChild(li);
    li.style.cursor = "pointer";
    li.style.margin = "20px";
    li.style.fontSize = "20px";
    li.style.fontFamily = "'Montserrat', sans-serif"
}

for (let i = 4; i < languageList.length; i++) {
    let li = document.createElement('li');
    li.innerText = languageList[i];
    langOptionsTwo.appendChild(li);
    li.style.cursor = "pointer";
    li.style.margin = "20px";
    li.style.fontSize = "20px";
    li.style.fontFamily = "'Montserrat', sans-serif"
}

 function navToggle() {
    let langSelect = document.getElementById("lang-bar");
    langSelect.style.transition = 'width 0.3s linear 0s';

    if (langSelect.style.width === '0vw') {
        langSelect.style.width = '100vw'        
    } else {
        langSelect.style.width = '0vw'
    }
}



