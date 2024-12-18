## Anatomía de un elemento HTML: apertura y cierre

Cada elemento HTML está definido por una etiqueta de apertura, una etiqueta de cierre y en medio se encuentra el contenido.

- La **etiqueta de apertura**, también conocida como _opening tag_, se utiliza para indicar el inicio de un elemento HTML y se compone del nombre del elemento entre paréntesis angulares (`<>`), como por ejemplo `<p>` para indicar un párrafo.
    

- La **etiqueta de cierre**, también conocida como _closing tag_, se utiliza para indicar el final de un elemento HTML y se compone del nombre del elemento precedido por una barra inclinada u oblicua (`/`), como por ejemplo `</p>` para indicar el final de un párrafo.
    

- El **contenido**, es todo lo que se encuentra entre ambas etiquetas anteriores se considera el contenido de ese elemento. El contenido puede ser cualquier cosa que esté permitida dentro del elemento, como texto, imágenes, enlaces, otros elementos HTML, etc.

![](./images/etiqueta_HTML.png)

> **Tip**: En HTML5, no puedes utilizar cualquier palabra como etiqueta, debes usar una serie de etiquetas específicas, cada una con una función y objetivo diferente.


### Elementos sin contenido

Las **etiquetas autocierre** (_self-closing tags_) son un tipo de etiqueta HTML que no requiere una etiqueta de cierre correspondiente, ya que no tienen ningún contenido de texto entre la etiqueta de apertura y cierre. En su lugar, se cierran de forma automática con una barra inclinada u oblicua (`/`) justo antes del signo mayor que (`>`).

Estas etiquetas de autocierre se utilizan para elementos HTML que no tienen contenido o que no necesitan una etiqueta de cierre correspondiente. Algunos ejemplos comunes son la etiqueta de imagen `<img>` o la etiqueta de salto de línea `<br>`.

Un ejemplo de uso de la etiqueta autocierre `<img>` sería el siguiente:

```HTML
<img src="mi-imagen.png" alt="Ejemplo de imagen" />
```

En el ejemplo, la etiqueta `<img>` solo contiene una referencia a una imagen para insertar en la página web. La etiqueta `<img>` no tiene una etiqueta de cierre correspondiente. En su lugar, la imagen se cierra automáticamente mediante una barra inclinada u oblicua (`/`) al final de la etiqueta., además, en React sí es obligatoria, por lo que es mejor acostumbrarse a incluirla siempre. Aunque no es obligatorio, se recomienda incluir la barra inclinada u oblicua (`/`) para asegurar la compatibilidad con diferentes navegadores web.


## Anidación de elementos

Puedes ubicar elementos dentro de otros, a este proceso se le denomina anidamiento (_nesting_).

Por ejemplo, si quieres dar importancia a una palabra que se encuentra dentro de un párrafo (`<p>`), puedes envolverla dentro de un elemento `<strong>`.

```HTML
<p>
  Este es un párrafo.
  <strong>Este texto es importante</strong>,
  y <em>este tiene un enfásis</em>.
</p>
```

Debes asegurarte de que los elementos estén anidados de manera correcta en tu código HTML. En el ejemplo anterior, se abre primero el elemento `<p>`, y luego se abre el elemento `<strong>`. Por lo tanto, es necesario cerrar primero el elemento `<strong>` y luego el elemento `<p>`.

Siempre debes tener claro qué elementos están dentro de cuales para evitar que el navegador tenga que adivinar la estructura del código, lo que podría producir resultados inesperados.

Por lo tanto:

- Comienza siempre abriendo el elemento padre antes de abrir el elemento hijo.
    

- Cierra siempre el elemento hijo antes de cerrar al elemento padre.

> **Tip**: En HTML, cuando un elemento está dentro de otro, se le llama el "hijo" del elemento exterior o "padre". Por ejemplo, `<head>` y `<body>` son siempre hijos de `<html>`, que sería su padre. Si hay otros elementos entre ellos, se dice que son "ascendientes" y "descendientes" respectivamente. Por ejemplo, un `<p>` no puede ser hijo de `<html>` porque, como mínimo, está el `<body>` en medio, pero siempre será un descendiente de `<html>`.
