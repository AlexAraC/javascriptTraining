/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/
let array = [1, 2, 3, 4, 5, 6, 7]
let array2 = ["e", "r"]


let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}


// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
//let [valor0, valor1 ] = array
//console.log(valor0, valor1)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [valor0 = 0, valor1 = 0, valor3 = 0, valor4 = 0, , valor5 = 0] = array

// 3. Usa desestructuración para extraer dos propiedades de un objeto
//let {name: nameBrais, alias: alias3} = person3
//console.log(nameBrais)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
//let {name: nameBrais, alias: alias3} = person3
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let { name: namex, job:{name}} = person3


// 6. Usa propagación para combinar dos arrays en uno nuevo
let union = [...array2, ...array]
console.log(union)
// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo
const objeto1 = {
  nombre: "Alex",
  edad: 22
};

const objeto2 = {
  profesion: "Programador",
  pais: "Costa Rica"
};

let combinado = {...objeto1,...objeto2};

//console.log(combinado);
// 9. Usa propagación para crear una copia de un objeto
let copia = {...objeto2}
// 10. Combina desestructuración y propagación
const persona = {
  nombre: "Alex",
  edad: 22,
  pais: "Costa Rica",
  profesion: "Programador"
};

// desestructuración + propagación
const { nombre, ...resto } = persona;

console.log(nombre);
console.log(resto);