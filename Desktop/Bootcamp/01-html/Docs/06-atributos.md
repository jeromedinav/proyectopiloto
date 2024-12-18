Los elementos HTML pueden tener atributos, los atributos se utilizan para modificar el comportamiento del elemento o asociar información útil a él. Los atributos siempre se agregan dentro de la etiqueta de apertura del elemento, después del nombre del elemento y antes del signo mayor que (`>`).

Algunos elementos HTML requieren información adicional para que el navegador pueda procesarlos correctamente. Por ejemplo, el atributo '_src'_ se utiliza en la etiqueta de imagen `<img>` para especificar la ruta de la imagen que se va a mostrar en la página web, donde el valor del atributo '_src'_ es la URL de la imagen.

```HTML
<img src="imagen.jpg" />
```

En este caso, el atributo '_src'_ tiene el valor "_imagen.jpg_", que es la ruta de la imagen que se desea mostrar en la página web.

De manera similar, para crear un enlace, se usa la etiqueta `<a>` que necesita información adicional, como el atributo '_href'_, para indicar la dirección a la que debe apuntar el enlace.

![](./images/tag_attribute.png)

Los atributos suelen ser **pares clave/valor**, donde la clave es el nombre del atributo y el valor es el valor que se le asigna a dicha clave.

Un atributo en general debe contar con:

- Un espacio entre el nombre del elemento y el atributo (o del atributo previo, en el caso de que ya posea uno o más atributos).
    
- El nombre del atributo seguido por el signo de igualdad (`=`).
    
- El valor del atributo envuelto en comillas simples o dobles (`’` o `”`) de apertura y cierre.
    

Ejemplo

```HTML
<img src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen aleatoria de unsplash" width="300" height="300">
```

Este ejemplo muestra una etiqueta de imagen `<img>` con atributos que especifican la fuente de la imagen ('_src'_), descripción alternativa ('_alt'_), ancho ('_width'_) y altura ('_height'_) de la imagen.

<body>
    <img src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen aleatoria de unsplash" width="300" height="300">
</body>


> **Tip**: Algunos elementos no requieren un valor para sus atributos (denominados atributos booleanos), sino que basta con la presencia del nombre del atributo. Un ejemplo de un atributo HTML que requiere un nombre, pero no un valor es el atributo '_disabled_', que se utiliza en algunos elementos de formulario, como botones y casillas de verificación, para desactivar la interacción con el elemento. Esta clase de atributos los veremos más adelante.

> **Info**: La mayoría de los atributos son opcionales, pero algunos son totalmente necesarios para que ciertos elementos funcionen correctamente. Por ejemplo, el atributo '_src'_ en la etiqueta `<img>` es el que indica la ruta de la imagen.