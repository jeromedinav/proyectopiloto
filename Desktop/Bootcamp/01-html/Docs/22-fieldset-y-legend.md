El elemento `<fieldset>` agrupa campos de formulario. Se usa para crear secciones dentro de formularios extensos. Puede contener un elemento `<legend>` para definir el título de la sección.

```HTML
<fieldset>
    <legend>Información personal</legend>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
</fieldset>

<fieldset>
     <legend>Información de la cuenta</legend>
     <label for="username">Nombre de usuario:</label>
     <input type="text" id="username" name="username" />
     <label for="password">Contraseña:</label>
     <input type="password" id="password" name="password" />
</fieldset>
```

En el ejemplo anterior, se utiliza `fieldset` para agrupar los elementos del formulario en dos secciones diferentes: "Información personal" e "Información de la cuenta". Acto seguido, se utiliza `legend` para dar una descripción a cada una de estas secciones.

