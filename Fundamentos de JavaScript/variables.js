var nombre = 'Jose', apellido = 'Caicedo'
var edad = 37

edad = '28 años'

console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)

var peso = 75

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` //Interpolacion de texto se usa con comilla invertida

var str = nombre.substr(1, 2)