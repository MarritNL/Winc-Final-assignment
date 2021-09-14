// --------------------------- hamburger menu (Basis)--------------------
const hamburgerButton = document.querySelector('.hamburger-button');
const menuStyle = document.querySelector('.menuStyle');
let hamburgerMenu = false;

const menuToggle = function () {
    if (hamburgerMenu === false) {
        menuStyle.style.visibility = 'visible';
        hamburgerMenu = true;
    } else if (hamburgerMenu === true) {
        menuStyle.style.visibility = 'hidden';
        hamburgerMenu = false;
    };
};

//--------------------------- hamburger menu eventListener ----------------------

hamburgerButton.addEventListener('click', menuToggle);
hamburgerButton.addEventListener('mouseover', menuToggle);

//--------------------------- change  background color (Basis) --------------------

const body = document.querySelector('body');
const moodArray = Array.from(document.querySelectorAll('ul li button'));
const yourMood = document.querySelector('#insertMood');
console.log(moodArray);

const changeMood = function (e) {
    body.classList.remove('suspicious', 'hysterical', 'smooth', 'mysterious');  
    body.classList.add(e.target.className);                            
    yourMood.innerHTML = e.target.innerHTML;
};

//------------------------------ change background color eventListener ---------------
moodArray.forEach(function (mood) {
    mood.addEventListener('click', changeMood);
    mood.addEventListener('click', menuToggle);
});
