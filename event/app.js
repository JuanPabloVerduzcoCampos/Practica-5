let obj = { // Creamos un objeto con 2 funciones que nos retornan un texto 
    nombre: 'Juan',
    edad: 19,
    apellido: 'Verduzco',

    keypress: function () {
        return 'se ha presionado una tecla';
    },

    mouseOver: function () {
        return 'El puntero del mouse esta arriba'
    }
}

console.log(obj.nombre);// Esta es la forma tradicional de mandar llamar una key
console.log(obj['nombre']);// De esta forma se puede ejecutar la key, pero debes ser muy preciso con el nombre

let myKey = 'nombre';
console.log(obj[myKey]);// Ejecuta lo que contiene la variable myKey, pero el que tiene su nombre en el objeto

myKey = 'keypress';
console.log(obj[myKey]()); //Se invoca la funcion por el nombre de la llave que lo contiene.

myKey = 'mouseOver';//Debes tener cuidado con el nombre de las keys, si no coinciden no ejecutara nada.
console.log(obj[myKey]());


let myArray = []; //Declaramos el array
myArray.push(4); //Introducimos un numero al array
myArray.push('una cadena'); //Introducimos un string al array
myArray.push(obj);//Introducimos un objeto al array
myArray.push(function () { //Introducimos una funcion al aire en el array
    return "hola desde el array";
});
console.log(myArray);

let funcArray = [];

funcArray.push(() => {//Creamos un array de funciones y lo llenamos con funciones anonimas
    console.log("Function 1");
});
funcArray.push(() => {
    console.log("Function 2");
});
funcArray.push(() => {
    console.log("Function 3");
});

funcArray.forEach((item) =>{// Lo iteramos para meteer todos los textos y procedemos a imprimirlo.
    item();
});