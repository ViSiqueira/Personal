var titulo = document.querySelector(".titulo");
titulo.textContent = "Vanessa Personal Trainer";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector (".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector (".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector (".info-imc");

    var alturaEhValida = validaAltura (altura);
    var pesoEhValido = validaPeso (peso);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";    
        paciente.classList.add ("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add ("paciente-inválido")
        paciente.style.backgroundColor="orange";
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc
    }
}

function validaPeso (peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }else{
        return false;
    }
}

function validaAltura (altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    }else{
        return false;
    }
}

function calculaImc (peso,altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}