
const h1 = document.querySelector('h1');
const valor1 = document.getElementById("calculo1");
const valor2 = document.getElementById("calculo2");
const form = document.querySelector("#form");
const boton = document.getElementById("btncalcular");
const resultado = document.getElementById("result");

form.addEventListener("submit", sumarInputValues);


function sumarInputValues(event) {
    event.preventDefault();
    let respuesta = Number(valor1.value) + Number(valor2.value);
    resultado.innerText = "Resultado: " + respuesta;
}
