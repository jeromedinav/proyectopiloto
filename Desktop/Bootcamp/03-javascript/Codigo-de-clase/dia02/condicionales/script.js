"use strict";

// CONDICIONALES

// IF (si)

/* if(condicion){
//código que se ejecuta solo si la condición se cumple
} */

let edad = 19;

if (edad >= 18) {
  console.log("es mayor de edad");
}

// IF...ELSE  (si... si no)

/* 
if(condicion){
//código que se ejecuta solo si la condición se cumple
} else {
 //código que se ejecuta solo si la condición no se cumple
}
*/

if (edad >= 18) {
  console.log("es mayor de edad");
} else {
  console.log("es menor de edad");
}

//IF ... ELSE IF ... ELSE (opcional)
/* 
if(condicion 1){
//código que se ejecuta solo si la condición 1 se cumple
} else if (condición 2){
//codigo que se ejecuta solo si NO se cumple la condición 1 pero SI la condicion 2
} else if (condición 3){
//código que se ejecuta solo si las condiciones 1 y 2 NO cumplen pero SI la condición 3 
}
...
else {
// código que se ejecuta si no se cumple ninguna condición
}
*/
let permiso = true;

if (edad >= 18) {
  console.log("es mayor de edad");
} else if (permiso) {
  console.log("tiene permiso");
} else {
  console.log("es menor de edad y no tiene permiso");
}

if (!(edad >= 18 || (edad >= 16 && permiso))) {
  console.log("No puede entrar");
} else {
  console.log("puede entrar");
}

/* let nombre = prompt("Introduce tu nombre");

if (nombre) {
  console.log(`Hola ${nombre}`);
} else {
  console.log("No hay usuario");
}
 */
// RATÓN
//Puede hacer diagonales
if ("botón arriba") {
  //sube
}

if ("boton derecha") {
  //se mueve a la derecha
}

//GATO
//Solo se mueve en una dirección de cada vez
if ("si el ratón está arriba") {
  //sube
} else if ("si el ratón está a la derecha") {
  //se mueve a la derecha
}

/////////////

// SWITCH
/* 
switch(variable){
  case "valor 1":
    //código que se ejecuta si variable === "valor 1";
    break;
  case "valor 2":
    //código que se ejecuta si variable === "valor 2";
    break;

  case "valor 3":
  case "valor 4":
    //código que se ejecuta si variable === "valor 3" o ==="valor 4";
    break;

  default:
    //código que se ejecuta si no se cumple ningun caso (incluido el 5);
    break;

  case "valor 5":
    // código que se ejecuta si variable === "valor 5";
    break;
}
*/

let animal = "gato";

switch (animal) {
  case "gato":
    console.log("miau");
    break;
  case "perro":
    console.log("guau");
    break;
  default:
    console.log("Animal no reconocido");
    break;
  case "pájaro":
    console.log("pio");
    break;
}

switch (animal) {
  case "gato":
  case "perro":
    console.log("tiene 4 patas");
    break;
  default:
    console.log("Animal no reconocido");
}

switch (animal) {
  case "gato":
    console.log("mi animal favorito");
  case "perro":
    console.log("tiene 4 patas");
    break;
  default:
    console.log("Animal no reconocido");
}

const foo = 3;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}

// Conversor de medida a metros

//Unidad original
let unidad = "mm";

//Cantidad original
let cantidad = 10;

// Guardo en la variable metros la cantidad original para trabajar sobre ella acumulando resultados
let metros = cantidad;

//Según la unidad original divido entre 10 1, 2 o 3 veces
switch (unidad) {
  case "mm":
    metros /= 10;
  case "cm":
    metros /= 10;
  case "dm":
    metros /= 10;
    break;

  case "Dm":
    metros *= 10;
}

// Al terminar el switch ya está en metros
console.log(metros);

////////////////

// OPERADOR TERNARIO
/* condicion ? "resultado si true" : "resultado si false" */

edad = 17;

console.log(`El usuario es ${edad >= 18 ? "mayor" : "menor"} de edad`);

// Me ahorra esto:
let mayorOmenor;

if (edad >= 18) {
  mayorOmenor = "mayor";
} else {
  mayorOmenor = "menor";
}

console.log(`El usuario es ${mayorOmenor} de edad`);
