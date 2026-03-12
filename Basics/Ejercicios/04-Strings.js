
//Strings
let soyUnString = "Hola, soy un string"
let adicional = " y me gusta JavaScript"

// usamos operadores aritméticos para concatenar strings
// el operador de suma (+) se utiliza para concatenar strings, es decir, unir dos o más strings en uno solo
console.log(soyUnString + adicional)

// tambien podemos usar el operador de asignación para concatenar strings, es decir, unir un string a otro string ya existente
let union = soyUnString + adicional + " y estoy aprendiendo a concatenar strings"
console.log(union)

//obtener la longitud de un string
console.log("Es de longitud " + soyUnString.length) // .lenght sirve para que sea el resultado de todo el numero

//obtener un caracter específico de un string
console.log("El primer caracter es " + soyUnString[0]) // H
console.log("El segundo caracter es " + soyUnString[1]) // o
console.log("El tercer caracter es " + soyUnString[2]) // l
console.log("El cuarto caracter es " + soyUnString[3]) // a

//obtener una parte de un string
console.log("Los primeros 5 caracteres son " + soyUnString.slice(0, 5)) // Hola,
console.log("Los últimos 6 caracteres son " + soyUnString.slice(-6)) // string
console.log("Los caracteres del medio son " + soyUnString.slice(7, 14)) // soy un  

// convertir un string a mayúsculas
console.log("En mayúsculas es " + soyUnString.toUpperCase()) // HOLA, SOY UN STRING
// convertir un string a minúsculas
console.log("En minúsculas es " + soyUnString.toLowerCase()) // hola, soy un string

//Revisar si un string incluye una palabra o frase específica
console.log("¿Incluye 'Hola'? " + soyUnString.includes("Hola")) // true
console.log("¿Incluye 'Adiós'? " + soyUnString.includes("Adiós")) // false

// el indexOf() método devuelve el índice de la primera aparición de un valor especificado en un string, o -1 si no se encuentra
console.log("El índice de 'Hola' es " + soyUnString.indexOf("Hola")) // 0
console.log("El índice de 'Adiós' es " + soyUnString.indexOf("Adiós")) // -1
console.log("El índice de 'soy' es " + soyUnString.indexOf("soy")) // 6 


// el replace() método devuelve una nueva cadena con algunas o todas las coincidencias de un patrón reemplazadas por un reemplazo,
console.log("Reemplazando 'Hola' por 'Adiós' " + soyUnString.replace("Hola", "******")) // Adiós, soy un string


// simbolo del acento invertido
let nombre = `Alex, ${soyUnString}`  
console.log(nombre) // Alex, Hola, soy un string

//textos en variables
let texto1 = `Hola, soy un string
y me gusta JavaScript`

// uso del join 
let palabras = ["Hola", "como", "estas"]

let frase = palabras.join(" ")

//console.log(frase)

let frutas = ["manzana", "banana", "naranja"]

let lista = frutas.join(", ")

//console.log(lista)