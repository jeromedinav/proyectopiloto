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
console.log("La ciudad es "ciudad1");

  