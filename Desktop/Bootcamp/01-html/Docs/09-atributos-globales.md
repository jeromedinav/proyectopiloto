Los atributos globales en HTML son aquellos que se pueden utilizar en cualquier elemento HTML, independientemente de su tipo. Son un conjunto de atributos comunes que ofrecen una funcionalidad y un comportamiento estándar para los elementos en HTML.

Algunos ejemplos de atributos globales en HTML incluyen:

- `id`: se utiliza para identificar de **manera única** un elemento en la página, y permite que los estilos (CSS) y los _scripts_ (JavaScript) se apliquen a él. Al ser único, puede haber tantos elementos con id como se necesite, pero cada `id` no se puede repetir en una misma página.
    
- `class`: se utiliza para especificar una o varias clases CSS que se aplicarán al elemento, lo que permite estilizar el contenido de la página de manera consistente y uniforme. No tiene mucha utilidad en HTML por lo que lo veremos más en profundidad en el módulo de CSS.
    
- `style`: se utiliza para agregar estilos CSS en línea directamente en el elemento. (No recomendado, considerado mala práctica. Lo veremos en el módulo de CSS).
    
- `title`: se utiliza para proporcionar información adicional sobre el elemento al poner el ratón encima, se muestra como un _tooltip_ cuando se pasa el cursor sobre el elemento.
    
- `data-*`: se utiliza para almacenar información personalizada en el elemento, que puede ser utilizada por _scripts_ para manipular y modificar el contenido de la página. Añadir `data-` antes de una palabra definida por nosotros nos permite crear atributos personalizados a los que asociar la información que queramos. Su valor es fácilmente accesible desde JavaScript. Ejemplo: `data-author=”John Smith”`


## id y class

Seguramente los dos atributos globales más usados sean '**_id'_** y '**_class'._** Aunque no abordaremos su utilidad en profundidad hasta los módulos de CSS y DOM, definiremos brevemente sus funciones básicas.

- _'_**_id_**_'_ → El atributo '_id_' en HTML permite darle a un elemento un nombre **único** y específico, de manera que pueda ser identificado de forma fácil e inequívoca en el documento. Cada '_id'_ debe ser único, lo que significa que **NO** se puede repetir en el mismo documento. Además, el '_id'_ se utiliza a menudo para aplicar estilos específicos a un elemento utilizando _CSS_.
    
- _'_**_class_**_'_ → Puedes asignar el mismo identificador a varios elementos usando el atributo '_class'_. Mientras que el '_id'_ es único para cada elemento, puedes usar la misma '_class_' en múltiples elementos. Además, un solo elemento puede tener varias clases separadas por espacios, pero no puede tener la misma clase varias veces. Esto te permite aplicar estilos comunes a varios elementos al mismo tiempo.
    
Por ejemplo, si tienes dos o más elementos `<section>`, que necesitas diferenciar entre sí, puedes asignar el atributo '_id'_ a cada uno con valores que declaren sus propósitos.

```HTML
<main>
  <!-- La etiqueta section representa una sección para agrupar contenido relacionado -->
  <section id="reportajes">Aquí van los artículos largos</section>
  <section id="noticias">Aquí van los artículos cortos</section>
  <aside>
    <p>Cita del artículo 1</p>
    <p>Cita del artículo 2</p>
  </aside>
</main>
```
  
En el código anterior, se incluyen dos elementos `<section>` en el apartado principal del documento; con el objetivo de separar artículos según su tipo. Debido a que el contenido de estos elementos es diferente, requieren estilos distintos y, por ello, tienes que identificarlos con valores diferentes. El primer elemento `<section>` se ha identificado con el valor "_reportajes_" y el segundo con el valor "_noticias_". Si lo que necesitas es identificar un grupo de elementos que presenten características similares, puedes usar el atributo '_class'_. El siguiente ejemplo divide el contenido de una sección con elementos `<p>`. En vista de que todos presentan un contenido similar, es probable que compartan los mismos estilos y, por lo tanto, deberías identificarlos con el mismo valor (es decir, todos son de la misma clase).

```HTML
 <main>
   <section>
	  <p class="libros destacado">Libro: IT, Stephen King</p>
      <p class="libros">Libro: Carrie, Stephen King</p>
	  <p class="libros">Libro: El resplandor, Stephen King</p>
	  <p class="libros">Libro: Misery, Stephen King</p>
   </section>
 </main>
```


![](./images/09-class-example.png)

En este último ejemplo, '_class'_ se utiliza para asignar clases a los elementos `<p>` dentro de la etiqueta `<section>`. En este caso, la clase "_libros_" se aplica a todos los párrafos que enumeran libros, y la clase "_destacado_" se aplica adicionalmente al primer párrafo para resaltar ese libro en particular. No verás realmente su funcionalidad hasta llegar a CSS donde utilizaremos clases para aplicar estilos específicos a los elementos que las posean, así en CSS podrás seleccionar fácilmente elementos con la misma clase y aplicar estilos de manera eficiente y consistente.

> **Tip**: Para que un proyecto sea escalable y se mantenga correctamente en el tiempo, a la hora de aplicar los identificadores no debes pensar solo en el contenido actual, sino también en el futuro: si el elemento siempre será único ('_id'_), o si en el futuro puede haber otros que compartan sus características ('_class'_).

Los valores asignados tanto a '_id'_ como a '_class'_ son arbitrarios. Puedes asignarles el valor que desees, siempre y cuando no incluya ningún espacio en blanco. En el caso del atributo '_class'_ se usan espacios en blanco para asignar varias clases a un elemento (como en el ejemplo anterior `class="libros destacado"`).

Igualmente, se recomienda usar solo letras y números, siempre comenzar con una letra y evitar caracteres especiales, con el objetivo de mantener tu sitio web "compatible" con todos los navegadores.

> **Tip**: Debes intentar que los atributos sean descriptivos; es decir, solo con verlos deberías saber a qué elemento/s hacen referencia.

> **Tip**: Puedes ver una lista completa de los [atributos globales](https://developer.mozilla.org/es/docs/Web/HTML/Global_attributes) en la MDN.

