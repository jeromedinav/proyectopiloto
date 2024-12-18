`<blockquote>` y `<pre>` son dos etiquetas HTML que se utilizan para representar diferentes tipos de contenido en un documento. A continuación, detallamos el uso de cada una:

## Blockquote

`<blockquote>` se utiliza para representar una cita o extracto de otro autor o fuente. El contenido dentro de un elemento `<blockquote>` generalmente se representa con una sangría en los navegadores para indicar que se trata de una cita. También se puede utilizar el atributo '_cite'_ para especificar la URL de la fuente original de la cita, aunque esto no se muestra visualmente en la mayoría de los navegadores.

```HTML
<blockquote cite="https://www.brainyquote.com/quotes/albert_einstein_148788">
  Una persona que nunca cometió un error nunca intentó nada nuevo.
  <footer>— Albert Einstein</footer>
</blockquote>
```

El resultado del código anterior en el navegador:

![](./images/27-img-blockquote.png)

Ten en cuenta que el atributo '_cite'_ no afecta la visualización del contenido en los navegadores modernos, pero proporciona una referencia al origen de la cita para que los desarrolladores, lectores de pantalla y otros agentes de usuario puedan utilizarla.


## Pre

La etiqueta `<pre>` se utiliza para representar contenido preformateado, como código fuente o texto que debe conservar su formato original (canciones, poesía, etc.), incluyendo espacios y saltos de línea. El contenido dentro de un elemento `<pre>` se muestra en una fuente de ancho fijo (monoespaciada) y respeta exactamente el espaciado y las tabulaciones que aparecen en el código fuente.

```HTML
<pre>
	A la sombra de mi sombra
	me estoy haciendo un sombrero.
	Sombrero de largas pajas
	que recogí del suelo.
</pre>
```

El código anterior se visualiza de la siguiente manera en el navegador:

![](./images/27-img-pre.png)

