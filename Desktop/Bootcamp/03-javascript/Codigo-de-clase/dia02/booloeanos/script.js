"use strict";

// BOOLEANOS
// Verdadero (true) o falso (false)

let miTrue = true;

let miFalse = false;

// ¿Qué es falsy?

// El 0

console.log("0, -0:", Boolean(0));

// String vacío

console.log("String vacio:", Boolean(""));

// Undefined

console.log("La nada:", Boolean());

let variableVacia;
//console.log(variableVacia);

console.log("Variable vacia:", Boolean(variableVacia));

// Null

console.log("Null:", Boolean(null));

//NaN

console.log("'hola' - 2 (NaN):", Boolean("hola" - 2));

// ¿Qué es truthy?

// Números distinos de 0

console.log("5:", Boolean(5));
console.log("-5:", Boolean(5));

// Strings

console.log("Strings:", Boolean("Hola"));

// Arrays vacios o no

console.log("[]:", Boolean([]));

//Objetos vacios o no
console.log("{}:", Boolean({}));
