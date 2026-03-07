/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
        let nombre = 'Alex Araya Chavarria'
        if (nombre == 'Alex Araya Chavarria'){
            console.log("Hola Alex")
        }
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
        let usuario = aleC23
        let contraseña = 83432
        if (usuario == aleC23 && contraseña == 83432){
            console.log("Usuario y contraseña correctos")
        }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
        let numero = 1
        if(numero > 0){
            console.log("Numero es mayor a 0")
        }else if(numero === 0){
            console.log("Numero es igual a 0")
        }else{
            console.log("Numero es menor a 0")
        }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
        let edadPersona = 18
        if ( persona >= 18){
            console.log("Persona puede votar")
        }else{
            console.log("Persona no puede votar")
        }
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
    let ternario = 18 ? "Adulto" : "menor"
    console.log(ternario)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
        let invierno = ["Diciembre", "Enero", "Febrero"]
        let primavera =  ["Marzo", "Abril", "Mayo"]
        let verano = ["Junio", "Julio", "Agosto"]
        let otoño = ["Septiembre", "Octubre", "Noviembre"] 
        mesActual = "Marzo"
        if (invierno.includes(mesActual)){
            console.log("estamos en invierno")
        }else if(primavera.includes(mesActual)){
            console.log("estamos en primavera")
        }else if(verano.includes(mesActual)){
            console.log("estamos en verano")
        }else{
            console.log("estamos en otoño")
        }
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
        let saludo = 2
        switch (saludo) {

  case 1:
    console.log("gutentag")
    break;

  case 2:
    console.log("hola")
    break;

  case 3:
    console.log("hello")
    break;

  default:
    console.log("saprisa")
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7 