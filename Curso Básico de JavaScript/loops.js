var estudiantes = [ 'Maria', 'Sergio', 'Rosa', 'Daniel' ]; 

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}
// Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
while (estudiantes.length > 0) {   //Mientras estudiantes.length sea mayor a  0 se tiene que cumplir el ciclo que esta dentro
    var estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    saludarEstudiante(estudiante);
}