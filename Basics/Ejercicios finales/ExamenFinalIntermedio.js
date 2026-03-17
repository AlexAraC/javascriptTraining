//  Ejercicios de nivel intermedio
/*1- 
Implementar debounce

Crea una función que ejecute otra solo después de que pase cierto tiempo sin llamarse.

Esto se usa mucho en interfaces.
*/
function debounce(func, delay) {
  let timer;

  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
const debounced = debounce(console.log, 1000);

//debounced("aki");

/*2- Sistema de caché

Crea una función que:

reciba otra función

guarde resultados previos

si recibe el mismo argumento, devuelva el resultado guardado

(esto es memoization).
*/

 
function memoize(func) {
  const cache = {};

  return function (arg) {
    if (cache[arg] !== undefined) {
      console.log("📦 Desde caché");
      return cache[arg];
    }

    console.log("⚙️ Calculando...");
    const resultado = func(arg);
    cache[arg] = resultado;

    return resultado;
  };
}


function cuadrado(n) {
  return n * n;
}

const cuadradoMemo = memoize(cuadrado);

console.log(cuadradoMemo(4)); // calcula
console.log(cuadradoMemo(4)); // usa caché
console.log(cuadradoMemo(5)); // calcula
console.log(cuadradoMemo(5)); // usa caché
/*3- 
Historial de operaciones

Crea un sistema que permita:
*/
/*4- Agrupador dinámico

Dado un array de objetos, agruparlos por cualquier propiedad pasada como argumento.

Ejemplo:

agrupar(personas,"edad")
agrupar(personas,"pais")
*/
/*5- Sistema de eventos

Implementa una versión simple de:

on(evento, callback)
emit(evento)
*/