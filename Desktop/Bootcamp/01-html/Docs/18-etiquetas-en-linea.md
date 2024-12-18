Las etiquetas en línea (_inline tags_) son aquellas que se utilizan dentro de un bloque de contenido como, por ejemplo, un párrafo, sin afectar la estructura del flujo del documento ni generar un salto de línea, por lo tanto, no pueden anidar elementos de bloque. Estas etiquetas permiten aplicar cambios de estilo, enfatizar texto o agregar información semántica a un fragmento específico del contenido.

Algunos ejemplos de etiquetas en línea comunes en HTML son:

## strong

La etiqueta `<strong>` se utiliza para destacar un fragmento de texto como de mayor importancia o gravedad en el contexto en el que se encuentra. Esto puede ser útil en situaciones donde quieres resaltar ciertas palabras o frases en un párrafo. Por defecto, el texto contenido en la etiqueta `<strong>` se muestra en negrita en los navegadores. Sin embargo, recuerda que su propósito principal es indicar la importancia semántica, y no solo el estilo visual.

```HTML
<p>El equipo ganador recibirá un premio en efectivo y <strong>representará a nuestra región</strong> en la competición nacional.</p>
```


**Ejemplo**

![](./images/18-img-strong.png)


## em

La etiqueta `<em>` se utiliza para enfatizar un fragmento de texto, indicando una diferencia en la entonación o énfasis. Aunque se muestra en cursiva en la mayoría de los navegadores, su función principal es proporcionar énfasis semántico. Esto puede ser útil para resaltar ciertas palabras o frases en un párrafo sin darles una importancia extrema.

```HTML
<p>Por favor, <em>no olvides</em> traer tu identificación y comprobante de pago al evento.</p>
```
	
![](./images/18-img-em.png)


## abbr

La etiqueta `<abbr>` se utiliza para marcar abreviaturas o acrónimos en un texto. El atributo '_title'_ proporciona la versión completa de la abreviatura, lo que permite a los lectores y tecnologías de asistencia entender el significado de la abreviatura. Además, algunos navegadores mostrarán la versión completa como un _tooltip_ cuando el usuario coloque el cursor sobre la abreviatura.

```HTML
<p>El protocolo <abbr title="Hypertext Transfer Protocol">HTTP</abbr> es la base para la transmisión de datos en la web.</p>
```
	
![Ejemplo de `abbr`](./images/abbr_example.png)

## span

La etiqueta `<span>` es un contenedor en línea genérico que se utiliza para aplicar estilos y atributos específicos a un fragmento de texto. Por sí misma, la etiqueta `<span>` no tiene ningún efecto en el contenido, pero es útil cuando deseas agregar estilos CSS, atributos de datos u otros atributos a una porción del texto sin afectar su estructura.

```HTML
<p>El nuevo modelo de coche tiene un consumo de <span class="destacado">6 litros por cada 100 kilómetros</span>, lo que lo convierte en una opción eficiente en combustible.</p>
```
	
![](./images/18-img-span.png)

En este último ejemplo, la clase "_destacado_" tiene un estilo CSS asociado que modifica la apariencia del texto contenido en la etiqueta `<span>`.

> **Tip**: Las etiquetas en línea no deben contener elementos de bloque (_block elements_) como `<div>` o `<p>`, ya que puede generar resultados inesperados y no es semánticamente correcto.

> **Tip**: Existen muchas otras etiquetas en línea incluyendo la etiqueta `<a>` para enlaces, `<img>` para imágenes, `<code>` para fragmentos de código, `<sub>` y `<sup>` para representar texto en subíndice y superíndice, respectivamente. Puedes acceder a la información de estas [etiquetas en línea](https://developer.mozilla.org/es/docs/Web/HTML/Inline_elements#elementos) en la documentación oficial de MDN.

