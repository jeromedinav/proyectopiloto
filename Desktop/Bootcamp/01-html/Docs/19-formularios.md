Los formularios son herramientas que puedes incorporar a un documento con la finalidad de permitir a los usuarios incluir información, decidir entre opciones, comunicar datos y dirigir ciertas acciones en tu aplicación. El objetivo principal de los formularios es permitir al usuario seleccionar o insertar información y enviarla al servidor para ser procesada.

Los datos ingresados por los usuarios generalmente se envían a un servidor web para su procesado y almacenamiento, o se usan en el lado del cliente para actualizar inmediatamente la interfaz de alguna manera (por ejemplo, agregar otro elemento de una lista, o mostrar u ocultar una función de la interfaz de usuario).

## El elemento `<form>`

El elemento `<form>` se utiliza para crear un formulario en una página web y dentro de esta etiqueta se incluyen los campos del formulario, que pueden ser de diferentes tipos, como texto, selección, fechas, etc. `<form>` incluye etiquetas de apertura y cierre para agrupar los elementos que conforman el formulario.

> **Tip**: Aunque no es necesario crear un `<form>` para poder usar sus elementos.
> Por ejemplo, podemos crear un `<input>` para un cuadro de búsqueda sin necesidad ponerlo dentro de un `<form>`

`<form>` acepta dos atributos esenciales, los cuales son:

1. Atributo '**_action'_**: indica al formulario dónde enviar los datos.
    
2. Atributo '**_method'_**: indica al navegador qué método de petición HTTP debe utilizar para enviar los datos. Los dos métodos de petición HTTP más utilizados en formularios web son `GET` y `POST`. Si no se define el método por defecto se selecciona el método `GET`.

```HTML
<form action="enviar_mensaje" method="post">
  <!-- Aquí van los campos del formulario -->
</form>
```

> **Tip**: Es una práctica habitual enviar el formulario a través de JavaScript, en este caso no es necesario especificar los atributos '_action'_ y '_method'_ en el formulario HTML. En el _bootcamp_ gestionaremos los formularios con JavaScript por lo que estos atributos no serán necesarios.

> **Tip**: Cada campo perteneciente a un formulario se define mediante una etiqueta específica y puede tener diferentes atributos para definir su comportamiento y apariencia.
  
### Etiqueta `<label>`

La etiqueta `<label>` se utiliza para identificar un elemento de formulario. Para mejorar la accesibilidad, es fundamental que lo vincules correctamente con el campo adecuado. Para ello, puedes poner el atributo '_for'_ con el '_id'_ perteneciente al campo asociado como valor.

```HTML
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" />
```

En el ejemplo, la etiqueta `label` contiene el texto "_Nombre:_" y el atributo '_for'_ está asociado al '_id'_ del campo de entrada de texto. De esta forma, cuando el usuario haga clic en el texto "_Nombre:_", el foco se ubicará automáticamente en el campo de entrada de texto.

También puedes incluir el campo de entrada de texto dentro de la etiqueta `label` de la siguiente forma:

```HTML
<label>
  Nombre:
  <input type="text" name="nombre" />
</label>
```

En este último ejemplo, la etiqueta `label` contiene tanto el texto "_Nombre:_" como el campo de entrada de texto.

Uno de los métodos que se emplea para agrupar los _labels_ con sus _inputs_ en formularios y así tener una estructura con la que es más sencillo trabajar, es entender el formulario como si de una "lista de campos" se tratase, usando la etiqueta `<ul>`.

```HTML
<form>
  <ul>
    <li>
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Mensage:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
```

## Controles básicos de un formulario: `<input>` y `<textarea>`

Existen varios tipos de controles y elementos de formulario en HTML que permiten a los usuarios ingresar información de diferentes maneras. En esta sección, nos centraremos en el elemento `<input>` de tipo "_text_" y en el elemento `<textarea>`, ya que son los más básicos y fundamentales.

En próximas secciones, exploraremos otros tipos de elementos `<input>` disponibles, que ofrecen aún más opciones y flexibilidad para la creación de formularios interactivos y funcionales.

### input type="text"

El elemento `<input>` con el atributo `type="text"` es uno de los controles de formulario más comunes en HTML. Se utiliza para crear un campo de entrada de texto que permite a los usuarios ingresar una única línea de texto genérico.

```HTML
<label for="name">Nombre:</label>
<input type="text" id="name" name="name" />
```

En este último ejemplo, creamos un formulario con un campo de entrada de texto con la etiqueta `label` para etiquetar el campo como "_Nombre_". El atributo '_for'_ en la etiqueta `label` especifica el '_id'_ del campo de entrada, que en este caso es "_name_". El '_id'_ es necesario para vincular el campo de entrada con su etiqueta de texto correspondiente que también es usado para asignar estilos desde CSS.

> **Tip**: El atributo '_name'_ en el elemento `input` se utiliza para identificar el campo en el servidor cuando se envía el formulario.

  
### textarea

Este elemento crea un campo de entrada que permite insertar múltiples líneas de texto.

```HTML
<textarea id="message" name="message" rows="4" cols="50">
  Escribe aquí tu mensaje...
</textarea>
```

Los atributos '_rows'_ y '_cols'_ especifican la cantidad de filas y columnas de texto visible que se mostrarán en el campo. El valor dentro de las etiquetas `textarea` se utilizará como el texto predeterminado en el campo de texto.

![](./images/hab_tip_4.png)
