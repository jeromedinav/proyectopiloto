Por norma general, un documento CSS estará compuesto por un conjunto de reglas, todas con la misma estructura.

![Estructura de una regla CSS](./images/CSS_rule_example.png)

> **Sintaxis**
```CSS
selector {
    propiedad: valor;
    propiedad2: valor2;
}
```

La sintaxis básica en CSS (_Cascading Style Sheets_) está compuesta de las siguientes partes:

1. **_Selector_**: especifica qué elemento HTML se va a estilizar. Puede ser un elemento HTML específico, como `<p>` para párrafos, o una _clase_ o un _ID_ que se ha asignado a un elemento HTML.
    
2. **_Propiedad_**: especifica qué aspecto del elemento se va a estilizar, como el color de fondo o el tamaño de la fuente.
    
3. **_Valor_**: especifica el valor que se va a aplicar a la propiedad, como "rojo" para el color de fondo o "20px" para el tamaño de la fuente.
    
4. **_Punto y coma_**: separa cada declaración CSS de la siguiente indicando al navegador que la declaración ha terminado.
    

Por ejemplo, el siguiente código CSS aplica un color de fondo rojo a todos los elementos HTML que tienen la clase "_encabezado_":

> CSS (_styles.css_)
```CSS
/* styles.css */

.encabezado {
    background-color: red;
}
```

En este ejemplo, `.encabezado` es el selector, '_background-color_' es la propiedad y "_red_" es el valor. El punto y coma al final indica que la declaración ha terminado.

> HTML (_index.html_)
```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sintaxis CSS</title>
    <!-- Enlazamos el archivo CSS del ejemplo anterior: styles.css -->
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 class="encabezado">Encabezado con clase "encabezado"</h1>
    <p>Párrafo sin la clase encabezado</p>
    <p class="encabezado">Párrafo con la clase encabezado</p>
  </body>
</html>
```
	
![](./images/03-class.png)


## Comentarios en CSS

Como aprendiste en el módulo de HTML, los comentarios son importantes en todos los lenguajes, pero cada uno tiene su sintaxis. En el caso de CSS, se abren con barra inclinada seguida de asterisco (`/*`_)_ y se cierran al revés, con asterisco seguido de barra inclinada _(_`*/`).

>Sintaxis
```CSS
/* Esto es un comentario en CSS */
```

Los comentarios te pueden servir para aclarar o recordar ciertos aspectos del código, o para separar bloques y mantenerlo más ordenado.

Pueden abarcar varias líneas:

```CSS
/* Este comentario
tiene dos lineas */
```

Pero **NO** se pueden anidar, por lo que esto no sería correcto:

```CSS
/* Este es un comentario, en el que encontramos
     otro comentario, lo cual es INCORRECTO
/* Otro comentario */
     y volvemos al primer comentario */
```

> **Tip**: Una forma de crear accidentalmente comentarios "anidados", es comentar un bloque extenso de una hoja de estilo que ya contiene un comentario. Dado que CSS no permite comentarios anidados, el comentario "externo" terminará donde termina el comentario "interno", obteniendo así resultados inesperados.

![Comentarios en Hojas de estilo](./images/CSS_comments.png)


## Espaciado y puntuación

CSS es básicamente insensible al espacio en blanco y saltos de línea entre las declaraciones, y también, en gran medida, dentro de las declaraciones; aunque existen algunas excepciones. En general, CSS trata los espacios en blanco como lo hace HTML: cualquier secuencia de caracteres de espacio en blanco, se contrae en un solo espacio, para fines de análisis. Por lo tanto, se podría formatear una hipotética declaración arco iris (_rainbow_) de estas tres maneras diferentes:

```
rainbow: infrared  red  orange  yellow  green  blue  indigo  violet  ultraviolet;
```
	
```
rainbow:
	 infrared  red  orange  yellow  green  blue  indigo  violet  ultraviolet;
```
	
```
rainbow:
    infrared
    red
    orange
    yellow
    green
    blue
    indigo
    violet
    ultraviolet
    ;
```

Lo mismo ocurre para formatear reglas enteras o separar reglas entre sí.

A continuación, se presenta un ejemplo de un número efectivamente infinito de posibilidades:

```CSS
/*Esta es la forma mas habitual*/
html { 
    color: black;
}

body 
{ background: white;}

p 
{
    color: gray;
}

h2 {color: silver;} ol {color: silver;}
```

> **Tip**: Todos estos enfoques son válidos, por lo que debes elegir el formato que tenga más sentido para ti (es decir, aquel que sea más fácil de leer) y ajustarte a él.


### Punto y coma

Lo que separa realmente unas declaraciones de otras no son los saltos de línea ni los espacios, si no el punto y coma `;` que se coloca al final de cada una de ellas, por lo que es si no lo pones no funcionará ninguna de las dos declaraciones. Veamos dos ejemplos:

```CSS
p {
    color: white;
    background: darkblue
}
```
	
```CSS
/* CSS NO válido */

p {
    color: white
    background: darkblue
}
```

En el primer caso tenemos dos declaraciones: por un lado, la propiedad '_color_' a la que le estamos dando el valor "_white_" y, por otro, la propiedad '_background_' con valor "_darkblue_". Por lo tanto, tendríamos párrafos con texto blanco y fondo azul oscuro.

En el segundo, en cambio, tenemos una única declaración con propiedad '_color'_ y valor "_white background: darkblue_". Es decir, que no estamos escribiendo ninguna declaración para el fondo, por lo que se quedará como está; pero además el valor que le estamos dando al color no es válido, así que tampoco se aplicará. En resumen, los párrafos tendrán el estilo por defecto.

> **Tip**: Si te fijas en el primer ejemplo, no hay punto y coma al final de la segunda declaración. Como su función es separar declaraciones, no es necesario ponérselo a la última de un bloque. Sin embargo, siempre es recomendable, ya que si añades nuevas declaraciones es probable que no te fijes si la anterior lo tiene o no.

> **Tip**: Puedes aprender más sobre la sintaxis en CSS en la [documentación oficial](https://developer.mozilla.org/es/docs/Web/CSS/Syntax) de MDN.

