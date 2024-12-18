"use strict";

// Alert
// Muestra un mensaje al usuario
//Bloquea la página hasta que le da a ok
alert("¡CUIDADO!");

// Confirm
// Muestra un mensaje pero con dos opciones: ok (true) y cancel (false)

let respuestaConfirm = confirm("¿Eres mayor de 18 años?");

console.log(respuestaConfirm);

// Prompt
// Muestra un mensaje y permite introducir una respuesta

let nombre = prompt("¿Cómo te llamas?");

console.log(nombre);

//Siempre devuelve un string
//Si queremos un número lo podemos convertir directamente en la llamada
let numA = +prompt("Introduce un número");

let numB = +prompt("Introduce un segundo número");

console.log(numA + numB);

console.log("fin del código");
