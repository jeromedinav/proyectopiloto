_Emmet_ es un conjunto de complementos para editores de texto que permiten a los desarrolladores web escribir HTML y CSS de manera más rápida y eficiente utilizando abreviaturas. Estas abreviaturas se expanden automáticamente en el código HTML o CSS completo correspondiente. Emmet es compatible con muchos editores de texto populares, como _Visual Studio Code_, _Sublime Text_, _Atom_ y otros.

### Abreviación Emmet en VSCode para generar una plantilla de documento en HTML

Existe una abreviación _Emmet_ en _Visual Studio Code_ para generar una plantilla HTML completa y es tecleando el símbolo `!` seguido de la tecla `Tab`. Al hacerlo, se generará automáticamente la estructura básica de un documento HTML con las etiquetas `<html>`, `<head>`, `<meta>`, `<title>`, `<body>`, entre otras. Esto es útil para comenzar rápidamente a trabajar en una nueva página web sin tener que escribir todo el código HTML desde cero.

> **Tip**: Video con ejemplos sobre la utilización de [abreviaciones](https://www.youtube.com/watch?v=V8vizNQKtx0) _[emmet](https://www.youtube.com/watch?v=V8vizNQKtx0)_ [en HTML](https://www.youtube.com/watch?v=V8vizNQKtx0) (en inglés)

## Algunos ejemplos del uso de Emmet

1. `!`→ Como ya hemos visto, seleccionando el símbolo `!` en las abreviaturas Emmet, se genera automáticamente la estructura básica de un documento HTML.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

2. `ul>li*3`→ Con esta abreviatura de Emmet se crea una lista desordenada (`<ul>`) compuesta por 3 elementos `<li>`

Detallemos la abreviatura Emmet anterior:
* `ul` crea una etiqueta de lista desordenada `<ul>`
    
- `>` indica que el siguiente elemento será un hijo del elemento anterior, en este caso, un elemento `<li>` dentro de una lista desordenada `<ul>`.
    
- `li` crea una etiqueta `<li>`
    
- `*3` indica que se debe repetir el elemento `<li>` tres veces.

```HTML
<ul>
   <li></li>
   <li></li>
   <li></li>
</ul>
```

Este código HTML representa una lista desordenada con tres elementos de lista vacíos. La abreviatura de Emmet hace que sea rápido y fácil generar esta estructura HTML sin tener que escribir manualmente todas las etiquetas.

3. `h1+p`→ En este caso, se combina la creación de un encabezado de nivel 1 (`h1`) seguido por un párrafo (`p`). La abreviatura se descompone de la siguiente manera:
    

- `h1`: crea una etiqueta `<h1>`
    
- `+`: indica que el siguiente elemento será un hermano (o elemento al mismo nivel) del elemento anterior.
    
- `p`: crea una etiqueta `<p>` (párrafo).

```HTML
<h1></h1>
<p></p>
```

4. `form>input:text+input:password+input:submit`→ Esta abreviatura Emmet crea un formulario que contiene tres elementos de entrada (`<input>`):

    a. Un campo de entrada de texto (`input:text`), representado en HTML por `<input type=”text”>`.
    
    b. Un campo de entrada de contraseña (`input:password`), que se representaría en HTML como `<input type="password">`.
    
    c. Un botón de envío (`input:submit`), que se representaría en HTML como `<input type="submit">`.

```HTML
<form>
  <input type="text">
  <input type="password">
  <input type="submit">
</form>
```

El ejemplo crea un formulario simple con campos para ingresar texto y contraseña, y un botón para enviar el formulario.

> **Tip**: Si te interesa saber más sobre las posibles combinaciones de abreviaturas Emmet, puedes visitar la [cheatsheet](https://docs.emmet.io/cheat-sheet/) en _[docs.emmet.io](http://docs.emmet.io)_.