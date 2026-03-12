// Loops
//for

for (let i = 0; i < 5; i = i+1){//para no confundir lo hago asi pero la forma achicada es i++
    console.log(`hola numero ${i}`)
}

const numeros = [1, 2, 3, 4 ,5]

for (let i = 0; i != numeros.length; i++){ // Consejo:  si no se corre es porque lo estas tratando como un if 
    console.log("Imprimiendo el numero " + numeros[i])
}
// ciclo while
let variableDeCondicion = 0 
while (variableDeCondicion != 5){
    variableDeCondicion++
    console.log(variableDeCondicion)
}

//do while
let indice = 1
do{ //se ejecutara minimo una vez(Minimo)
}while( indice == 0)


//for of
console.log("___________________")
for (let valor of numeros){
    console.log(valor)
}

// Metodos
for (let i = 0; i < 10; i++){
    if (i == 5){
        continue//evita que se muestre algo
    }

    console.log(`Aplicando ${i}`)
}
