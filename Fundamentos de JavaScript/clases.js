function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > 1.50

var jose = new Persona('Jose', 'Caicedo', 1.69)

var stephanie = new Persona('Stephanie', 'Rojas', 1.49)

var coco = new Persona('Coco', 'Caicedo', 0.30)
