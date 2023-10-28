function reloj(){
    let tiempo = new Date();

    let hh = tiempo.getHours();
    let mm = tiempo.getMinutes();
    let ss = tiempo.getSeconds();
    let mensaje = 'Hora: ' + hh + ':' + mm + ':' + ss;

    document.getElementById('ph').innerHTML = mensaje;
    setTimeout("reloj()",1000);
}

var c = 1;
function carrusel(){
    document.getElementById('imgcab').setAttribute('src', '../imagenes/ban' + c + '.jpg');
    c++;
    if(c > 5){
        c = 1;
    }
    setTimeout("carrusel()", 1000);
}
let fecha = new Date();

let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anhio = fecha.getFullYear();
let mensaje = 'Fecha: ' + dia + '/' + mes + '/' + anhio;

document.getElementById('pf').innerHTML = mensaje;
document.body.setAttribute('onload', 'reloj() ; carrusel()');
