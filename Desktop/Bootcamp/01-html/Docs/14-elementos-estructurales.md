Los elementos estructurales en HTML permiten definir la estructura de una página web mediante la organización del contenido en secciones y subsecciones. Entre los elementos estructurales más comunes en HTML se encuentran `<header>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<main>` y `<div>`. Cada uno de ellos se utiliza para agrupar y organizar el contenido de una manera específica.

Por ejemplo, el elemento `<header>` se usa para definir la cabecera o encabezado de la página, mientras que `<footer>` se utiliza para definir el pie de página. El uso adecuado de los elementos estructurales en HTML mejora la legibilidad, el rendimiento y la accesibilidad de una página web, lo que a su vez puede mejorar la experiencia del usuario y el posicionamiento en los motores de búsqueda.

## Contenedores

La estructura HTML presenta múltiples niveles de organización, en los cuales existen elementos que definen secciones generales del documento y otros que representan secciones menores del contenido.

![](./images/HTML_structure.png)


La columna vertebral de la estructura está compuesta principalmente por estas etiquetas:

|Etiqueta|Descripción|
|---------|-------------|
|`<header>`|Delimita la cabecera de un documento o sección. No confundir con la etiqueta `<head>` que vimos en la lección de "Anatomía de un documento HTML".|
|`<nav>`|Marca un bloque de navegación, con enlaces ya sea a otros documentos o a distintas partes del mismo.|
|`<main>`|Etiqueta el contenido principal de la página. Solo puede haber uno.|
|`<section>`|Define una sección genérica de un documento. Se trata de una agrupación temática de contenido, normalmente con su propio título.|
|`<article>`|Señala una sección de una página, pero con un contenido que no necesita su contexto para funcionar. Es decir, podrías coger cualquier `article`, llevarlo a otra página, y seguiría teniendo sentido.|
|`<aside>`|Marca una sección de una página, con contenido indirectamente relacionado con el contenido que lo rodea.|
|`<footer>`|Determina el pie de un documento o sección. Suele incluir datos sobre la sección que lo rodea, como la autoría, información de derechos de autor, enlaces a los términos de uso y la política de privacidad, etc.|
|`<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>`|Define los encabezados de diferentes niveles.|
|`<p>`|Define un párrafo de texto.|
|`<address>`| Proporciona información de contacto. Contiene cualquier tipo de detalles de contacto, como dirección física, URL, número de teléfono, dirección de correo electrónico, etc.|
|`<figure>`|Agrupa contenido relacionado con el documento principal, pero que puede ser independiente en su estructura, como diagramas, ilustraciones, fotos, código de ejemplo, etc.|
|`<figcaption>`|Proporciona una forma de agregar una leyenda a la imagen o descripción de lo que contiene `<figure>`. Es opcional y se utiliza dentro de un elemento `<figure>`.|
|`<div>`|Se utiliza para crear contenedores genéricos o secciones de contenido.|

Aunque la mayoría de los elementos estructurales, tienen un propósito implícito que se refleja en sus nombres, esto no quiere decir que se deban usar solo una vez en el mismo documento. En particular, algunos elementos como `<section>` y `<article>` se pueden utilizar muchas veces para representar diferentes partes de la estructura.


## Evita el uso del elemento `<div>`

Si revisas código HTML que se encuentra en Internet, la mayoría de las veces verás que la estructura del documento está basada en casi todo elemento `<div>`. Antes de la introducción de HTML5 y las etiquetas semánticas, la mayoría de los desarrolladores web utilizaban elementos `<div>` para estructurar y organizar el contenido en una página. Esto se debía a la falta de etiquetas semánticas y a la comodidad de usar un solo elemento para diversos propósitos.

El uso excesivo de elementos `<div>` en HTML, puede afectar negativamente la estructura, accesibilidad y mantenibilidad de una página web. Aunque `<div>` es un elemento versátil y útil, es importante evitar su abuso por las siguientes razones:

1. **Pérdida de semántica**: Los elementos `<div>` no aportan información semántica sobre el contenido que envuelven. Como ya has visto, emplear elementos semánticos mejora la accesibilidad y permite comprender de manera más efectiva la estructura y el propósito del contenido.
    

2. **Código menos legible**: Abusar de los `<div>` puede dificultar la lectura y comprensión del código HTML para los desarrolladores, especialmente al crear estructuras anidadas complejas. Un HTML bien estructurado con elementos semánticos facilita la lectura y el mantenimiento del código.
    

3. **Estilos CSS más complejos**: Usar demasiados `<div>` en lugar de elementos semánticos puede generar una estructura HTML menos organizada y estilos CSS más complicados. Esto puede incrementar la cantidad de código necesario para dar estilo a la página y dificultar el mantenimiento de los estilos.
    

4. **Rendimiento**: Aunque el impacto en el rendimiento puede ser mínimo, el uso excesivo de `<div>` puede aumentar el tamaño del archivo HTML, lo que podría influir ligeramente en la velocidad de carga de la página.


## Modelos de contenido en HTML

En versiones anteriores de HTML se usaban dos categorías para clasificar los elementos, aquellos del tipo bloque (_block_) y los elementos de tipo línea (_inline_). La regla general, es que los elementos de tipo _block_ pueden contener otros elementos tanto de tipo _block_ como _inline_, en cambio los elementos _inline_ solo pueden incluir otros elementos _inline_.

- **Block**: por defecto ocupan el espacio de su contenedor, es decir, todo el ancho de su elemento padre y el alto que necesite su contenido. En principio, no pueden tener nada a los lados y provocan saltos de línea. Algunos ejemplos de elementos de bloque son: `<h1>`, `<p>,` `<ul>` y `<li>`

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo de elementos en bloque</title>
  </head>
  <body>
    <h1>Este es el encabezado principal y en en bloque</h1>
    <p>Este es un párrafo que contiene un elemento en bloque:</p>
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
    </ul>
  </body>
</html>
```

En este ejemplo, los elementos `<h1>`, `<p>` y `<ul>` son elementos en bloque. `<ul>` contiene elementos `<li>` en su interior. Esto significa que ocuparán todo el ancho del contenedor y provocarán un salto de línea antes y después de ellos.

- **Inline**: Fluyen con el texto. Ocupan el espacio justo que ocupe su contenido y no provocan saltos de línea, por lo que puede haber unos al lado de otros o estar en mitad de una frase. Algunos ejemplos de elementos en línea son: `<a>`, `<strong>`, `<img>`

```HTML
<p>Este es un párrafo con <strong>texto importante</strong>, <em>texto con énfasis</em> 
y un <a href="https://www.ejemplo.com">enlace</a> a una página web.</p>

<p>Esta es una imagen en línea: <img src="ejemplo.jpg" alt="Descripción de la imagen"></p>
```

En este último ejemplo, los elementos `<strong>`, `<em>`, `<a>` e `<img>` son elementos en línea porque fluyen con el texto y no crean un nuevo bloque. El elemento `<a>` crea un hipervínculo a otra página web, el elemento `<strong>` da importancia a su contenido (por defecto se muestra en negrita), el elemento `<em>` da énfasis a su contenido (por defecto se muestra en cursiva) y el elemento `<img>` muestra una imagen en línea.

> **Tip**: Todos los elementos que has visto hasta ahora y los que verás más adelante tienen un valor semántico; es decir, no solo aportan estructura sino también información sobre lo que contienen. Existen elementos genéricos de bloque (`<div>`) y de línea (`<span>`), pero hay que intentar evitarlos y usar elementos semánticos siempre que sea posible, ya que le darán más valor a la página y facilitarán la accesibilidad.


### Nuevo modelo de contenido en HTML5

Si bien la comprensión de la categorización en elementos de línea y de bloque sigue siendo relevante, en HTML5, un conjunto más complejo de "categorías de contenido" reemplaza dicha clasificación.

El actual modelo comprende siete categorías de contenido que se superponen entre sí, por lo que existen algunos elementos que pueden pertenecer a más de un modelo de contenido.

![](./images/HTML_content_model.png)

Aunque es interesante conocer la teoría de los distintos tipos, en la práctica puedes trabajar con el antiguo modelo como una “simplificación” del actual. Si quieres saber más de los siete tipos de elementos, puedes [consultar la MDN](https://developer.mozilla.org/es/docs/Web/HTML/Content_categories) o leer la siguiente lista:

- **_Flow content_**: la mayoría de los elementos que se utilizan en el cuerpo de un documento, como párrafos, encabezados, enlaces, imágenes y elementos multimedia. Esta categoría incluye prácticamente todos los elementos HTML, excepto algunos metadatos, solapándose con el resto de las categorías.
    

- **_Phrasing_** **_content_**: incluye el texto del documento, así como los elementos de enmarcado del texto. Encuadra elementos del formulario, imágenes, hipervínculo y casi cualquier cosa que se pueda incluir en un párrafo (antiguamente _inline_).
    

- **_Heading content_**: incluye los elementos de encabezado, desde `h1` hasta `h6`, que se utilizan para crear títulos en una página web.
    

- **_Sectioning_** **_content_**: alberga los nuevos elementos divisores de HTML5, como `article`, `section`, `aside` y `nav`, que se utilizan para organizar el contenido de una página.
    

- **_Embedded_** **_content_**: importa recursos en el documento, incluye `audio`, `video` y otros _plugins_. Incorpora igualmente `canvas`, imágenes e incluso objetos matemáticos.
    

- **_Interactive content:_** se refiere a elementos que interactúan con el usuario, como elementos de formulario, hipervínculos y menús.
    

- **_Metadata_** **_content_**: establece la presentación o el comportamiento del resto del documento, y también dispone las relaciones entre varios documentos, además de transmitir la información _out of band_ (fuera de banda).
    

Cuando tengas alguna duda sobre los elementos que pueden ir dentro de otros, puedes consultar la documentación en _[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#technical_summary) (MDN)_ del elemento que te interese, allí se indica qué tipo de contenido puede tener como padre (_Permitted parents_) o como hijos (_Permitted content_).

![Cuadro informativo o tabla de propiedades de header en MDN Web Docs (se recomienda realizar la consulta en la página en inglés del MDN Web Docs, ya que se mantiene más actualizada que las versiones en otros idiomas)](./images/header_info_MDN.png)

Además, te recomendamos que verifiques tus documentos HTML. Con la **[herramienta de validación de W3C](https://validator.w3.org/#validate_by_input)** podrás asegurar que cuentan con un marcado bien formado. Este proceso de comprobación del marcado es un paso importante para garantizar la calidad técnica de las páginas web.