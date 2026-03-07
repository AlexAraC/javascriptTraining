let age = 21

if (age >= 18){
    console.log("La persona puede votar")
}else{
    console.log("La persona no puede votar")
}
if (age != 23){
    console.log("La persona no tiene 23 ")
}

if (age == 20){
    console.log("La persona tiene 20 ")
}else if (age == 21){
    console.log("La persona tiene 21 ")
}


// operador ternario

let age1 = 37 ? "la edad es 37":"La edad no es 37"
console.log(age1)

//swicht

let day = 0
let dayname

switch (day){
    case 0:
        dayname = "Lunes"
        break
    case 1:
        dayname = " Martes"
        break
    case 2:
        dayname = "Miercoles"
        break
    case 3:
        dayname = "Jueves"
        break
    case 4:
        dayname = "Viernes"
        break
    case 5:
        dayname = "Sabado"
        break
    case 6:
        dayname = "Domingo"
        break
    default:
        dayname = "Error 43"
    
}
console.log(dayname)