"use strict";

console.log(5 / 0);

// NaN
// Es el resultado de convertir a número algo que no lo es

let operacionImposible = "cuatro" - 2;

console.log(operacionImposible);

// El tipo de NaN es number

console.log(typeof operacionImposible);

// Para saber si algo es NaN (no convertible a número) se usa la función inNaN

console.log(isNaN(operacionImposible));

console.log(isNaN("four"));

console.log(isNaN(4));

console.log(isNaN("4"));

//
//
// MÉTODOS

let entero = "4";
let decimales = "4.8356";
let palabra = "cuatro";

//Convertir a string
let num = 4;
console.log(num.toString());
console.log(`${num}`);
console.log("" + num);

// Convertir a entero

console.log(parseInt(entero));
console.log(parseInt(decimales));
console.log(parseInt(palabra));

//Convertir a float
console.log(parseFloat(entero));
console.log(parseFloat(decimales));
console.log(parseFloat(palabra));

//Convertir a número
console.log(Number(entero));
console.log(Number(decimales));
console.log(Number(palabra));

console.log(+entero);
console.log(+decimales);
console.log(+palabra);

//
//
// OBJETO MATH

//PI

console.log(Math.PI);

//Raíz cuadrada

console.log(Math.sqrt(9));

// Redondear

let alto = 4.8;
let bajo = 4.2;

console.log(Math.round(bajo));
console.log(Math.round(alto));

//Redondear hacia arriba

console.log(Math.ceil(bajo));
console.log(Math.ceil(alto));
console.log(Math.ceil(entero));

//Redondear hacia abajo
console.log(Math.floor(bajo));
console.log(Math.floor(alto));
console.log(Math.floor(entero));

// Redondear con decimales
console.log(decimales);

//Multiplicamos por 10 por cada decimal que queramos
let moverLaComa = decimales * 1000;
console.log(moverLaComa);

//Redondeamos con el sistema que queramos
let redondear = Math.round(moverLaComa);
console.log(redondear);

//Dividivimos por la cantidad por la que hemos multiplicado
let reajustarLaComa = redondear / 1000;

console.log(reajustarLaComa);

//abs
//Valor absoluto
console.log(Math.abs(entero));
console.log(Math.abs(-4));

//Máximo entre valores
console.log(Math.max(entero, alto, 3));

//Mínimo entre valores
console.log(Math.min(entero, alto, 3));

//
//
// NÚMERO ALEATORIO
console.log("");
console.log("Números aleatorios");

// Entre 0 (incluido) y 1 (no incluido)
console.log(Math.random());

// Entre 0 (incluido) y 100 (no incluido)

console.log(Math.random() * 100);

// Entre 0 (incluido) y un máximo (no incluido)

let max = 50;

console.log(Math.random() * max);

// Entero entre 0 (incluido) y un máximo (incluido)

let conDecimales = Math.random() * max;

// NO LA MEJOR IDEA (no es tan aleatorio)
console.log(Math.round(conDecimales));

// ASÍ MEJOR
// Redondeamos hacia abajo y compensamos sumando uno al máximo
console.log(Math.floor(Math.random() * (max + 1)));

// Entre 5 y 10

console.log(Math.random() * (10 - 5) + 5);

// Entre un mínimo y un máximo

let min = 10;

console.log(Math.random() * (max - min) + min);

// Entero entre un mínimo y un máximo

console.log(Math.floor(Math.random() * (max - min + 1) + min));
