Dentro del modelo de cajas, ahora nos toca hablar sobre las propiedades '_margin'_ y '_padding'_ que son dos propiedades que definen el espacio alrededor de un elemento HTML.


## `margin`

La propiedad '_margin'_ determina el margen externo de la caja: la **distancia de los bordes de la caja con otras cajas que la rodean**. El tamaño del margen puedes establecerlo en cualquiera de las unidades de tamaño permitidas en CSS. Si estableces el valor como "_auto"_ el navegador cogerá el mayor margen disponible. Esto es aplicable a los márgenes laterales y sirve tradicionalmente para centrar un elemento en un contenedor.

Puedes especificar el margen para cada lado usando: '_margin-top'_, '_margin-right'_, '_margin-bottom'_ y '_margin-left'_.

Los márgenes tienen un comportamiento especial que se llama **_margin collapsing_**: cuando dos o más _márgenes verticales_ se encuentran. En lugar de sumar los márgenes, el navegador toma el valor más grande de los márgenes adyacentes y lo aplica como un solo margen.

Por ejemplo, si tienes dos elementos bloque, uno después del otro, y el elemento de arriba tiene un margen inferior de 20px mientras que el elemento de abajo tiene un margen superior de 30px, entonces estos márgenes colapsan o se fusionan en un solo margen de 30px, en lugar de sumarse para hacer un margen total de 50px.

```CSS
.caja1 {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
}

.caja2 {
    width: 150px;
    height: 150px;
    margin-top: 30px;
}
```
	
![](./images/07-box-margin.png)

En este caso, la distancia entre la Caja 1 y la Caja 2 será de 30px, no de 50px, debido al colapso de los márgenes.

## `padding`

La propiedad '_padding'_ determina el margen interno de la caja; la distancia entre los contenidos y el borde interno.

A diferencia del margen, que controla el espacio externo alrededor de un elemento, el '_padding'_ se centra en el área interna, proporcionando un espacio adicional entre el contenido del elemento y su borde.

Usar '_padding'_ mejora la apariencia y legibilidad del contenido en un elemento, permitiendo separar visualmente el contenido de su borde. Esto evita que el contenido esté pegado al borde, lo cual podría verse poco atractivo o hacer difícil su lectura.

Puedes especificar _padding_ de cada uno de los lados de la caja con las propiedades '_padding-top'_, '_padding-right'_, '_padding-bottom'_ y '_padding-left'_.

```CSS
.caja1 {
    width: 150px;
    height: 150px;
    margin: 0 20px;
}

.caja2 {
    width: 150px;
    height: 150px;
    margin: 0 20px;
    padding: 40px;
}
```
	
![](./images/07-box-padding.png)

En este último ejemplo, se aplica un '_padding'_ de 40 píxeles a todos los lados del elemento `<section>` con clase "_caja2_", separando el contenido del borde del elemento en 40 píxeles en todas las direcciones. En el caso del elemento con clase "_caja1_" no se aplica ningún _padding_.

