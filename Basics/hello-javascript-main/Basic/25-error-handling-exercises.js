/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
let error 
try {
    console.log(error.email)
}catch{
    console.log("   Ocurrio un error")
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(error.email)
}catch{
    console.log("   Ocurrio un error")
}finally{
    console.log("codigo que se ejecuta siempre")
}

// 3. Lanza una excepción genérica
//throw new Error("Ha ocurrido un error");
// 4. Crea una excepción personalizada
  function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

// 5. Lanza una excepción personalizada

console.log(dividir(10, 0));
// 6. Lanza varias excepciones según una lógica definida
function verificarNumero(num) {
  if (typeof num !== "number") {
    throw new TypeError("El valor debe ser un número");
  }

  if (num < 0) {
    throw new Error("El número no puede ser negativo");
  }

  if (num === 0) {
    throw new Error("El número no puede ser cero");
  }

  return "Número válido";
}

try {
  console.log(verificarNumero(-5));
} catch (error) {
  console.log(error.message);
}
// 7. Captura varias excepciones en un mismo try-catch
function ejemplo(valor) {
  if (typeof valor !== "number") {
    throw new TypeError("Debe ingresar un número");
  }

  if (valor < 0) {
    throw new RangeError("El número no puede ser negativo");
  }

  return "Valor correcto";
}

try {
  console.log(ejemplo("hola"));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error de tipo:", error.message);
  } else if (error instanceof RangeError) {
    console.log("Error de rango:", error.message);
  } else {
    console.log("Error desconocido:", error.message);
  }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["10.5", "3.14", "hola", "25", "abc", "7.8"];

for (let valor of valores) {
  try {
    let numero = parseFloat(valor);

    if (isNaN(numero)) {
      throw new Error("No se puede convertir a número");
    }

    console.log("Número convertido:", numero);
  } catch (error) {
    console.log("Error con el valor '" + valor + "':", error.message);
  }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function verificarPropiedad(objeto, propiedad) {
  if (!objeto.hasOwnProperty(propiedad)) {
    throw new Error("La propiedad '" + propiedad + "' no existe en el objeto");
  }
  return "La propiedad existe";
}

const persona = {
  nombre: "Alex",
  edad: 22
};

try {
  console.log(verificarPropiedad(persona, "nombre"));
  console.log(verificarPropiedad(persona, "direccion"));
} catch (error) {
  console.log("Error:", error.message);
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function ejecutarConReintentos(funcion, maxIntentos = 10) {
  let intentos = 0;

  while (intentos < maxIntentos) {
    try {
      return funcion(); // intenta ejecutar la función
    } catch (error) {
      intentos++;
      console.log("Intento fallido:", intentos);

      if (intentos === maxIntentos) {
        throw new Error("Se alcanzó el máximo de intentos");
      }
    }
  }
}

// función que falla aleatoriamente
function tarea() {
  if (Math.random() < 0.7) {
    throw new Error("Error aleatorio");
  }
  return "Operación exitosa";
}

try {
  let resultado = ejecutarConReintentos(tarea);
  console.log(resultado);
} catch (error) {
  console.log(error.message);
}