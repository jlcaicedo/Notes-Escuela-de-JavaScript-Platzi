var jose = {
    nombre: 'Jose',
    apellido: 'Caicedo',
    edad: 37,
    peso: 75,
}

console.log(`Al inicio del anno ${stephanie.nombre} pesa ${stephanie.peso}Kg`)

const VARIACION_PESO = 0.2

const aumentarDePeso = persoona => persoona.peso += VARIACION_PESO
const bajarDePeso = persona => persona.peso -= VARIACION_PESO

//el ciclo for tiene tres parte iniciales:
// (parte inicial; parte de la condicion ; parter del incremento )
// (el contador debe tener un nombre [var i] e indicarle en que valor inicia [= 1]; la condicion es que sea menoir a 365 [i <= 365]; ahora debemos indicarle el incremento con [i++]) 

for (var i = 1; i <= 365; i++) {

    var random = Math.random()

    if (random < 0.25) {
        // Aumentar de peso
        aumentarDePeso(stephanie)

    } else if (random < 0.5) {
        // Adelgazar
        bajarDePeso(stephanie)

    }
    
}

console.log(`Al final del anno ${stephanie.nombre} pesa ${stephanie.peso}Kg`)
