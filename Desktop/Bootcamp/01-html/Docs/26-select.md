La etiqueta `<select>` crea una lista de opciones desplegables entre las que el usuario puede elegir. Funciona en conjunto con el elemento `<option>` para definir cada opción.

## Atributo '_value_' en _select_

En los elementos `<option>` dentro de `<select>`, puedes utilizar '_value'_ para definir el valor que se enviará si se selecciona esa opción. Si no le asignas ninguno, se enviará el texto del elemento. Puede ser útil para mandar, por ejemplo, un código en lugar de un nombre.

```HTML
<select name="libro" id="listado">
  <option value="1">IT</option>
  <option value="2">Carrie</option>
  <option value="3">El Resplandor selected</option>
  <option value="4">Misery</option>
</select>
```


En el ejemplo, la etiqueta `select` define la lista desplegable y las opciones se definen con la etiqueta `option`, que incluyen el valor y el texto que se mostrará en la lista desplegable. La opción seleccionada se envía al servidor como parte de los datos del formulario cuando el usuario envía el formulario.

Se usa el atributo '_name'_ en el elemento `select` para que se envíe su valor al servidor, como cualquier otro campo de formulario. Por ejemplo, el atributo `name="libro"` se utilizará para enviar la opción seleccionada con el nombre "libro".

## Otros atributos específicos

También dispones del atributo '_selected'_ para marcar una de las opciones por defecto y de la etiqueta `<optgroup>` para organizar las opciones en grupos:

```HTML
<select name="libro" id="listado">
  <optgroup label="Stephen King">
    <option value="1">IT</option>
    <option value="2" selected>Carrie</option>
    <option value="3">El Resplandor</option>
    <option value="4">Misery</option>
  </optgroup>
  <optgroup label="G.R.R. Martin">
    <option value="5">Juego de Tronos</option>
    <option value="6">Choque de Reyes</option>
    <option value="7">Tormenta de Espadas</option>
  </optgroup>
</select>
```

