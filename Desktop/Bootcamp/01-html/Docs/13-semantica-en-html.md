Con semántica en HTML nos referimos al uso de etiquetas y elementos apropiados que transmiten claramente el significado y la estructura del contenido en una página web. En otras palabras, las etiquetas semánticas describen el propósito y la función de un elemento en el documento, en lugar de simplemente definir su apariencia visual.


## Importancia de la semántica en HTML

Vamos a listar las principales razones por lo que la semántica es importante en HTML:

1. **Accesibilidad**: El uso de etiquetas semánticas ayuda a los navegadores y tecnologías de asistencia, como lectores de pantalla, a comprender e interpretar correctamente el contenido de una página web. Esto mejora la accesibilidad del sitio para las personas con discapacidades.
    

2. **Mantenimiento y legibilidad del código**: Utilizar elementos semánticos hace que el código HTML sea más fácil de leer y mantener, tanto para los desarrolladores como para los navegadores. Esto facilita la colaboración y la comprensión del código en proyectos de desarrollo web.
    

3. **SEO (Optimización para motores de búsqueda)**: Los motores de búsqueda utilizan la semántica de una página web para indexar y clasificar su contenido de manera más efectiva. El uso de etiquetas semánticas puede mejorar el SEO de una página, lo que aumenta su visibilidad y su clasificación en los resultados de búsqueda.
    

4. **Compatibilidad entre navegadores**: El uso de etiquetas semánticas estándar ayuda a garantizar una representación y funcionalidad más consistentes en diferentes navegadores y dispositivos.
    

La semántica en HTML es fundamental para garantizar que el contenido de una página web sea accesible, fácil de mantener, optimizado para motores de búsqueda y compatible con diferentes navegadores. Utilizar etiquetas semánticas en el diseño y desarrollo web es una práctica recomendada que puede mejorar significativamente la calidad y la eficiencia de tu sitio web.


## Etiquetas semánticas en HTML

A continuación, se muestra un listado de algunas de las etiquetas semánticas más comunes:

### header

`<header>` define el encabezado de una página o sección. Normalmente incluye el título principal y logo, la barra de navegación y otros elementos comunes a todas las páginas del sitio. Si utilizas la etiqueta `<header>` creas una clara separación entre la cabecera y el contenido principal de la página, haciendo más fácil para los usuarios navegar en tu sitio web.

```HTML
<header>
  <h1>Mi sitio web</h1>
  <nav>...</nav>
</header>
```


### nav

`<nav>` representa una sección de navegación que contiene enlaces a otras páginas o secciones del contenido. Al usar la etiqueta `<nav>` indicas tanto a los usuarios como a los motores de búsqueda que dicha sección está diseñada para la navegación.

```HTML
<nav>
  <ul>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="about.html">Acerca de mí</a></li>
    <li><a href="contact.html">Contacto</a></li>
  </ul>
</nav>
```


### main

Define el contenido visible principal del documento, excluyendo elementos como encabezados, pies de página y barras de navegación. Solo puede haber uno por documento.

```HTML
<main>
  <h2>Sobre mí</h2>
  <p>Bienvenid@s a mi página web. Aquí encontrarás ejemplos de semántica HTML.</p>
</main>
```


### article

`<article>` representa un contenido independiente y autocontenido, como puede ser una publicación de blog o una noticia. El contenido dentro de `<article>` debe tener significado por sí mismo y puede incluir cabeceras, párrafos, imágenes, etc.

```HTML
<article>
  <h2>Título de la publicación</h2>
  <p>Contenido de la publicación...</p>
</article>
```


### section

`<section>` define una sección de contenido relacionado dentro de un documento, como un grupo de artículos o una sección de preguntas frecuentes.

```HTML
<section>
  <h2>Preguntas frecuentes</h2>
  <p>Pregunta 1...</p>
  <p>Respuesta 1...</p>
</section>
```


### aside

`<aside>` representa contenido secundario relacionado con el contenido principal, como barras laterales o publicidad.

```HTML
<aside>
  <h3>Anuncios</h3>
  <p>Publicidad...</p>
</aside>
```


### footer

`<footer>` define el pie de página de una página o sección, que puede contener información como datos de contacto, enlaces a redes sociales y derechos de autor.

```HTML
<footer>
  <p> © 2023 Mi sitio web. Todos los derechos reservados.</p>
</footer>
```


### figure y figcaption

`<figure>` representa contenido multimedia, como imágenes, gráficos o diagramas, que pueden tener una leyenda asociada.

`<figcaption>` define la leyenda del elemento `<figure>`, proporcionando una descripción o explicación del contenido multimedia.

```HTML
<figure>
  <img src="imagen.jpg" alt="Ejemplo de imagen">
  <figcaption>Descripción de la imagen</figcaption>
</figure>
```

