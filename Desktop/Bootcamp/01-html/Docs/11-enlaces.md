Los enlaces son una característica distintiva de la web, ya que permiten la navegación de una página web a otra, lo que refleja la idea fundamental de navegar por la web.

## Elemento de enlace `<a>`

Los vínculos o enlaces son fundamentales en el universo web. Son una referencia o conexión de un recurso web a otro. Un _link_ tiene dos extremos: un ancla y una dirección. El enlace comienza en el ancla (fuente) y apunta a la dirección (destino), que puede ser cualquier recurso web, como una imagen, un vídeo, un archivo de sonido, un programa, un documento HTML o un elemento dentro de un documento HTML.

> **Tip**: **¿Sabías que…?** HTML son las siglas de _HyperText Markup Language_ (lenguaje de marcado de hipertexto), donde “_HyperText_” simplemente significa “texto con hipervínculos” (enlaces).

Para implementar un vínculo, necesitas usar el elemento `<a>`, donde la `a` es la abreviatura de la palabra inglesa «_anchor_» (ancla); con el atributo '_href'_ (obligatorio), que tendrá como valor la ruta del destino.

![](./images/tag_a.png)

El proceso de convertir algún texto dentro de un párrafo, en un vínculo (_link_), es el siguiente:

1. Selecciona el texto que deseas convertir en un vínculo, por ejemplo, "_Conviértete en un Warrior_".
     
2. Envuelve el texto en un elemento de anclaje `<a>` de esta manera: `<a>Conviértete en un Warrior</a>`.
      
3. Agrega el atributo '_href'_ al elemento de anclaje: `<a href="">Conviértete en un Warrior</a>`.
      
4. Completa el valor del atributo '_href'_ con la ruta o URL completa o el '_id'_ del elemento precedido por `#` al que deseas vincular el enlace. Por ejemplo: a. Para vincular a una URL completa: `<a href=”https://www.hackaboss.com/”>Conviértete en un Warrior</a>` b. Para vincular a una ruta relativa: `<a href="/bootcamp">Conviértete en un Warrior</a>`  
    c. Para vincular a un elemento con un '_id_' específico en la misma página: `<a href="#contacto">Conviértete en un Warrior</a>`

> **Tip**: Recomendación: hacer _clic_ en el enlace después de crearlo para asegurarse de que redirige a la dirección deseada.


### Enlaces de email y teléfono

Hay dos excepciones en los enlaces en las que debes usar datos en lugar de rutas. Esas excepciones son los _emails_ y los _teléfonos_, a los que debes añadirle `mailto:` y `tel:` respectivamente:

- Para crear un enlace de correo electrónico, tienes que usar el elemento `<a>` y el atributo '_href_' con el valor "_mailto:_" seguido de la dirección de correo electrónico. Por ejemplo: `<a href=”mailto:alguien@sitio.com”>alguien@sitio.com</a>`
    

- Para crear un enlace de teléfono, tienes que usar el elemento `<a>` y el atributo '_href_' con el valor "_tel:_" seguido del número de teléfono. Por ejemplo: `<a href=”tel:+34611222333”>611 222 333</a>`
    

Es importante que tengas en cuenta que los enlaces de correo electrónico y teléfono dependen de la configuración del dispositivo del usuario. Por ejemplo, si el dispositivo no tiene una aplicación de correo electrónico o teléfono configurada, el enlace no funcionará.

> **Tip**: Fíjate en cómo se repiten el email y el teléfono en el texto del enlace. No es necesario, pero sí es buena idea: Este tipo de enlaces son muy útiles si se visualizan desde dispositivos móviles, pero no tanto en ordenador; por lo que la información siempre debería estar **visible**.

### Accesibilidad en enlaces

Es importante que, al crear un enlace, su texto sea lo suficientemente descriptivo para que cualquier usuario pueda comprender a dónde dirige. Evita el uso de expresiones genéricas y utiliza texto que ofrezca información clara y específica sobre el destino del enlace. De esta manera, te aseguras que todos los usuarios, incluyendo aquellos con discapacidades visuales que dependen de tecnologías de asistencia, puedan acceder al contenido de manera efectiva.

```HTML
<a href="https://www.hackaboss.com/">¡Click aqui!</a> <!-- mal -->

<a href="https://www.hackaboss.com/">Visita nuestra web</a> <!-- bien -->
```

Como ves, en el ejemplo anterior tienes dos opciones. La primera no sería nada accesible porque no da ninguna pista sobre el destino. La segunda opción sería correcta, aunque podrías usar cualquier otra fórmula que describa el destino. Solo es necesario indicar hacia dónde dirige el enlace, y no el hecho de que es un enlace, ya que esto lo maneja el lector de pantallas o los estilos según el caso.


### Atributo target

El atributo '_target'_ en los enlaces HTML se utiliza para especificar el destino o la ubicación donde se abrirá el archivo o recurso que se está enlazando. El valor del atributo puede ser uno de los siguientes:

|Atributo|Descripción|
|---------|-------------|
|`_blank`|Indica que el documento enlazado se abrirá en una nueva ventana o pestaña del navegador.|
|`_self`|Indica que el documento enlazado se abrirá en la misma ventana o pestaña del navegador.|
|`_parent`|Indica que el documento enlazado se abrirá en el marco padre del marco actual, si lo hay.|
|`_top`|Indica que el documento enlazado se abrirá en la ventana principal del navegador, reemplazando cualquier marco existente.|

Por defecto, el archivo del documento se abre en la misma pestaña, es decir, si no defines el atributo '_target'_, el archivo del documento se abrirá únicamente en la misma ventana.

Por ejemplo, para que el enlace se abra en una nueva pestaña, puedes añadirle el atributo '_target'_ con valor `_blank`:

```HTML
<a href="https://developer.mozilla.org/" target="_blank">Visita la MDN para saber más</a>
```

> **Tip**: Es importante tener en cuenta que el uso del atributo '_target'_ debe tratarse con cuidado, ya que puede afectar la accesibilidad y usabilidad de la página web. Se recomienda utilizar el valor por defecto `_self` y sólo utilizar `_blank` si es necesario y se especifica claramente en el texto del enlace que se abrirá en una nueva pestaña.


### Enlaces de descarga

Puedes crear enlaces de descarga mediante el atributo '_download'_ en HTML. Al agregar este atributo, en lugar de llevar al usuario a la página del archivo, se iniciará la descarga del archivo. El atributo '_download'_ puede tener un valor que será el nombre con el que se guardará el archivo descargado en el dispositivo del usuario. Si no se proporciona un valor, el archivo se descargará con el mismo nombre que tiene en el servidor.

```HTML
<a href="/images/logo.png" download>Descarga nuestro logo</a>

<a href="/images/asd155vfvss856.png" download="logo">Descarga nuestro logo</a>
```

En el bloque anterior tienes dos ejemplos de enlaces de descarga. Ambos enlaces permiten descargar una imagen con el nombre `logo.png`, pero la diferencia está en que el segundo ejemplo está guardado en el servidor con un nombre nada descriptivo, lo cual es común para evitar nombres repetidos. El atributo '_download'_ permite especificar un nombre de archivo diferente al que tiene en el servidor para la descarga.

> **Tip**: El navegador se puede configurar para que abra los enlaces de descarga en lugar de descargarlos, según el tipo de archivo. Contra esto no puedes hacer nada como desarrollador, ya que pesa más la configuración del usuario.


![](./images/hab_tip_3.png)
