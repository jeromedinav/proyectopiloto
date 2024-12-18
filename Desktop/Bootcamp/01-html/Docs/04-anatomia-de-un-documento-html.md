Ya sabes que los documentos HTML son archivos de texto que se pueden crear con cualquier editor de texto o con editores de código creados para tal fin. La mayoría de estos editores ponen a tu disposición herramientas para ayudarte a escribir tus documentos.

En HTML los elementos conforman una estructura de tipo árbol cuya raíz es la etiqueta `<html>`.

Todas las páginas web, desde la más simple hasta la más sofisticada comienzan con la misma estructura básica del documento:

![](./images/basic_structure.png)

Analicemos línea a línea el código del documento anterior y sus correspondientes etiquetas:

- Línea 1 - `<!DOCTYPE html>` → La primera línea de todo documento HTML5 es la declaración `<!DOCTYPE>` que indica al navegador la versión de HTML del documento, en este caso HTML5, la cual es la última versión en el momento de escribir estas líneas.
    

- Línea 2 - `<html lang="en">` → La etiqueta `<html>` junto con su etiqueta de cierre `</html>` definen todo el contenido de la página del documento. El atributo `lang=”en”` informa al navegador que el idioma principal de la página es el inglés.
    

- Línea 3 - `<head>` → Entre la etiqueta `<head>` y su etiqueta de cierre `</head>` se encuentra toda la información que no se muestra directamente al usuario en el navegador, esta información se denomina “_metadatos_”, indica al navegador sobre cómo funcionar y presentar el contenido de manera adecuada.
    

- Línea 4 - `<meta charset=”utf-8”>` → Es una meta etiqueta importante que asegura que la página web renderiza correctamente los símbolos especiales y caracteres de diferentes idiomas correctamente. En este caso, `"utf-8"` es una codificación de caracteres que puede representar todos los caracteres de la mayoría de los idiomas del mundo. Si no se especifica la codificación de caracteres, el navegador puede interpretar incorrectamente estos caracteres y mostrarlos de forma distorsionada o incomprensible.
    

- Línea 5 - `<title>` → El elemento `<title>` es otro de los elementos que siempre debes incluir en el `<head>` (aunque no sea obligatorio) de cualquier documento HTML. `<title>` se usa para mostrar en la pestaña del navegador el título de la página web. El texto dentro de la etiqueta `<title>` debe ser breve y descriptivo, además debe reflejar el contenido de la página web. Es importante incluir palabras clave relevantes en el título para que los motores de búsqueda puedan indexar la página de manera efectiva y mostrarla en los resultados de búsqueda relevantes.
    

- Línea 7 - `<body>` → Entre la etiqueta `<body>` y su etiqueta de cierre `</body>` se muestra todo el contenido visible en el navegador. Esta etiqueta es obligatoria en todo documento HTML y define el contenido que se mostrará en el cuerpo de la página, como puede ser texto, imágenes, enlaces, formularios, etc.
    

Para definir un documento HTML se deben combinar múltiples elementos. Los elementos son listados en secuencia, de arriba a abajo y además pueden contener otros elementos en su interior. En HTML los elementos conforman una estructura de tipo árbol cuya raíz es la etiqueta `<html>`.

![](./images/anatomia_HTML.png)

> **Tip**: Si observas códigos antiguos es posible que `<!DOCTYPE>` sea mucho más largo. Eso significa que están en versiones de HTML anteriores. Por ejemplo, en HTML4, tendría un aspecto como este:  
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`


## Etiquetas según su funcionalidad

### **Etiquetas iniciales o de raíz:**

-  `<!DOCTYPE html>` - Indica al navegador qué versión de HTML está usando la página.
    
- `<html></html>` - Representa la raíz del documento, todos los demás elementos de la estructura están contenidos dentro de estas etiquetas. Siempre es recomendable añadirle el atributo '`lang`_'_ para indicar el idioma general de la página, dándole como valor el código [BCP47](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) del idioma correspondiente (en caso del español es "`lang=es`" y en el inglés "`lang=en`").

### **Elementos estructurales principales:**

- `<head></head>` - Se usa para definir la metainformación de la página web, como el título, el tipo de codificación de caracteres y los archivos externos requeridos por el documento.
    
- `<body></body>` - define el contenido visible de la página.

![](./images/hab_tip_2.png)
