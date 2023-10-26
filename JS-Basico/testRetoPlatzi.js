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
//Pregunta 2
const tipoDeSuscripcion = "Free";
if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
//Pregunta 3
function pregunta3(suscripcion){
    if(suscripcion == "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if(suscripcion == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if(suscripcion == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if(tipoDeSuscripcion == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
}
    
pregunta3(tipoDeSuscripcion);
//Pregunta Bonus




/////////CICLOS
//Pregunta 2
let i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}
i = 10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}
//Pregunta 3
/*
var respuesta = 0;
do{
    respuesta = prompt("Cuanto es 2 + 2: ");
    respuesta = parseInt(respuesta);
}while(respuesta !== 4) 
*/

/////////Listas
//Pregunta 2
function PrimerElemento(arreglo){
    console.log(arreglo[0]);
}

//Pregunta 3
function PrintArray(arreglo){
    arreglo.forEach(element => {
        console.log(element);
    });
}

//Pregunta 4
function PrintObjectArray(arreglo){
    for(let i = 0; i < arreglo.length; i++){
        let objeto = arreglo[i];
        for (let propiedad in objeto) {
            if (objeto.hasOwnProperty(propiedad)) {
                console.log(propiedad + ": " + objeto[propiedad]);
            }
        }
    }
}

let arregloTes = ["Hola" , "Mundo" , "XD", "Si soi", "No soi", "idkidk", "no se que poner"];
PrimerElemento(arregloTes);
PrintArray(arregloTes);
let myObject = [
    {nombre: "Jair", edad: 21, ciudad: "Lima"},
    {nombre: "Alexandra", edad: 21, ciudad: "Lima"}
];
PrintObjectArray(myObject);