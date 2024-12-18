Para comprender cómo se aplican las declaraciones de estilo a un documento, además de los tres aspectos de la cascada, es importante otro concepto clave: la **herencia**. La herencia es el mecanismo por el cual algunos estilos se aplican, no solo a un elemento específico, sino también a sus descendientes.

Si se aplica un color a un elemento `<h1>`, por ejemplo, entonces ese color se aplica a todo el texto dentro de `<h1>`, incluso en aquellas partes pertenecientes a elementos secundarios de ese elemento `<h1>`

> _HTML_
```HTML
<h1>Mythic <em>Quest</em></h1>
```

> _CSS_
```CSS
h1 {color: gray;}
```

![](./images/15-inheritance-1.png)

Tanto el texto ordinario `<h1>` como el texto `<em>` están en gris porque el elemento `<em>` hereda el valor de color del `<h1>`. Si los elementos descendientes no pudieran heredar los valores de propiedad, el texto `<em>` sería negro, no gris, y tendrías que asignar un color de texto a los elementos por separado.

Otro ejemplo, imagina que aplicas un estilo de `color: gray;` para elementos `<ul>`:

```CSS
ul {color: gray;}
```

Esperas que el estilo aplicado a `<ul>` también se aplique a sus elementos de lista y a cualquier contenido de esos elementos de lista. Gracias a la herencia, eso es exactamente lo que sucede.

![Herencia](./images/CSS_list_example.png)

Es más fácil ver cómo funciona la herencia recurriendo al diagrama de árbol de un documento. A continuación, mostramos el diagrama de árbol de un documento muy simple que contiene dos listas: una desordenada (`ul`) y otra ordenada (`ol`).

![Diagrama de árbol de un documento](./images/CSS_list_tree_example.png)

Cuando la declaración `color: gray;` se aplica al elemento `<ul>`, ese elemento toma esa declaración. Luego, el valor se propaga por el árbol a los elementos descendientes y continúa hasta que no haya más descendientes que hereden el valor. Los valores nunca se propagan hacia arriba; es decir, un elemento nunca transmite valores a sus ascendientes.

![Herencia](./images/CSS_inheritance_example.png)

La herencia es uno de esos aspectos de CSS que es tan básico, que casi nunca piensas en ello a menos que sea necesario. Sin embargo, debes recordar un par de cosas:

- Primero, ten en cuenta que **muchas propiedades no se heredan**. Generalmente es bastante lógico. Por ejemplo, las propiedades de estilo de cajas (bordes, fondos, márgenes…) no se heredan, ya que sería un caos.
    
- En segundo lugar, los **valores heredados no tienen ninguna especificidad**, ni siquiera una especificidad nula. Esto parece una distinción académica, hasta que se analizan las consecuencias de la falta de especificidad heredada.
    

> _HTML_
```HTML
<h1 id="page-title">Mythic<em>Quest</em></h1>
<p>Conoce al equipo detrás del videojuego multijugador más grande de todos los tiempos.</p>
```

> _CSS_
```CSS
* {
	color: gray;
}

h1#page-title {
	color: black;
}
```
	
![Ejemplo de herencia](./images/CSS_inheritance_mythicquest.png)

Dado que el selector universal (`*`) se aplica a todos los elementos y tiene especificidad cero, el valor de _gray_ en su declaración de color prevalece sobre el valor heredado de _black_, que no tiene ninguna especificidad. Por lo tanto, el elemento `<em>` se vuelve gris en lugar de negro.

Este ejemplo ilustra claramente uno de los problemas potenciales de usar el selector universal indiscriminadamente. Debido a que puede coincidir con cualquier elemento, el selector universal a menudo tiene el efecto de "cortocircuitar" la herencia. Esto se puede solucionar, pero por lo general es más sensato evitar el problema en primer lugar, al no usar de forma indiscriminada el selector universal.

> **Tip**: La falta de especificidad de la herencia es la culpable de que, por ejemplo, tengas que dar estilos a los enlaces si no quieres que se queden por defecto: como los navegadores tienen algunas reglas para las etiquetas `<a>`, nunca las heredarán.

Puede parecer mala idea que la herencia no tenga nunca prioridad, pero en realidad es lo más cómodo, ya que no tienes que preocuparte por ella al dar estilos a elementos hijos de otros elementos.

Si tienes dudas, siempre puedes consultar la página de la _[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background#formal_definition)_ correspondiente a la propiedad que quieras y en la sección "_Formal definition_" verás un cuadro que incluye si es heredado (_Inherited_) o no:

![Herencia MDN](./images/CSS_inheritance_MDN.png)

