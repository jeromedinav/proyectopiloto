Los elementos de texto en HTML se utilizan para definir y mostrar diferentes tipos de contenido de texto en una página web. Algunos de los elementos de texto más comunes son:

|Etiqueta|Descripción|
| --------- | ------------- |
|`<p>`|Define un párrafo de texto.|
|`<em>`|Resalta un texto en _cursiva_ para darle énfasis.|
|`<strong>`|Resalta un texto en **negrita** para darle importancia.|
|`<br>`|Crea un salto de línea **forzado** dentro de un texto. Se usa para poemas, letras de canciones, direcciones... Nunca para crear separación entre párrafos o elementos.|
|`<span>`|Define una sección de texto genérica dentro de un párrafo u otro elemento de texto.|
|`<blockquote>`|Define una cita larga y destacada.|
|`<cite>`|Indica que un texto es una referencia o una cita.|
|`<sup>` y `<sub>`|Se utilizan para crear texto en superíndice o subíndice, respectivamente.|

Por ejemplo, el código siguiente muestra un párrafo con la palabra "negrita" envuelta en la etiqueta `<strong>` para dar importancia a la palabra, y la palabra "cursiva" rodeada con la etiqueta `<em>` para darle más énfasis:

```HTML
<p>Este es un ejemplo de un párrafo que contiene una palabra en <strong>negrita</strong> y otra en <em>cursiva</em>.</p>
```

Al visualizarlo en un navegador, el párrafo se mostrará de la siguiente manera:

```HTML
<html lang="es">
<head>
    <style>
        body { background-color: white;padding: 1rem;}
        p {border: 1px solid gray;padding: 3px 6px}
    </style>
</head>
<body>
<p>"Este es un ejemplo de un párrafo que contiene una palabra en <strong>negrita</strong> y otra en <em>cursiva</em>."</p>
</body>
</html>
```


## Etiqueta `p`

La etiqueta `<p>` en HTML se utiliza para definir un párrafo de texto. Es una etiqueta de bloque, lo que significa que, por defecto, crea un espacio en blanco antes y después del contenido, separándolo de otros elementos en la página. La etiqueta `<p>` es uno de los elementos fundamentales para la estructuración de texto en una página web, ya que permite organizar el contenido en párrafos legibles y comprensibles.

```HTML
<p>Este es un párrafo de texto en una página web. Contiene información y se utiliza para organizar el contenido de manera clara y legible.</p>
```

Al utilizar la etiqueta `<p>`, los navegadores web aplican automáticamente ciertos estilos por defecto, como márgenes y saltos de línea, para mantener una estructura coherente en el contenido de la página.

> **Tip**: Puedes encontrar otras muchas etiquetas de texto semánticas en la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element#contenido_del_texto).
