// Dark Mode

document.addEventListener('DOMContentLoaded', darkMode);

function darkMode() {
  // Se obtiene la variable de estilo '--color1', '--color2', '--color3', '--color4' y '--color5' del elemento raíz (root)
  const root = document.documentElement;

  // Se obtiene el botón de modo oscuro
  const botonDarkMode = document.querySelector('.dark-mode-boton');

  // Se inicializa la variable 'modoBlanco' como false. Esta variable se utilizará para determinar si el modo oscuro está activado o no.
  let modoBlanco = false;

  // Se agrega un evento de 'click' al botón de modo oscuro
  botonDarkMode.addEventListener('click', function () {
    // Se agrega o se quita la clase 'dark-mode' del elemento 'body' dependiendo del estado actual del modo oscuro.
    document.body.classList.toggle('dark-mode');

    // Se actualiza el valor de la variable 'modoBlanco' para reflejar el estado actual del modo oscuro
    modoBlanco = !modoBlanco;

    // Se obtienen todos los elementos SVG con la clase 'svg-negro'
    const svgsNegros = document.querySelectorAll('.svg-negro');
    // Se recorre cada elemento SVG y se cambia el color de trazo (stroke) a blanco o negro según el estado actual del modo oscuro
    svgsNegros.forEach(svg => {
      if (modoBlanco) {
        svg.style.stroke = "#ececec";
      } else {
        svg.style.stroke = "#252525";
      }
    });    

  });

   // Se establecen algunas variables CSS personalizadas en el elemento raíz (root) para ser utilizadas en la hoja de estilos.
   root.style.setProperty('--color1', '#252525');
   root.style.setProperty('--color2', '#a4ccaa');
   root.style.setProperty('--color3', '#b9ddbb');
   root.style.setProperty('--color4', '#d2eed3');
   root.style.setProperty('--color5', '#eaffe8');
   root.style.setProperty('--sombra', 'rgba(37,37,37,0.5)');


  // Se llama a la funcion "disableSelection"
  disableSelection();
}

// Formulario


// Obtener referencia al formulario
const formulario = document.querySelector('.formulario');

// Obtener referencia a los campos
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// Agregar evento submit al formulario
formulario.addEventListener('submit', function(event) {
  let mensajeError = '';

  // Verificar si cada campo tiene un valor
  if (nombre.value === '') {
    mensajeError += 'Por favor, ingrese su nombre.\n';
  }

  if (telefono.value === '') {
    mensajeError += 'Por favor, ingrese su teléfono.\n';
  }

  if (correo.value === '') {
    mensajeError += 'Por favor, ingrese su correo electrónico.\n';
  }

  if (mensaje.value === '') {
    mensajeError += 'Por favor, ingrese un mensaje.\n';
  }

   // Si todos los campos están vacíos, mostrar mensaje de error
   if (nombre.value.trim() === '' && telefono.value.trim() === '' && correo.value.trim() === '' && mensaje.value.trim() === '') {
    mensajeError = 'TODOS LOS CAMPOS SON OBLIGATORIOS.\n';
  }

  // Si algún campo está vacío, evitar que se envíe el formulario y mostrar la alerta
  if (mensajeError !== '') {
    event.preventDefault();
    alert(mensajeError);
  }
});

//Menu Header

const header = document.querySelector('.header');
const sobreMi = document.querySelector('#conocimientos');

window.addEventListener('scroll', function() {
  if (window.scrollY > sobreMi.getBoundingClientRect().bottom) {
    header.classList.add('aparece');
  } else {
    header.classList.remove('aparece');
  }
});

function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion-principal a')
  enlaces.forEach( enlace => {
      enlace.addEventListener('click', function(e){
          e.preventDefault();

          const seccionScroll = e.target.attributes.href.value;
          const seccion = document.querySelector(seccionScroll);
          seccion.scrollIntoView({behavior: "smooth"});
      });
  })
}


// Evitar selecciones erroneas por clicks

function disableSelection() {
  document.body.addEventListener('mousedown', function(e) {
    if (e.detail > 1) {
      e.preventDefault();
    }
  }, false);
}


// mobileMenu

const mobileMenu = document.querySelector('.mobile-menu');
const navegacion = document.querySelector('.navegacion-principal');

mobileMenu.addEventListener('click', () => {
  navegacion.classList.toggle('mostrar');
});