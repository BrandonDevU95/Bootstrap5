const inputRango = document.getElementById('inputRango');
const visitas = document.getElementById('visitas');
const precio = document.getElementById('precio');

inputRango.addEventListener('input', () => {
	precio.textContent = inputRango.value;
});
