//Que son: Variables que pueden tener un listado de objetos dentro
//Delcaracion

let arrayEjemplo = ["Alex", "Araya", edad = 21, true, edadDeMayor = 3] //multiples tipos de elementos dentro

otraFormaDeDeclararlo = new Array()


//operaciones dentro de sus factores
sumaArray = arrayEjemplo[2] + arrayEjemplo[4]

//  console.log(sumaArray)

//tambien con strings

sumaStrings = arrayEjemplo[0] + arrayEjemplo[1]

//  console.log(sumaStrings)


//Quitar factores detro del array y meter factores con push y pop

console.log("Aqui agregamos " + arrayEjemplo.push('Nuevo Factor')) // Lo mete al final del array

console.log("Aqui Sacamos el ultimo " + arrayEjemplo.pop())// saca la cola del array

//Uso del shift() y unshift()
//El método shift() elimina el primer elemento del array.
//El método unshift() sirve para agregar elementos al inicio del array.
let numeros = [10, 20, 30, 40];

numeros.shift();

//console.log(numeros);

numeros.unshift(10);//puede meter muchos a la vez 

//console.log(numeros);


// .slice() sirve para generar una particion de un array

let particion  = arrayEjemplo.slice(0, 2)

console.log('Sacamos nombre ' +particion)
 
//array.splice(inicio, cantidadEliminar, elemento1, elemento2, ...)
//podemos remplazar elementos de un dato en especifico como podemos eliminar elementos dentro del array hasta agregar

//Eliminar
let frutas = ["manzana", "banana", "pera", "uva"];

frutas.splice(1, 2) 

//Ejecutado de esta forma eliminara lo que hay en el campo 1 y 2, si hubiera mas como (1,6) eliminara todo en medio 

//Agregar
frutas.splice(0, 0, "banana"); //agregamos al final el valor a agregar y estara en medio de 1 y 0

//Remplazar

frutas.splice(1, 1, "kiwi"); //remplazamos en el lugar deseado 

console.log(frutas);