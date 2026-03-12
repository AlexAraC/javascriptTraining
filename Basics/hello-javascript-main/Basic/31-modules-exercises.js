// 1. Exportar una función
export function saludar(nombre) {
  return `Hola ${nombre}`;
}

// 2. Exportar una constante
export const PI = 3.1416;

// 3. Exportar una clase
export class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}
// 4. Importa una función

// 5. Importa una constante

// 6. Importa una clase
//4,5 6
import { saludar, PI, Persona } from "./modulo.js";

console.log(saludar("Alex"));
console.log(PI);

const persona1 = new Persona("Carlos");
persona1.hablar();

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
function sumar(a, b) {
  return a + b;
}

const nombre = "Módulo por defecto";

class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

export default { sumar, nombre, Animal };
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import modulo from "./defaultModule.js";

console.log(modulo.sumar(5, 3));
console.log(modulo.nombre);

const perro = new modulo.Animal("Perro");
console.log(perro.tipo);
// 9. Exporta una función, una constante y una clase desde una carpeta
export function multiplicar(a, b) {
  return a * b;
}

export const mensaje = "Hola desde utils";

export class Calculadora {}
// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { multiplicar, mensaje, Calculadora } from "./utils/index.js";

console.log(multiplicar(4, 5));
console.log(mensaje);

const calc = new Calculadora();