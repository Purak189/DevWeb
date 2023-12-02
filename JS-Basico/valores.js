//Valores de tipo primitivos
//String
"Hola mundo"
//Entero
5
//Boolean
true
false
//Tipo especial
//Es cuando un dato no existe o esta vacio
null
//Cuando no se define que tipo de variable sera una variable
undefined

// Paso por valor
let x = 10;
let y = 'Hola';
let z = true;

let a = 12;
let b = 'Platzi';
let c = undefined;

console.log(a,b,c,x,y,z);

// Paso por referencia, se usa la direccion de memoria
//Arreglo
let frutas = ['manzana'];
frutas.push('pera');
console.log(frutas);

let panes = ['🥐'];
let copiaDePanes = panes;
panes.push('🥖');
console.log(panes,copiaDePanes);

//Objetos
let frutero = {
    naranja: '🍊'
}
let vegetales = frutero;
vegetales.naranja = '🥦';
console.log(frutero);

let ropa = {
    blusa: '👚'
}
ropa.pantalon = '👖';
console.log(ropa);