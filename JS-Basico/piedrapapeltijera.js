var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

function juego(jugador, maquina){
    if(jugador == maquina){
        console.log("Hubo empate, los 2 eligieron " + jugador);
    }
    else {
        if (jugador == op1 && maquina == op2){
            console.log("Gano la maquina ya que el " , op2 , " gana a la " , op1);
        }
        else if(jugador == op1 && maquina == op3){
            console.log("Gano el jugador ya que la " , op1 , " gana a la " , op3);
        }
        else if(jugador == op2 && maquina == op1){
            console.log("Gano el jugador ya que el " , op2 , " gana a la " , op1);
        }
        else if(jugador == op2 && maquina == op3){
            console.log("Gano la maquina ya que la " , op3 , " gana al " , op2);
        }
        else if(jugador == op3 && maquina == op1){
            console.log("Gano la maquina ya que la " , op1 , " gana a la " , op3);
        }
        else if(jugador == op3 && maquina == op2){
            console.log("Gano el jugador ya que la " , op3 , " gana al " , op2);
        }
    }
}

juego(op1, op1);
juego(op1, op2);
juego(op1, op3);
juego(op2, op1);
juego(op2, op3);
juego(op3, op2);
juego(op3, op1);