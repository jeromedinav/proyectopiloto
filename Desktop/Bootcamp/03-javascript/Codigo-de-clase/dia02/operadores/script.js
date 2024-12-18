"use strict";

// OPERADORES

//Aritméticos

console.log("Suma (+)", 2 + 2);

console.log("OJO con la concatenación:", "2" + 2);
console.log("OJO con la concatenación:", 2 + "2");

console.log("OJO con la concatenación:", 2 + 2 + "2");

console.log("Resta (-)", 2 - 2);

console.log("Multiplicacion (*)", 2 * 2);

console.log("División (/)", 2 / 2);

console.log("Potencia (**)", 2 ** 2);

console.log("Módulo (%) (resto de la división)", 5 % 2);

//
// De asignación

// simple
let miVariable = 4;

// reasignacion

miVariable += 2; // miVariable = miVariable + 2

let test = "hola";
test += " mundo";
console.log(test);

console.log(miVariable);

miVariable -= 3; // miVariable = miVariable - 3

console.log(miVariable);

//....

// Operadores unarios

// Incrementar

console.log(miVariable++);

console.log(miVariable);

console.log(++miVariable); // miVariable += 1 // miVariable = miVariable +1

//Decrementar

console.log(miVariable--);

console.log(miVariable);

console.log(--miVariable); //miVariable-=1 // miVariable =  miVariable - 1

miVariable + 1;

//
//
// RELACIONALES

let numA = 4;
let numB = 8;

// Igualdad
console.log(`${numA} == 4?`, numA == 4);
console.log(`${numA} == ${numB}?`, numA == numB);
console.log(`${test} == 'hola mundo'?`, test == "hola mundo");
console.log(`${numA} == '4'?`, numA == "4");

// Igualdad estricta

console.log(`${numA} === 4?`, numA === 4);
console.log(`${numA} === ${numB}?`, numA === numB);
console.log(`${test} === 'hola mundo'?`, test === "hola mundo");
console.log(`${numA} === '4'?`, numA === "4");

// Desigualdad
console.log(`${numA} != 4?`, numA != 4);
console.log(`${numA} != ${numB}?`, numA != numB);
console.log(`${test} != 'hola mundo'?`, test != "hola mundo");
console.log(`${numA} != '4'?`, numA != "4");

//Desigualdad estricta
console.log(`${numA} !== '4'?`, numA !== "4");

// Mayor estricto

console.log(`${numA} > ${numB}`, numA > numB);

console.log(`${numA} > '2'`, numA > "2");

console.log(`${numA} > 4`, numA > 4);

// Mayor o igual

console.log(`${numA} >= ${numB}`, numA >= numB);

console.log(`${numA} >= '2'`, numA >= 2);

console.log(`${numA} >= 4`, numA >= 4);

console.log(`${numA} >= 4.00001`, numA >= 4.00001);

// Menor estricto

console.log(`${numA} < ${numB}`, numA < numB);

console.log(`${numA} < '2'`, numA < 2);

console.log(`${numA} < 4`, numA < 4);

// Menor o igual

console.log(`${numA} <= ${numB}`, numA <= numB);

console.log(`${numA} <= '2'`, numA <= 2);

console.log(`${numA} <= 4`, numA <= 4);

//
//
// Lógicos

// Y (&&)
// True si los dos operandos son true

console.log("true y true:", true && true);
console.log("true y false:", true && false);

console.log("false y true:", false && true);

console.log("false y false", false && false);

console.log("¿numA es mayor que 2 Y menor que 8?", numA > 2 && numA < 8);

console.log(
  "¿numA es mayor que 2 Y el numB es menor que 8?",
  numA > 2 && numB < 8
);

// O (||)
// Devuelve true si alguno de los operandos es true

console.log("true o true", true || true);

console.log("true o false", true || false);

console.log("false o false", false || false);

console.log(
  "¿numA es mayor que 2 O el numB es menor que 8?",
  numA > 2 || numB < 8
);

//////////

console.log(
  "numA > 5, y el numB es menor que 4 o mayor que 7",
  numA > 5 && (numB < 4 || numB > 7)
);

console.log(
  "numA > 5 y el numB es menor que 4, o el numB es mayor que 7",
  (numA > 5 && numB < 4) || numB > 7
);

let edad = 15;
let permiso = true;

console.log(
  "Pueden entrar mayores de edad y mayores de 16 si tienen permiso.",
  edad >= 18 || (edad >= 16 && permiso)
);

// NO (!)
// Devuelve lo contrario

console.log("no true", !true);
console.log("no false", !false);
/* console.log(`No es igual ${numA} que 4? (es distinto?)`, !(numA == 4));
 */

let nombre;

console.log("El usuario es inexistente?", !nombre);

nombre = "Zoe";

console.log("El usuario es inexistente?", !nombre);

console.log(
  "Tiene prohibida la entrada?",
  !(edad >= 18 || (edad >= 16 && permiso))
);
