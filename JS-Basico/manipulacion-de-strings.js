// String primitivos

const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo); //String

const stringPrimitivoTambien = String('Soy un string primitivo');
console.log(typeof stringPrimitivo); //String

// String objeto
const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto); //Object

// Acceder a caracteres

const saludo = 'Hola. Como estas?';
console.log(saludo[6]); //C 
console.log(saludo.charAt(6)); //C
console.log(saludo.indexOf('C')); //6
console.log(saludo.indexOf('Como')); //6
console.log(saludo.lastIndexOf('o')); //9
console.log(saludo.slice(0,4)); //Hola
console.log(saludo.length); //17
console.log(saludo.toUpperCase()); //HOLA. COMO ESTAS?
console.log(saludo.toLowerCase()); //hola. como estas?

const saludoDividido = saludo.split(' ');
console.log(saludoDividido); //[ 'Hola.', 'Como', 'estas?' ]
console.log(saludoDividido[1]); //Como

const saludoConEspacios = ' Hola Mundo ';
const saludoSinEspacios = saludoConEspacios.trim();
console.log(saludoSinEspacios);

const saludoOriginal = 'Hola Mundo';
const nuevoSaludo = saludoOriginal.replace('Mundo', "🌍");
console.log(nuevoSaludo);