/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
    let cadena1 = "Hola soy "
    let cadena2 = "Alex"
    console.log(cadena1 + cadena2)
// 2. Muestra la longitud de una cadena de texto
    console.log(cadena1.length)
// 3. Muestra el primer y último carácter de un string
    let primer = cadena1[0]
    let ultimo = cadena1[cadena1.length - 1]  //el .length nos deja un mas adelante del tamano real
    console.log("Primer carácter:", primer);
    console.log("Último carácter:", ultimo);
// 4. Convierte a mayúsculas y minúsculas un string
    console.log(cadena1.toLowerCase())
    console.log(cadena1.toUpperCase())
// 5. Crea una cadena de texto en varias líneas
let texto1 = `Este
texto tiene varias
lineas`;

// 6. Interpola el valor de una variable en un string
let texto2 = `Este texto se interpola con: ${texto1}`;

// 7. Reemplaza todos los espacios en blanco de un string
let texto3 = texto2.replace(/ /g, "_");

console.log(texto3);
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto4 = texto2.replace(/ /g, "_");

console.log(texto4);
// 8. Comprueba si una cadena de texto contiene una palabra concreta
    console.log(texto2.includes("Este"))
// 9. Comprueba si dos strings son iguales
let texto5 = "Hola";
let texto6 = "Hola";

if (texto1 === texto2) {
    console.log("Los strings son iguales");
} else {
    console.log("Los strings son diferentes");
}
// 10. Comprueba si dos strings tienen la misma longitud
if (texto5.length == texto6.length){
    console.log("Ambos strings tienen una longitud de: " + texto5.length);
}else{
    console.log("Los dos tienen logitudes diferentes")
}