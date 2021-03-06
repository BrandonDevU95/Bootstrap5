console.log('Funcionando');

const formulario = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#btnEnviar');
const btnCargando = document.querySelector('#btnCargando');
const toast = document.querySelector('.toast');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const data = new FormData(formulario);
	console.log('Campo Email:', data.get('email'));
	console.log('Campo Password:', data.get('password'));
	console.log('Campo Checkbox:', data.get('checkbox'));

	btnEnviar.classList.add('d-none');
	btnCargando.classList.remove('d-none');
	window.setTimeout(() => {
		btnEnviar.classList.remove('d-none');
		btnCargando.classList.add('d-none');
		const evento = new bootstrap.Toast(toast);
		evento.show();
	}, 3000);
	formulario.reset();
});
