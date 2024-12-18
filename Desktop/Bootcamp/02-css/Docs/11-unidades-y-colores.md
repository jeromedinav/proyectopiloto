# Unidades

Muchos de los estilos de páginas requieren valores de medida, incluyendo el tamaño de letra, el ancho de bordes o los tamaños de márgenes. La unidad más clásica para especificar medidas es el píxel (`px`), pero hoy en día se pueden usar muchas otras unidades que suelen ser más útiles.

> **Tip**: Cuando se asigna un valor de 0 a una propiedad en CSS, no es necesario especificar la unidad, porque el resultado será el mismo para todas las unidades (0px = 0rem = 0% = ...).

## Píxel

Aunque un píxel (`px`) es un pequeño cuadro en la pantalla, CSS define los píxeles de manera más abstracta. En términos de CSS, un píxel se define como el tamaño requerido para producir 96 píxeles por pulgada. Muchos navegadores ignoran esta definición, prefiriendo simplemente desplegar los píxeles en la pantalla.

`px` es una medida absoluta, es decir, mide siempre lo mismo.

```CSS
section {
    width: 150px;
    height: 150px;
    border: 4px solid darkcyan;
}
```

	
![](./images/11-pixel.png)

En este ejemplo, se crea una `<section>` con dimensiones de 150px de ancho y 150px de alto. La medida en píxeles también se utiliza para establecer el grosor del borde del elemento.

Existen otras unidades de medida absolutas como por ejemplo los puntos (`pt`), centímetros (`cm`), milímetros (`mm`) o pulgadas (`in`) pero no son muy utilizadas y realmente son útiles solo si el navegador conoce todos los detalles de la pantalla en la que se muestra su página, la impresora que está usando o sobre cualquier otro agente de usuario que pueda aplicar. En un navegador web, la visualización se ve afectada por el tamaño de la pantalla y la resolución en la que está configurada, y tú, como desarrollador, no puedes hacer mucho sobre estos factores. Solo puedes esperar que, al menos, las medidas sean consistentes entre sí. Por ello, todo lo que viene a continuación en esta sección se centrará en las medidas relativas.


## Unidades de medida relativas

Las unidades relativas se miden en relación a otras cosas, por lo que su distancia real o absoluta puede cambiar debido a factores externos. Por ejemplo, la resolución de la pantalla, el ancho del área de visualización o las preferencias del usuario. Además, algunas unidades relativas se basan en el elemento que las utiliza y su tamaño cambiará de un elemento a otro.

A continuación, se presentan las unidades de medida relativas más utilizadas en CSS:

### em

Un `em` se define como el valor de '_font-size'_ para un elemento determinado. Si el '_font-size'_ de un elemento es de 14 píxeles, entonces, para ese elemento, 1em es igual a 14 píxeles.

Como puedes suponer, este valor puede cambiar de un elemento a otro. Por ejemplo, imagina que tienes un `<h1>` con un tamaño de fuente de 24 píxeles, un elemento `<h2>` con un tamaño de fuente de 18 píxeles y un párrafo `<p>` con un tamaño de fuente de 12 píxeles. Si estableces el margen izquierdo de los tres en 1em, tendrán márgenes izquierdos de 24 píxeles, 18 píxeles y 12 píxeles, respectivamente:

```CSS
h1 {font-size: 24px;}
h2 {font-size: 18px;}
p {font-size: 12px;}
h1, h2, p {margin-left: 2em;}
```
	
![Ejemplo de unidades em y px](./images/CSS_unidades_em_px.png)

¿Y qué pasa si usas `em` precisamente para determinar el tamaño de fuente? En ese caso será relativo al tamaño de fuente de su padre.

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Unidad de medida em</title>
    <style>
      section {
        font-size: 12px;
      }

      p.doble {
        font-size: 2em;
      }
    </style>
  </head>
  <body>
    <section>
      <p>Este es un parrafo normal. El tamaño lo define su padre (section).</p>
      <p class="doble">
        El tamaño del texto de este parrafo es el doble que el de sus hermanos,
        sea el que sea.
      </p>
      <p>Este es otro parrafo normal.</p>
    </section>
  </body>
</html>
```
	
![](./images/11-em.png)

En el ejemplo, `<section>` tiene definida un tamaño de texto de 12 píxeles, mientras que el párrafo con clase _"doble"_ tiene el doble de tamaño de texto. En este caso, dicho párrafo tendrá un tamaño de 24 píxeles, pero si cambias el tamaño de texto de `<section>`, por ejemplo, a 10px, el tamaño de texto del párrafo con clase "_doble_" cambiaría automáticamente a 20px.

### rem

La unidad de medida `rem` es similar a la unidad `em` ya que se basa en el tamaño de fuente declarado. Sin embargo, mientras que la unidad `em` se calcula utilizando el tamaño de fuente del elemento al que se aplica, la unidad `rem` siempre se calcula utilizando el elemento raíz. En HTML, el elemento raíz es el elemento `<html>`. Esto significa que si declaras que un elemento tiene un tamaño de fuente de _1rem_, estás estableciendo que tenga el mismo tamaño de fuente que el elemento raíz del documento.

Como ya sabemos, el elemento raíz de un documento HTML es el elemento `<html>`. Por defecto su tamaño de fuente es _16px_ o lo definido por el usuario en las preferencias de su navegador.

HTML
```HTML
<p>
    Este párrafo tiene el mismo tamaño de fuente que el elemento raíz gracias a la herencia. (16px)
</p>
<section>
    <p id="unidad-em">
        Este párrafo tiene el mismo tamaño de fuente que su elemento padre. (1em = 20px)
    </p>
    <p id="unidad-rem">
        Este párrafo tiene el mismo tamaño de fuente que el elemento raíz. (1rem = 16px)
    </p>
</section>
```

CSS
```CSS
section { font-size: 20px; }
#unidad-em { font-size: 1em; }
#unidad-rem { font-size: 1rem; }
```
	
![](./images/11-rem.png)

En el ejemplo, el primer párrafo no tiene un tamaño de fuente específico, por lo que hereda el tamaño de fuente por defecto del navegador, que generalmente es de 16px. El segundo párrafo tiene un '_id'_ "_unidad-em_" y un tamaño de fuente de 1em, dado que el tamaño de fuente de su elemento padre (`<section>`) es de 20px, 1em es igual a 20px en este contexto. El tercer párrafo tiene un '_id'_ "_unidad-rem_" y un tamaño de fuente de 1rem. La unidad `rem` es relativa al tamaño de fuente del elemento raíz (html), que generalmente es de 16px. Por lo tanto, 1rem equivale a 16px en este caso.

Por norma general, se suele usar la unidad de medida `rem` para establecer los tamaños de fuente en las hojas de estilo por defecto de los navegadores. En general, la mayoría de los elementos se definen con un tamaño de fuente de _1rem_, mientras que los elementos `<h1>` tienen un tamaño de fuente de _2rem_.

Es recomendable seguir esta práctica ya que, aunque cambies el tamaño de fuente, las proporciones de los elementos se mantendrán. Esto se logra modificando el tamaño de fuente del elemento `<html>` y, como todas las medidas de la página se basan en él, todos los elementos cambiarán proporcionalmente.

### % (porcentaje)

Cuando defines un tamaño en porcentaje, es con relación a la medida que tendría en un principio, ya sea por defecto o por herencia. Por ejemplo, si estableces un párrafo `<p>` con un tamaño de fuente de 200%, será el doble de grande de lo que sería si no le indicas nada. Por otro lado, si le indicas que tenga un ancho del 50%, ocupará la mitad de su padre, ya que por defecto lo ocuparía entero. Sin embargo, si lo aplicas para la altura, solo tendrá efecto si su padre tiene una altura definida, ya que **por norma general la altura de los elementos no es una medida fija sino lo que necesite el contenido**.

Por ejemplo, supón que tienes un contenedor que ocupa el 70% del ancho de la pantalla y deseas que su hijo, un elemento de texto, ocupe el 50% del ancho del contenedor. Para lograr esto, puedes asignar un color de fondo a cada elemento, lo que te permitirá distinguirlos fácilmente.

```CSS
/* Contenedor */
section {
    background-color: #8b4513;
    width: 70%;
}

/* Ancho del párrafo en relación al contenedor */
p {
    background-color: #f0e68c;
    width: 50%;
}
```

	
![](./images/11-percentage.png)

En este caso, el ancho del contenedor (marrón) es el 70% del ancho de la pantalla, mientras que el ancho del párrafo (caqui) es el 50% del total del ancho del contenedor.

### Unidades relativas al _viewport_ (`vw` y `vh`)

Las unidades _viewport-width_ ("_vw"_) y _viewport-height_ ("_vh"_) son porcentajes, pero del ancho y alto del _viewport_, respectivamente. Por ejemplo, si estableces el tamaño de un elemento como _50vw_, siempre medirá la mitad de la ventana, independientemente de su ubicación. Por su parte, "_vh"_ funciona de la misma manera, pero con la altura de la ventana.

Supón que quieres definir una sección que ocupe la mitad del ancho de la pantalla y 200px de alto, para ello podrías utilizar la unidad de medida "_vw"_:

```CSS
section {
        width: 50vw;
        height: 200px;
      }
```
	

![](./images/11-viewport.png)

> **Tip**: Existen dos unidades equivalentes a "_vh"_ y "_vw"_ que cambian según el contexto: "**vmin"**, siempre será la más pequeña de las dos, y "_vmax"_, siempre la más grande. Muy útil para mantener los tamaños si, por ejemplo, se gira el móvil (en vertical "vmin" = "_vw"_ y "_vmax"_ = "_vh"_, en horizontal "_vmin"_ = "_vh"_ y "_vmax"_ = "_vw"_, por lo que "_vmin"_ y "_vmax"_ no cambian su valor real).

>**Tip**: Cuando decimos que mide la mitad de la ventana, nos referimos al tamaño del elemento en sí; no tiene por qué estar visible. De hecho, podemos asignar medidas mayores a _100vw_ y _100vh_.

>**Tip**: Para obtener más información acerca de las unidades de medida en CSS, visita la [sección correspondiente](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units) en la documentación de MDN (_Mozilla Developer Network_).

# Colores

Una de las primeras preguntas que hacen los principiantes en el desarrollo web es: "¿Cómo configuro los colores en mi página?”. En CSS, existen varias opciones: lo más común es usar nombres asociados a colores, como _red_ o _purple_, o emplear un método ligeramente críptico usando códigos _hexadecimales_ o _rgb_.

En el pasado, solo contábamos con 8 bits para definir el color, lo que daba un total de 256 colores distintos. El modelo de color de los dispositivos modernos asigna 8 bits a cada color primario, es decir, 24 bits en total que pueden generar un total de más de 16.7 millones de combinaciones diferentes.

![Ejemplo colores](./images/CSS_color_example.png)

>**Tip**: Cuando encendemos una pantalla de ordenador, cada píxel puede ser de un color diferente, creando una imagen. Los píxeles son los pequeños cuadrados que forman la pantalla y se expresan en términos de una combinación de rojo, verde y azul. Cuando la pantalla no está encendida, es negra porque no emite ninguna luz. Este sistema de color se asemeja al de las pantallas de televisión.

## Colores nominales (_named colors_)

Si no necesitas un color exacto y te basta con poder elegir entre un grupo de colores determinados, lo más sencillo es usar el nombre del color que desees aplicar. En CSS se llama a estas opciones de color “_colores con nombre_” o "_colores nominales_". En la primera versión de CSS, la lista estaba limitada a 16 colores, pero con el paso del tiempo ha crecido enormemente:

![Colores nominales](./images/CSS_named_colors.png)

Ejemplo de sintaxis de uso de color nominal en un párrafo:

```CSS
p {
  background-color: royalblue; /* Fondo azul real */
  color: orange; /* Texto naranja */
}
```
	
![](./images/11-nominal-color.png)

>**Tip**: Puedes ver la [lista de colores nominales](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color) en la MDN.

### Transparent y currentColor

A mayores de las _keywords_ propias de colores, hay otras dos que puedes usar en cualquier propiedad que admita color:

- **_"transparent"_**: El valor "_transparent"_ establece un valor de color completamente transparente, lo que significa que el elemento al que se aplica no se mostrará. Por ejemplo:

```CSS
background-color: transparent;
```

* **_"currentColor"_**: Toma el valor del color actual del elemento, es decir, el valor de la propiedad '_color'_ del elemento. Esto es útil cuando se quiere aplicar el mismo color a diferentes propiedades. Por ejemplo:

```CSS
color: red;

border-color: currentColor;
```

En este ejemplo, el color de borde será rojo, que es el mismo valor que se ha establecido para el color del texto.


## Colores por RGB

Los ordenadores crean colores combinando diferentes niveles de rojo, verde y azul, una combinación que a menudo se conoce como color RGB (_Red, Green, Blue_). Tiene sentido que puedas tener acceso directo a esos colores, determinando una mezcla propia a partir de los tres primarios para contar con un máximo control. Esta solución es compleja pero posible, y los resultados valen la pena, ya que existen muy pocos límites en cuanto a los colores que es posible producir.

>**Tip**: Para entender cómo funcionan los colores _RGB_ hay que tener en cuenta que las pantallas funcionan con luz y que cada píxel se compone de una bombilla de intensidad regulable de cada uno de esos tres colores. Si las tres están apagadas tendríamos negro, si están totalmente encendidas se verá blanco; jugando con distintos niveles de cada una de ellas es como obtenemos los colores.


### **RGB funcionales**

La sintaxis genérica para este tipo de valor de color es `rgb(color)`, donde el color se expresa mediante un triplete de números enteros (rojo, verde, azul) en el rango de 0 a 255, donde 0 es apagado y 255 totalmente encendido:

```CSS
rgb(0, 0, 0) /* negro */
rgb(255, 255, 255) /* blanco */
rgb(128, 128, 128) /* gris medio */
rgb(255, 0, 0) /* rojo puro */
rgb(0, 255, 0) /* verde puro */
rgb(0, 0, 255) /* azul puro */
rgb(255, 255, 0) /* rojo + verde = amarillo */
rgb(0, 255, 255) /* verde + azul = cyan */
rgb(255, 0, 255) /* rojo + azul = magenta */
```

![](./images/11-rgb-color.png)
  

>**Tip**: Con la notación _rgb_ también se pueden usar porcentajes, aunque es menos habitual. Lo importante es usar la misma unidad para los tres valores (enteros o porcentajes). De esta forma, _rgb(0%, 0%, 0%)_ sería negro y _rgb(100%, 100%, 100%)_, blanco.

Ejemplo de sintaxis de uso de color RGB funcional en un párrafo:

```CSS
p {
  background-color: rgb(65, 105, 255); /* Fondo azul pálido */
  color: rgb(255, 165,116); /* Texto naranja */
}
```
	
![](./images/11-rgb-color-2.png)
	

![Ejemplo de colores RGB](./images/CSS_RGB_colors.png)

### Colores RGBa

A partir de CSS3, las dos notaciones _RGB_ funcionales se ampliaron a una notación funcional _RGBa_. Esta notación agrega un valor alfa al final de los tripletes _RGB_; por tanto, "_red-green-blue-alpha_" se convierte en _RGBa_. El _alpha_ es una medida de opacidad. En su caso, el valor va de 0 (totalmente transparente) a 1 (totalmente visible), aceptando cualquier valor decimal intermedio.

Por ejemplo, supón que quieres que el texto de un elemento sea blanco semitransparente. De esa manera, cualquier color de fondo detrás del texto "brillaría", mezclándose con el blanco semitransparente. Podrías hacerlo asignándole este color:

```CSS
rgb(255, 255, 255, 0.6)
```
	
![Ejemplo de color RGBa](./images/CSS_RGBa_example.png)

### Colores RGB hexadecimales

Posiblemente la notación de color más usada en web sea la hexadecimal.

>**Tip**: El sistema hexadecimal es un sistema numérico posicional que utiliza base 16, lo que significa que utiliza 16 dígitos diferentes para representar valores, en contraste con el sistema decimal que utiliza 10 dígitos. Los dígitos en el sistema hexadecimal son los números del 0 al 9 y las letras A, B, C, D, E y F, donde A representa el valor 10, B representa 11, C representa 12, y así sucesivamente hasta F, que representa el valor 15.

En este sistema, le asignas dos dígitos a cada color, de 00 a FF. Al ser hexadecimal, el número de combinaciones posibles es 256. Teniendo en cuenta que el 0 es una de esas opciones, el valor máximo (FF) sería el equivalente a 255 en el sistema decimal. ¿Te suena ese número?

Como puedes haber imaginado, el funcionamiento es exactamente el mismo que en la notación _rgb_ que vimos anteriormente; lo único que cambia es la sintaxis.

Ejemplo de sintaxis de uso de color RGB hexadecimal en un párrafo:

```CSS
p {
  background-color: #4169E1; /* Fondo azul pálido */
  color: #FFA574; /* Texto naranja */
}
```
	

![](./images/11-hexadecimal-color.png)

En este caso, el color debe ir precedido de almohadilla (`#`) y a continuación los 6 dígitos hexadecimales (dos por color). Cuando son letras se suele escribir en mayúsculas, pero no es necesario.

Los mismos colores que vimos en el ejemplo de RGB, pero en hexadecimal, serían:

```CSS
#000000 /* negro */
#FFFFFF /* blanco */
#808080 /* gris medio */
#FF0000 /* rojo puro */
#00FF00 /* verde puro */
#0000FF /* azul puro */
#FFFF00 /* rojo + verde = amarillo */
#00FFFF /* verde + azul = cyan */
#FF00FF /* rojo + azul = magenta */
```
	
![](./images/11-hexadecimal-color-2.png)


>**Tip**: Cuando para cada color usas los mismos dos dígitos, puedes abreviar en un solo dígito. Si CSS se encuentra con un hexadecimal de tres dígitos en lugar de seis, los duplicará:
>`#000 = #000000`
>`#F00 = #FF0000`
>`#ABC = #AABBCC`

### Colores RGBa hexadecimales

Una nueva notación hexadecimal (surgida a finales de 2017), agrega un cuarto valor hexadecimal para representar el valor del canal _alpha_. En este caso, en lugar de ser de 0 a 1, se mantiene de 0 a FF.

```CSS
background: #FFFFFFAA /* blanco con transparencia */
```

En este caso lo aplicamos como fondo del párrafo. El `body` tiene una imagen como fondo:

![Ejemplo de RGBa hexadecimal](./images/CSS_RGBa_hexadecimal.png)

>**Tip**: Al igual que el hexadecimal sin alfa, éste también se puede abreviar, quedando con cuatro dígitos:
>`#FFFFFFAA` = `#FFFA`

