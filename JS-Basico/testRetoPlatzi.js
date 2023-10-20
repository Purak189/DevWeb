//Pregunta 2 y 3, creacion de variables
let nombre = "Jair" //string
let apellido = "Velasquez Pizarro" //String
let userName = "PurakCode" //String
let edad = 21 //number
let correo = "purak@platzi.com" //String
let mayorEdad = true //boolean
let dineroAhorrado = 20 //number
let deudas = 0 //number

//Pregunta 4
let nombreCompleto = nombre + apellido;
let dineroReal = dineroAhorrado - deudas;

console.log(nombreCompleto);
console.log(dineroReal);

/////////FUNCIONES
//Pregunta 2
function saludo(nombre, apellido, nickname){
    let nombreCompleto = nombre + " " + apellido;
    console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + nickname + ".");
}
saludo(nombre, apellido,userName);

/////////CONDICIONALES