
var ipad = window.matchMedia('screen and (max-width: 767px)');
ipad.addListener(validation);
console.log(ipad);

var menu = document.querySelector('.menu');
var iconButton = document.querySelector('#icon-button');

function validation(event) {
    if (event.matches == true) {
        iconButton.addEventListener('click', hideShow);
    } else {
        iconButton.removeEventListener('click', hideShow);
    }
}

validation(ipad);

function hideShow() {
    if (menu.classList.contains('is-active')) {
        // classList es una propiedad que retorna el listado de clases que tiene un determinado elemento del dom, en este caso se trae esta lista y se le añade la clase hide usando el add.
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}


/*var vn = document.getElementById('icon-button');
vn.addEventListener('click', mostrar);
var activo = true;

function mostrar () {
    if (activo == true) {
        document.querySelector('.menu').classList.add('is-active');
        activo = false;
    }else if (activo == false) {
        document.querySelector('.menu').classList.remove('is-active');
        activo = true;
    }
}*/