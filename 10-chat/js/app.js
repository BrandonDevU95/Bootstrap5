const btnIngreso = document.querySelector('#btnIngreso');
const btnCerrarSesion = document.querySelector('#btnCerrarSesion');
const contenidoWeb = document.querySelector('#contenidoWeb');
const nombreUsuario = document.querySelector('#nombreUsuario');
const formulario = document.querySelector('#formulario');
const texto = document.querySelector('#texto');

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		accionCerrarSesion();
	} else {
		accionAcceder();
	}
});

const accionAcceder = () => {
	console.log('Sin Usuario');
	formulario.classList.add('d-none');
	contenidoWeb.innerHTML = `<p class="lead mt-5 text-center">Debes iniciar sesión</p>`;
};

const accionCerrarSesion = () => {
	console.log('Usuario');
	formulario.classList.remove('d-none');
};
