//Decleration
var sidebar = document.querySelectorAll('section');
var menuSlide = document.querySelector('.menu');
var menuButton = document.querySelector('.hamburger');
var kruisje = document.querySelector('.kruisje');

// De positie van een element kan gelezen worden ten opzichte van een viewport
function sectionInViewport(element) {
    "use strict";
    var rect = element.getBoundingClientRect();
    return (
        rect.top < 0
    );
}

function sectionInViewportBack(element) {
    "use strict";
    var rect = element.getBoundingClientRect();
    return (
        rect.top > 0
    );
}

document.addEventListener('scroll', function () {
    //wanneer het element buiten je scherm komt wordt hij vastgezet

    "use strict";
    if (sectionInViewport(sidebar[1])) {
        sidebar[1].classList.add('fixed');
    }

    //wanneer de eerste section de nul raakt word het weer losgehaald
    if (sectionInViewportBack(sidebar[0])) {
        if (sidebar[1].classList.contains('fixed')) {
            sidebar[1].classList.remove('fixed');
        }
    }
});

//animatie toegevoegd
function menuslider() {
    "use strict";
    menuSlide.classList.add('menuslide');
}

//animatie weggehaald
function menusliderback() {
    "use strict";
    menuSlide.classList.add('menuslideback');
    menuSlide.classList.remove('menuslide');
    setTimeout(function () {
        menuSlide.classList.remove('menuslideback');
    }, 1000);
}

//eventhandlers, bepalen wanneer de functie word aangeroepen
menuButton.addEventListener('click', menuslider);
kruisje.addEventListener('click', menusliderback);
