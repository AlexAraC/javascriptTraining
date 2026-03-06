// String
let name = "John Doe";
console.log(name);

// Number
let age = 30;
console.log(age);

// Boolean
let isStudent = true;
console.log(isStudent);

// Null
let emptyValue = null;
console.log(emptyValue);

// Undefined
let undefinedValue;
console.log(undefinedValue);

// Symbol
let uniqueId = Symbol("id");
console.log(uniqueId);

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

/* 
Informacion adicional:

-   Null es un valor no tan comun,
    se utiliza para indicar que una variable no tiene valor, pero a diferencia de undefined, 
    null es un valor asignado por el programador, mientras que undefined es el valor predeterminado de una 
    variable que no ha sido inicializada.

-   undefined se parece a null, pero no es lo mismo, undefined es un valor que se asigna automáticamente a una 
    variable que ha sido declarada pero no inicializada, mientras que null es un valor que se asigna explícitamente
    para indicar la ausencia de valor.

-   La diferencia de uso de undefined y null es que undefined se utiliza para indicar que una variable no ha sido inicializada, 
    mientras que null se utiliza para indicar que una variable no tiene valor o que se ha asignado un valor nulo.

-   Symbol es un tipo de dato primitivo que se utiliza para crear identificadores únicos, es decir, cada vez que se crea un Symbol,
    se genera un valor único e inmutable. Su uso principal es para crear propiedades de objetos que no colisionen con otras propiedades, 
    ya que cada Symbol es único.

-   BigInt es un tipo de dato primitivo que se utiliza para representar números enteros muy grandes, que superan el límite de los números enteros normales en JavaScript.
    Se representa con una "n" al final del número, por ejemplo: 1234567890123456789012345678901234567890n.
    BigInt es útil para trabajar con números enteros que requieren una precisión mayor a la que pueden ofrecer los números enteros normales en JavaScript.

*/