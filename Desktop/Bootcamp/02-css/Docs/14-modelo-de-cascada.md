Como te puedes imaginar, habrá veces en las que un mismo elemento tendrá asignado varios valores para la misma propiedad. Por ejemplo, uno por su tipo de elemento y otro por su clase. En estos casos, la aplicación de los valores se rige por el _proceso de la cascada_, que se basa en tres factores jerárquicos, que estudiaremos a continuación:

1. La importancia
    
2. La especificidad
    
3. El orden

## 1. La importancia

La única forma de darle importancia a una regla CSS es mediante la _declaración especial_ `!important`. Siempre se aplica a una declaración, para poder aplicarla a un bloque entero de declaraciones tendrías que añadírsela a cada una de sus declaraciones.

Es lo que más peso tiene, el único caso en el que podrías dudar si una declaración con `!important` se va a aplicar, es que choque con otra que también lo tenga. En ese caso habría que tener en cuenta el resto de los factores.

```CSS
.especial {
  color: green !important;
  border: none;
}
```

En este ejemplo, podrías afirmar prácticamente sin ninguna duda que todos los elementos con clase "especial", tendrán color verde.

> **Tip**: La declaración `!important` debe usarse solo en casos muy puntuales, es más, lo mejor es intentar evitarla. Sin embargo, es la única forma de sobrescribir estilos en línea (aplicados con el atributo '_style'_ en HTML).


## 2. La especificidad

La especificidad es la parte más compleja de la cascada. Cada selector tiene una especificidad asignada y si combinas varios, su especificidad se suma, sin importar cómo se estén combinando. Al ser algo del selector, aplica a todo el bloque de declaraciones.

Los valores son:

- Selector universal (`*`) - no tiene valor (0, 0, 0)
    
- Selectores de etiqueta (`tag`) - Especificidad: (0-0-1)
    
- Selectores de clase (`.class`) - Especificidad: (0-1-0)
    
- Selectores de ID (`#id`) - Especificidad: (1-0-0)
    
- Selectores de atributo (`[attrib]`) - Especificidad: (0-1-0)
    
- Selectores de pseudo-clase (`tag:`pseudo-class) - Especificidad: (0-1-0)
    
- Pseudo-clase (`selector:not(selectors)`) - no tiene valor en sí, aplica el valor de los selectores que estén entre los paréntesis.
    
- Selectores de pseudo-elemento (`tag::pseudo-element`) - Especificidad: (0-0-1)
    
- `style inline` es superior a cualquier otro selector - Su especificidad equivaldría a: (_1-0-0-0_)
    

Ten en cuenta que la especificidad se calcula sumando los valores correspondientes a cada tipo de selector en una regla de estilo. Por ejemplo, si tienes una regla de estilo con un selector de clase y un selector de etiqueta, la especificidad de esa regla será:

```CSS
/* Ejemplo de selector de clase con selector de elemento */

/* (0-0-1) + (0-1-0) = (0-1-1) */
p.important {
    /* Bloques de declaraciones*/
}
```

Si existen múltiples reglas de estilo que se aplican a un mismo elemento HTML, se utilizará la regla con la mayor especificidad. En caso de empate, se aplicará la regla que aparece en el código más abajo.

```CSS
/* (2 x tipo) + (2 x clase) = (0, 2, 2) */
article.especial > p.importante 

/* (1 x tipo) + (1 x id) = (1, 0, 1) */
section#unica 

/* (1 x id) + (1 x clase) + (1 x tipo) = (1, 1, 1) */
#unica > .especial p 
```

El ejemplo está ordenado de menos a más especificidad. Si te fijas, el que más especifidad tiene, acaba seleccionando todos los párrafos de forma genérica, pero a la vez tienen que cumplir unas condiciones muy específicas: estar dentro de un elemento con clase especial, que a su vez esté directamente en un elemento único.

En realidad, tiene bastante lógica, cuanto más específico es un selector, más especificidad tiene. Sin embargo, es bueno recordar la teoría, ya que los problemas vienen cuando empezamos a encadenar selectores y se nos olvida algo:

> _HTML_
```HTML
<section id="unica">
    <p>Parrafo normal</p>
    <p id="masImportante">El parrafo mas importante</p>
</section>
```

> _CSS_
```CSS
/* 2xtipo + id = (1, 0, 2) */
section#unica p { 
    color: blue;
}

/* tipo + id = (1, 0, 1) */
p#masImportante { 
    color: red;
}
```

![](./images/14-specifity.png)

En el ejemplo puedes deducir que quiero que los párrafos de la `<section>` se vean de color azul, excepto el más importante, que debería tener color rojo porque le estoy dando estilos directamente a él. Sin embargo, se verá en color azul, ya que el primer bloque tiene más especificidad, aunque sea por poco.

Para solucionarlo, puedes añadir selectores:

```CSS
/* 2xtipo + id = (1, 0, 2) */
section#unica p { 
    color: blue;
}

/* 2xtipo + 2xid = (2, 0, 2) */
section#unica p#masImportante { 
    color: red;
}
```

![](./images/14-specifity-2.png)

> **Tip**: Puedes visitar [https://specifishity.com](https://specifishity.com/) para ver un gráfico con valores de especificidad de diferentes selectores.


## 3. Orden

Cuando ni la importancia ni la especificidad sirven para romper el empate, entra en juego el orden. Es el aspecto más sencillo y obvio de la cascada, ya que no hay opción a dudas: **lo que esté más abajo "gana"**.


### **Orden y propiedades abreviadas**

Normalmente lo que nos preocupa es qué estilos se van a aplicar entre distintos bloques, pero el orden también se aplica entre propiedades de un mismo bloque, ya sea porque la repetimos por accidente o porque usamos una abreviada sin darnos cuenta.

Las propiedades abreviadas son, en realidad, un conjunto de propiedades que puedes aplicar en una sola línea; pero lo que hace CSS es aplicar el valor correspondiente a cada una de ellas. Por eso, si usas una propiedad normal y, más abajo, una propiedad abreviada que la incluya, la sobrescribirás.

Por ejemplo, la propiedad '_background_' incluye, entre otras propiedades, '_background-color_' y '_background-image_'. En el ejemplo aplicaremos un color de fondo _cyan_ y una imagen con trasparencia para que se aprecie:

```CSS
#section1{
    background-color: cyan;
    background-image: url("https://cdn-icons-png.flaticon.com/512/528/528098.png")
}

#section2{
    background: cyan;
    background-image: url("https://cdn-icons-png.flaticon.com/512/528/528098.png")
}

#section3{
    background-color: cyan;
    background: url("https://cdn-icons-png.flaticon.com/512/528/528098.png")
}
```
	
![](./images/14-order.png)

Como puedes comprobar, en la segunda `section` no ha habido problema porque la propiedad abreviada va antes, por lo que '_background-color_' se aplica por encima. En cambio, en la tercera opción se pierde el color, porque al estar la abreviada más abajo, se sobrescribe con su valor por defecto (transparente).

> **Tip**: Por cómo funciona el orden, siempre debes escribir las **_media queries_** abajo, si quieres que se apliquen correctamente. Por otro lado, ya que las directivas `@import` van al principio, el CSS escrito en ellas contará también como si estuviera escrito ahí, teniendo menos prioridad sus reglas que las que están en la hoja. Aún así siguen aplicando las otras normas de la cascada.

