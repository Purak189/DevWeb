/*Ejercicio 1: Ciclo de un Triangulo*/
let num = 7;
let hash = "#";
while (num > 0){
    console.log(hash);
    hash += "#";
    num--;
}
/*Ejercicio2: FizzBuzz*/
for(let i = 1; i <= 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i);
    }
    else if(i%3 == 0){
        console.log("Fizz");
    }
    else if(i%5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
/*Ejercicio3: Tablero de Ajedrez*/
let tablero = "";
function tableroDeAjedrez(numero, tablero){
    for(let i = 0; i < numero; i++){
        for(let j = 0; j < numero; j++){
            if(i % 2 == 0 ){
                if( j % 2 == 0){
                    tablero += " ";
                }
                else{
                    tablero += "#";
                }
            }
            else{
                if( j % 2 == 0){
                    tablero += "#";
                }
                else{
                    tablero += " ";
                }
            }
        }
        tablero += "\n";
    }
    return tablero;
}
tablero = tableroDeAjedrez(10,tablero);
console.log(tablero);