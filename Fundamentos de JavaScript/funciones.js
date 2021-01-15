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
