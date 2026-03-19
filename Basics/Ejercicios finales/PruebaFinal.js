// Ejercicios de nivel dificil

//Nota cuando puedas resolver 3 solo, estaras listo

/*1- 
Motor de consultas simple

Dado un array de objetos:

usuarios = [
 {nombre:"Ana",edad:20,pais:"CR"},
 {nombre:"Luis",edad:25,pais:"MX"}
]

Implementa una función que permita consultas tipo:

buscar({edad:20})
buscar({pais:"MX"})
buscar({edad:20,pais:"CR"})

*/

const usuarios = [
  { nombre: "Ana", edad: 20, pais: "CR" },
  { nombre: "Luis", edad: 25, pais: "MX" },
  { nombre: "Carlos", edad: 30, pais: "AR" },
  { nombre: "Sofía", edad: 22, pais: "CO" },
  { nombre: "Pedro", edad: 25, pais: "CL" },
  { nombre: "María", edad: 20, pais: "CR" },
  { nombre: "Elena", edad: 28, pais: "MX" },
  { nombre: "Jorge", edad: 35, pais: "AR" },
  { nombre: "Lucía", edad: 22, pais: "CO" },
  { nombre: "Diego", edad: 30, pais: "CL" },
  { nombre: "Valeria", edad: 25, pais: "CR" },
  { nombre: "Andrés", edad: 20, pais: "MX" },
  { nombre: "Camila", edad: 28, pais: "AR" },
  { nombre: "Ricardo", edad: 35, pais: "CO" },
  { nombre: "Paula", edad: 22, pais: "CL" }
];
const readline = require("readline");//Necesario para inputs

const rl = readline.createInterface({//es la forma de declarar la variable es un standar
  input: process.stdin,
  output: process.stdout
});

function flitrarPor(usuarios){

  function menu(){
    console.log("\nMenu")
    console.log("1. Para filtrar por una condicion")
    console.log("2. Para filtrar 2 condiciones")
    console.log("3. Para encontrar un usuario por sus datos completos")
    console.log("4. Para salir")
    arrayRespuesta = []

    rl.question("Elige una opción: ", (eleccion) => {

      switch(eleccion){
        case "1":
          rl.question("Ingresa 1 si es el nombre, 2 si es la edad o 3 si es la nacionalidad:", (var1) => {
            if(var1 == 1){
                rl.question("Digite el nombre a buscar: ", (varNombre) => {
                    for(let i = 0; i < usuarios.lenght; i++){
                        if(usuarios[i].nombre == varNombre){
                            arrayRespuesta.push(usuarios[i])
                        }
                    }
                })
            }
           
           
          })
          menu();
          break;

        case "2":
          console.log("Elegiste filtrar por 2 condiciones");
          menu();
          break;

        case "3":
          console.log("Elegiste buscar usuario completo");
          menu();
          break;

        case "4":
          console.log("Saliendo...");
          rl.close();
          break;

        default:
          console.log("Opción inválida");
          menu();
      }

    });
  }

  menu();
}





/*2- 
Planificador de tareas

Crear un sistema que:

registre tareas

cada tarea tenga prioridad

ejecute primero las de mayor prioridad

 */

/*3- Sistema de reintentos inteligente

Crea una función que:

reciba una función async

si falla la reintente

aumente el tiempo entre intentos

(Estrategia exponential backoff).

 */