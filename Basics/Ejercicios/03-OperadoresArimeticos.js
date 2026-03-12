/* Para la computadora realizar las operaciones que deseamos utilizaremos los operadores aritmeticos,
Realmente todos los lenguajes de programacion tienen los mismos operadores, 
aunque algunos pueden tener algunos adicionales, sin embargo suelen haber 
ligeras diferencias en su sintaxis, pero en general los operadores son los mismos,
en JavaScript tenemos los siguientes operadores aritmeticos:
*/
//Operadores
//Operadores aritméticos
console.log(5 + 3); // Suma
console.log(5 - 3); // Resta
console.log(5 * 3); // Multiplicación
console.log(5 / 3); // División

console.log(5 % 3); // Módulo
console.log(5 ** 3); // Exponenciación

let x = 5;
x = 3; 
x--; // Decremento
x++; // Incremento

//Operadores de asignación
// basicamente es una forma abreviada de escribir una operación aritmética y asignar el resultado a la misma variable
//solo es el signo de la operación seguido de un signo de igual
let a = 5;
a += 3; // a = a + 3
a -= 3; // a = a - 3
a *= 3; // a = a * 3
a /= 3; // a = a / 3
a %= 3; // a = a % 3
a **= 3; // a = a ** 3

//la boquita apunta a el operador que se comparara, si la comparacion es verdadera, el resultado sera true, si es falsa, el resultado sera false
//Operadores de comparación
console.log(5 > 3); // Mayor que 
console.log(5 < 3); // Menor que
console.log(5 >= 3); // Mayor o igual que
console.log(5 <= 3); // Menor o igual que
console.log(5 == 3); // Igualdad
console.log(5 != 3); // Desigualdad
console.log(5 === 3); // Igualdad estricta
console.log(5 !== 3); // Desigualdad estricta
 
//Operadores lógicos
//and (&&)
console.log(5 > 10 && 15 > 10); // false
//or (||)
console.log(5 > 10 || 15 > 10); // true
//not (!)
console.log(!(5 > 10)); // true 

//ternario
let age = 20;
let canVote = age >= 18 ? "Puede votar" : "No puede votar";
console.log(canVote);


