## Relación entre HTML y CSS

CSS asocia reglas de estilo con elementos HTML. Estas reglas establecen cómo debe mostrarse el contenido de los elementos especificados en sus declaraciones.

> **Tip**: ¡No te preocupes por la sintaxis de las reglas de CSS por ahora! La veremos en secciones posteriores. En este momento, lo importante es entender las diferentes maneras en que se pueden aplicar estilos CSS a documentos HTML.

Para vincular el HTML y el CSS existen diferentes métodos listados a continuación (de **menos recomendable a más**):

### 1. Estilos en línea

El método menos recomendable es lo que se conoce como "estilo en línea" (_inline style_), que se añaden a cada elemento individualmente mediante el atributo '_style'_. El valor de este atributo son las declaraciones CSS que se aplican únicamente al elemento que lo lleva.

> Sintaxis
```HTML
<etiqueta style="propiedad: valor; propiedad2: valor2;">Contenido</etiqueta>
```
	
```HTML
<p style="color: white; background: darkblue;">Este parrafo tiene texto blanco y fondo azul oscuro.</p>
<p>Este parrafo no tiene estilos.</p>
```
	
![](./images/02-inline-style.png)

Debes evitar el uso de este atributo porque tiene ciertas desventajas que pueden dificultar el mantenimiento y la escalabilidad del código CSS:

- Es necesario aplicar el atributo '_style'_ a cada uno de los elementos que quieras modificar, lo que puede generar mucho código repetitivo y la posibilidad de olvidarse de aplicarlo en algunos elementos.
    
- Si necesitas hacer algún cambio en los estilos, tendrás que hacerlo en cada uno de los elementos en los que has aplicado el atributo.
    
- Es difícil sobrescribir estos estilos en caso de que necesites aplicar un estilo diferente para ciertos elementos. Veremos más sobre este tema en la lección sobre el “_Modelo de cascada de CSS_”.

> **Tip**: Aunque usar el atributo '_style'_ cuando escribimos HTML se considera una mala práctica, no lo es usarlo para aplicar dinámicamente estilos puntuales con _JavaScript_; por lo que no te sorprendas si lo ves por ahí.


### 2. Elemento `<style>`

El elemento `<style>` es una manera de incluir estilos en el propio documento HTML. Este elemento siempre se coloca dentro de la etiqueta `<head>` y contiene reglas de CSS con la misma sintaxis que se usa en hojas externas (entraremos en detalle en el siguiente punto).

> Sintaxis
```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <style>
      /* Reglas CSS */
      selector {
        propiedad: valor;
        propiedad2: valor2;
      }
    </style>
  </head>
  <body>
    <!-- Contenido del documento -->
  </body>
</html>
```

> _HTML (index.html)_
```HTML
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /* Aquí van los estilos! */
      h1 {
        color: red;
      }
      p {
        color: white;
        background: darkblue;
      }
    </style>
  </head>
  <body>
    <h1>Este título es rojo</h1>
    <p>Los párrafos tiene texto blanco y fondo azul oscuro</p>
    <p>Todos los párrafos tienen el mismo estilo</p>
  </body>
</html>
```
	
![](./images/02-style-element.png)

El resultado final es el mismo que si aplicaras CSS en una hoja externa. Sin embargo, el elemento `<style>` tiene algunas desventajas que deberías tener en cuenta:

- Hay que repetir todo el CSS en cada página, no solo el `<link>` al documento externo, lo que hace que el proyecto sea más pesado y difícil de mantener.
    
- Si quieres hacer algún cambio en los estilos, tendrás que hacerlo en todas las páginas que contengan el elemento `<style>`.
    
- Si necesitas modificar los estilos, te obligará a editar el documento HTML, lo que podría resultar en errores.
    
- Si tienes muchas reglas CSS, puede alargar el documento HTML innecesariamente, lo que dificulta la lectura y el mantenimiento de tu código.

> **Tip**: A pesar de todas esas desventajas, saber usar el elemento `<style>` puede ser útil para hacer alguna prueba rápida antes de hacer el CSS externo.

### Hojas externas y etiqueta `<link>`

La mejor forma de vincular el CSS y el HTML es a través del elemento `<link>`, que permite vincular distintos recursos a un documento HTML. Entre ellos, hojas CSS externas.

Estas hojas CSS externas son archivos de texto con extensión _.css_ que recogen todas o una parte de las reglas necesarias para dar los estilos correspondientes al documento HTML.

Cuando hablamos de separar el **contenido** de la **presentación** y las ventajas que ello conlleva, nos referimos a este sistema.

Un mismo archivo puede estar vinculado a varias hojas de estilo que se apliquen a la vez o en determinadas circunstancias. Por ejemplo, puedes aplicar un CSS diferente si la página se va a ver desde una pantalla o si va a ser impresa.

> Sintaxis
```HTML
<head>
    <link rel="stylesheet" href="nombreArchivoCSS.css" />
</head>
```

> _HTML (index.html)_
```HTML
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Este título es azul</h1>
    <p>Los párrafos tiene texto blanco y fondo negro</p>
    <p>Todos los párrafos tienen el mismo estilo</p>
  </body>
</html>
```

> _CSS (style.css)_
```CSS
h1 {
    color: blue;
}

p {
    color: white;
    background: black;
}
```
	
![](./images/02-stylesheet.png)

#### Atributos del elemento `<link>`

En el ejemplo anterior puedes ver que el elemento `<link>` lleva algunos atributos ('_rel'_ y '_href'_) que son obligatorios. A continuación, se lista algunos de los atributos de `<link>` y su utilidad:

- **_'rel'_**: este atributo (obligatorio) establece la relación entre el documento HTML y el archivo externo que quieres vincular. En el caso de hojas de estilo, su valor siempre será "_stylesheet_".
    
- **_'href'_**: este atributo (obligatorio) indica la ruta (ya sea absoluta o relativa) al archivo CSS a vincular. En este caso la hoja de estilos con extensión _.css_
    
- **_'type'_**: atributo opcional, indica el tipo de documento que estás vinculando. Para archivos CSS, siempre se debe asignar el valor "_text/css_".
    
- **_'media'_**: este atributo es opcional y permite indicar en qué circunstancias se aplicará el CSS. Por ejemplo, "_screen_" se aplicará en pantallas (ordenadores y dispositivos móviles), "_print_" se aplicará al imprimir la página y "_all_" se aplicará siempre.

## Vincular unos documentos CSS a otros: directiva `@import`

La directiva `@import` en CSS es equivalente a la etiqueta `link`, ya que se utiliza para indicar al navegador que cargue una hoja de estilo externa y utilice sus estilos en la presentación del documento HTML. Esta directiva se ubica siempre al principio del CSS, antes de cualquier otra regla, de lo contrario no funcionará. Es posible utilizar más de una declaración `@import` en un mismo documento.

```CSS
@import url(styles.css); /* @import se coloca primero */ 
@import url(styles2.css);

h1 {color: gray;}
```

La directiva `@import` puede ser muy útil si necesitas utilizar los estilos de hojas de estilo externas en tu CSS, ya sea que se encuentren en el mismo servidor o no. Por ejemplo, puedes encontrar una hoja de estilo externa que contenga lo siguiente:

```CSS
@import url(http://www.hackaboss.com/library/layout.css); 
@import url(basic-text.css);
@import url(printer.css) print;
body {color: red;}
h1 {color: blue;}
```

Esto te permite modularizar tu CSS, ya sea para mantenerlo organizado, como para reutilizar hojas de estilo. Por ejemplo, si siempre usas los mismos estilos para tus _header_, podrías tener una hoja _header.css_; o, por el contrario, podrías tener una hoja con los estilos genéricos de todo el sitio e importarlo en otra más específica para cada una de las páginas.