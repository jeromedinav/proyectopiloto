Flexbox es una forma simple y potente de diseñar los componentes de una página, determinando cómo se distribuirá el espacio, cómo será alineado el contenido y cómo se ordenarán visualmente los elementos. El contenido se puede organizar fácilmente de forma vertical u horizontal, y se puede distribuir a lo largo de un solo eje o envolverse en varias líneas. Y mucho, mucho más.

Con Flexbox, la apariencia del contenido puede ser independiente del orden de origen que ocupa un elemento. Aunque sean visualmente modificadas, las propiedades flexibles no deberían afectar al orden en el que los lectores de pantalla interpretan el contenido.

>**Tip**: Los lectores de pantalla que siguen el orden de origen están en la especificación, pero el navegador Firefox actualmente sigue el orden visual. Existe una discusión en la comunidad de accesibilidad de que este "error" de Firefox debe ser el comportamiento correcto, por lo que la especificación puede cambiar.

Quizás lo más importante en el diseño de módulos de _caja flexible_, es que puedes hacer que los elementos se comporten de manera predecible con relación a diferentes tamaños de pantalla y a diferentes dispositivos de visualización. Flexbox funciona muy bien con sitios adaptables o _responsive_, ya que el contenido puede aumentar y disminuir de tamaño cuando el espacio proporcionado aumenta o disminuye.

Flexbox funciona a partir de una relación “_padre-hijo_”. El diseño de Flexbox se activa declarando `display: flex` o `display: inline-flex` en un elemento. Este elemento se convierte en un contenedor flexible, organizando a sus hijos dentro del espacio provisto y controlando, además, su disposición. Los elementos secundarios de este contenedor flexible se convierten igualmente en elementos flexibles. Observa el siguiente HTML y CSS:

> _HTML_
```HTML
<section id="one">
<p>item flex con<br>2 líneas largas</p> <span>item flex</span>
<p>item flex</p>
</section>
<section id="two">
<span>item flex con<br>2 líneas largas</span> <span>item flex</span>
<p>item flex</p>
</section>
```

> _CSS_
```CSS
section#one {display: flex;}
section#two {display: inline-flex;}
section {border: 1px dashed; background: silver;} 
section > * {border: 1px solid; background: #AAA;} 
section p {margin: 0;}
```
	
![Ejemplo de display:flex vs display:inline-flex](./images/CSS_dipslay_flex_inline-flex.png)

Fíjate en cómo cada elemento secundario de los `section` se convierte en un elemento flexible. ¿Cómo se dispusieron todos de la misma manera? Sin importar que unos fueran párrafos y otros _span_, todos se convirtieron en ítems flexibles.

La única diferencia real entre el primer y el segundo contenedor flexible es que uno se configuró en `display: flex` y el otro en `display: inline-flex`. En el primero, `section` se convierte en una caja de bloque con un diseño flexible en su interior. En el segundo, `section` se convierte en una caja _inline-block_ en línea con _flex_.

La clave para tener en cuenta es que una vez que se configura un elemento para que sea un contenedor flexible, solo volverá flexibles a sus hijos inmediatos, y no a otros descendientes. Sin embargo, también puedes hacer que esos descendientes tengan contenedores “_flex_”, lo que permite realizar algunos diseños realmente complejos.

Existen unos conceptos que hay que tener claro para trabajar con flex:

- **Contenedor**: el elemento que tiene `display: flex`. Es al que le aplicarás la mayoría de propiedades de _flex_ para organizar a sus hijos.
    
- **Ítems**: los hijos directos del contenedor, que se ven afectados por las propiedades _flex_ de éste.
    
- **Eje principal**: el eje en el que se distribuyen los _ítems_. Por defecto es el horizontal.
    
- **Eje secundario**: eje perpendicular al principal. Por defecto, vertical.

## Propiedades del contenedor

### `flex-direction`

Define cual es el eje principal y en qué dirección va. Las opciones son:

- **_"row"_**: horizontal de izquierda a derecha. Es el valor por defecto.
    
- **_"row-reverse"_**: horizontal, pero de derecha a izquierda.
    
- **_"column"_**: vertical, de arriba a abajo.
    
- **_"column-reverse"_**: vertical, pero de abajo a arriba.
    

Sintaxis
```CSS
container {
    flex-direction: value;
}
```
	
![Ejemplo de flex-direction](./images/CSS_display_flex-direction.png)

>**Tip**: Es importante tener claro cual es el eje principal y en qué dirección va, ya que las propiedades de posicionamiento dependen de él.


### `flex-wrap`

En caso de que los elementos no quepan en el eje principal, puedes usar esta propiedad para definir cómo se distribuyen en el eje secundario.

- **_"nowrap"_**: los elementos no se distribuyen, se "aplastan" todo lo que puedan para intentar encajar. Si siguen sin caber, provocan _overflow_. Es el comportamiento por defecto.
    
- **_"wrap"_**: los elementos se distribuyen por el eje secundario, creando nuevas filas o columnas según si la '_flex-direction'_ es "_row"_ o "_column"_, respectivamente.
    
- **_"wrap-reverse"_**: Lo mismo que "_wrap"_, pero en dirección contraria a la por defecto.
    

Sintaxis
```CSS
container {
    flex-wrap: value;
}
```

> _HTML_
```HTML
<section class="flex-container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
</section>
```

> _CSS_
```CSS
.flex-container {
    display: flex;
    width: 200px;
}

.wrap {
    flex-wrap: wrap;
}

.nowrap {
    flex-wrap: nowrap;
}

.wrap-reverse {
     flex-wrap: wrap-reverse;
}

.box {
    width: 75px;
    height: 75px;
}
```
	
![](./images/16-wrap.png)

>**Tip**: _"wrap-reverse"_ no se limita a colocar los ítems en dirección contraria: le da la vuelta al eje. Como comentamos en el _tip_ anterior, será importante para la alineación.


### `justify-content`

En caso de que sobre espacio en el eje principal, bien porque los elementos no lo llenan o porque tienen "_wrap"_ (y sobra en la última fila/columna), puedes decidir qué hacer con ese espacio extra:

- **_"flex-start_**: los hijos estarán apilados al principio de la línea definida por el eje. Todo el espacio sobrante se colocará al final (valor por defecto)
    
- **_"flex-end"_**: los hijos se apilarán al final de la línea. El espacio sobrante se queda al principio.
    
- **_"center"_**: los hijos se apilarán en el centro de la línea. El espacio sobrante se reparte a partes iguales a los dos lados.
    
- **_"space-between"_**: los hijos se distribuirán ocupando toda la línea correspondiente estando el primero pegado al principio de la línea y el último al final de la misma. El espacio sobrante se reparte a partes iguales en cada "hueco" entre elementos.
    
- **_"space-around"_**: similar al anterior pero el espacio se reparte a partes iguales alrededor de cada elemento, sin colapsar. El resultado es que hay el doble de espacio entre elementos que hacia los extremos.
    
- **_"space-evenly"_**: hace que todas las separaciones incluidas la inicial y la final sean iguales.
    

Sintaxis
```CSS
.container {
    display: flex;
    justify-content: value;
}
```
	
![](./images/16-justify-content.png)

>**Tip**: Fíjate en que en ningún momento hablamos de "izquierda", "derecha", "arriba" o "abajo", sino que siempre nos referimos al principio o el final del eje. A esto es a lo que nos referíamos en los _tips_ anteriores. El mismo valor de '_justify-content'_ dará resultados diferentes según la dirección.

### `align-content`

Aunque es más habitual usar '_align-items'_ para alinear en el eje secundario, '_align-content'_ puede ser interesante, especialmente cuando hay "_wrap"_.

Sintaxis
```CSS
container {
    align-content: value;
}
```

A lo largo del eje secundario, se crean unas líneas paralelas al principal, que definen las filas/columnas de elementos. Si sobra espacio en el contenedor, puedes definir cómo se distribuyen esas líneas en el eje secundario igual que con '_justify-content'_ en el principal.

Los valores son los mismos, pero a mayores tiene la opción de "_stretch"_ que estira las líneas para que ocupen todo el contenedor. Es el valor por defecto. En cualquier otro caso, el tamaño se ajustará al elemento más grande.

### `align-items`

Esta propiedad es similar a las anteriores pero se aplica a la distribución de los ítems dentro de las filas/columnas. De nuevo, para que aplique, debe sobrar espacio, por lo que solo funcionará si '_align-content'_ está en su valor por defecto ("_stretch"_) o los elementos son de distintos tamaños:

- _"_**_flex-start_**_"_, "**_flex-end_**_"_**,** "**_center_**_"_: igual que en el caso de '_justify-content'_.
    
- **_"baseline"_**: alinea los hijos según la línea base del texto (se usa poco).
    
- **_"stretch"_**: estira los elementos para ocupar todo el espacio del contenedor (valor por defecto).
    

Sintaxis
```CSS
.container {
    display: flex;
    align-items: value;
}
```
	
![](./images/16-align-items.png)

### gap

Establece la distancia mínima entre elementos. En caso de que '_justify-content'_ o '_align-content'_ tengan asignado un valor de espacio flexible (_space-algo_), la distancia puede ser mayor según el espacio sobrante, pero nunca inferior al gap definido.

## Propiedades de los hijos

Hay una serie de propiedades de _flex_ que se les aplican directamente a los hijos, ya que normalmente no nos interesará aplicárselas a todos.

### `order`

Determina el orden en el que van a aparecer los hijos distribuidos por _flex_ independientemente del orden en que aparezcan en el HTML. Acepta como valor números enteros, positivos o negativos. Cuanto mayor el número más hacia el final del eje se colocará y viceversa. Su valor por defecto es 0.

Sintaxis
```CSS
.flex-item {
    order: value;
}
```

Donde "_value"_ es un número entero que determina el orden en el que se mostrará el elemento. Los elementos con valores más bajos se mostrarán antes que los elementos con valores más altos. Si varios elementos tienen el mismo valor de '_order'_, se mostrarán en el orden de aparición en el código.

### `flex-grow`

Determina si un hijo puede aumentar su ancho o alto para ocupar el espacio libre disponible en el eje correspondiente. Sus valores posibles son cualquier número entero positivo. Los elementos con un valor más alto crecerán más en proporción a aquellos con valores más pequeños. Su valor por defecto es 0, por lo que en principio nunca crecen.

Sintaxis
```CSS
.flex-item {
    flex-grow: value;
}
```

### `flex-shrink`

Lo mismo que el anterior, pero, en lugar de aumentar, sería disminuir si los hijos ocupan más espacio del disponible en el eje del contenedor; por lo que solo aplica si no hay "_wrap"_. En este caso, el valor por defecto es 1; si lo estableces a 0, no encogerán.

Sintaxis
```CSS
.flex-item {
    flex-shrink: value;
}
```

> **Tip**: Incluso si se establece un 'flex-shrink' muy alto, siempre respetará el espacio que necesite el contenido, por lo que no provoca overflow en el elemento (puede provocarlo en el padre).

### `flex-basis`

Determina el tamaño por defecto del hijo antes de que _flex_ distribuya el espacio. Puedes asignarle cualquier medida. Valor por defecto: _auto_.

Sintaxis
```CSS
.flex-item {
    flex-basis: value;
}
```

### `align-self`

Permite establecer un valor propio del hijo que se aplicaría en lugar del valor asignado por el '_align-items'_ definido en el contenedor. Los valores son los mismos que para '_align-items'_.

Sintaxis
```CSS
.flex-item {
    align-self: value;
}
```

>**Tip**: Aquí puedes encontrar una guía interactiva para comprobar las propiedades de _flex_: [Flexbox playground](https://codepen.io/enxaneta/full/adLPwv).

>**Tip**: Y aquí un [video de 8 minutos](https://www.youtube.com/watch?v=phWxA89Dy94) explicando _Flexbox_ y sus propiedades con ejemplos (en inglés).

>**Tip**: > Si quieres practicar el uso de Flexbox aquí tienes una lista de juegos interactivos:
> 
> - [Flexbox Froggy](https://flexboxfroggy.com/#es)
> - [Flexbox Defense](http://www.flexboxdefense.com/) (es aconsejable desactivar sonido)



