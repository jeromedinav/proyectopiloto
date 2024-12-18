Como ya hemos mencionado con anterioridad, `<input>` es el elemento más versátil de todos. Genera un campo de entrada, en el que el usuario puede seleccionar o incluir información.

Además, puede adoptar diferentes características y admitir diversos tipos de valores dependiendo del valor de su atributo '_type'_. A mayores del atributo `type=”text”`, `<input>` dispone de más valores para el atributo '_type'_ como se muestra a continuación:

**_'email'_ →** Comprueba que el texto corresponde a una dirección válida de email. Cualquier otro contenido que no sea una dirección válida (en el formato) provoca que el navegador muestre un error cuando se trata de enviar el formulario.

```HTML
<input type="email" id="email" name="email" />
```

**_'search'_** → Se utiliza para crear un campo de búsqueda en el formulario, la principal diferencia con un campo de texto reside en la apariencia del campo de búsqueda: el campo _search_ suele tener los border redondeados y cuando tiene contenido en el campo muestra un icono con una ‘_x_’ para limpiar el campo.

```HTML
<input type="search" id="search-bar" name="search-bar" placeholder="Ingresa tu búsqueda aquí" />
```

**_'url'_** → Comprueba que el texto es una URL válida y si no es el caso, muestra un error.

```HTML
<input type="url" id="website" name="website" placeholder="Ej: https://www.ejemplo.com" />
```

**_'tel'_** → En ciertos dispositivos con teclado dinámico (especialmente móviles) muestra el teclado númerico o acceso a la agenda.

```HTML
<input type="tel" id="telefono" name="telefono" placeholder="Introduce tu número de teléfono" />
```

**_'number'_** → Solo permite introducir números. Además, en ciertos navegadores se muestran unos controles para aumentar o disminuir el número. Con frecuencia lleva asociados los atributos '_min'_ y '_max'_ para indicar el valor mínimo y máximo respectivamente permitidos en el campo _number._

```HTML
<input type="number" id="quantity" name="quantity" min="1" max="10" />
```

**_'range'_** → Muestra una barra deslizable para seleccionar un número dentro de un rango definiendo el máximo y mínimo a través de los atributos '_min'_ y '_max'_.

```HTML
<input type="range" id="volumen" name="volumen" min="0" max="100" value="50" step="10"/>
```

Este código creará un control deslizante para seleccionar un valor de volumen entre 0 y 100, con un valor predeterminado de 50 y cuyo valor incrementa de 10 en 10 (por medio del atributo '_step'_)

**_'date'_** → Muestra un calendario para seleccionar una fecha.

```HTML
<input type="date" id="fecha" name="fecha_nacimiento" />
```

Al utilizar `type="date"`, se despliega un calendario al hacer clic en el `input`, lo que permite seleccionar una fecha en lugar de tener que escribirla manualmente en un formato específico.

**_'datetime-local'_** → Igual que el anterior, pero además de seleccionar una fecha incluye la selección de hora.

```HTML
<input type="datetime-local" id="datetime" name="datetime" />
```

Este campo mostrará un selector de fecha y hora en el formato específico de la región en la que se encuentra el usuario. El usuario podrá seleccionar una fecha y hora en este campo.

**_'week'_, '_month'_, '_time'_** → Igual que los anteriores, pero selecciona una semana entera, un mes o solo la hora respectivamente.

```HTML
<input type="month" id="mes-nacimiento" name="mes-nacimiento" />
```

**_'hidden'_** → Oculta el campo de entrada. Es usado para enviar información complementaria al servidor.

```HTML
<input type="hidden" name="tipo" value="nuevo" />
```

En este caso, cuando el usuario envíe el formulario, se enviará el valor (`tipo=nuevo`) al servidor. El valor está oculto para el usuario y no puede ser modificado directamente.

**_'password'_** → Es un campo de texto normal, pero censura reemplazando los caracteres insertados con asteriscos o puntos.

```HTML
<input type="password" id="password" name="password" />
```

**_'color'_** → Muestra un selector de color.

```HTML
<input type="color" id="colorInput" name="colorInput" value="#ff0000" />
```

**_'checkbox'_** → Una casilla de control que permite al usuario activar o desactivarla. Se envía el campo identificado por su atributo '_name'_ con el valor del atributo '_value'_, en caso de no tener '_value'_ y estar activado su valor es "_on_". Si quieres que su valor por defecto esté activado, debes añadir el atributo '_checked'_. Entraremos en detalle en un apartado posterior dedicado a los `input` de tipo '_checkbox'._

```HTML
<input type="checkbox" id="newsletter" name="newsletter" value="true" checked/>
```

**_'radio'_** → Botón para seleccionar una única opción entre varias posibles. Su uso se aborda con más detalle en un apartado posterior.

```HTML
<label>
  <input type="radio" name="ofertas" value="si" />
  Recibir ofertas
</label>
<label>
  <input type="radio" name="ofertas" value="no" />
  No recibir ofertas
</label>
```

Cada opción será un `<input>` por lo que, para que funcione correctamente, todas deben tener el mismo atributo '_name'_. Además, cada opción debe tener un '_value'_. En este caso no será un valor por defecto sino el valor que se envíe en el campo. Si no lo pones, todas las opciones devolverán "_on_" y no sabrás cuál seleccionó el usuario. También se ha “envuelto” cada opción en un elemento `label`, lo que permite hacer clic en el texto para seleccionar el _radio button_.

**_'file'_** → Genera un campo de entrada para seleccionar un archivo en el ordenador del usuario.

```HTML
<input type="file" id="archivo" name="archivo" />
```

Cuando el usuario hace clic en el botón para seleccionar archivo, se abre un cuadro de diálogo donde puede buscar el archivo que desea subir. Después de seleccionar el archivo, el nombre del archivo aparecerá en el `input`.

**_'button'_, '_submit'_, '_reset'_** → generan botones con distintas funcionalidades, aunque es preferible y aconsejable usar el elemento `<button>`

```HTML
<!-- Crea un botón que no realiza ninguna acción por defecto y es utilizado generalmente con Javascript para ejecutar alguna función al ser presionado -->
<input type="button" value="Mi botón" onclick="miFuncion()" />

<!-- Botón que envía el formulario a un servidor cuando es presionado. -->
<input type="submit" value="Enviar" />

<!-- Restablece todos los campos del formulario a sus valores predeterminados cuando es presionado. -->
<input type="reset" value="Restablecer" />
```

> **Tip**: Recuerda que en HTML las etiquetas con autocierre no necesitan llevar la barra diagonal (`/`) al final, pero es recomendable acostumbrarse a incluirla para mantener una buena práctica de codificación.

