"use strict";

let miString = '¡Hola "mundo"!';
miString = "¡Hola 'mundo'!";

console.log(miString);

console.log(miString[0]);

//
//

// PROPIEDAD LENGTH

console.log(miString.length);

console.log(" ".length);

console.log("".length);

//
//
//TEMPLATE STRINGS

let miTemplateString = `Esto es una template string ${miString} ${2 + 2}

Segunda línea`;

console.log(miTemplateString);

let nombre = "Zoe";

let apellido = "Porta";

let saludo = `Hola ${nombre}`;
console.log(`${nombre} ${apellido}`);

console.log(saludo);

//
//
// CONCATENIACIÓN
console.log(miString + 4);

console.log("hola " + nombre);

console.log(nombre + " " + apellido);

console.log("Hola ".concat(nombre, " ", apellido));

// Secuencias de escape
console.log("\t tabulación");
console.log("\n salto \n de linea");
console.log(" retro\bceso");
console.log('" comilla doble');
console.log("\\ barra invertida");

//
//
//
//MÉTODOS DE STRINGS

//Slice
//Devuelve un trodo del string

let trozo = miString.slice(6, 13);

console.log(trozo);

let hastaElFinal = miString.slice(6);
console.log(hastaElFinal);

let desdeElFinal = miString.slice(-8, -1);

console.log(desdeElFinal);

//Split
//Devuelve un array en el que cada elemento es un trozo del string separando por el separador (eliminándolo)

let array = miString.split();
console.log(array);

console.log(miString.split(" "));

//Si usamos como separador un string vacio ("") separa cada caracter

console.log(miString.split(""));

//indexOf
//Devuelve la primera posición de un caracter/conjunto de caracteres

let primeraO = miString.indexOf("o");
console.log(primeraO);

//Podemos pasar un segundo valor para definir el punto de partida

/* let segundaO = miString.indexOf("o", 3); */

//escalable
let segundaO = miString.indexOf("o", primeraO + 1);

console.log(segundaO);

let posicionMu = miString.indexOf("mu");

console.log(posicionMu);

//Si no existe devuelve -1

console.log(miString.indexOf("e"));

//lastIndexOf
//Igual pero desde el final

let ultimaO = miString.lastIndexOf("o");
console.log(ultimaO);

let penultimaO = miString.lastIndexOf("o", ultimaO - 1);
console.log(penultimaO);

console.log(miString.lastIndexOf("mu"));

console.log(miString.lastIndexOf("e"));

//
//includes
//Devuelve true si el string incluye el valor y false si no

console.log(miString.includes("mundo"));
console.log(miString.includes("casa"));

//
//replace
// Reemplaza la primera coincidencia del caracter/caracteres por lo indicado

console.log(miString.replace("o", "a"));

console.log(miString.replace("Hola", "Aloha"));

console.log(miString.replace(" 'mundo'", ""));

//
//replaceAll
//Reemplaza todas las coincidencias

console.log(miString.replaceAll("o", "a"));

console.log(miString.replaceAll("'", ""));

//toLowerCase/toUpperCase
//Cambia a minúsculas/mayúsculas

console.log(miString.toLowerCase());

console.log(miString.toUpperCase());

//
//repeat
//Repite el número de veces indicado

console.log(miString.repeat(3));
