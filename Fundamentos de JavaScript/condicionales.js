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