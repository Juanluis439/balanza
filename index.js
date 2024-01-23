const getIMC=(imc)=>{
    switch (true) {
        case imc < 18.5:
            return 'Bajo peso';
        case imc >= 18.5 && imc <= 24.9:
            return 'Peso normal';
        case imc >= 25 && imc <= 29.9:
            return 'Sobrepeso';
        default:
            return 'Obesidad';
    }
}
const calcularIMC=()=>{
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    if (altura !== '' && peso !== '') {
        let alturaMetros = altura / 100;
        let imc = peso / (alturaMetros * alturaMetros);
        let resultado = getIMC(imc)
        document.getElementById('result').innerText = 'Su IMC es ' + imc.toFixed(2) + '. ' + resultado;
    } else {
        alert('Por favor, complete todos los campos.');
    }
}