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

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function filtrarPor(usuarios){

  function menu(){
    console.log("\nMenu");
    console.log("1. Filtrar por una condicion");
    console.log("2. Filtrar por 2 condiciones");
    console.log("3. Buscar usuario completo");
    console.log("4. Salir");

    let arrayRespuesta = [];

    rl.question("Elige una opción: ", (eleccion) => {

      switch(eleccion){

        case "1":
          rl.question("1=Nombre, 2=Edad, 3=Pais: ", (tipo) => {

            if(tipo === "1"){
              rl.question("Nombre: ", (nombre) => {
                arrayRespuesta = usuarios.filter(u => 
                  u.nombre.toLowerCase() === nombre.toLowerCase()
                );
                console.log(arrayRespuesta.length ? arrayRespuesta : "Sin resultados");
                menu();
              });
            }

            if(tipo === "2"){
              rl.question("Edad minima: ", (min) => {
                rl.question("Edad maxima: ", (max) => {
                  const minN = Number(min);
                  const maxN = Number(max);

                  arrayRespuesta = usuarios.filter(u => 
                    u.edad >= minN && u.edad <= maxN
                  );

                  console.log(arrayRespuesta.length ? arrayRespuesta : "Sin resultados");
                  menu();
                });
              });
            }

            if(tipo === "3"){
              rl.question("Pais (CR, MX, AR, CO, CL): ", (pais) => {

                if(!["CR","MX","AR","CO","CL"].includes(pais)){
                  console.log("Pais invalido");
                  return menu();
                }

                arrayRespuesta = usuarios.filter(u => u.pais === pais);
                console.log(arrayRespuesta.length ? arrayRespuesta : "Sin resultados");
                menu();
              });
            }

          });
          break;

        case "2":
          rl.question("Primera condicion (nombre/edad/pais): ", (c1) => {
            rl.question("Valor de la primera condicion: ", (v1) => {

              rl.question("Segunda condicion (nombre/edad/pais): ", (c2) => {
                rl.question("Valor de la segunda condicion: ", (v2) => {

                  arrayRespuesta = usuarios.filter(u => {

                    let cond1 = false;
                    let cond2 = false;


                    if(c1 === "nombre"){
                      cond1 = u.nombre.toLowerCase() === v1.toLowerCase();
                    }
                    if(c1 === "edad"){
                      cond1 = u.edad === Number(v1);
                    }
                    if(c1 === "pais"){
                      cond1 = u.pais === v1;
                    }


                    if(c2 === "nombre"){
                      cond2 = u.nombre.toLowerCase() === v2.toLowerCase();
                    }
                    if(c2 === "edad"){
                      cond2 = u.edad === Number(v2);
                    }
                    if(c2 === "pais"){
                      cond2 = u.pais === v2;
                    }

                    return cond1 && cond2;
                  });

                  console.log(arrayRespuesta.length ? arrayRespuesta : "Sin resultados");
                  menu();

                });
              });

            });
          });
          break;


        case "3":
          rl.question("Nombre: ", (nombre) => {
            rl.question("Edad: ", (edad) => {
              rl.question("Pais: ", (pais) => {

                const edadNum = Number(edad);

                arrayRespuesta = usuarios.filter(u =>
                  u.nombre.toLowerCase() === nombre.toLowerCase() &&
                  u.edad === edadNum &&
                  u.pais === pais
                );

                console.log(arrayRespuesta.length ? arrayRespuesta : "No encontrado");
                menu();
              });
            });
          });
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

//filtrarPor(usuarios);


/*2- 
Planificador de tareas

Crear un sistema que:

registre tareas

cada tarea tenga prioridad

ejecute primero las de mayor prioridad

 */

class Planificador {
  constructor() {
    this.tareas = [];
  }

  // Registrar tarea
  agregarTarea(nombre, prioridad) {
    this.tareas.push({ nombre, prioridad });
  }

  // Ordenar por prioridad (mayor primero)
  ordenarTareas() {
    this.tareas.sort((a, b) => b.prioridad - a.prioridad);
  }

  // Ejecutar siguiente tarea
  ejecutarTarea() {
    if (this.tareas.length === 0) {
      console.log("No hay tareas");
      return;
    }

    this.ordenarTareas();
    const tarea = this.tareas.shift(); // saca la de mayor prioridad
    console.log(`Ejecutando: ${tarea.nombre} (Prioridad: ${tarea.prioridad})`);
  }

  // Ver tareas
  verTareas() {
    console.log(this.tareas);
  }
}
const plan = new Planificador();

//plan.agregarTarea("Hacer tarea", 2);
//plan.agregarTarea("Dormir", 1);
//plan.agregarTarea("Proyecto final", 5);
//plan.agregarTarea("Comer", 3);

//plan.verTareas();

// Ejecuta en orden de prioridad
//plan.ejecutarTarea(); // Proyecto final
//plan.ejecutarTarea(); // Comer
//plan.ejecutarTarea(); // Hacer tarea
//plan.ejecutarTarea(); // Dormir
/*3- Sistema de reintentos inteligente

Crea una función que:

reciba una función async

si falla la reintente

aumente el tiempo entre intentos

(Estrategia exponential backoff).

 */
async function reintentar(fn, maxIntentos = 5, delayInicial = 1000) {
  let intento = 0;
  let delay = delayInicial;

  while (intento < maxIntentos) {
    try {
      return await fn(); // intenta ejecutar la función
    } catch (error) {
      intento++;

      if (intento === maxIntentos) {
        throw new Error("❌ Falló después de varios intentos");
      }

      console.log(`⚠️ Intento ${intento} falló. Reintentando en ${delay}ms...`);

      await new Promise(resolve => setTimeout(resolve, delay));

      delay *= 2; // 🔥 exponential backoff
    }
  }
}
async function funcionInestable() {
  if (Math.random() < 0.7) {
    throw new Error("Error aleatorio");
  }
  return "✅ Éxito";
}

reintentar(funcionInestable)
  .then(res => console.log(res))
  .catch(err => console.error(err.message));