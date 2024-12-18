_[CSS Reset](https://es.wikipedia.org/wiki/Reset_CSS)_ es una técnica empleada por desarrolladores web para eliminar o restablecer los estilos predeterminados que los navegadores asignan a los elementos HTML. Dado que los navegadores tienen estilos por defecto distintos para los elementos, puede causar inconsistencias visuales al mostrar un diseño en diferentes navegadores.

La finalidad de un _CSS Reset_ es crear una base uniforme y coherente para todos los navegadores, eliminando los estilos predeterminados y asegurando que los elementos se vean consistentemente en todos los navegadores.

## Uso de CSS Reset

Para implementar este _reset_ en tu proyecto, simplemente sitúa el bloque de declaración al inicio de tu archivo CSS, previo a cualquier otra regla de estilo. Al hacer esto, garantizarás que todos los elementos de tu proyecto inicien con '_margin'_ y '_padding'_ en 0 y empleen el modelo de caja "_border-box"_. Con esta base podrás añadir tus propios estilos y desarrollar tu diseño sin preocuparte por las inconsistencias entre navegadores.

```CSS
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

El selector `*` es un selector universal que abarca todos los elementos en el documento HTML. Al emplear este selector, aplicas las reglas CSS a cada elemento sin excepción.

Con `margin: 0;` fijas el margen de todos los elementos a 0. De este modo, suprimes los márgenes predeterminados que los navegadores podrían asignar a ciertos elementos.

Con `padding: 0;` similar a la regla anterior, fijas el `padding` de todos los elementos a 0, eliminando los espacios internos predeterminados que los navegadores podrían asignar a ciertos elementos.

Finalmente, al usar `box-sizing: border-box;` ajustas el modelo de caja que los navegadores utilizan para calcular el ancho y el alto de los elementos. Tal como tratamos en el modelo de cajas, `border-box` establece que tanto el ancho como el alto de un elemento incluyen el '_padding'_ y '_border'_, lo que simplifica la construcción de diseños predecibles.

### Ejemplo de la diferencia sin _CSS Reset_ y con _CSS Reset_:

Sin reseteo de estilos por defecto del navegador:

![](./images/09-no-reset.png)


Reseteando los estilos por defecto del navegador:

![](./images/09-reset.png)

En el primer ejemplo, sin _CSS Reset_, los márgenes y '_padding'_ predeterminados del navegador se aplican a los elementos, lo que podría causar inconsistencias visuales entre diferentes navegadores; en este caso se aprecia el `padding` que asigna el navegador a los elementos.

En el segundo ejemplo, con _CSS Reset_, los márgenes y '_padding'_ de todos los elementos se establecen en 0 y se utiliza el modelo de caja "_border-box"_, garantizando una apariencia uniforme y predecible en todos los navegadores.

