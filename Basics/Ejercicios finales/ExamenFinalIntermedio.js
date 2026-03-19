const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
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

//console.log(cuadradoMemo(4)); // calcula
//console.log(cuadradoMemo(4)); // usa caché
//console.log(cuadradoMemo(5)); // calcula
//console.log(cuadradoMemo(5)); // usa caché
/*3- 
Historial de operaciones


Crea un sistema que permita:
*/


function menu() {
  const cache = [];

  function mostrarMenu() {
    console.log("\n=== MENÚ ===");
    console.log("1. Saludar");
    console.log("2. Sumar dos números");
    console.log("3. Historial de operaciones");
    console.log("4. Salir");

    rl.question("Elige del menu: ", (eleccion) => {

      switch (eleccion) {

        case "1":
          console.log("Saludando 👋");
          cache.push("Saludo");
          mostrarMenu();
          break;

        case "2":
          rl.question("Ingrese el primer número: ", (a) => {
            rl.question("Ingrese el segundo número: ", (b) => {
              const resultado = Number(a) + Number(b);
              console.log("Resultado:", resultado);
              cache.push("Se sumó: " + resultado);
              mostrarMenu();
            });
          });
          break;

        case "3":
          if (cache.length === 0) {
            console.log("No hay historial");
          } else {
            cache.forEach((item, i) => {
              console.log(`Historial ${i + 1}: ${item}`);
            });
          }
          mostrarMenu();
          break;

        case "4":
          console.log("Saliendo...");
          rl.close();
          break;

        default:
          console.log("Opción inválida");
          mostrarMenu();
      }
    });
  }

  mostrarMenu();
}

//menu();
/*4- Agrupador dinámico

Dado un array de objetos, agruparlos por cualquier propiedad pasada como argumento.

Ejemplo:

agrupar(personas,"edad")
agrupar(personas,"pais")
*/


const personas = [
  { nombre: "Juan", edad: 22, pais: "Costa Rica" },
  { nombre: "Ana", edad: 30, pais: "México" },
  { nombre: "Luis", edad: 25, pais: "Argentina" },
  { nombre: "Sofía", edad: 28, pais: "Colombia" },
  { nombre: "Carlos", edad: 35, pais: "México" },
  { nombre: "Elena", edad: 27, pais: "Costa Rica" },
  { nombre: "Pedro", edad: 24, pais: "Chile" },
  { nombre: "María", edad: 29, pais: "Argentina" }
];
function ordenarPorPropiedad(personas){
  let ordenador = []

  for(let i = 0; i < personas.length; i++){

    if(!ordenador.some(grupo => grupo[0].pais === personas[i].pais)){
      ordenador.push([personas[i]])
    }else{

      for(let e = 0; e < ordenador.length; e++){
        if(personas[i].pais === ordenador[e][0].pais){
          ordenador[e].push(personas[i])
          break
        }
      }
    }
  }

  return ordenador
}

console.log(ordenarPorPropiedad(personas))

/*5- Sistema de eventos

Implementa una versión simple de:

on(evento, callback)
emit(evento)
*/