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
//de filtrado
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.costo === 500;
});
encuentraArticulo

//Metodo foreach(),
