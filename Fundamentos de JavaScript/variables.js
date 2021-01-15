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

//laas variable nuwemericas se pueden expresar de diferentes maneras
// Manera 1: incremento de la edad en 1
edad = edad + 1

// Manera 2: igualmente incrementa den uno una segunda manera
edad += 1

// Igualmente se puede usar para otro tipos de operaciones
peso -= 2

var precioDeVino = 25.09

var cantidadCompra = 3

var total = precioDeVino * 100 * cantidadCompra / 100

// Tambien se puede usar la forma de redondear 
var total =Math.round ( precioDeVino * 100 * cantidadCompra ) / 100
var totalStr = total.toFixed(3)
// toFixed nos convierte a string, pero esto lo podemos volver a convertir con parseFloat
var total2 = parseFloat(totalStr)