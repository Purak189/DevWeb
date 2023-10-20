var frutas = ["Manzana", "Pera", "Platano", "Sandia"];

console.log(frutas);

//Metodo para conseguir el tamano de un arreglo
console.log(frutas.length);

//Metodo para agregar un nuevo elemento
//Al ser el metodo push se agrega al final del arreglo
frutas.push("Fresa");
console.log(frutas);
//Metodo para eliminar el ultimo elemento del arreglo
frutas.pop();
console.log(frutas);
//Metodo para agregar un nuevo elemento
//Al ser el metodo unshift se agrega al inicio del arreglo
frutas.unshift("Fresa");
console.log(frutas);
//Metodo para eliminar el primer elemento del arreglo
frutas.shift();
console.log(frutas);
//Metodo para acceder a la posicion de un elemento del arreglo
console.log(frutas.indexOf("Pera"));
