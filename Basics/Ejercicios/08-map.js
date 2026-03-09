//Mapas

//inicializacion
let mapa = new Map()


//mapa didactico
mapa = new Map([//no admite duplicados
    ['Tesoro', 'hay Oro'],
    ['Lugar valdio', 'No hay oro'],
    ['Lugar soltario', 'No hay oro'],
    ['Lugar numblado', 'No hay oro'],
    ['Lugar desertico', 'No hay oro'],
])
console.log(mapa)

//metodos y propiedades
//set
mapa.set("otro tesoro", 'hay diamantes')
         // clave          valor

//get
console.log(mapa.get("Tesoro"))

//has
console.log(mapa.has("Tesoro"))

//delete
mapa.delete("lugar valdio")

//clear

mapa.clear

// ver claves

mapa.keys

//valores

mapa.values
 
//size

mapa.size // numero de claves 