"use strict";

console.log("hola");

// Comentario de línea
// continuación

/* Comentario de bloque
continuación */ console.log("comentario");

/* 
Comentario de bloque 
//comentario de línea
sigue el comentario de bloque
*/

let miVariable;

console.log(miVariable);

miVariable = "cambio";

console.log(miVariable);

const miConstante = "no puede cambiar";

console.log(miConstante);

//miConstante = "ha cambiado";

// TIPOS DE DATOS

//Number (Números)

let numero = 4;
console.log(numero);

let conDecimales = 4.5;

console.log(conDecimales);

// String (cadena de texto)

let string = "hola";

console.log(string);

let stringNum = "4";

console.log(stringNum);

let stringVacio = "";

console.log(stringVacio);

// Boolean (verdadero o falso)

let booleanoTrue = true;

console.log(booleanoTrue);

let booleanoFalse = false;

console.log(booleanoFalse);

// Ausencia de valor

let sinValorDefinido;

console.log(sinValorDefinido);

let conValorNulo = null;

console.log(conValorNulo);

////

console.log("Tipo de numero:", typeof numero);

console.log("Tipo de conDecimales:", typeof conDecimales);

console.log("Tipo de 'cuatro'-2:", typeof ("cuatro" - 2));

console.log("Tipo de string:", typeof string);

console.log("Tipo de stringNum:", typeof stringNum);

console.log("Tipo de stringVacio:", typeof stringVacio);

console.log("Tipo de booleanoTrue:", typeof booleanoTrue);
console.log("Tipo de booleanoFalse:", typeof booleanoFalse);

console.log("Tipo de sinValorDefinido:", typeof sinValorDefinido);

console.log("Tipo de conValorNulo:", typeof conValorNulo);
