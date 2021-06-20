console.log('Funcionando');

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const data = new FormData(formulario);
	console.log('Campo Email:', data.get('email'));
	console.log('Campo Password:', data.get('password'));
	console.log('Campo Checkbox:', data.get('checkbox'));
	formulario.reset();
});
