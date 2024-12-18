Las casillas de verificación (_checkboxes_) son un tipo del elemento `<input>`. Aunque forman parte de la familia de elementos `<input>`, su comportamiento y uso difieren lo suficiente como para merecer una sección aparte para analizarlas en detalle.

Las casillas de verificación (_checkboxes_) son un tipo del elemento `<input>`. Aunque forman parte de la familia de elementos `<input>`, su comportamiento y uso difieren lo suficiente como para merecer una sección aparte para analizarlas en detalle.

El elemento `<input>` con el atributo `type="checkbox"` en HTML se utiliza para crear controles de casillas de verificación (_checkboxes_). Estas casillas permiten a los usuarios seleccionar de una a múltiples opciones de un conjunto de opciones.

Para enviar varias opciones dentro de un mismo grupo, es importante que todas las casillas de verificación tengan el mismo atributo '_name'_, pero diferentes valores en el atributo '_value'_. De esta manera, el navegador puede identificarlas como parte del mismo grupo de opciones.

Cuando se envía el formulario, se envía el campo identificado por su atributo '_name'_ junto con el valor del atributo '_value'_. Si una casilla de verificación está activada pero no tiene un atributo '_value'_, su valor predeterminado será "_on_". Si una casilla de verificación no está seleccionada, su valor no se incluirá en los datos enviados. Para que una casilla de verificación esté activada por defecto, añade el atributo '_checked'_.

```HTML
<form>
  <label for="opcion1">
    <input type="checkbox" id="opcion1" name="opciones" value="opcion1" checked>
    Opción 1
  </label>
  <label for="opcion2">
    <input type="checkbox" id="opcion2" name="opciones" value="opcion2">
    Opción 2
  </label>
  <label for="opcion3">
    <input type="checkbox" id="opcion3" name="opciones" value="opcion3">
    Opción 3
  </label>
</form>
```

Este fragmento de código muestra un ejemplo de un formulario HTML que contiene tres casillas de verificación (_checkboxes_). Cada casilla de verificación representa una opción diferente, y los usuarios pueden seleccionar más de una opción a la vez.

En el ejemplo puedes ver que:

- Las casillas de verificación tienen el mismo atributo `name="opciones"` para identificarlas como parte del mismo grupo.
    
- Cada casilla de verificación tiene un atributo '_id'_ único, que se utiliza para asociarla con su correspondiente etiqueta `<label>` mediante el atributo '_for'_.
    
- Cada casilla de verificación tiene un atributo '_value'_ único, que representa el valor que se enviará si la casilla está seleccionada.
    
- La primera casilla de verificación tiene el atributo '_checked'_, lo que significa que estará seleccionada por defecto cuando se cargue la página.