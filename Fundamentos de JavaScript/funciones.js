var nombre = 'Jose', edad = '37'

function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} anos`)
}

imprimirEdad()

// Para que la funcion reciba parametros debemos pasarselos dentro de esta

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} anos`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Andres', 26)
imprimirEdad('Stephanie', 29)
imprimirEdad('Luis', 64)



// El alcance de las funciones
var nombre = 'Jose'

function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)

// toda variable que no este definida dentro de una funcion va estar definida dentro del alcance global y vamos a poder acceder  a ella a traves del objeto global