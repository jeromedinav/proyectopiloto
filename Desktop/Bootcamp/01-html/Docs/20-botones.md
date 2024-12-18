Los botones en HTML son elementos interactivos que permiten al usuario interactuar con páginas web y realizar acciones, como puede ser enviar formularios, ejecutar funciones de JavaScript o navegar a otras páginas web.

## Creación de botones en HTML

Para crear botones en HTML, puedes usar la etiqueta `<button>` o el elemento `<input>` con el atributo `type="button"`.

### button

Es la forma más frecuente y recomendada de crear un botón en HTML. La etiqueta `<button>` puede utilizarse dentro de un formulario para enviar información o fuera de un formulario para activar funciones personalizadas a través de JavaScript. El contenido del botón (texto, imágenes, etc.) se coloca entre las etiquetas de apertura y cierre:

```HTML
<!-- Botón genérico -->
<button type="button">Botón genérico</button>

<!-- Botón para envío de formulario (entre las etiqueta de <form> y </form>) -->
<button type="submit">Enviar formulario</button>

<!-- Botón para limpiar el formulario (entre las etiqueta de <form> y </form>) -->
<button type="reset">Restablecer formulario</button>
```

En el ejemplo, el atributo '_type'_ especifica el tipo de botón, que puede ser "_button_", "_submit_" (para enviar formularios) o "_reset_" (para restablecer campos de formulario). 

### input type=”button”

Puedes crear botones utilizando el elemento `<input>` con el atributo `type="button"`:

```HTML
<input type="button" value="Botón genérico" />
```

Sin embargo, esta opción es menos flexible que la etiqueta `<button>`, ya que no permite incluir contenido más complejo, como imágenes o elementos HTML, dentro del botón. Por lo tanto, **se recomienda utilizar la etiqueta** `<button>` **para crear botones en la mayoría de los casos**.

Por lo general, los botones de un formulario estarán dentro del elemento `<form>` y se asociarán automáticamente. Si no es así, se pueden asociar mediante el atributo **_form_** de `<button>`, dándole como valor el _id_ del formulario, de forma similar a como funciona el atributo _for_ de los `<label>`.

## Atributos de `<button>`

El elemento `<button>` en HTML admite varios atributos que pueden personalizar su apariencia y comportamiento. A continuación, listamos algunos de los atributos más comunes para el elemento `<button>`:

1. **_'type'_:** Este atributo especifica el tipo de botón. Los valores comunes son "_button_", "_submit_" y "_reset_". "_button_" es un botón genérico que no tiene un comportamiento predeterminado, usualmente se utiliza en conjunto con JavaScript para ejecutar acciones personalizadas; "_submit_" envía un formulario y "_reset_" restablece todos los campos de un formulario a sus valores predeterminados.

```HTML
<button type="submit">Enviar formulario</button>
```

2. **_'disabled'_**: Este atributo booleano deshabilita el botón, lo que significa que el usuario no puede interactuar con él. Un botón deshabilitado aparece atenuado y no responde a eventos de clic.

```HTML
<button type="button" disabled>No se puede presionar</button>
```

3. **_'autofocus'_**: Atributo booleano que indica que el botón debe recibir automáticamente el foco cuando la página se carga. Esto puede ser útil para resaltar un botón importante o para mejorar la accesibilidad.

```HTML
<button type="button" autofocus>Presiona aquí</button>
```

4. **_'form'_**: Este atributo especifica el '_id'_ del formulario al que está asociado el botón. Esto puede ser útil si el botón está fuera del elemento `<form>` pero aún así necesita interactuar con él.

```HTML
<form id="miFormulario">
    <!-- elementos del formulario -->
</form>

<button type="submit" form="miFormulario">Enviar formulario</button>
```

5. **_'name'_** y '**_value'_**: Estos atributos se utilizan principalmente con botones de tipo "_submit_" dentro de un formulario. El atributo '_name'_ establece el nombre del botón y el atributo '_value'_ establece su valor. Cuando se envía un formulario, el par nombre-valor del botón presionado se incluye en los datos enviados.

```HTML
<button type="submit" name="accion" value="guardar">Guardar</button>

<button type="submit" name="accion" value="eliminar">Eliminar</button>
```

6. **_'onclick'_** y otros eventos: Los eventos de JavaScript, como `onclick`, `onmouseover` y `onmouseout`, se pueden utilizar para agregar interactividad al botón y ejecutar funciones de JavaScript cuando ocurren eventos específicos; aunque este sistema de gestión de eventos se considera obsoleto y, por lo tanto, **mala práctica**. Los trataremos en la sección de JavaScript.

```HTML
<button type="button" onclick="miFuncion()">Ejecuta miFuncion</button>
```
