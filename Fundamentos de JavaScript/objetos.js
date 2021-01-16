// Si tenemos varios nombre no podemos invocarlos en la misma variable

var nombre = 'Sacha'

// lo ideal seria agregar una variable por cada nombre 

var nombre = 'Jose'
var nombre = 'Sacha'
var nombre = 'Stephanie'

function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)


// El anterior codigo no esta bien ya que no es funcional escribir variables por cada vez qwue necesitemos ese codigo
// ya que por cada nombre que quisieramos adicionar tenfriamos que adicionar una nueva variable


var jose = {  // Se usan llaves para que nos delimite un objeto
  nombre: 'Jose',
  apellido: 'Caicedo',
  edad: 37,
  // clave: valor, el valor puede ser un string
}

function imprimirNombreEnMayusculas(persona) { // entre los parentesis le pasamos los atributos a usar
  var nombre = persona.nombre.toUpperCase()
  console.log(nombre)
}
imprimirNombreEnMayusculas(jose) // en este caso solo le pasamos el nombre ya que la aplicacion sabe cual es el atributo que debe obtener


// Desestructurar objetos

var jose = {  
  nombre: 'Jose',
  apellido: 'Caicedo',
  edad: 37,
}

function imprimirNombreEnMayusculas(persona) { 
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(jose)



// Ejercicio
var jose = {  
  nombre: 'Jose',
  apellido: 'Caicedo',
  edad: 37,
}

function imprimirNombreYEdad({ nombre, edad }) { 
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} annos`)
}
imprimirNombreYEdad(jose)
imprimirNombreYEdad({nombre: 'Stephanie', edad: 28})