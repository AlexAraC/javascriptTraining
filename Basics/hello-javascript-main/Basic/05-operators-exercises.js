/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3;
let resta = 5 - 3;
let multiplicacion = 5 * 3;
let division = 5 / 3;
let modulo = 5 % 3;
let exponenciacion = 5 ** 3;

// 2. Crea una variable para cada tipo de operación de asignación,
let asignacionSuma = 5++
let asignacionResta = 5--
let asignacionMultiplicacion = 5
asignacionMultiplicacion *= 3
let asignacionDivision = 5
asignacionDivision /= 3
let asignacionModulo = 5
asignacionModulo %= 3
let asignacionExponenciacion = 5
asignacionExponenciacion **= 3
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma += 2; // suma ahora es 10
resta -= 2; // resta ahora es 0
multiplicacion *= 2; // multiplicacion ahora es 30
division /= 2; // division ahora es 2.5
modulo %= 2; // modulo ahora es 1
exponenciacion **= 2; // exponenciacion ahora es 15625
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
suma > resta // true
multiplicacion >= division // true
modulo == 1 // true
exponenciacion === 15625 // true
resta != 5 // true
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
resta > suma // false
division <= multiplicacion // false
modulo == 0 // false
exponenciacion === 10000 // false
suma != 8 // false
// 5. Utiliza el operador lógico and
suma > 5 && multiplicacion > 20 // true
// 6. Utiliza el operador lógico or
suma > 5 || multiplicacion > 20 // true
// 7. Combina ambos operadores lógicos
suma > 5 && multiplicacion > 20 || division < 10 // true    
// 8. Añade alguna negación
!(suma > 5) // false
// 9. Utiliza el operador ternario
let resultado = suma > 5 ? "suma es mayor que 5" : "suma no es mayor que 5";
// 10. Combina operadores aritméticos, de comparáción y lógicas
let resultadoComplejo = (suma + multiplicacion) > (division * exponenciacion) && modulo == 1 ? "El resultado es verdadero" : "El resultado es falso";
let resultadoComplejo2 = (suma ** 2) == (multiplicacion + division) || !(suma < 10) ? "El resultado es verdadero" : "El resultado es falso";

//Ejercicios extra
/*
Ejercicio 1 — Descuento en una compra

Una tienda aplica descuento si se cumplen ciertas condiciones.
*/
let precio = 120;
let cantidad = 3;
let clientePremium = true;

/*
Reglas:

Calcula el total: precio * cantidad

Hay descuento si:

el total es mayor a 300, O

el cliente es premium y compra más de 2 productos

✔ Crea una variable que indique si se aplica descuento.
*/

let resultadoFinal = (precio * cantidad) > 300 && clientePremium && cantidad > 2 ? "Aplica descuento" : "No aplica descuento";


//Ejercicio 2 — Acceso a un examen
let edad = 18;
let promedio = 78;
let tienePermiso = false;
/*
Un estudiante puede hacer el examen si:

tiene promedio mayor o igual a 80, O

tiene 18 años o más Y permiso especial

✔ Calcula una variable que indique si puede hacer el examen.
*/

let resultadoExamen = promedio >= 80 && tienePermiso == true && edad >= 18 ? "Puede hacer el examen" : "No puede hacer el examen";

//Ejercicio 3 — Aprobación de un crédito
let salario = 900;
let deudas = 200;
let historialBueno = true;
/*
Reglas:

El crédito se aprueba si:

(salario - deudas) es mayor que 500

Y el historial es bueno

✔ Crea una variable que diga si el crédito se aprueba.
*/
 let aprovacion_de_credito = (salario - deudas) > 500 && historialBueno ? "El crédito se aprueba" : "El crédito no se aprueba";
 
 //Ejercicio 4 — Sistema de puntos en un juego
let enemigosDerrotados = 12;
let nivel = 4;
let tiempo = 50;
/*📌 Reglas:

Un jugador gana bonificación si:

(enemigosDerrotados * nivel) es mayor que 40

Y

el tiempo es menor que 60

✔ Determina si el jugador gana bonificación.
*/

let resultadoJuego = enemigosDerrotados * nivel > 40 && tiempo < 60 ? "Gana bonificación" : "No gana bonificación";