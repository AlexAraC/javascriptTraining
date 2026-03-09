/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["cerdo", "perro", "obeja", "avispa", "oso", "agila"]

// 2. Añade dos más. Uno al principio y otro al final
    animales.push("Angila", "Calamar", "vaca")
    animales.unshift("Piraña", "tiburon")
    console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(3,3)
console.log(animales)
console.log(animales[3] == "perro")
// 4. Crea un set que almacene cinco libros
let setlibros = new Set(["Libro1", "Libro2","Libro3","Libro4","Libro5",])
// 5. Añade dos más. Uno de ellos repetido
setlibros.add("Libro 6", "Libro2")
console.log(setlibros)
// 6. Elimina uno concreto a tu elección
setlibros.delete("Libro 6")
console.log(setlibros)
// 7. Crea un mapa que asocie el número del mes a su nombre
let mapa = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mapa.has(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
mapa.set(13, "Meses de verano")
console.log(mapa)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arracambio = Array.from(setlibros)
let setcambio = new Set(animales)//ERROR: no necesita from

console.log(arracambio)
console.log(setcambio)