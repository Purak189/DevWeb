let miAuto = {
    marca: "Toyota",
    modelo: "Avanza",
    annio: 2021,
    informacion: function () {
        console.log(`Mi auto tiene las siguiente caracteristicas: ${this.marca} ${this.modelo} ${this.annio}` );
    },
};

//Clase constructora
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}







console.log(miAuto.modelo);
miAuto.informacion();