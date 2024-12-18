## `overflow`

Al poder establecer un ancho y alto de las cajas manualmente puede ocurrir que en algunos casos el contenido no entre dentro de la caja, para establecer qué pasa con ese contenido que desborda puedes usar la propiedad '_overflow'_ que permite establecer estos valores (entre otros menos habituales):

- **_"auto"_**: si el contenido no coge en la caja lo que quede fuera no se verá y aparecerán unas barras de _scroll_ en la caja para poder ver ese contenido.
    
- **_"hidden"_**: el contenido que desborde no se verá.
    
- **_"visible"_**: el contenido que desborde se verá fuera de la caja. Este es el **valor por defecto**.

```CSS
/* overflow: auto - Si el contenido no coge, muestra barras de scroll */
.caja1 {
    overflow: auto;
}

/* overflow: hidden - Si el contenido no coge oculta el contenido desbordado */
.caja2 {
    overflow: auto;
}

/* overflow: visible - Muestra todo el contenido aunque este desborde de su caja */
.caja3 {
    overflow: auto;
}
```
	

![](./images/08-box-overflow.png)

El propósito de este ejemplo es mostrar cómo la propiedad '_overflow'_ afecta la forma en que el contenido que excede el área de un elemento se muestra en la página. Dependiendo de tus necesidades de diseño, puedes elegir el valor apropiado de '_overflow'_ para controlar cómo se maneja el contenido que excede el área de un elemento.

## `box-sizing`

La propiedad '_box-sizing'_ determina cómo se calculan las dimensiones de un elemento, en particular, cómo se manejan el '_width'_ (ancho) y '_height'_ (alto) en relación con el '_padding'_ (relleno) y '_border'_ (borde) del elemento.

En CSS, por defecto, el ancho total de una caja es la suma de su ancho más el '_padding'_ y el '_border'_ de cada lado. Si quieres cambiar este comportamiento por defecto puedes usar '_box-sizing'_ que dispone de los siguientes valores:

### `content-box`    

Es el valor por defecto. Si estableces un '_width'_ de la caja de 200px, para calcular el ancho total, el navegador sumará el '_border'_ y el '_padding'_.

```CSS
.caja {
    width: 200px;
    height: 200px;
    padding: 10px;
}
```
	
![Ejemplo de box-sizing: content-box](./images/CSS_content-box_example.png)

En este ejemplo, el tamaño total del elemento con la clase "_.caja"_ con la propiedad de '_box-sizing'_ como _“content-box”_ sería:

▪ Ancho: 230px → 200px del contenido + 20px del '_padding'_ (10px por cada lado) + 10px del `border` (5px por cada lado).

▪ Alto: 230px → igual que el ancho ya que el elemento es un cuadrado.

### `border-box`

Cambia el modelo de cajas completamente. Si, por ejemplo, estableces un ancho de 200px el ancho total siempre será 200px independientemente del ancho de '_border'_ y de '_padding'_.

```CSS
.container {
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    border: 5px solid #8b4513;
    padding: 10px;
}
```
	
![Ejemplo de content-box: border-box](./images/CSS_border-box_example.png)

Ahora, la caja tiene un tamaño total de 200px de ancho y 200px de alto, contando con el contenido, el '_padding'_ y el '_border'_. De este modo, no excede los valores de ancho y alto especificados. El tamaño total se distribuye entre el contenido, el '_border'_ y el '_padding'_. Por lo tanto, el espacio restante para el contenido sería de 170px:

▪ Ancho: 200px → 200px que definimos - 20px del '_padding'_ (10px por cada lado) - 10px del '_border'_ (5px por cada lado). Quedan 170px de ancho para el contenido.

▪ Alto: 200px → igual que el ancho ya que el elemento es un cuadrado. Quedan 170px para el contenido de alto.

## _display_

Todo el comportamiento del modelo de cajas descrito en los anteriores puntos se aplica a los elementos de tipo _block_, pero ya sabemos que hay otros elementos que son de tipo _inline_.

Veremos ahora las particularidades de cada tipo con respeto al modelo de cajas y cómo modificar mediante CSS el tipo de cada caja:

- **Cajas de bloque**: Los elementos de tipo _bloque_ se apilan unos sobre otros y tienen por defecto el ancho del contenedor del que son hijos. Puedes cambiar el ancho y alto de esas cajas con '_width'_ y '_height'_. Este tipo de cajas aplica el modelo de cajas tal como vimos hasta ahora.
    

- **Cajas _inline_**: Los elementos _inline_ fluyen con el texto, aparecen en la misma línea que el texto que los rodea y que otros elementos _inline_. Su contenido se distribuirá en diferentes líneas si se pasa de tamaño, incluso si eso supone "romper" su caja de forma que no sea rectangular. No puedes establecer ancho y alto de este tipo de cajas, pero sí '_margin'_ (solo márgenes horizontales), '_border'_ y '_padding'_; aunque el '_padding'_ no afectará al contenido que tenga encima o debajo, sí que alejará el borde o ampliará la zona que cubre el fondo.
    

- **Cajas _inline-block_**: Este tipo de cajas se puede definir solo por CSS y funciona como una mezcla de los anteriores. Puedes establecer '_width'_, '_height'_ y '_margin'_, pero pueden colocarse al lado de otros elementos _inline_ o _inline-block_, aunque siempre manteniendo su caja rectangular (a diferencia de _inline_).
    

Puedes modificar el tipo de caja usando la propiedad '_display'_ de CSS:

```CSS
h1 {
  display: inline;
}

strong {
  display: block;
}

span {
  display: inline-block;
}
```
	

![](./images/08-display.png)

En el ejemplo, el elemento `h2` actúa como un elemento en línea, lo que significa que se ubicará en la misma línea que otros elementos en línea, fluyendo junto al texto. Si el contenido del elemento `h2` supera el espacio disponible, se dividirá automáticamente en varias líneas. Por otro lado, el elemento `strong` se comporta como un elemento de bloque, ocupando todo el ancho de su contenedor y apilándose verticalmente sobre otros elementos de bloque. Los elementos `span` tienen un _display_ de tipo `inline-block`, lo que les permite actuar como una combinación entre elementos en línea y de bloque. Pueden colocarse junto a otros elementos en línea o `inline-block`, sin causar un salto de línea.

> **Tip**: Hay otros tipos de cajas que se llaman `flex` y `grid` que veremos más adelante.

