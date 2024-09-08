const fondo = document.querySelector('body');

const naranja = document.getElementById('naranja');
naranja.addEventListener('click', cambiarFondoNaranja);

const morado = document.getElementById('morado');
morado.addEventListener('click', cambiarFondoMorado);

const verde = document.getElementById('verde');
verde.addEventListener('click', cambiarFondoVerde);

function cambiarFondoNaranja(){
    fondo.style.backgroundColor = '#ff9f43';
}

function cambiarFondoMorado(){
    fondo.style.backgroundColor = '#6c5ce7';
}

function cambiarFondoVerde(){
    fondo.style.backgroundColor = '#00b894';
}