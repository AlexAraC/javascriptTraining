/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
    // Este es un comentario de una sola línea
// 2. Escribe un comentario en varias líneas
    /*
    Este es un comentario de varias líneas
    console.log("Hello, World!")
    */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    let name = "John Doe";
    let age = 30;
    let isStudent = true;
    let emptyValue = null;
    let undefinedValue;
    let uniqueId = Symbol("id");
    let bigNumber = 1234567890123456789012345678901234567890n;
// 4. Imprime por consola el valor de todas las variables
    console.log(name);
    console.log(age);
    console.log(isStudent);
    console.log(emptyValue);
    console.log(undefinedValue);
    console.log(uniqueId);
    console.log(bigNumber);
// 5. Imprime por consola el tipo de todas las variables
    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof isStudent);
    console.log(typeof emptyValue);
    console.log(typeof undefinedValue);
    console.log(typeof uniqueId);
    console.log(typeof bigNumber);
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    name = "Jane Doe";
    age = 25;
    isStudent = false;
    emptyValue = null;
    undefinedValue = undefined;
    uniqueId = Symbol("newId");
    bigNumber = 9876543210987654321098765432101234567890n;
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
    name = 12345; // Cambiando de string a number
    age = "thirty"; // Cambiando de number a string
    isStudent = "yes"; // Cambiando de boolean a string
    emptyValue = "not empty"; // Cambiando de null a string
    undefinedValue = null; // Cambiando de undefined a null
    uniqueId = "uniqueIdString"; // Cambiando de Symbol a string
    bigNumber = 12345; // Cambiando de BigInt a number
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
        const nameConst = 'Alex'
        const edad = 21
        const estudiante = true
        const valorvacio = null
        const valorindefinido = undefined
        const idUnico = Symbol("idUnico")
        const numeroGrande = 1234567890123456789012345678901234567890n

// 9. A continuación, modifica los valores de las constantes
        // nameConst = 'Maria' // Esto producirá un error porque no se pueden reasignar valores a constantes
        // edad = 22 // Esto producirá un error porque no se pueden reasignar valores a constantes
        // estudiante = false // Esto producirá un error porque no se pueden reasignar valores a constantes
        // valorvacio = "no está vacío" // Esto producirá un error porque no se pueden reasignar valores a constantes
        // valorindefinido = null // Esto producirá un error porque no se pueden reasignar valores a constantes
        // idUnico = Symbol("nuevoIdUnico") // Esto producirá un error porque no se pueden reasignar valores a constantes
        // numeroGrande = 9876543210987654321098765432101234567890n // Esto producirá un error porque no se pueden reasignar valores a constantes
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse