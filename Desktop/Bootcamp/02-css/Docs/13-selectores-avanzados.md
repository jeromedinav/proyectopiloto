Aunque con los selectores básicos que hemos visto puedes dar estilo a todos los elementos que quieras, conocer selectores más avanzados te permitirá hacerlo de forma más precisa y escalable, en muchos casos ahorrándote el tener que añadir clases e _ids_ en HTML.

Algunos de los selectores avanzados te permitirá hacer cosas que de otra forma no podrías como, por ejemplo, modificar el aspecto de un elemento cuando se sitúa el puntero del ratón encima o estilizar las filas pares o impares de una tabla.

## Selectores por atributos

Como ya sabes, los elementos HTML pueden tener atributos variados. Puedes seleccionar los que tengan presente el atributo que quieras (incluidos los atributos personalizados `data-`), simplemente envolviendo el nombre del atributo entre corchetes (`[]`):

```HTML
<p lang="es" data-author="María García"> Este párrafo esta en español y su autora es María García</p>

<p lang="en">This paragraph is in english.</p>

<p data-author="John Smith">Este párrafo lo ha escrito John Smith.</p>
```
	
```CSS
[lang] {
    /* Todo elemento que contenga el atributo lang, aparecera subrayado*/
    text-decoration: underline; 
}

[data-author] {
    /* Todo elemento que contenga el atributo data-author, estará en cursiva */
    font-style: italic; 
}
```
	
![Ejemplo de selector de atributo](./images/CSS_attribute_selector_example.png)

También puedes seleccionar elementos según el valor de un atributo:

```CSS
[lang="en"] {
    /* Los elementos que tengan "en" como valor del atributo lang, serán de color azul */
    color: blue; 
}

[data-author="John Smith"] {
    /* Los elementos que tengan "John Smith" como valor de data-author, tendrán fondo azul claro */
    background-color: lightblue; 
}
```
	
![Ejemplo de selector de atributo por valor](./images/CSS_attribute_selector_example_2.png)

Incluso puedes seleccionar elementos según el valor parcial de un atributo de la siguiente forma:

- `[atributo^="val"]`: selecciona todos los elementos cuyo atributo comience por "val". Ej.: **val**or, **val**le…
    
- `[atributo$="val"]`: selecciona todos los elementos cuyo atributo acabe por "val". Ej.: venda**val**, carna**val**…
    
- `[atributo*="val"]`: selecciona todos los elementos cuyo atributo contenga la cadena de texto "val". Ej: o**val**ado, a**val**ar… además de los dos supuestos anteriores.


## Pseudo-clases

Las pseudo-clases engloban un grupo de elementos, igual que las clases, con la diferencia de que no las asignas, sino que se asignan automáticamente en base a su estado, posición, hijos, etc.

La sintaxis para utilizar pseudo-clases en CSS requiere colocar dos puntos (`:`) previos al nombre de la pseudo-clase al aplicar una regla CSS.

```CSS
selector:pseudo-clase { 
    propiedad: valor; 
}
```

Algunas de las pseudo-clases más usadas son:

- `:hover` - aplica estilos cuando el cursor del ratón se encuentra sobre un elemento.


- `:checked` - selecciona _inputs_ de tipo _checkbox_ que estén marcados.
    

- `:first-child` - selecciona el elemento que sea primer hijo de entre un grupo de hijos.
    

- `:last-child` - similar al anterior pero aplicado al último hijo.
    

- `:first-of-type` - selecciona la primera aparición de un tipo de elemento dentro de su padre.

```CSS
p:first-of-type {
    color: white;
    background-color: #6b9ed6;
    border-radius: 5px;
}
```


- `:last-of-type` - similar al anterior pero aplicado a la última aparición.
    

- `:not(selector)` - selecciona elementos no afectados por el nombre del "selector"
    

- `:nth-child(valor)` - selecciona hijos basados en su posición teniendo en cuenta todos los hermanos. El valor puede ser un número o las palabras clave _even_ (par) y _odd_ (impar)

```CSS
p:nth-child(even) {
    color: orangered;
}

p:nth-child(1) {
    color: olive;
}
```
	
![](./images/13-nth-child.png)

- `:nth-of-type(valor)` - como el anterior, pero para contar la posición solo tiene en cuenta los hermanos del mismo tipo.


### Dar estilos a enlaces

Las pseudo-clases pueden ser especialmente útiles para dar estilos a enlaces según su estado:

- `:link` - no ha sido visitado.
    
- `:visited` - ya ha sido visitado por el usuario.
    
- `:hover` - tiene el cursor encima.
    
- `:focus` - tiene el foco.
    
- `:active` - está siendo pulsado.

```CSS
a:link {
    text-decoration: none;
    font-weight: bold;
    color: #2d91ff; /* Azul brillante */
}

a:visited {
    color: #f739be; /* Rosa brillante*/
}

a:hover {
    color: #f87c08; /* Naranja brillante */
}

a:active {
    color: #22d8a3; /* Verde azulado */
}
```


>**Tip**: Estas pseudo-clases (`:link`, `:visited`, `:hover`, `:active`) no son exclusivas para los enlaces, y tampoco hace falta usarlos todos; sin embargo, en caso de aplicarlos es importante hacerlo en este orden para que funcionen correctamente. Veremos por qué en la sección sobre el modelo de cascada.


## Pseudo-elementos

Por norma general, los selectores hacer referencia a elementos enteros. Gracias a los pseudo-elementos puedes seleccionar algunos fragmentos de elementos. En su caso se inician con dos puntos dobles (`::`) y los más usados son:

- `::first-letter` - permite darle estilo a la primera letra del texto del elemento.
    
- `::first-line` - lo mismo que lo anterior pero selecciona la primera línea del texto.
    
- `::selection` - permite darle estilo al texto que tenga seleccionado el usuario con el ratón o teclado en ese momento.

```CSS
p::first-letter{
    font-size: 2rem
}

p::first-line{
    font-style: italic
}

p::selection{
    background: rebeccapurple;
    color: lightblue;
}
```
	
![](./images/13-pseudoelements.png)

### **Pseudo-elementos** `::before` y `::after`

Hay dos pseudo-elementos especiales que seleccionan partes de los elementos que **no existen** y permiten "crearlas" asociándoles un contenido usando la propiedad de CSS "_content_". Son `::before` y `::after`.

```CSS
p::after {
    content: 'Ver más';
    color: red;
}
```

Esto crearía el contenido textual "Ver más" después de los elementos de párrafo. Ten en cuenta que no crea una etiqueta nueva si no que solo crea el contenido en una especie de elemento sin nombre y sin valor estructural pero que puede ser estilado.

![](./images/13-before-after.png)


## Combinando selectores

En la sección de _"Selectores básicos"_ aprendimos cómo aplicar bloques a varios selectores a la vez separándolos con comas (`,`). También puedes combinarlos de distintas formas para hacer selecciones más complejas. Y, por supuesto, se pueden hacer las dos cosas a la vez:

```CSS
p, div {
    /* selecciona todos los <p> y todos los <div> */
}

div .importante {
    /* selecciona los elementos con clase importante que haya dentro de <div> (ver más abajo) */
}

p, div .importante {
    /* selecciona todos los <p> y los elementos con clase importante que haya dentro de <div> */
}
```

>**Tip**: La única forma de aplicar el mismo bloque a elementos diferentes es separando sus selectores por comas. El resto de combinaciones que vamos a ver son más concretas y, por tanto, seleccionarán menos elementos, no más.

### Seleccionar elementos más específicos

Hemos visto como seleccionar por el tipo de elemento, por clase, por _id_, por atributos… ¿Y si quieres seleccionar, por ejemplo, un elemento que combine el tipo, la clase y un atributo?

Puedes crear selectores más específicos combinando los que ya vimos, de forma que CSS busque los elementos que encajen con todos a la vez. Para ello, deben estar pegados, formando uno solo. Te habrás fijado en que cada tipo de selector empieza de forma diferente, eso te permite poder combinarlos en el orden que quieras; la excepción son l**os selectores de tipo, que siempre van de primeros** al no tener un inicio característico.

```CSS
p.especial /* selecciona todos los <p> con clase especial */

.especial[lang] /* selecciona todos los elementos que tengan clase "especial" y atributo lang a la vez */

#unico:hover /* selecciona el elemento con id "unico" solo si tiene el cursor encima */

p.especial[lang].importante:firt-child /* selecciona los elementos <p> que tengan las clases "especial" e "importante", atributo lang, y que ademas sean el primer hijo dentro de su padre */
```


### Descendientes

Puede que necesites seleccionar elementos solo si están dentro de otros. Para eso, debes escribir primero el selector del elemento contenedor y, separado por un espacio, el del elemento que quieres seleccionar realmente. Pueden ser tan específicos como quieras y también puedes encadenar más de dos:

```CSS
div p /* selecciona todos los <p> que sean descendientes de <div> */

section.warning p.importante /* selecciona todos los <p> con clase importante que sean descendientes de <section> con clase warning */

main article p /* selecciona todos los <p> que sean descendientes de <article>, que a su vez sea descendiente de <main> */
```


#### Hijos directos (`>`)

El espacio selecciona todos los descendientes, sean directos o no. Por ejemplo `div p` seleccionará los dos párrafos de este ejemplo:

```HTML
<div>
    <p>Este parrafo es hijo directo de div</p>
    <section>
        <p>Este parrafo es descendiente no directo de div</p>
    </section>
</div>
```

En el caso de que quieras seleccionar solo los hijos directos (el primer párrafo en el ejemplo), en lugar (o a mayores) del espacio debes poner un paréntesis angular derecho, también conocido como símbolo de mayor que (`>`).

```CSS
div > p /* selecciona todos los <p> que esten directamente dentro de <div> */

section.warning>p.importante /* selecciona todos los <p> con clase importante que sean hijos directos de <section> con clase warning */

main > article >p /* selecciona todos los <p> que sean hijos de <article>, que a su vez sea hijo de <main> */
```

>**Tip**: Como puedes ver en el ejemplo, cuando usamos símbolos para combinar selectores, los espacios no importan. Por legibilidad, lo más recomendable es poner espacio a ambos lados del símbolo, como en el primer caso.


### Selector de hermano adyacente (`+`)

Aunque no es muy habitual, en ocasiones puede que quieras seleccionar un elemento simplemente por ir justo después de otro más concreto. Para ello debes separar los selectores con el símbolo de suma (`+`). Recuerda que al final siempre debe quedar el elemento que realmente quieres seleccionar.

Un ejemplo típico, es seleccionar el _label_ que acompaña a un _checkbox_, especialmente en función de si está marcado o no, cosa que no podrías saber de otra forma al ser dinámico.

```CSS
input:checked + label{
    text-decoration: line-through; /* Si se marca el checkbox, se tacha el texto del label */
}
```

#### Hermanos no consecutivos (`~`)

Si lo que quieres es seleccionar elementos que sean hermanos de otros, aunque no sean justo el siguiente, debes usar la virgulilla (`~`). Por las limitaciones de CSS, solo aplicará a los elementos que estén **después** del que uses de referencia.

```HTML
<section>
    <p>Este es un parrafo normal.</p>
    <p>Este es un parrafo normal.</p>
    <p id="ref">Este es un parrafo con ID "ref".</p>
    <p>Este es un parrafo normal.</p>
    <div>Esto no es un parrafo</div>
    <p>Este es un parrafo normal.</p>
</section>
```
	
```CSS
p#ref ~ p {
    color: blue;
}
```
	
![](./images/13-no-consecutive.png)

