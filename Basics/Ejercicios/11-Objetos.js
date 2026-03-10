//Objetos

//Crear un objeto
let persona = {
    nombre: "Alex",
    estatura: 171,
    carrera: "Ingenieria en sistemas"
}

//Acceder a propiedades
console.log(persona.nombre)
//Notación con corchetes(es lo mismo)
console.log(persona["nombre"])

//Modificar propiedades
persona.estatura = 170

//Agregar propiedades
persona.edad = 25

//Eliminar propiedades
delete persona.carrera

//Métodos (funciones dentro del objeto)
let persona = {
    nombre: "Alex",

    caminar: function(){
        console.log("camina")
    }
}

persona.caminar()

//this (referencia al propio objeto)

let persona = {

    nombre: "Alex",

    saludar: function(){
        console.log("Hola soy " + this.nombre)
    }

}

persona.saludar()

//Objetos dentro de objetos
let persona = {

    nombre: "Alex",

    trabajo: {
        puesto: "Programador",
        experiencia: 0
    }

}

console.log(persona.trabajo.puesto)

//Recorrer un objeto

let persona = {
    nombre: "Alex",
    edad: 20,
    carrera: "Ingenieria"
}

for(let clave in persona){//se usa in no of
    console.log(clave, persona[clave])
}

//Convertir objeto a arrays

Object.keys(persona) // devuelve: ["nombre","edad","carrera"]


//Constructor
function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}

let p1 = new Persona("Alex",20)


//JSONificar 
let persona = {
    nombre: "Alex",
    edad: 20
}

let json = JSON.stringify(persona)

//clonar objeto 
let copia = {...persona}
