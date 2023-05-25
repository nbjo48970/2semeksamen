// let languageList = ["Dansk", "Engelsk", "Spansk",];
// let langOptions = document.getElementById("lang-options");


// for (let i = 0; i < languageList.length; i++) {
//     let li = document.createElement('li');
//     li.innerText = languageList[i];
//     langOptions.appendChild(li);
// }

// function changeLang() {
//     let langMenu = document.getElementById("lang-bar");
//     if (langMenu.style.display === "none") {
//       langMenu.style.display = "block";
//       langMenu.style.position = "relative"
//     } else {
//       langMenu.style.display = "none";
//     }
//   }

//   let langMenu = document.getElementById("lang-bar");
//   langMenu.style.display = "none";

// function openNav() {
//     document.getElementById("lang-bar").style.width = "100vw"
// }

// function closeNav() {
//     document.getElementById("lang-bar").style.width = "0"
// }

// let langOptionsArray = ["Dansk", "English"];
// let countryPick = document.getElementById("country-pick");

// for (let i = 0; i < langOptionsArray.length; i++) {
//     countryPick.textContent = langOptionsArray[i]
// }

// function osterreichPick() {
//     langOptionsArray.pop()
//     langOptionsArray.push("Österreich")
//     for (let i = 0; i < langOptionsArray.length; i++) {
//         countryPick.textContent = langOptionsArray[i]
//     }
// }

// function osterreichPick() {
//     langOptionsArray.pop()
//     langOptionsArray.push("Belgique")
//     for (let i = 0; i < langOptionsArray.length; i++) {
//         countryPick.textContent = langOptionsArray[i]
//     }
// }


let languageList = ["Dansk", "Engelsk",];
let langOptions = document.getElementById("lang-options");


for (let i = 0; i < languageList.length; i++) {
    let li = document.createElement('li');
    li.innerText = languageList[i];
    langOptions.appendChild(li);
    li.style.cursor = "pointer";
    li.style.margin = "10px";
    li.style.fontSize = "20px";
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

// function navClosed() {
//     let elem = document.getElementById("lang-bar");
//     elem.style.transition = 'width 1.0s linear 0s';
//     elem.style.width = '0vw';
//   }
  
//   function navOpen() {
//     let elem = document.getElementById("lang-bar");
//     elem.style.transition = 'width 0.5s linear 0s';
//     elem.style.width = '100vw';
//   }