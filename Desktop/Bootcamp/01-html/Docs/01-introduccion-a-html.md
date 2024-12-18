HTML es el acrónimo de _HyperText Markup Language_ (**Lenguaje de marcado de Hipertexto**), es el lenguaje que se utiliza para definir la estructura del contenido de una página web, incluyendo la jerarquía de los elementos, el tipo de contenido y su posición en la página.

HTML define, mediante el uso de etiquetas (_tags_), el significado y la organización del contenido web. HTML es una parte esencial de cualquier sitio web y es la base para la creación de páginas web con diferentes niveles de complejidad.

En un sitio web, HTML se encarga de definir la estructura del contenido y establecer la jerarquía de los elementos en la página web, mientras que CSS se encarga de definir la presentación visual, el estilo del contenido y los elementos de la página web. En muchos casos, JavaScript se utiliza para añadir funcionalidad e interacción a la página web.

![](./images/HTML_CSS_JS.png)

Como se ha mencionado anteriormente, el lenguaje HTML es utilizado para definir la estructura y contenido de una página web, organizando los elementos en una jerarquía lógica como títulos, párrafos, imágenes y enlaces.

HTML corresponde a un lenguaje de marcado que define una estructura semántica de contenido. Está compuesto por un grupo de etiquetas definidas por un nombre, rodeado de _paréntesis angulares_ (`<elemento>`). Los _paréntesis angulares_ (`< >`) delimitan la etiqueta (_tag_), mientras que el nombre define el tipo de elemento que representa.

La siguiente línea de código muestra la manera en la que puedes especificar que un contenido forma parte de un elemento de tipo párrafo, abarcando el texto con la etiqueta `<p>`:

```html
<p>Esto es un párrafo</p>
```

Un **archivo HTML** es un documento de texto sin formato, su estructura la marcan los elementos, lo que significa que todos los saltos de línea y los espacios (a excepción del primero) serán ignorados. Esto te permite dejar espacio entre líneas e indentaciones (espacio al principio de cada línea) haciendo que tu código sea más legible.


## ¿Qué necesitas para crear documentos HTML?

Para poder crear documentos HTML, simplemente necesitas un editor de texto y un navegador web:

- **Editor de texto**: Para crear documentos HTML necesitas un editor de texto plano que te permita escribir y guardar el código HTML. Puedes usar editores de texto como el _Bloc de notas_ en Windows, _Notepad++_, _TextEdit_ en Mac, o editores de código como _Sublime Text_, **_Visual Studio Code_** (este es el que recomendamos, no solo para HTML sino para todos los demás módulos del _bootcamp_) o _Atom_, entre otros. Los editores de código pueden ayudarte a escribir el código de forma más fácil y rápida, gracias a sus herramientas de autocompletado, validación de código, sugerencias y extensiones.

![](./images/code_editors.png)

- **Navegador web**: Para visualizar y probar tus documentos HTML necesitas un navegador web. Como ya sabes, los navegadores web más comunes son _Google Chrome_, _Mozilla Firefox_, _Microsoft Edge y_ _Safari_. Estos navegadores te permiten ver el resultado final de tu código HTML y comprobar cómo se ve en la pantalla. Además, los navegadores también disponen de herramientas de desarrollador que te permiten inspeccionar el código HTML, modificarlo en tiempo real, y ver los cambios que haces en la página web.
   

## Comentarios en HTML

Los comentarios son una herramienta fundamental en cualquier lenguaje de programación, incluyendo HTML. Consisten en líneas de texto que no se procesan, lo que te permite dejar anotaciones y explicar el código sin generar errores.

Es importante utilizar los comentarios de manera consistente, aunque parezcan innecesarios, ya que nos permiten dejar mensajes para nosotros mismos o para otros desarrolladores. Ayudando a tener una mejor comprensión del código a largo plazo.

En HTML, los comentarios se abren con `<!--` y se cierran con `-->`. Puedes agregar cualquier contenido dentro de los comentarios, incluyendo etiquetas HTML o saltos de línea, y el navegador los ignorará.

```HTML
<!-- Importante: no borrar el párrafo siguiente -->
<p>Párrafo importante</p>
```

> **Tip**: En _Visual Studio Code_ puedes escribir comentarios rápidamente con los atajos `[Ctrl]+[Shift]+[A]` o `[Ctrl]+[Shift]+[7]`. Técnicamente son comandos diferentes, pero en la práctica, esa diferencia no aplica a HTML. Puedes consultar la lista de _shortcuts_ de Visual Studio Code para tu sistema operativo:  
> - [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)  
> - [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)  
> - [MacOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
  

## Indentación y espacios en HTML

La indentación y los espacios en blanco se utilizan en HTML (y en otros lenguajes de programación) para mejorar la legibilidad y la comprensión del código.

En HTML, los espacios adicionales y saltos de línea que agregas más allá del necesario para separar las palabras son opcionales y no afectan la forma en que se renderiza el código.

HTML automáticamente elimina los espacios adicionales como los saltos de línea y los reemplaza con un único espacio cuando se visualiza el contenido en un navegador.

Como ejemplo, cuando el navegador renderiza las siguientes etiquetas de elementos, dan el mismo resultado:

```HTML
<p>Párrafo de ejemplo</p>
<p>Párrafo                    de 
								ejemplo</p>
```  


## Mayúsculas y minúsculas en HTML

HTML no distingue entre mayúsculas y minúsculas. Por ejemplo, las etiquetas `<HTML>`, `<html>` y `<Html>` se interpretarán de la misma manera.

Sin embargo, es importante tener en cuenta que el uso de mayúsculas o minúsculas en el código HTML es una cuestión de estilo y convención. Muchos desarrolladores prefieren escribir todo en minúsculas para hacer el código más legible y fácil de entender. Además, algunas herramientas de programación o _linters_ (herramientas que te ayudan a encontrar y corregir problemas en el código) pueden tener reglas que exijan que todo el código se escriba en minúsculas para mantener la coherencia y la consistencia.

![](./images/hab_tip_1.png)
