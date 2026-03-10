/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
    function funcionej4 (a, b){
        return(a + b)
    }
    let result1 = funcionej4(1, 2)
    console.log(result1)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arrayeje2 = [23, 32 , 343, 12, 123, 32]
let result2 = 0

arrayeje2.forEach(element => {
    if(element > result2){
        result2 = element
    }
})

console.log(result2)
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
    let stringEje3 = "Hola este string sera analizado"
    function analizarString(stringEje3){
        stringEje3.toLowerCase()
        let arrayaux = []
        let contador = 0
        let i = 0
        for(let valor of stringEje3 ){
            arrayaux[i] = valor
            i++
            if(valor === "a" || valor === "e" || valor === "i" || valor === "o" || valor === "u"){
                contador ++
            }
        }
        return(contador)
    }
    console.log(analizarString(stringEje3))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

 let arrayStrings = ["saprisa", "laliga", "martines", "ramiro", "kamilo", "declar", "arcane"]

function funtioneje4(arraty){
    let arrafinal = []

    for (let i = 0; i < arraty.length; i++){
        let aux = arraty[i]
        arrafinal[i] = aux.toUpperCase()
    }

    return arrafinal
}

console.log(funtioneje4(arrayStrings))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
    function esPrimo(numero){

    if(numero <= 1){
        return false
    }

    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
            return false
        }
    }

    return true
}
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
    function generarArrayAleatorio(){

    let array = []

    for(let i = 0; i < 10; i++){
        let numero = Math.floor(Math.random() * 20) + 1
        array.push(numero)
    }

    return array
}
function comparar(arreglo1, arreglo2){

    let resultadofinal = new Set()

    for(let i = 0; i < arreglo1.length; i++){

        for(let e = 0; e < arreglo2.length; e++){

            if(arreglo1[i] === arreglo2[e]){
                resultadofinal.add(arreglo1[i])
            }

        }

    }

    return [...resultadofinal]
}

let array1 = generarArrayAleatorio(10)
let array2 = generarArrayAleatorio(10)

console.log(comparar(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
    function sumaPares(array){

    let suma = 0

    for(let i = 0; i < array.length; i++){

        if(array[i] % 2 === 0){
            suma += array[i]
        }

    }

    return suma
}

let numeros = [1,2,3,4,5,6,7,8]

console.log(sumaPares(numeros))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let numeroEjercicio8 = [1,2,3,4,5,6,7,8]
function elevar(numeroEjercicio8){
    let i = 0
    let resultado = []
    for(let valor of numeroEjercicio8.length){
        resultado[i] = numeroEjercicio8[i] * numeroEjercicio8[i]
    }return resultado
}
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

    function invertirPalabras(texto){
    return texto.split(" ").reverse().join(" ")
}

let invertir = "Esta cadena de texto sera invertida"

console.log(invertirPalabras(invertir))
// 10. Crea una función que calcule el factorial de un número dado
function factorial(n){

    let resultado = 1

    for(let i = 1; i <= n; i++){
        resultado *= i
    }

    return resultado
}

console.log(factorial(5))