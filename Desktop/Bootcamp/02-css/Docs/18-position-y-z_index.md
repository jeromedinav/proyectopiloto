## Posicionando elementos

El posicionamiento de elementos en CSS es una forma de controlar la ubicación de los elementos en la página web. Los elementos que siguen el flujo normal del documento se colocan de forma automática, uno después de otro, según el orden en el código HTML. Sin embargo, con CSS podemos posicionar los elementos de forma personalizada, fuera del flujo normal del documento.

### Posicionamiento relativo

Los elementos con posicionamiento relativo se colocan de forma relativa a su posición original. Las propiedades _top_, _right_, _bottom_ y _left_ se utilizan para desplazar el elemento desde su posición original.

```CSS
.desplazado {
  position: relative;
  top: 20px;
  left: 20px;
}
```

El espacio original ocupado en el documento por el elemento posicionado relativamente se mantiene, aunque el elemento esté en otra posición.

![Ejemplo de posicionamiento relativo](./images/CSS_position_relative.png)

### Posicionamiento absoluto

Los elementos con posicionamiento absoluto se colocan con respecto al elemento padre posicionado más cercano. Las propiedades _top_, _right_, _bottom_ y _left_ se utilizan para desplazar el elemento desde el elemento padre posicionado más cercano.

El contexto de posicionamiento es la posición del primer padre del elemento que tenga `position` distinto de "_static"_ y, si no hay ninguno, el contexto será el elemento `html`, o sea, la parte superior izquierda de la página.

```CSS
.absoluto {
  position: absolute;
  right: 20px;
  bottom: 100px;
}
```

A diferencia de los elementos posicionados relativamente, estos elementos dejan de ocupar el espacio que ocuparían inicialmente.

![Ejemplo de posicionamiento absoluto](./images/CSS_position_absolute.png)

### Posicionamiento fijo

La `position: fixed` funciona exactamente igual que la absoluta, pero el contexto de posicionamiento siempre va a ser el _viewport,_ es decir, la ventana del navegador, por lo que, aunque hagas _scroll_, el elemento siempre se va a mantener en la misma posición.

![Ejemplo de posicionamiento fixed](./images/CSS_position_fixed.png)


### Posicionamiento _sticky_

Este tipo de posicionamiento es un poco diferente a los demás. En principio estará en su lugar por defecto, pero mediante las propiedades "_top"_, "_left"_, "_right"_ y "_bottom"_ puedes establecer la distancia mínima que debe dejar con los márgenes respectivos, haciendo que "choque" si hay _scroll_. Si le defines valor 0, chocará con el propio margen. Recupera su posición siempre que puede.

```CSS
/* El elemento con esta clase, al llegar al borde superior al desplazarse mediante scroll, permanecerá "pegado" en esa posición. */

.sticky{
    position: sticky;
    top: 0;
}
```
	
![Ejemplo de posicionamiento sticky](./images/CSS_position_sticky.png)


## z-index

La propiedad '_z-index'_ gestiona la posición de los elementos a lo largo del eje Z (profundidad) en un sitio web. Puedes utilizar '_z-index'_ para controlar el orden de apilamiento de los elementos y decidir qué elementos deben mostrarse por encima o por debajo de otros.

En caso de que dos elementos posicionados absoluta o relativamente se solapen el que va a aparecer arriba será el que tenga la propiedad CSS '_z-index'_ mayor. Esta propiedad acepta valores numéricos positivos o negativos sin unidad. En caso de no tener establecido un '_z-index'_, aparecerá por arriba el último elemento que esté definido en el HTML.

```CSS
.box1 {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: #8b4513;
    z-index: 1;
}

.box2 {
    position: absolute;
    top: 75px;
    left: 75px;
    background-color: #42a6ee;
}
```
	
![](./images/18-z-index.png)

En el ejemplo, el contenedor con la clase "_box1_" tiene un '_z-index'_ de 1, lo que indica que se encuentra en un nivel superior en el eje Z, mientras que el contenedor con la clase "_box2_" no tiene un '_z-index'_ definido, por lo que su posición en el eje Z es la predeterminada (0). Como el contenedor con clase "_box1_" tiene un '_z-index'_ mayor, se mostrará por encima del contenedor con la clase "_box2_" cuando se superpongan.

