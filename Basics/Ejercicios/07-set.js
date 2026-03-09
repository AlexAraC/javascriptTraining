/*
                               
                                  ********          ********         **************
                                  *                 *                       *
                                  * ******          ********                *
                                         *          *                       *
                                  ********          ********                *
 
                 ¿Qué es un Set?

Un Set es una estructura que guarda valores sin repetir.

Cómo se crea correctamente

Un Set necesita un iterable, normalmente un array.

*/
//declaracion

let numeros = [1,2,2,3,3,4];
console.log(numeros);
//Set(4) {1,2,3,4}


let datos = new Set(["Alex", 84594469]);
console.log(datos);
//Set(2) {"Alex", 84594469}
//funcion, array sin duplicados

let usuarios = new Set(["Alex","Juan","Maria"]);

console.log(usuarios.has("Alex"));

//Metodos 

usuarios.add("Adrian")//el delete no funciona si no especificas que vas a borrar 

usuarios.delete("Alex")
console.log(usuarios)

//has

console.log(usuarios.has("Alex"));

//size
console.log(usuarios.size)

//convertir set a array

let array =  Array.from(usuarios)
console.log(array)

//convertir array a set

myset = new Set(array)
console.log(myset)