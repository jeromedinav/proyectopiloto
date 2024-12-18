Al igual que con los _checkboxes_, los _radio buttons_ son un tipo del elemento `<input>` que, debido a su funcionamiento específico y complejidad, abordamos en un apartado individual para entrar en detalle y facilitar la comprensión de su uso.

El elemento `<input>` con el atributo `type="radio"` en HTML se utiliza para crear un conjunto de botones de opción (_radio buttons_). Los botones de opción permiten a los usuarios seleccionar una única opción de un grupo de opciones predeterminadas.

## Atributo '_name_' en radio

Para crear un grupo de botones de opción, es necesario que **cada uno tenga el mismo atributo '_name'_**. Al compartir el mismo '_name'_, sólo se permite seleccionar un _radio button_ del grupo a la vez. Por otro lado, por norma general cada _radio button_ tendrá su propio _label_ y, por tanto, su propio '_id'_.

## Atributo '_value_' en radio

Aunque todas las opciones de _radio_ comparten el mismo '_name'_, **cada una de ellas debe tener un atributo '_value'_ para indicar el valor que se enviará al seleccionar la opción**. Si no se define el atributo '_value'_, el valor enviado será "_on_" por defecto para todas las opciones. Esto significa que el atributo '_value'_ es **obligatorio** en los _inputs_ de tipo _radio_.

Si no se selecciona ninguna opción del grupo, y ninguna de las opciones lleva el atributo '_required'_, no se enviará ningún valor para ese grupo de opciones. Sin embargo, es importante destacar que una vez se marca una opción, no se puede desmarcar (siempre quedará una seleccionada), por lo que si quieres dar esa posibilidad debería haber un campo específico para ello (como el típico _ns/nc_).

## Atributo '_checked_'

Para preseleccionar una opción en el grupo, se debe agregar el atributo '_checked'_ al _radio button_ correspondiente.


```HTML
<form>
  <p>Género:</p>
    
  <label for="genero_m">Masculino</label>
  <input type="radio" id="genero_m" name="genero" value="masculino" checked>
    
  <label for="genero_f">Femenino</label>
  <input type="radio" id="genero_f" name="genero" value="femenino">
    
  <label for="genero_o">Otro</label>
  <input type="radio" id="genero_o" name="genero" value="otro">
</form>
```

En el ejemplo, se crea un grupo de botones de opción para seleccionar el género del usuario. Todos los botones de opción comparten el mismo atributo `name="genero"`, lo que garantiza que sólo se pueda seleccionar una opción a la vez. Además, cada _radio button_ tiene un atributo '_id'_ único y un atributo '_value'_ que representa el valor específico de esa opción. El _radio button_ "Masculino" está preseleccionado con el atributo '_checked'_.

