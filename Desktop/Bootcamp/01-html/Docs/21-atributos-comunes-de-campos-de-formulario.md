Además de los atributos globales, y del atributo '_type'_ de `<input>`, hay otros atributos comunes a los campos de formularios, por ejemplo: 
## id

Es muy útil darle un '_id'_ a cada uno de los campos, especialmente si quieres asociarlos con un `<label>.`

Aunque el atributo '_id_' es un atributo global en HTML, destacamos aquí su uso ya que es especialmente útil en formularios para asociar un campo de entrada con su correspondiente etiqueta `<label>` por medio del atributo '_for'_. Esta asociación mejora la usabilidad y accesibilidad del formulario, ya que permite a los usuarios hacer clic en la etiqueta para enfocar y seleccionar el campo de entrada asociado.

```HTML
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" >
</form>
```

En este fragmento de código anterior, se crea un formulario con un campo de entrada de texto para el nombre del usuario. Se asigna un '_id'_ "_nombre_" al campo de entrada y se asocia con un `<label>` utilizando el atributo '_for'_. Al hacer clic en la etiqueta "_Nombre:_", el campo de entrada asociado se activará y el usuario podrá comenzar a escribir su nombre.

## name

El atributo '_name'_ asigna un nombre al campo de entrada en un formulario HTML. Este nombre actúa como una clave para identificar el valor del campo cuando se envía el formulario. Es esencial asignar un nombre único a cada campo para evitar confusiones al procesar los datos del formulario.

En el caso de los campos `<input>` de tipo _radio_, el atributo '_name'_ juega un papel diferente, pero ya lo veremos en su momento.

## value

El atributo '_value'_ tiene distinto comportamiento según el tipo de entrada:

- Generalmente permite establecer un valor por defecto a un campo de entrada.
    
- En los campos de tipo '_radio'_ o '_select'_ tiene una función diferente. Lo veremos en las respectivas secciones.

```HTML
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" value="John Doe">
</form>
```

En el ejemplo, el atributo '_value'_ proporciona valor predeterminado ("_John Doe_") que se mostrará en el `input` cuando se carga la página. El usuario puede cambiar este valor antes de enviar el formulario.

## placeholder

Muestra un texto de ayuda en el campo de entrada cuando está vacío. Este texto desaparece cuando el usuario comienza a escribir en el campo.

```HTML
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre aquí">
</form>
```

En el ejemplo, el atributo '_placeholder'_ se utiliza en el campo de entrada de texto para mostrar un mensaje informativo ("_Escribe aquí tu nombre_") dentro del campo cuando está vacío. Este mensaje desaparece cuando el usuario empieza a escribir en el campo y vuelve a aparecer si el campo se borra por completo. El atributo '_placeholder'_ ayuda a los usuarios a entender qué tipo de información se espera en cada campo de entrada.


## autofocus

Pone el foco automáticamente en el elemento. Solo se puede aplicar a un único elemento dentro de un documento HTML.

```HTML
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" autofocus>
</form>
```

En el código anterior, el atributo '_autofocus'_ se utiliza en el campo de entrada de texto para que, al cargar la página, el cursor de entrada de texto del usuario se coloque automáticamente en ese campo, facilitando la interacción con el formulario. Con el atributo '_autofocus'_, el usuario no necesita hacer clic en el campo para comenzar a escribir; puede empezar a escribir directamente después de que se haya cargado la página.


## required

_'required'_ es un atributo booleano, hace que el campo sea obligatorio. Si el campo no tiene contenido, el formulario no se enviará y se mostrará un mensaje de error.

```HTML
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
</form>
```

En este ejemplo, el atributo '_required'_ se utiliza en el campo de entrada de texto para indicar que este campo debe completarse antes de que el formulario pueda ser enviado. Si el usuario intenta enviar el formulario sin proporcionar un valor en el campo de nombre, el navegador mostrará un mensaje de error indicando que el campo es obligatorio.


## minlength y maxlength

_'minlength'_ y '_maxlength'_ establecen el mínimo y máximo de caracteres permitidos en entradas de texto respectivamente.

```HTML
<form>
    <label for="comentario">Comentario (5-50 caracteres):</label>
    <input type="text" id="comentario" name="comentario" minlength="5" maxlength="50">
</form>
```

Aquí, hemos especificado que el campo de entrada de texto para "_Comentario_" debe tener al menos 5 caracteres y no más de 50 caracteres. Si el usuario intenta enviar el formulario con un comentario que tenga menos de 5 caracteres o más de 50 caracteres, el navegador mostrará un mensaje de error indicando que el texto ingresado no cumple con los requisitos de longitud.


## min y max

Establecen el mínimo y el máximo en controles de tipo "_number"_ y "_range"._

```HTML
<form>
    <label for="edad">Edad (18-100):</label>
    <input type="number" id="edad" name="edad" min="18" max="100">
</form>
```

En este caso, definimos que el campo de entrada numérico para "_Edad_" debe tener un valor mínimo de 18 y un valor máximo de 100. Si el usuario intenta enviar el formulario con una edad menor a 18 o mayor a 100, el navegador mostrará un mensaje de error indicando que el valor ingresado no cumple con los límites establecidos.


## disabled

Atributo booleano, desactiva el campo de entrada. El usuario no puede introducir información, pero el campo tampoco se envía, aunque tenga un valor por defecto.

```HTML
<form>
	<label for="poblacion">Población (desactivado):</label>
    <input type="text" id="poblacion" name="poblacion" disabled>
</form>
```

En el ejemplo, desactivamos el campo de entrada "_Población_" utilizando el atributo '_disabled'_. El campo de entrada "_Población_" no se podrá modificar y su contenido no se enviará junto con el formulario.


## readonly

Atributo booleano, indica que el valor del elemento no se puede modificar, sin embargo, visualmente parece un campo normal y se envía, junto al resto del formulario, con la información que tenga en su atributo '_value'._

```HTML
<form>
    <label for="acceso">Tipo de acceso (solo lectura):</label>
    <input type="text" id="acceso" name="acceso" value="Premium" readonly>
</form>
```

En este ejemplo, definimos el campo de entrada "_Tipo de acceso_" como solo lectura utilizando el atributo '_readonly'_ y le asignamos el valor "_Premium_". El campo de entrada "Tipo de acceso" no se podrá modificar, pero su contenido sí se enviará junto con el formulario. Este atributo es útil para mostrar información, como el tipo de acceso, que no debe ser modificada por el usuario pero que sigue siendo relevante para el envío del formulario.


## autocomplete

Este atributo activa o desactiva la función de autocompletar. Los valores disponibles son "_on"_ y "_off"._

```HTML
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" autocomplete="on">

    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" autocomplete="off">
</form>
```

En el ejemplo, habilitamos el autocompletado para el campo de entrada "_Nombre_" estableciendo el atributo '_autocomplete'_ en "_on_". Por otro lado, hemos deshabilitado el autocompletado para el campo de entrada "_Correo electrónico_" estableciendo el atributo '_autocomplete'_ en "_off_". Cuando el usuario comience a escribir en el campo "_Nombre_", el navegador sugerirá nombres previamente ingresados, mientras que no mostrará sugerencias en el campo "_Correo electrónico_".
