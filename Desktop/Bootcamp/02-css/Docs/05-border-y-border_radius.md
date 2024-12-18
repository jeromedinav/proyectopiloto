Los bordes en CSS son una propiedad que permite agregar una línea alrededor del perímetro de un elemento HTML, puedes aplicar bordes a casi todos los elementos visibles en HTML. Imagina que cada elemento HTML es como un lienzo y el borde actúa como el marco que lo rodea.

Puedes utilizar los bordes en un elemento HTML con diferentes propósitos:

1. **_Resaltar elementos_**: Los bordes pueden realzar la apariencia de un elemento, proporcionando un aspecto más llamativo y destacado en la página.
    
2. **_Separación visual_**: Los bordes sirven para distinguir claramente diferentes elementos en un sitio web, facilitando la lectura y la organización del contenido.
    
3. **_Estructura jerárquica_**: Al anidar elementos dentro de otros, como en el caso de paneles, cuadros de texto o menús, los bordes pueden ayudar a establecer una jerarquía visual.
    
4. **_Interacción con el usuario_**: Los bordes pueden cambiar en función de eventos del usuario, como cuando se pasa el cursor sobre un elemento o se hace clic en él, otorgando enfoque visual y mejorando la experiencia del usuario.


## Propiedades básicas de los bordes

Hay tres propiedades principales que puedes utilizar para definir el ancho, el estilo y el color de un borde:


### `border-width`

La propiedad '_border-width'_ se utiliza para definir el grosor del borde. Puedes utilizar valores numéricos con unidades (p. ej., `px`, `em`, `rem`; excepto en `%`).

![](./images/05-border-width.png)


#### `border-style`

La propiedad '_border-style'_ se utiliza para definir el estilo del borde. Algunos de los valores más comunes son:

- **"_none_"**: No se muestra ningún borde.
    
- **"_solid_"**: Un borde sólido y continuo.
    
- **"_dotted_"**: Un borde formado por puntos.
    
- **"_dashed_"**: Un borde formado por guiones.
    
- **"_double_"**: Un borde doble.

![](./images/05-border-style.png)

> **Tip**: Puedes ver una lista completa de los [valores de border-style](https://developer.mozilla.org/es/docs/Web/CSS/border-style#values) en la documentación de MDN.


#### `border-color`

La propiedad '_border-color'_ se utiliza para definir el color del borde, por defecto es igual que el texto del elemento. Puedes usar cualquier valor de color válido en CSS, como palabras clave de color (_red, green, blue_), valores RGB, hexadecimales, etc.

![](./images/05-border-color.png)

> **Tip**: Para crear un borde es necesario estableces las propiedades '_border-width'_ y '_border-style'_, o no se apreciará en el navegador. Si no definimos '_border-color'_, el color del borde será el mismo que el del texto que esté definido para el elemento.

### `border` - Estilizando bordes con la forma abreviada

CSS también ofrece la propiedad abreviada '_border'_ que te permite establecer el estilo, el color y el ancho del borde en una sola línea:

```CSS
h1 {
  border-width: 2px;
  border-style: solid;
  border-color: blue;
}

/* La regla siguiente es equivalente a la anterior compuesta de 3 declaraciones */
h1 {
  border: 2px solid blue;
}
```

La forma abreviada para estilizar bordes en CSS es una manera rápida de aplicar varias propiedades de borde a un elemento HTML en una sola línea de código. En lugar de definir cada propiedad de borde individualmente (como '_border-width'_, '_border-style'_ y '_border-color'_), puedes usar la propiedad '_border'_ para establecer todas estas propiedades al mismo tiempo.

> Sintaxis
```CSS
elemento {
  border: [border-width] [border-style] [border-color];
}
```
	
```CSS
.container {
    width: 500px;
    height: 200px;
    /* Estilizamos el borde con su forma abreviada */
    border: 4px solid darkgreen;
}
```
	
![](./images/05-border.png)

## `border-radius`

La propiedad 'border-radius' te permite establecer el radio de redondeo de los bordes de una caja (elemento). Puedes utilizar valores numéricos acompañados de unidades de medida (por ejemplo `px`, `em`, `rem`) o porcentajes.

> Sintaxis
```CSS
elemento {
    border: [border-width] [border-style] [border-color];
    border-radius: [valor numérico];
}
```

Recuperemos el último ejemplo anterior y vamos a asignarle un '_border-radius'_ de 20px:

```CSS
.container {
    width: 500px;
    height: 200px;
    border: 4px solid darkgreen;
    border-radius: 20px;
}
```
	
![](./images/05-border-radius.png)

También puedes utilizar medidas del '_border-radius'_ en porcentaje `%`:

```CSS
.container {
    width: 200px;
    height: 200px;
    border: 4px solid darkgreen;
    border-radius: 50%;
}
```
	
![](./images/05-border-radius-percent.png)

Por último, puedes especificar un radio de redondeo diferente para cada esquina en forma abreviada siguiendo el orden: arriba a la izquierda, arriba a la derecha, abajo a la derecha y luego abajo a la izquierda o utilizar propiedades separadas para cada esquina: '_border-top-left-radius'_, '_border-top-right-radius'_, '_border-bottom-right-radius'_ o '_border-bottom-left-radius'._

```CSS
.container {
    width: 500px;
    height: 200px;
    border: 4px solid darkgreen;
    border-radius: 20px 50px 50% 10%;
}

/* La siguiente regla es equivalente a la anterior */
.container {
    width: 500px;
    height: 200px;
    border: 4px solid darkgreen;
    border-top-left-radius: 20px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 10%;
}
```
	
![](./images/05-border-radius-single.png)

