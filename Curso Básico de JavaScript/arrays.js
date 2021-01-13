var frutas = ["manzana", "platano", "cereza", "fresas"];

console.log(frutas);

//para traer la cantidad o tamano del array
console.log(frutas.length);

//Llamar el numero de ubicacion del array iniciando con 0
console.log(frutas[0]);

//Metodo para adicionar mas contenido al array
var adicionarElemento = frutas.push("uvas");

// Metodo para eliminar contenido del array
var eliminarUltimo = frutas.pop("uvas");

//Metodo para adcionar un nuevo elemento al principio del array
var adicionarInicio = frutas.unshift("peras");

//Metodo para eliminar el elemento que se encuentre en el inicio del array
var eliminarInicio = frutas.shift("peras");

//saber la posicion del elemento en el array
var posicion = frutas.indexOf("cereza");