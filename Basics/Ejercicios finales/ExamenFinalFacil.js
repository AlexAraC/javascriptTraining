/*
Examen Final de Fundamentos de JavaScript: Nivel Facil

Nivel 1 — Lógica y manipulación de datos (10 ejercicios)

*/

//1. Frecuencia de caracteres
//Crea una función que reciba un string y devuelva un objeto con la frecuencia de cada carácter.

function frecuenciaDeCaracteres(texto) {
    texto = texto.toLowerCase()
    let myObjectAux = {}
    let arrayAux = texto.split("");
    for(let i = 0; i < texto.length; i++){
      if(!myObjectAux[arrayAux[i]]){
        myObjectAux[arrayAux[i]] = 1
      }else{
        myObjectAux[arrayAux[i]] ++
      }
    }
   return myObjectAux
}
let resultado = frecuenciaDeCaracteres("hola provando si el array se llena")
//console.log(resultado)

//2. Intersección de arrays
//Dado dos arrays, devuelve los elementos que existen en ambos.
let arrayEje2 = ["1","3","6","8", "6", "6"]
let array2Eje2 =["a","i","5","6"]

function ElementosComunes(arrayEje2, array2Eje2){
    let resultadoFinal = []

    if(array2Eje2.length >= arrayEje2.length){
        for(let i = 0; i < arrayEje2.length; i++){
            for(let e = 0; e < array2Eje2.length; e++){
                if(arrayEje2.includes(array2Eje2[e])){
                    if(!resultadoFinal.includes(array2Eje2[e])){
                        resultadoFinal.push(array2Eje2[e])
                    }
                }
            }
        }
    }else{
        for(let i = 0; i < array2Eje2.length; i++){
            for(let e = 0; e < arrayEje2.length; e++){
                if(array2Eje2.includes(arrayEje2[e])){
                    if(!resultadoFinal.includes(arrayEje2[e])){
                        resultadoFinal.push(arrayEje2[e])
                    }
                }
            }
        }
    }

    return resultadoFinal
}

//console.log(ElementosComunes(arrayEje2, array2Eje2))
/*
3. Agrupar objetos

Dado un array de objetos:


*/
const personas = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 20 },
  { nombre: "Carlos", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 25 },
  { nombre: "Lucía", edad: 20 },
  { nombre: "Jorge", edad: 30 }
];

function separarPorParametro(personas){
    arrayObjNombre = [{}]
    arrayObjEdad = [{}]
    for(let i = 0; i < personas.length; i++){
        arrayObjNombre.push(personas[i].nombre)
        arrayObjEdad.push(personas[i].edad)
    }
    return arrayObjEdad, arrayObjNombre
}
let result = separarPorParametro(personas)
//console.log(result)



/*
4. Aplanar arrays

Convierte un array anidado en uno plano.


*/
const datos = [
  1,
  [2, 3],
  [4, [5, 6]],
  [7, [8, [9]]],
  10
];

function aPlano(array, resultado = []) {

    for (let elemento of array) {

        if (Array.isArray(elemento)) {
            aPlano(elemento, resultado)
        } else {
            resultado.push(elemento)
        }

    }

    return resultado
}


let resultado4 = aPlano(datos)

//console.log(resultado4)
//

//Ejercicio 5 Detectar palíndromo robusto
/*
Crear función que detecte si un texto es palíndromo ignorando:

mayúsculas

espacios

puntuación
*/

let palindromo = "Anita lava la tina"

function resultadoPlaindromo(palindromo){
    let texto = palindromo.toLowerCase()
    let resultado = texto.replace(/\s/g, "");
    let aux = resultado.split("").reverse().join("");
    if(resultado === aux){ 
        return('Es palindromo')
    }else{
        return('NO Es palindromo')
    }
}

//console.log(resultadoPlaindromo(palindromo))


/*

6. Diferencia entre arrays

Dado dos arrays, devuelve los valores que están en el primero pero no en el segundo.

*/ 


let array1eje6 = [1,2,3,4,5,6]
let array2Eje6 = [4,5,6,7,8,9]
function comparacionNegativa(array1eje6, array2Eje6){
    let auxArray = []
    for(let i of array2eje6){
        if(!array2eje6.includes(array1Eje6[i])){
            arrayAux[i] = array1eje6[e]
            
        }
    }
    return arrayAux
}
//console.log(comparacionNegativa(array1eje6, array2Eje6))

/* 7
Ordenar objetos

Dado un array de objetos con precios:

[{producto:"A",precio:20},{producto:"B",precio:5}]

*/
const productos = [
  { producto: "Laptop", precio: 1200 },
  { producto: "Mouse", precio: 25 },
  { producto: "Teclado", precio: 75 },
  { producto: "Monitor", precio: 300 },
  { producto: "Audífonos", precio: 150 },
  { producto: "Webcam", precio: 90 },
  { producto: "USB", precio: 10 }
];

function ordenarObjeto(productos, resultado = []) {

    if(productos.length === 0){
        return resultado
    }

    let indiceMayor = 0

    for (let i = 1; i < productos.length; i++){
        if(productos[i].precio > productos[indiceMayor].precio){
            indiceMayor = i
        }
    }

    resultado.push(productos[indiceMayor])

    productos.splice(indiceMayor,1)

    return ordenarObjeto(productos, resultado)
}

let ordenados = ordenarObjeto([...productos])

//console.log(ordenados)
/*8: Encontrar duplicados

Dado un array, devuelve solo los valores duplicados.

*/ 
let array8 = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 5, 9, 1, 10]

function encontrarDuplicados(array8){
    let arrayAux = array8
    let arrayresult = []
    let u = 0
    for(let i = 0; i < arrayAux.length; i++){
        for(let e = 0; e < arrayAux.length; e++){
            if(array8[i] == arrayAux[e]){
                u ++
            }
        }
        if(u >= 2){
            if(!arrayresult.includes(array8[i])){
                arrayresult[i] = array8[i]
            }
        }
        u = 0
    }
    return arrayresult
}
//console.log('solo duplicados' + encontrarDuplicados(array8))

/*9:Simular map
Implementa tu propia función miMap(array, callback) que funcione como map.*/

let numeros = [1, 2, 3, 4, 6, 7]

function mapear(numeros, callback){
    let resultado = []

    for(let i = 0; i < numeros.length; i++){
        resultado.push(callback(numeros[i], i, numeros))
    }
    return resultado

}
//console.log(mapear(numeros, n => n + 1))

//10 Validar estructura de objeto

// Crea una función que verifique si un objeto cumple una estructura.

let usuarios = [
  {
    nombre: "Alex",
    edad: 22,
    activo: true
  },
  {
    nombre: "María",
    edad: 30,
    activo: false
  },
  {
    nombre: "Carlos",
    edad: 25,   // ❌ debería ser number
    activo: true
  }
]


function valdicacionUsuarios(usuarios){
    let formato = {
        nombre: "nombre",
        edad: 1,
        activo: false
    }
    for(let i = 0; i < usuarios.length; i++){
        if(typeof usuarios[i].nombre !== typeof formato.nombre || typeof usuarios[i].edad !== typeof formato.edad || typeof usuarios[i].activo !== typeof formato.activo){
            return "parametro no validado"
        }
     }
    return "Parametros validados"

}

console.log(valdicacionUsuarios(usuarios))