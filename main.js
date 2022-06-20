const arrayPizzas=[
    {
      id:1,
      nombre:"Napolitana",
      ingredientes:["muzarella","tomates","oregano"],
      precio:900,
    },
    {
      id:2,
      nombre:"Barbacoa",
      ingredientes:["cebolla","bacon","parmesano"],
      precio:1000,
    },
    {
      id:3,
      nombre:"Muzzarella",
      ingredientes:["muzarella","oregano","huevo"],
      precio:500,
    },
    {
      id:4,
      nombre:"Rúcula",
      ingredientes:["rúcula","queso","tomate"],
      precio:750,
    },
    {
      id:5,
      nombre:"Albahaca",
      ingredientes:["albahaca","queso","aceitunas"],
      precio:550,
    },{
      id:6,
      nombre:"Fugazzeta",
      ingredientes:["muzarella","cebolla","oregano"],
      precio:800,
    }
    ];

//EJERCICIO A
    arrayPizzas.forEach(elemento => {
        if ((elemento.id % 2) !== 0){
            console.log(`La pizza de ${elemento.nombre} con id: ${elemento.id} es impar`)
        }
    })

//EJERCICIO B

for (i = 0; i < arrayPizzas.length; i++) {
    if (arrayPizzas[i].precio < 600) {
      console.log(`El precio de la pizza de ${arrayPizzas[i].nombre} es menor a $600. Su valor es de $${arrayPizzas[i].precio}`)
    }
  }

//EJERCICIO C

arrayPizzas.forEach((elemento, nombre) => console.log(`Pizza de ${elemento.nombre}`))

//EJERCICIO D

arrayPizzas.forEach((elemento, precio) => console.log(`Precio de pizza: $${elemento.precio}`))

//EJERCICIO E

arrayPizzas.forEach((elemento, precio) => console.log(`La pizza de ${elemento.nombre} vale $${elemento.precio}`))