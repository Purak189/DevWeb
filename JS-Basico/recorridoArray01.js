var articulos = [
    {nombre: "Bici", costo: 600},
    {nombre: "TV", costo: 6000},
    {nombre: "Libro", costo: 60},
    {nombre: "Celular", costo: 1200},
    {nombre: "Laptop", costo: 2500},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 120},
    {nombre: "Mouse", costo: 500},
];

//Metodo filter(), teniendo como resultado en un arreglo nuevo los articulos de acuerdo
//a ciertos filtros
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});
articulosFiltrados

//Metodo map(), devuelve un arreglo solo con la caracteristica que se 
//ingrese en la funcion dada
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
nombreArticulos

//Metodo find(), devuelve el primer elemento con una caracteristica
//de filtrado, no devuelve un arreglo
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.costo === 500;
});
encuentraArticulo

//Metodo foreach(), sirve para recorrer todos los elementos
//de un arreglo y poder hacer algo respecto a una funcion
//por cada dato
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

//Metodo some(), devuelve un booleano para elementos
//que cumplan con la condicion
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
articulosBaratos;

console.log(typeof(articulos));
console.log(4 == "4")