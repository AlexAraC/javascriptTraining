//Funciones

function myFuntion(){
    console.log('Funcion Activada')
}

//Parametros
function saludar(nombre){
    console.log("Hola " + nombre)
}

saludar("Juan")

//Funciones de retorno
function sumar(a, b){
    return a + b
}

let resultado = sumar(5,3)
console.log(resultado)

//Funciones anonimas
let saludo = function(){
    console.log("Hola")
}

saludo()

//arrow functions (muy usadas)

let sumar = (a,b) => {
    return a + b
}

console.log(sumar(4,6))


//aniadas
function externa(){

    function interna(){
        console.log("Funcion interna")
    }

    interna()
}

externa()

//parametro por defecto 
function saludar(nombre = "Invitado"){
    console.log("Hola " + nombre)
}

saludar()

//Funciones con número indefinido de parámetros
function sumar(...numeros){
    let total = 0

    for(let num of numeros){
        total += num
    }

    return total
}

console.log(sumar(1,2,3,4,5))

//Funciones como parámetros

function operar(a,b,funcion){
    return funcion(a,b)
}

let suma = (x,y) => x+y

console.log(operar(3,4,suma))

//Funciones que retornan funciones
function multiplicador(num){

    return function(x){
        return x * num
    }

}

let duplicar = multiplicador(2)

console.log(duplicar(5))

//Funciones inmediatamente ejecutadas (IIFE)

(function(){
    console.log("Se ejecuta sola")
})();

//recursividad
function factorial(n){

    if(n === 1){
        return 1
    }

    return n * factorial(n-1)

}

console.log(factorial(5))

//ForEach
array = [0 , 1, 2, 3, 4, 5]
array.forEach((value) => console.log(value))