// const cartasInvisibles = document.querySelectorAll('.carta.invisible');


// document.getElementById('mostrarCarta').addEventListener('click', function () {

//     // Obtener un número aleatorio para seleccionar una carta
//     const indiceAleatorio = Math.floor(Math.random() * cartasInvisibles.length);

//     // Mostrar la carta seleccionada
//     cartasInvisibles[indiceAleatorio].style.display = 'block';
// });


const cartasInvisibles = document.querySelectorAll('.carta.hide');
let cartaSeleccionada = null; // Almacenar la última carta seleccionada

document.getElementById('mostrarCarta').addEventListener('click', function () {
    // Ocultar la carta anterior
    if (cartaSeleccionada) {
        cartaSeleccionada.style.display = 'none';
    }

    // Obtener un número aleatorio para seleccionar una carta
    const indiceAleatorio = Math.floor(Math.random() * cartasInvisibles.length);

    // Mostrar la nueva carta seleccionada
    cartaSeleccionada = cartasInvisibles[indiceAleatorio];
    cartaSeleccionada.style.display = 'block';
});
