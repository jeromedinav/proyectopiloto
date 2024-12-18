CSS te permite definir propiedades personalizadas, normalmente conocidas como "variables". En realidad, no son propiedades como tal, sino que son palabras clave que te permiten almacenar valores para aplicarlos luego a otras propiedades.

Para definirlas, se escriben dentro de un bloque como cualquier propiedad. Puedes darles el nombre que quieras, pero no pueden tener espacios y siempre deben empezar por dos guiones (`--`):

```CSS
html {
    --mi-propiedad: valor;
}
```

>**Tip**: Ten en cuenta que las variables se heredan. Lo más habitual es declararlas en el elemento `<html>` o `:root` que a grandes rasgos es lo mismo, pero con más especificidad. En ocasiones, puede ser útil sobrescribirlas en algún elemento para que tengan un valor diferente para él y sus descendientes. También puedes sobrescribirlos con clases. Es una forma fácil de definir distintos esquemas de color (por ejemplo, un modo noche).

Por ejemplo, puedes tener una propiedad personalizada en la que guardar el color principal de tu página y usarla para aplicarlo a título, fondos, enlaces, etc. Si quieres cambiarla de color, lo puedes hacer en la variable y todos los elementos se ajustarán automáticamente.

```CSS
html {
    --color-principal: darkgreen;
}
```

Para aplicar su valor a un elemento, debes llamar a las variables con la función `var()` y dentro de los paréntesis indicar su nombre, incluidos los guiones (`--`):

```CSS
header {
    background: var(--color-principal);
    color: white;
}

h2 {
    color: var(--color-principal)
}
```

Al proceder de esta forma, para CSS es como si hubieras escrito su valor directamente, por lo que también puedes usarlo en medio de otros valores:

```CSS
section {
    border: 2px solid var(--color-principal)
}
```

> _HTML_
```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html {
        --color-principal: darkgreen;
      }
      header {
        background: var(--color-principal);
        color: white;
      }
      h2 {
        color: var(--color-principal);
      }
      .my-section {
        border: 2px solid var(--color-principal);
      }
    </style>
  </head>
  <body>
    <header>
        <h1>Este es el header</h1>
    </header>
    <section>
        <h2>Este es el H2</h2>
        <p>Tanto el H2 como este párrafo están dentro de una section.</p>
    </section>
  </body>
</html>
```
	
![](./images/19-variables-1.png)

La ventaja de usar variables es que puedes repetirlas todo lo que quieras, y si necesitas modificar el valor, solo tendrás que hacerlo donde la has definido.

```CSS
html {
    --color-principal: rebeccapurple;
}
```
	
![](./images/19-variables-2.png)

