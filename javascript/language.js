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

let languageCountriesList = ["Danmark", "United Kingdom", "Sverige", "Norge", "Suomi", "Ísland", "Deutschland", "Nederland", "España", "France"];
let languageList = ["Dansk", "English", "Svenska", "Norska", "Suomalainen","íslenskur" , "Deutsch", "Nederlands", "Español", "Français"];
let languageURLs = ["index.html", "index.html", "index.html", "index.html", "index.html", "index.html", "index.html", "index.html", "index.html", "index.html"];
let langOptions = document.getElementById("lang-options");
// let langOptionsTwo = document.getElementById("lang-options-two")


for (let i = 0; i < languageList.length; i++) {
    let a = document.createElement('a');
    a.innerText = languageCountriesList[i];
    a.href = languageURLs[i];
    
    let line = document.createElement('span');
    line.classList.add('line');

    let subheading = document.createElement('span');
    subheading.innerText = languageList[i];

    
    a.appendChild(line);
    a.appendChild(subheading);


    langOptions.appendChild(a);

    // let br = document.createElement('br');
    // a.appendChild(br);
}

// for (let i = 4; i < languageList.length; i++) {
//     let li = document.createElement('li');
//     li.innerText = languageList[i];
//     langOptionsTwo.appendChild(li);
//     li.style.cursor = "pointer";
//     li.style.margin = "20px";
//     li.style.fontSize = "25px";
//     li.style.fontFamily = "'Montserrat', sans-serif"
// }

function navToggle() {
    let langSelect = document.getElementById("lang-bar");

    if (langSelect.style.left === '' || langSelect.style.left === '100%' ) {
        langSelect.style.left = '0'        
    } else {
        langSelect.style.left = '100%'
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