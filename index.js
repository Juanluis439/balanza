function calcularIMC() {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    if (altura !== '' && peso !== '') {
        let alturaMetros = altura / 100;
        let imc = peso / (alturaMetros * alturaMetros);

        let resultado = '';

        if (imc < 18.5) {
            resultado = 'Bajo peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            resultado = 'Sobrepeso';
        } else {
            resultado = 'Obesidad';
        }

        document.getElementById('result').innerText = 'Su IMC es ' + imc.toFixed(2) + '. ' + resultado;
    } else {
        alert('Por favor, complete todos los campos.');
    }
}