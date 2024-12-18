## Head

El encabezado (_head_) de un documento HTML, es aquella parte que no se muestra en el navegador web cuando se carga la página. El propósito de este elemento es aportar información general acerca del documento (_metadata_).

Las funciones principales de la sección `<head>` son:

- Definir el título de la página web, que se muestra en la pestaña del navegador (etiqueta `<title>`).
    
- Especificar la codificación de caracteres que se utiliza en el documento (`<meta charset>`).
    
- Agregar etiquetas meta para proporcionar información adicional a los motores de búsqueda y otros servicios web (por ejemplo: `<meta name>`).
    
- Enlazar archivos externos como hojas de estilo CSS y archivos JavaScript (`<link rel=”stylesheet” href=”styles.css” />`).

```HTML
<!DOCTYPE html>
<html>
  <head>
    <!--codificacion de caracteres-->
    <meta charset="utf-8" />
    <!--Nombre del autor-->
    <meta name="author" content="Chris Mills" />
    <!--Titulo de la pagina-->
    <title>Título de la página</title>
    <!--Enlace con el archivo CSS-->
    <link rel="stylesheet" href="my-css-file.css" />
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
```


### Title

La etiqueta `<title>` es la más especial de las etiquetas que van en el `<head>`. Es la única visible, aunque no se visualiza dentro del _viewport_ (el recuadro en el que vemos el contenido de la web) sino que es el texto que se muestra en la pestaña del navegador.

![](./images/title_tag.png)

La etiqueta `<title>` es muy importante a nivel de SEO (posicionamiento en buscadores como Google), y aunque su ausencia no afectará al funcionamiento de la web, el _[W3C](https://www.w3.org/)_ lo considera **obligatorio**.

Consideraciones importantes para el título de una página web:

- El título debe describir claramente el contenido de la página.
    
- Debe ser único con relación a los títulos de otras páginas que contengan tu sitio web.
    
- Es recomendable colocar palabras descriptivas al inicio del título, para que los usuarios puedan entender rápidamente el tema de la página.
    
- El título debe ser fácil de entender para los usuarios, ya que aparece en la lista de marcadores del navegador cuando se guarda la página web como favorito.

> **Tip**: El _[W3C](https://www.w3.org/)_ (_World Wide Web Consortium_) es el organismo internacional que define las recomendaciones y estándares web. Para que nos entendamos, son los que ponen las “_normas_” de cómo se deben escribir las webs y cómo las deben interpretar los navegadores.


### Meta

Los elementos `meta` son etiquetas HTML que se utilizan en la sección `head` de un documento HTML para proporcionar información adicional sobre el documento. Los elementos `meta` no se muestran en la página web en sí, sino que se utilizan para proporcionar información al navegador y a los motores de búsqueda sobre cómo se debe procesar y presentar la página.

En la mayoría de los casos un elemento `meta` lleva un atributo '_name_', que indica qué información estamos aportando (_author_, _description_…) y un atributo '_content_', que es realmente el valor de esa información (el nombre del autor, la descripción de la web…).

Son elementos sin contenido, por lo que **no tienen etiqueta de cierre**.

Algunos de los '_name'_ estándar son:

- **_author_**: indica el autor del documento.
    
- **_description_**: se utiliza para proporcionar una descripción breve y concisa del contenido de la página.
    
- **_keywords_**: se utiliza para proporcionar una lista de palabras clave que describen el contenido de la página. Los motores de búsqueda utilizan esta información para determinar la relevancia de la página en relación con ciertas búsquedas.
    
- **_viewport_**: se utiliza para indicar al navegador cómo debe ajustar la página web en función del ancho del dispositivo del usuario. Importante para hacer páginas _responsive_ con CSS.

```HTML
<head>
  <meta name="author" content="John Smith"/>
  <meta name="description" content="Mi primera pagina web" />
  <meta name="keywords" content="html, web, programacion" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Título de la página</title>
</head>
```

> **Tip**: Puedes consultar la lista de [valores estándar para el _name_](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name)en la MDN.


### Charset

Posiblemente la etiqueta meta más utilizada sea la de codificación de caracteres, que no lleva como atributos ni '_name'_ ni '_content'_, sino '**_charset'_**.

`<meta charset>` establece la codificación de caracteres que se utiliza para representar el texto en la página web. Si se omite la configuración de la codificación, el navegador puede mostrar caracteres extraños o símbolos en lugar de los caracteres que se pretendían. Por lo tanto, es esencial establecer la codificación adecuada en el documento HTML para que se muestre correctamente en el navegador.

```HTML
<head>
  <meta charset="utf-8"/>
  <title>Título de la página</title>
</head>
```

Antiguamente era necesario especificar qué conjunto de caracteres querías usar para que la página se visualizase correctamente. Por ejemplo, si escribías en español, pero utilizabas la codificación inglesa, las tildes y las ñ se verían como un conjunto ilegible de caracteres. De hecho, actualmente, si no se incluye esta etiqueta, la mayoría de los navegadores asumirán que se usa `utf-8`.

Hoy en día, se usa siempre la codificación "**UTF-8"**, que incluye todos los caracteres de todos los idiomas ¡y hasta emojis 🤩!

> **Tip**: La mayoría de los navegadores modernos asumen que se está usando la codificación "_utf-8"_ si no se especifica otra cosa, pero no está de más poner la etiqueta para evitar posibles problemas.


### Otros elementos de Head

Existen otros elementos que puedes añadir dentro de la etiqueta `<head>`, aunque profundizaremos en ellos en futuras secciones, aquí hay algunas menciones breves para familiarizarse con algunos de estos elementos:

- `<link>`: Permite enlazar archivos externos, como hojas de estilo en cascada (CSS) que definen la apariencia y el diseño de la página web.
    
- `<style>`: Contiene estilos CSS internos que se aplican a la página web. Estos estilos pueden definir la apariencia y el diseño de los elementos HTML de la página.
    
- `<script>`: Incluye código JavaScript, ya sea de forma interna o enlazando a archivos externos, que agrega funcionalidad adicional a la página web, como interactividad, animaciones y procesamiento de datos.


## Body

Al contrario que con la etiqueta `<head>`, `<body>` define el cuerpo principal del contenido visible que se mostrará en un navegador web. Esta etiqueta delimita el contenido que se verá en la pantalla del usuario.

Todo lo que se incluya entre las etiquetas de apertura y cierre de `body` se mostrará en el área principal del navegador. Esta área puede incluir texto, imágenes, videos, formularios, enlaces y otros elementos que conforman el contenido de la página web. **Solo puede haber un único elemento** `<body>` **en cada documento**.

El resto de esta documentación de HTML tratará principalmente de las etiquetas que se incluyen dentro del `<body>`.
