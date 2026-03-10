/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
    for(let i = 1; i<= 10; i++){
        //console.log(i)
    }
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
   let aux = 0;

    for (let i = 0; i <= 100; i++) {
        //aux = i + aux;
    }

    console.log(aux);
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
   for (let i = 1; i <= 50; i++){
        let aux = i % 2
        if (aux == 0){
            //console.log(i)
        }
   }
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let array = ["alex", "marta", "joaquin", "mouri", "sapa", "raber"]

for(let valor of array){
    //console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let contador = 0;
let string = "Contando el numero de vocales de cada texto";

string = string.toLowerCase();

for (let valor of string) {
    if (valor === "a" || valor === "e" || valor === "i" || valor === "o" || valor === "u") {
        contador++;
    }
}

console.log(contador);
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [2, 3, 4, 5];
let producto = 1;

for (let numero of numeros) {
    producto = producto * numero;
}

//console.log(producto);
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 9; i++){
    let aux = 5 * i
    console.log(`5x${i} es: ${aux}`)
}
// 8. Usa un bucle para invertir una cadena de texto
let cadena = "te reto a que inviertas este texto"
console.log(cadena)
let auxarray = []
let esperado = ""
for(let valor of cadena){
    auxarray.unshift(valor)
}
for(let valor of auxarray){
    esperado = esperado + valor
}
console.log(esperado)

//Manera sencilla
let invertido = cadena.split("").reverse().join("")

console.log(invertido)
 
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0
let b = 1

for(let i = 0; i < 10; i++){
    console.log(a)
    
    let siguiente = a + b
    a = b
    b = siguiente
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numerosAletorios

for (let i = 0; i < 10; i++){
    numeros.push(Math.floor(Math.random() * 20))
    if (numeros[i] > 10){
        console.log(`Numero mayor a 10:  ${numeros[i]}`)
    }
}

