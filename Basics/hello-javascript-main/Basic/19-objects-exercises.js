// 1. Crea un objeto con 3 propiedades
let persona = {
    nombre: "Joaquin",
    profesion: "Futbolista",
    edad: 23
}

// 2. Accede y muestra su valor
console.log(persona.nombre)

// 3. Agrega una nueva propiedad
persona.altura = 185
console.log(persona.altura)

// 4. Elimina una de las 3 primeras propiedades
delete persona.profesion

// 5. Agrega una función e invócala
persona.saludar = function(){
    console.log("Hola, soy " + this.nombre)
}

persona.saludar()

// 6. Itera las propiedades del objeto
for(let propiedad in persona){
    console.log(propiedad, persona[propiedad])
}

// 7. Crea un objeto anidado
persona.trabajo = {
    puesto: "Delantero",
    equipo: "Barcelona",
    experiencia: 5
}


// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona.trabajo.puesto)
console.log(persona.trabajo.equipo)
// 9. Comprueba si los dos objetos creados son iguales
let obj1 = { nombre: "Alex", edad: 23 }
let obj2 = { nombre: "Alex", edad: 23 }

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("Los objetos son iguales")
} else {
    console.log("Los objetos son diferentes")
}
// 10. Comprueba si dos propiedades diferentes son iguales

if (obj1.edad == obj2.edad){
    console.log("Propiedades son iguales")
}else{
    console.log("Propiedades no son iguales")
}