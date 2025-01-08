"use strict"; //Activo el modo "estricto" para evitar errores que pasen desapercibidos. //

let ciudad;
ciudad = "Madrid";
console.log(ciudad);

let nombre = "Pedro";
console.log(nombre);

nombre = "Madrid";
console.log(ciudad);

const país = "España";
console.log(país);

let libro = {
  titulo: "Aquí va el tíutlo del libro",
  autor: "El nombre del autor",
  año: 2000,
};
console.log("El título del libro es: " + libro.titulo);
console.log("El autor del libro es: " + libro.autor);

let frutas = ["pera", "uva", "naranja"];
console.log("La primera fruta es: " + frutas[0]);
console.log("La cantidad de frutas es: " + frutas.length);

frutas.push("coco");
console.log("La última fruta añadida es: " + frutas[frutas.length - 1]);
console.log("Ahora la cantidad de fruta es: " + frutas.length);

frutas.forEach((fruta, index) => {
  console.log(`Fruta ${index + 1}: ${fruta}`);
});

let nuevaFruta = "uva";
if (!frutas.includes(nuevaFruta)) {
  frutas.push(nuevaFruta);
  console.log(nuevaFruta + " añadida al array.");
} else {
  console.log(nuevaFruta + " ya está en el array.");
}

console.log("Frutas finales: " + frutas.join(", "));

frutas = [...new Set(frutas)];
console.log("Array sin duplicados: " + frutas);

/* Empiezo aquí una serie de ejercicios de práctica para aprender a usar JavaScript. */

console.log("Hola, soy Jero, tengo 41 años y vivo en España.");

/* Ejercicio 1:
	•	Crea un programa que:
	1.	Declare una variable llamada ciudad con el nombre de una ciudad.
	2.	Imprima un mensaje en la consola con la frase: "La ciudad es <ciudad>".
	3.	Use un comentario en bloque para explicar qué hace el programa.
*/

let ciudad1 = "Roma";
console.log("La ciudad es " + ciudad1);
/* He declarado una variable llamada "ciudad1", porque antes ya tenía declarada "ciudad" y no quiero que se confundan. 
   y muestra un mensaje en la consola con su valor final */

/* :Ejercicio 2:
	•	Escribe un programa que declare tres variables: a, b, y c.
	•	Usa un comentario en línea para explicar el propósito de cada variable.
	•	Imprime la suma de a y b, y el producto de b y c en la consola. */

let a = 2; // Variable que almacena el valor 2.
let b = 3; // Variable que almacena el valor 3.
let c = 4; // Variable que almacena el valor 4.
console.log("Voy a sumar a + b", a + b); // Muestra en la consola la suma de las variables "a" y "b".
console.log("Voy a multiplicar b * c)", b * c); // Muestra en la consola el producto de las variables "b" y "c".
