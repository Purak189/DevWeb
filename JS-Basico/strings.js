// Creacion de string
const primeraOpcion = 'Comillas simples';
const segundaOPcion = "Comillas dobles";
const terceraOpcion = `Comillas invertidas`;

// 1. Concatenacion: Opcion +
const direccion = 'Calle falsa 123';
const ciudad = 'Springfield';
const direccionCompleta = 'Mi direccion completa es: ' + direccion + ', ' + ciudad;
console.log(direccionCompleta);

// 2. Concatenacion: Template Literals
const nombre = 'Jair';
const pais = '🇵🇪';
const presentacion = `Hola, mi nombres es ${nombre} y soy de ${pais}`;
console.log(presentacion);

// 3. Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = '🇲🇽'
const pensamiento = [primeraParte, segundaParte, terceraParte].join(' 🌮 ');
console.log(pensamiento);

// 4. Concatenacion: concat()
const hobbie1 = '🏀';
const hobbie2 = '🎮';
const hobbie3 = '🎸';
const hobbie4 = '📚';
const boddies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, ', ', hobbie4);
console.log(boddies);

// Caracteres de escape
// const whatDoIDo = 'I'm Software Engineer';

// 1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer";

// 2. Barra invertida
const barraInvertida = 'I\'m Software Engineer';

// 3. Comillas invertidas
const escapeComillasInvertidas = `I'm Software Engineer`;

// Escritura de string largos
const poema =   'Las rosas son rojas, \n' +
                'Las violetas son azules, \n' +
                'Caracter inesperado, \n' +
                'En la linea 86.';
console.log(poema);

const poema2 =   'Las rosas son rojas, \n\
Las violetas son azules, \n\
Caracter inesperado, \n\
En la linea 86.';
console.log(poema2);

const poema3 =   `Las rosas son rojas,
Las violetas son azules, 
Caracter inesperado,
En la linea 86.`;
console.log(poema3);