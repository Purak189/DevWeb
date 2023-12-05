function suma(a, b) {
    return a + b;
}

suma(5,3);

var miFuncion = function(a,b){
    return a + b;
}

miFuncion(2,4);

// Capacidades de funciones respecto a otros objetos

// 1. Pasar funciones como argumentos (callback)

function a() {}
function b (a){}
b(a);

// 2. Retornar funciones 

function a() {
    function b(){}
}

// 3. Asignar funcionar a variables

const a = function() {}

// Tener propiedades y metodos

function a() {}
const obj = {}
a.call(obj);

// Anidar funciones -> Nested functions

function a() {
    function b(){
        function c(){

        }
    }
}

// Es posible almacenar funciones en objetos?

const cohete = {
    name: 'Falcon 9',
    launchMessage: function launchMessage() {console.log('🎇')}
}

cohete.launchMessage();