El diseño de cuadrícula (_Grid Layout_) es un sistema de diseño muy flexible que se enfoca en filas y columnas para crear estructuras de diseño. Aunque a primera vista puede parecer similar al diseño con tablas, en realidad es mucho más poderoso y versátil. Con _Grid_, puedes colocar partes del diseño en cualquier lugar independientemente del orden en que aparecen en el código, incluso superponer elementos. Además, existen métodos avanzados para definir patrones repetitivos de líneas de cuadrícula y adjuntar elementos a esas líneas. También puedes anidar cuadrículas dentro de cuadrículas o adjuntar tablas o contenedores _flexbox_ a una cuadrícula para crear diseños complejos. Con todas estas posibilidades, puedes hacer cosas realmente interesantes y crear diseños altamente personalizados y creativos.

Al igual que con _flex_ hay unos conceptos que tienes que tener claros con _Grid_:

- **Contenedor**: Es el elemento que se transforma en una cuadrícula a través de la propiedad CSS `display: grid`. Todas las propiedades del _Grid Layout_ se aplican sobre este elemento para organizar sus elementos hijos.
    

- **Ítems**: Son los hijos directos del contenedor. Cada uno de estos elementos puede ser colocado en una celda específica de la cuadrícula. También es posible agrupar varios elementos en una única área de la cuadrícula para posicionarlos juntos.
    

- **Líneas**: Se refiere a las líneas que delimitan las filas y columnas en la cuadrícula. Es crucial distinguir entre las líneas y las propias filas o columnas.
    

- **_Track_**: Este término designa las filas o columnas individuales que se crean dentro de la cuadrícula. Se definen mediante las propiedades '_grid-template-columns'_ y '_grid-template-rows'_. Estas propiedades permiten tanto especificar el tamaño de cada _track_ como la distribución del espacio entre ellos. Los _tracks_ pueden ser explícitos o implícitos, lo que ofrece una gran versatilidad en la disposición de los elementos.
    

- **Celda**: Una celda es la intersección entre una fila y una columna, es decir, cada uno de los rectángulos que resultan del cruce de las líneas de la cuadrícula. En principio, las celdas contienen un solo elemento, aunque existen métodos para que contengan más de uno. En ese caso, los elementos se superpondrán.
    

- **Área**: Es un conjunto de celdas que se pueden asignar a un ítem específico para posicionarlo dentro de la cuadrícula. Las áreas se definen mediante las líneas que las delimitan, lo que permite crear áreas de distintas dimensiones, siempre y cuando sean rectangulares. Esta funcionalidad facilita la creación de diseños más complejos al permitir que un único elemento ocupe múltiples celdas.

![Ejemplo de Grid](./images/CSS_grid_example.png)

>**Tip**: Como ves, a diferencia de _flex_, ya no hablamos de eje principal y secundario, ya que en _grid_ tenemos pleno control sobre ambos.

## Creando un contenedor Grid

Existen dos tipos de cuadrículas: _cuadrículas regulares_ y _cuadrículas en línea_. Estas se crean con `display: grid;` y `display: inline-grid` respectivamente. La primera genera un cuadro de nivel de bloque y la segunda un cuadro de nivel en línea. Puedes apreciar la diferencia en la siguiente imagen:

![Ejemplo de display:grid vs display inline-grid](./images/CSS_grid_inline-grid.png)

Estas son muy similares a los valores de _block_ e _inline-block_ para '_display'_. Es probable que la mayoría de las cuadrículas que crees sean de nivel de bloque, aunque la capacidad de crear cuadrículas en línea siempre estará ahí.

>**Tip**: Para poder visualizar las líneas _grid_ en el navegador, abre las “_Herramientas para Desarrolladores”_ de tu Google Chrome y, en la pestaña “_Elements_”, pulsa sobre el botón con nombre “_grid_” en el elemento que define la cuadrícula. Este botón activará o desactivará la visualización de las líneas _grid_.
>
>![Activar línes Grid en Developer Tools](./images/CSS_grid_Developers_Tools.png)


### Definiendo filas y columnas

Para crear una cuadrícula en un elemento necesitas aplicar la propiedad CSS `display: grid`. Por defecto se generará una única columna que ocupe el 100% del ancho de su padre, y tantas filas como elementos con la altura que éstos marquen, por lo que, a diferencia de _Flexbox_, aplicar esta propiedad aparentemente no modifica el diseño del contenido. Es necesario que definas las columnas y/o filas de la cuadrícula mediante las propiedades '_grid-template-columns'_ y '_grid-template-rows'_. Estas propiedades son las encargadas de definir los _tracks_ de la cuadrícula.

```CSS
.container {
    display: grid;
    grid-template-columns: 500px 20rem;
    grid-template-rows: 100px 100px 100px;
}
```

En el ejemplo se define una cuadrícula con dos columnas de diferentes anchuras (500px y 20rem) y tres filas de igual altura fija de 100 píxeles cada una. Por cada valor (separados por espacios) indicado se creará una fila/columna de ese tamaño. Como ves, se puede usar cualquier unidad de medida de CSS y combinarlas a tu antojo.

También puedes usar las unidades especiales:

- **_auto_**: primero colocará todas las filas o columnas que tengan definido un tamaño y después llenará el espacio sobrante hasta llenar el contenedor con las filas/columnas que tengan tamaño _auto_ siendo el tamaño mínimo el determinado por el contenido de estas.

```CSS
.container {
    display: grid;
    grid-template-columns: auto 200px;
    grid-template-rows: 100px;
}
```

En este ejemplo, la primera columna tendrá un tamaño dinámico en función del contenido que contenga (texto, imágenes, etc.), mientras que la segunda columna tendrá un tamaño fijo de 200px. Si sobra espacio en el contenedor, lo "absorberá" la primera columna. La fila, por su parte, tendrá un tamaño fijo de 100px.

- **_fr_**: La unidad `fr` (de "_fraction_") define el tamaño de las columnas y filas de una cuadrícula en proporción al espacio disponible en el contenedor.

```CSS
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
```

En el ejemplo, la primera columna ocupará _1/3_ del espacio disponible en la cuadrícula, mientras que la segunda ocupará _2/3_ del espacio disponible.

> **Tip**: En caso de que no sobre espacio, _fr_ respetará el mínimo que necesite el contenido, de modo que no lo cortará ni provocará _overflow_.

>**Tip**: En caso de combinar _auto_ y _fr_, _auto_ siempre se ajustará al contenido y el espacio sobrante se lo llevará _fr_. Muy útil para ciertos diseños en los que queremos dar a un elemento el tamaño justo que necesite, pero no sabemos cual es (por ejemplo, porque el contenido es dinámico).


### Unidades fraccionarias (_fr_)

La unidad _fr_ divide el espacio disponible en el contenedor en proporción a su valor, de manera similar a cómo funciona '_flex-grow'_ y '_flex-shrink'_ en _Flexbox_. Se utiliza para definir el tamaño de las filas y columnas de una cuadrícula en relación al espacio disponible.

En el caso más simple, puedes dividir todo el contenedor en fracciones iguales. Por ejemplo, si quieres cuatro columnas, puedes escribir:

```CSS
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
```

Este caso concreto, sería equivalente a decir:

```CSS
.container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
}
```
	
![Ejemplo de unidades fr](./images/CSS_fr_units.png)

Ahora, supón que necesitas agregar una quinta columna y redistribuir el tamaño de la columna para que todas sigan siendo iguales. Con porcentajes, tendrías que reescribir el valor completo para que sea cinco instancias de _20%_. Sin embargo, con _fr_, simplemente puedes agregar otro _1fr_ al valor y esperar a que la magia se produzca automáticamente:

```CSS
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
```

La forma en que funcionan las unidades _fr_, es que todos los valores _fr_ se suman, con el espacio disponible dividido por ese total. Luego, cada pista (_track_) obtiene el número de esas fracciones indicadas por su número.

Si quieres dividir un espacio de modo que haya tres columnas, con la columna del medio dos veces más ancha que las otras dos, podrías escribirlo así:

```CSS
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}
```

Para entender cómo se calcula el ancho de cada columna, primero se suman las unidades _fr_: `1 + 2 + 1 = 4`. A continuación, se divide el ancho total del contenedor (por ejemplo, 100px) entre la suma de las unidades _fr_: `100 / 4 = 25`. Finalmente, se multiplica el ancho de cada columna por su unidad _fr_ correspondiente: la primera y la tercera columna tendrán un ancho de 25px cada una, mientras que la segunda columna tendrá un ancho de 50px (`25 x 2`).

Las unidades fraccionarias realmente destacan cuando hay algunas columnas fijas ya que lo que se reparten es siempre el espacio sobrante. Por ejemplo:

```CSS
.container {
    display: grid;
    grid-template-columns: 15em 1fr 10%;
}
```
	
![Ejemplo de medidas fijas y flexibles](./images/CSS_measures_fixed_flexibles.png)

En el ejemplo, tenemos una mezcla de columnas fijas y flexibles. Podemos continuar con esto, dividiendo cualquier espacio flexible en tantas fracciones como queramos. Veamos a continuación:

```CSS
.container {
    width: 100em;
    display: grid;
    grid-template-columns: 15em 4.5fr 3fr 10%;
}
```
	
![Ejemplo de medidas flexibles](./images/CSS_em_fr_example.png)

Los anchos de las columnas serán, de izquierda a derecha: 15em, 45em, 30em y 10em. La primera columna obtiene su ancho fijo de 15em. La última columna es el 10% de 100em, que son 10em. Eso deja 75em para distribuir entre las columnas flexibles. Los dos sumados dan 7.5_fr_. Por tanto, cada fracción (_1fr_) es de 10em. Si lo multiplicamos por los valores correspondientes nos da los 45em y 30em que mencionábamos.


### minmax(…)

En los casos en los que necesites definir un tamaño mínimo o máximo para una _track_ determinada, `minmax()` puede ser bastante útil. Para ampliar el ejemplo anterior, supón que la tercera columna nunca debe tener menos de 5cm de ancho, pase lo que pase, entonces se incluiría lo siguiente:

```CSS
.container {
    width: 100em;
    display: grid;
    grid-template-columns: 15em 4.5fr minmax(5em, 3fr) 10%;
}
```

Como es lógico, alguna de las dos medidas siempre debe ser flexible o relativa. En el caso de _fr_, **no** está permitido usarla para el mínimo.

Ahora el diseño tendrá dos columnas flexibles en el medio, hasta el punto en que la tercera columna alcance los 5em de ancho. Por debajo de ese punto, el diseño tendrá tres columnas inflexibles (15em, 5em y 10% de ancho, respectivamente) y una única columna flexible que ocupará todo el espacio sobrante, si lo hay.

Si se da el caso de que la medida establecida como mínima es mayor a la máxima (por combinar, por ejemplo, fija y relativa), se aplicará la mínima entre ambas medidas.

### repeat(…)

En caso de que quieras crear filas/columnas con la misma medida, o repitiendo una secuencia, puedes usar la función `repeat()`.

```CSS
.container {
  display: grid;
  grid-template-columns: repeat(4, 100px); /* Esto creará 4 columnas de 100px */
}

.container {
  display: grid;
  grid-template-rows: repeat(3, 10rem 5rem); /* Esto creará: 10rem 5rem 10rem 5rem 10rem 5rem */
```

Como puedes comprobar en el ejemplo, dentro de los paréntesis indicamos primero la cantidad de veces que se repite y, separado por una coma, los tamaños de las columnas a repetir.

>**Tip**: Ten en cuenta que lo que le indicamos a _repeat_ es el número de veces que queremos repetir la secuencia, y no el número de columnas que obtendremos. Si repetimos cuatro veces dos columnas, tendremos un total de 8 columnas.

En lugar de especificar un número de veces para que se repita, puedes usar la palabra clave `auto-fit`. Combinándola con `minmax` puedes crear _cuadrículas responsive_ sin _media queries_.

Con `minmax`, defines el tamaño mínimo y máximo de las columnas y `auto-fit` se encargará de encajar todas las que pueda en el contenedor respetando el mínimo y, si sobra algo de espacio, ya sea porque no hay más elementos o no caben más sin encogerlos, estirará todas las columnas de la misma forma hasta llegar al máximo. Si ese máximo es _auto_ o _fr_, ocuparán siempre todo el contenedor.

```CSS
body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 100px;
}
```
	
```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .body {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-auto-rows: 100px;
      }

      div {
        background: #f0e68c;
        border: 2px solid #8b4513;
      }
    </style>
  </head>
  <body>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </body>
</html>
```
	
![](./images/21-grid.png)

Existe también el valor `auto-fill` para utilizar con la propiedad `repeat()`. La principal diferencia entre `auto-fit` y `auto-fill` es que, `auto-fill` llena todo el espacio disponible con celdas y puede crear celdas vacías si hay espacio sobrante, mientras que `auto-fit` ajusta el número de celdas para que se ajusten al espacio disponible y no crea celdas vacías.

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      #auto-fit {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 100px;
      }
      #auto-fill {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: 100px;
      }
      div {
        background: #f0e68c;
        border: 2px solid #8b4513;
      }
    </style>
  </head>
  <body>
      <h2>auto-fit</h2>
      <section id="auto-fit">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>

      <h2>auto-fill</h2>
      <section id="auto-fill">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
  </body>
</html>
```
	
![Ejemplo de auto-fit vs auto-fill](./images/CSS_auto-fit_auto-fill.png)

La diferencia entre ellas es la forma en que se ajustan las columnas. En `auto-fit`, se ajusta el número de columnas de la cuadrícula para ajustarse al ancho disponible en la pantalla, lo que significa que puede haber algunas columnas vacías al final si no hay suficiente contenido para llenarlas.


### _Grid_ implícita

Quizás te hayas fijado en el ejemplo anterior en la propiedad '_grid-auto-rows'_ de la que aún no hemos hablado.

La realidad es que en ocasiones, los elementos se van a "salir" de la cuadrícula que definas, por varios motivos:

- Hay más elementos que celdas definidas.
    
- Has indicado a un elemento que ocupa más celdas que las que definiste.
    
- Has posicionado un elemento en una celda que no está definida.
    

Cuando esto ocurre, lo que hace CSS es autocompletar la cuadrícula con las filas o columnas necesarias. ¿De qué tamaño? Por defecto, _auto_; pero puedes cambiar ese valor con '_grid-auto-rows'_ para las filas y '_grid-auto-columns'_ para las columnas.

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Grid</title>
    <style>
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100px;
        /* Definimos una altura flexible de 1fr para las filas que no están definidas explícitamente. */
        grid-auto-rows: 1fr;
      }
      div {
        background: #f0e68c;
        border: 2px solid #8b4513;
      }
    </style>
  </head>
  <body>
    <section class="container">
      <div>Explícita</div>
      <div>Explícita</div>
      <div>Explícita</div>
      <div>Implícita</div>
      <div>Implícita</div>
    </section>
  </body>
</html>
```
	
![](./images/21-grid-2.png)

A estas propiedades, también les puedes dar varios valores separados por espacios. En ese caso funcionará como _repeat_, repitiendo los valores secuencialmente, con la diferencia de que se limitará a crear las estrictamente necesarias.

Cuando el problema es que hay demasiados elementos, puedes decidir si se generan filas o columnas por medio de '_grid-auto-flow'_, que acepta estos valores:

- **_row_**: genera nuevas filas (por defecto).
    
- **_column_**: genera nuevas columnas.
    
- **dense**: se puede combinar con los anteriores (separando con espacio). Si ha quedado algún hueco en la _grid_, intentará rellenarlo aunque implique cambiar el orden de los elementos.

### Grid areas

En _Grid_, un área es un conjunto rectangular de celdas asignadas a un elemento. Dos áreas pueden superponerse en una misma celda, pero no se permiten áreas con formas no rectangulares, como en “T” o en “L”.

Para asignar áreas a un elemento, se especifican las líneas de inicio y fin de la fila y la columna separadas por barra inclinada `/` (_fila de inicio / columna de inicio / fila de fin / columna de fin_):

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .container {
        border: 2px solid grey;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 100px);
      }

      div {
        /* fila de inicio / columna de inicio / fila de fin / columna de fin */
        grid-area: 1 / 1 / 2 / 4;
        font-size: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f0e68c;
        border: 6px solid #8b4513;
      }
    </style>
  </head>
  <body>
      <section class="container">
        <div>HEADER</div>
      </section>
  </body>
</html>
```
	
![Ejemplo de Grid áreas](./images/CSS_grid_areas.png)

También se pueden usar valores negativos, en este caso, la numeración de las líneas comienza desde el final de la cuadrícula. Es decir, -1 es la última línea, -2 es la penúltima, y así sucesivamente.

El siguiente fragmento de código define el mismo elemento `div` que el ejemplo anterior:

```CSS
div {
    /* fila de inicio / columna de inicio / fila de fin / columna de fin */
    grid-area: 1 / 1 / -3 / -1;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0e68c;
    border: 6px solid #8b4513;
}
```

Sin embargo, para trabajar con ellas de forma más fácil, puedes asignar nombres mediante la propiedad '_grid-template-areas'_ del contenedor, y luego asociar esos nombres a los elementos con '_grid-area'_. Cada palabra define una columna y las comillas simples `‘` o dobles `“` separan filas. Las celdas con el mismo nombre forman un área (siempre rectangular).

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 100px 1fr 50px;
        grid-template-areas:
          'header header header'
          'main main aside'
          'footer footer footer';
        height: 100vh;
      }

      header {
        grid-area: header;
        background-color: #333;
        color: white;
      }
      main {
        grid-area: main;
        background-color: #ddd;
      }
      aside {
        grid-area: aside;
        background-color: #aaa;
      }
      footer {
        grid-area: footer;
        background-color: #333;
        color: white;
      }
    </style>
  </head>
  <body>
    <section class="container">
        <header>Header</header>
        <main>Content</main>
        <aside>Aside</aside>
        <footer>Footer</footer>
    </section>
  </body>
</html>
```
	
![](./images/21-grid-3.png)

En el ejemplo se utiliza '_grid-template-areas'_ para asignar nombres a las diferentes áreas que forman la cuadrícula. Se definen cuatro áreas: `header`, `main`, `asider` y `footer`. La primera fila está ocupada por el `header`, la segunda por el `main` junto con el `aside` y la tercera por el `footer`.

### **Cómo colocar elementos en la cuadrícula**

Además del uso de las áreas, puedes indicar directamente dónde quieres colocar un elemento en la cuadrícula. Para eso puedes usar las siguientes propiedades, todas aceptan un numero entero como valor:

- **_"Grid-column-start"_**: En qué línea de columnas empezará el elemento.
    
- **_"Grid-column-end"_**: En qué línea de columnas acaba el elemento.
    
- **_"Grid-row-start"_**: En qué línea de fila empieza el elemento.
    
- **_"Grid-row-end"_**: En qué línea de fila acaba el elemento.
    

Además las puedes abreviar en:

- **_grid-column: start / end_**
    
- **_grid-row: start / end_**

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Posicionamiento Grid</title>
    <style>
      .container {
        display: grid;
        width: 100wv;
        height: 200px;
        grid-row: repeat(4, 1fr);
        grid-column: repeat(3, 1fr);
        border: 2px solid grey;
        padding: 4px;
      }

      .box {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
      }

      .box01 {
        grid-column: 1 / 3; /* empieza en la línea 1 y acaba en la 3 */
        grid-row: 1;
        border: 6px solid red;
      }
      .box02 {
        grid-column: 3 / 4; /* empieza en la línea 3 y acaba en la 4 */
        grid-row: 1 / 3; /* empieza en la línea 1 y acaba en la 3 */
        border: 6px solid goldenrod;
      }
      .box03 {
        grid-column: 4;
        grid-row: 1 / 4;
        border: 6px solid yellow;
      }
      .box04 {
        grid-column: 1;
        grid-row: 2 / 4;
        border: 6px solid lime;
      }
      .box05 {
        grid-column: 2 / 5;
        grid-row: 3;
        border: 6px solid rebeccapurple;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box box01">Box 1</div>
      <div class="box box02">Box 2</div>
      <div class="box box03">Box 3</div>
      <div class="box box04">Box 4</div>
      <div class="box box05">Box 5</div>
    </div>
  </body>
</html>
```
	
![](./images/21-grid-4.png)

Si delante del número entero añades la palabra clave `span`, en lugar de colocar el elemento según la línea hará que mida ese número de celdas, cumpliendo el resto de condiciones o los valores por defecto.

```CSS
.box05 {
    grid-column: 2 / span 2; /* empieza en la línea 2 y ocupa 2 celdas */
    grid-row: 3; /* empieza en la línea 3 y ocupa 1 celda */
    border: 6px solid rebeccapurple;
}
```
	
![](./images/21-grid-5.png)


## Alineación

La alineación en _grid_ se parece mucho a la de _flex_, con la diferencia de que tienes control total sobre los dos ejes. En _grid_ puedes decir que `justify-` es para el eje horizontal y `align-` para el eje vertical. Como referencia, el principio siempre es la esquina superior izquierda.

### Ítems

Cuando los elementos no necesitan ocupar toda la celda o área que se les corresponde, puedes decidir dónde se ubica dentro de ésta. Para el eje vertical será con '_align-items'_ y para el horizontal, '_justify-items'_. En ambos casos los posibles valores son los mismos:

- **_"start"_, "_end"_, "_center"_**: colocan cada elemento al princio, al final o en el medio de la celda respectivamente.
    
- **_"baseline"_**: alinea los hijos según la línea base del texto (se usa poco), si el texto está en horizontal, solo tendrá sentido en vertical.
    
- **_"stretch"_**: estira los elementos para ocupar todo el espacio de la celda o área (valor por defecto)

```CSS
#grid {display: grid;
       
align-items: center; justify-items: center;}
```
	
![Ejemplo de Grid justify-items](./images/CSS_grid_justify.png)


### Content

Cuando la suma de todas las filas/columnas no ocupa todo el contenedor, puedes decidir qué hacer con el espacio sobrante, como en _flex_. Para el eje vertical la propiedad es '_align-content'_ y para el horizontal, '_justify-content'_.

- **_"start"_**: las filas/columnas estarán apiladas al principio del contenedor. Todo el espacio sobrante se colocará al final (valor por defecto)
    
- **_"end"_**: las filas/columnas estarán apiladas al final del contenedor. El espacio sobrante se queda al principio.
    
- **_"center"_**: las filas/columnas estarán apiladas en el centro del contenedor. El espacio sobrante se reparte a partes iguales a los dos lados.
    
- **_"space-between"_**: las filas/columnas se distribuirán ocupando todo el eje correspondiente, estando el primero pegado al principio del contenedor y el último al final de este. El espacio sobrante se reparte a partes iguales en cada "hueco" entre celdas.
    
- **_"space-around"_**: similar al anterior pero el espacio se reparte a partes iguales alrededor de cada celda, sin colapsar. El resultado es que hay el doble de espacio entre celdas que hacia los extremos.
    
- **_"space-evenly"_**: hace que todas las separaciones, incluidas la inicial yla final, sean iguales.

![Ejemplo Grid justify-content](./images/CSS_grid_justify-content.png)
	
![Ejemplo de Grid align-content](./images/CSS_grid_align-content.png)

## Superposición y orden

Es muy posible que los elementos _grid_ se superpongan entre sí, ya sea porque se usan márgenes negativos para desplazar un elemento _grid_ más allá de los bordes de su área de cuadrícula (_grid_), o porque las áreas _grid_ de dos diferentes elementos comparten celdas _grid_ (_grid cells_).

De forma predeterminada, los elementos _grid_ se superpondrán visualmente, según su orden de origen en el documento: los elementos _grid_ que aparezca posteriormente en el documento, aparecerán delante de aquellos que han sido registrados antes. Puedes verlo más claramente en el siguiente código (asumiendo que el número en cada nombre de _class_ representa el orden de origen del elemento _grid_).

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Posicionamiento Grid</title>
    <style>
      .container {
        display: grid;
        width: 80%;
        height: 20em;
        grid-row: repeat(10, 1fr);
        grid-column: repeat(10, 1fr);
        border: 2px solid grey;
        padding: 4px;
      }

      .box {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
      }

      .box01 {
        grid-row: 1 / span 4;
        grid-column: 1 / span 4;
        border: 6px solid red;
      }
      .box02 {
        grid-row: 4 / span 4;
        grid-column: 4 / span 4;
        border: 6px solid goldenrod;
      }
      .box03 {
        grid-row: 7 / span 4;
        grid-column: 7 / span 4;
        border: 6px solid yellow;
      }
      .box04 {
        grid-row: 4 / span 7;
        grid-column: 3 / span 2;
        border: 6px solid lime;
      }
      .box05 {
        grid-row: 2 / span 3;
        grid-column: 4 / span 5;
        border: 6px solid rebeccapurple;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box box01">Box 1</div>
      <div class="box box02">Box 2</div>
      <div class="box box03">Box 3</div>
      <div class="box box04">Box 4</div>
      <div class="box box05">Box 5</div>
    </div>
  </body>
</html>
```
	
![](./images/21-grid-6.png)

Recuerda por lecciones anteriores que puedes solucionarlo con la propiedad '_z-index'_, pero en _grid_ existe otra forma de hacerlo y es mediante la propiedad '_order'_.

Puedes usarlo para definir el orden en el que aparecen los elementos, como en _flex_:

```CSS
.box02 {order: 10;}
```
	
![Ejemplo Grid de order](./images/CSS_box_order_example.png)

Pero como en _grid_ tienes totalmente el control sobre dónde posicionar cada elemento, también puedes usarlo para solucionar el problema anterior, teniendo en cuenta que aparecerán por encima los elementos con mayor _order_.

Añadiendo la propiedad `order: 10;` al elemento con clase ".box02_"_ el ejemplo anterior quedaría así:

![](./images/21-grid-7.png)

> **Tip**: Puedes aprender más sobre _Grid_ visitando la sección correspondiente en la [documentación de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid). También puedes echar un vistazo al video de [este enlace](https://www.youtube.com/watch?v=EiNiSFIPIQE) en Youtube (en inglés).

>**Tip**: Prueba [Grid Garden](https://cssgridgarden.com/#es), un juego interactivo para practicar el uso de _Grid._

