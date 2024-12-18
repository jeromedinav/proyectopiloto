Una de las principales ventajas de CSS es la capacidad de aplicar fácilmente un conjunto de estilos a varios elementos del mismo tipo. Por ejemplo, editar una sola línea de CSS puede cambiar el color de todos los encabezados. Si deseas cambiar el color azul que estás utilizando, solo debes cambiar esa línea de código, y todos los encabezados pueden ser verdes, morados, rojos o cualquier otro color que desees. Esto te permite concentrarte en el diseño, en lugar de realizar el trabajo más tedioso. Si alguien en una reunión solicita ver los títulos con un tono diferente de verde, simplemente edita el estilo y actualiza la página. ¡Listo! Los resultados se obtienen en segundos y todos pueden verlos.

Los selectores indican a qué elementos se aplicará una regla determinada. Como mencionamos anteriormente, una misma regla puede aplicarse a más de un elemento si se separan los nombres de los elementos con comas (`,`).

![Selector de elemento](./images/CSS_element_selector.png)

Una de las características fundamentales de CSS es su capacidad para aplicar ciertas reglas a un conjunto de elementos del mismo tipo en un documento. Para determinar a qué conjunto se aplicará un bloque, es necesario utilizar el selector adecuado. A continuación, vamos a profundizar en los **selectores básicos**:


## Selector de elemento

Si estás diseñando un documento HTML, el selector de elemento generalmente será el nombre de uno de los muchos elementos HTML como `p`, `h3`, `a` o incluso el propio `html`.

> Sintaxis
```CSS
etiqueta { 
    propiedad: valor;
}
```
	
```CSS
html {color: black;} 
h1 {color: gray;} 
h2 {color: silver;}
```
	
![](./images/04-selector-element.png)

Los selectores por nombre de elemento son muy genéricos y afectan a todos los _tags_, hay que usarlos con cuidado y normalmente combinarlos con otros selectores. Veremos más adelante como hacerlo.

> **Tip**: > Existe un selector especial en CSS, representado por el asterisco (`*`), que selecciona todos los elementos de un documento. Sin embargo, es importante utilizar este selector con precaución y en combinación con otros selectores, ya que aplicar reglas a todos los elementos puede tener consecuencias no deseadas en el diseño del sitio web. Es posible que algunas reglas afecten elementos que no deseas modificar, por lo que se recomienda usar este selector solo cuando sea necesario.
> 
> `* { background-color: yellowgreen; }`


## Selectores de clase

Si lo que quieres es dar estilos a un conjunto de elementos que comparten características, pero que no son del mismo tipo, o si lo son, pero el selector de elemento es demasiado genérico, lo primero es que deberían tener asociada una clase en el HTML. Si ya la tienen, puedes seleccionarlos en CSS con el nombre de la clase, **precedido por un punto** (`.`).

> Sintaxis
```CSS
.nombre-clase { 
    propiedad: valor; 
}
```
	
```CSS
.important {
    font-weight: bold;
    font-size: 1.5rem;
    color: red;
}

.warning {
    background: yellow;
    font-weight: bold;
    color: gray;
}
```
	
![](./images/04-selector-class.png)

> **Info**: Recuerda que tanto la asignación de una clase a los elementos HTML como la asignación de un ID se explicó en el módulo de **HTML**, específicamente en la sección de "**Atributos globales**". Si necesitas refrescar tus conocimientos sobre cómo asignar clases a los elementos, te recomendamos revisar dicha sección antes de continuar con el uso de selectores de clase en CSS.

> **Tip**: Un elemento HTML puede tener varias clases, pero solo puede tener un atributo '_class'_. En ocasiones, las reglas de diferentes clases pueden chocar entre sí y generar conflictos. En secciones posteriores veremos cómo gestionar este tipo de situaciones.


## Selectores por ID

Si deseas aplicar un estilo único a un elemento específico dentro de tu documento HTML, lo más apropiado es asignarle un '_id'_. Luego puedes utilizar dicho '_id'_ en tu CSS. Para definir una regla CSS para un '_id'_, coloca un símbolo de almohadilla o _hashtag_ (`#`) antes del nombre del '_id'_:

> Sintaxis
```CSS
#nombre-id { 
    propiedad: valor; 
}
```
	
```CSS
#mostImportant {
    color: red;
    background: yellow;
    font-size: 1.5rem;
}
```
	
![](./images/04-selector-id.png)


