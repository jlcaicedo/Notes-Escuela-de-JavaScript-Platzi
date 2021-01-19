var jose = {
    nombre: 'Jose',
    apellido: 'Caicedo',
    edad: '37',
    ingeniero: true,
    cocinero: false,
    dj: false,
    cantante: false,
    guitarrista: false,
    runner: true,
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('Ingeniero') 
     } else {
         console.log('No es Ingeniero')
     }
    
     if (persona.cocinero) {
        console.log('Cocinero') 
     }
    
     if (persona.dj) {
        console.log('DJ') 
     }
    
     if (persona.cantante) {
        console.log('Cantante') 
     }
    
     if (persona.guitarrista) {
        console.log('Guitarrista') 
     }
   
     if (persona.runner) {
        console.log('Corredor') 
     }

}
imprimirProfesiones(jose)

var coco = {
    nombre: 'Coco',
    apellido: 'Caicedo',
    edad: '6',
    ingeniero: false,
    cocinero: true,
    dj: false,
    cantante: true,
    guitarrista: false,
    runner: false,
}

// Ejercicio 

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad > 18) {
         console.log(`${persona.nombre} es mayor de edad, tiene ${persona.edad} annos`)
     }  else {
        console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad} annos`)
     }
}
 imprimirSiEsMayorDeEdad(jose)

 imprimirSiEsMayorDeEdad({
    nombre: 'Stephanie',
    apellido: 'Rojas',
    edad: '9',
    ingeniero: false,
    cocinero: true,
    dj: false,
    cantante: true,
    guitarrista: false,
    runner: false,
})

// Funciones que retornan valores

//Magin Number
const MAYORIA_DE_EDAD = 18 // Definimos en el scoop global esata variable, como no se puede modificar se pone como constante = const y se escriben en mayuscula separado por guines bajo.


function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} // creamos esta funcion para que nos devuelva si es true o false para tener mejor legibilidad del codigo

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
         console.log(`${persona.nombre} es mayor de edad, tiene ${persona.edad} annos`)
     }  else {
        console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad} annos`)
     }
}


// Arrow functions
// En JavaScript se le puede asignar a una variable una funcion y lo vemos asi:
var esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} // con ello esta funcion seria una funcion anonima 

// Siguiendo cambiamos el var por const para distinguir que es una funcion y no una variable
const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

// Al reescribirla por el arrow funtion nos quedaria igual de funcional esta variable a la anterior
const esMayorDeEdad = (persona) => { // cuando tenemos un solo parametro podemos obviar los parentesis
    return persona.edad >= MAYORIA_DE_EDAD
}

// Tambien podemos seguir haciendo mas cambios, si una funcion lo unico que hace es retornar algo podemos eliminar el return y las llaves que rodean el cuerpo de lafuncion e implicitamente retornar lo que sigue a continuacion
// en este caso se hace la comparacion y se va devolver el valor de esa comparacion
// lo que teniamos en 3 renglones ahora esta en uno solo
const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD

// Tambien podemos desestructurar el parametro ya que solo nos interesa la edad, entonces para desestructurar no podemos poner las llaves directamentamente entonces usamos las llaves dentro de los parentesis
// y para terminar la desestructuracion ya no ponemos la persona
// de esta manera la funcion nos queda una funcion la cual le pasamos un objeto que tiene una edad y nos retorna si esa edad es mayor a la mayoria de edad
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
         console.log(`${persona.nombre} es mayor de edad, tiene ${persona.edad} annos`)
     }  else {
        console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad} annos`)
     }
}


// este ejemplo mostramos como negar con el simbolo (!)
function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) { // el simbolo de exclamacion (!) Niega lo que lo acompana
            console.log('ACCESO DENEGADO')
    }
}


// Ejercicio de pasar la anterior negacion como arrow funtion
const permitirAcceso = (persona) => (!esMayorDeEdad(persona)) ? 'ACCESO DENEGADO' : ""
