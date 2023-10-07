// Función para validar el formulario
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telephone').value;

    // Validación del nombre (requerido)
    if (nombre === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }
    else if(!validarNombre(nombre)) {
        alert('Por favor, ingresa un nombre válido (solo caracteres alfabéticos).');
        return false;
    }

    // Validación del correo electrónico (requerido y formato válido)
    if (email === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return false;
    } else if (!validarEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    // Validación del número de teléfono (opcional)
    if (telefono !== '' && !validarTelefono(telefono)) {
        alert('Por favor, ingresa un número de teléfono válido (ejemplo: +54 9 11 XXXX-XXX).');
        return false;
    }

    return true;
}

// Función para validar el formato del correo electrónico
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Función para validar el formato del número de teléfono
function validarTelefono(telefono) {
    // Puedes personalizar esta validación según tus necesidades
    var re = /^\+\d{2} \d{1,2} \d{4}-\d{3}$/;
    return re.test(telefono);
}

// Función para validar el formato del nombre (solo caracteres alfabéticos)
function validarNombre(nombre) {
    var re = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular que permite letras, espacios y letras acentuadas
    return re.test(nombre);
}

// Asociar la función de validación al evento "submit" del formulario
document.getElementById('formulario').addEventListener('submit', function (e) {
    if (!validarFormulario()) {
        e.preventDefault(); // Evitar el envío del formulario si la validación falla
    }
});

// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const expresiones = {
//     nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     telephone: /^\d{7,14}$/
// }

// const validarFormulario = (e) => {
//     switch (e.target.name){
//         case "nombre":
//             if(expresiones.nombre.test(e.target.value)){
//                 document.getElementById('nombre').classList.remove('.incorrecto')
//                 document.getElementById('nombre').classList.add('.correcto')
//             } else {
//                 document.getElementById('nombre').classList.add('.incorrecto')
//             }
//             break;
//         case "email":

//             break;
//         case "telephone":

//             break;
//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('blur', validarFormulario);
// });

formulario.addEventListener('submit', (e) => { e.preventDefault(); }) //Para evitar que se envíe el form, borrar para reactivarlo



// RANDOMIZADOR DE CARTAS

const cartasInvisibles = document.querySelectorAll('.carta.invisible');
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