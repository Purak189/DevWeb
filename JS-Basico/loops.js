var estudiantes = ["Maria","Juan","Sergio","Jair","Alexandra"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//Ciclo for
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//Ciclo while
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}