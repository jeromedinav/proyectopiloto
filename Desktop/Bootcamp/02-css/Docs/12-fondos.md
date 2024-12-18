El fondo de una caja en CSS se refiere al área detrás del contenido, del '_padding'_ y '_border'_, pero no del '_margin'_.

Con CSS, puedes personalizar el fondo de cualquier elemento en tu página web, estableciendo un color, un degradado o una imagen mediante una serie de propiedades:

## `background-color`

Permite establecer un color de fondo. Por defecto las cajas tienen como color de fondo "_transparent"_ permitiendo ver lo que tienen detrás:

```CSS
section {
  padding: 10px;
  background-color: rebeccapurple;
  color: white;
}
```
	
![](./images/12-background-color.png)

## `background-image`

Permite establecer una imagen como fondo usando la notación `url(...)`:

```CSS
section {
    padding: 10px;
    background-image: url('https://source.unsplash.com/random/?Programming');
}
```
	
![](./images/12-background-image.png)

>**Tip**: Es buena práctica definir tanto '_background-image'_ como '_background-color'_ en un elemento ya que, si por alguna razón la imagen de fondo no puede cargarse o tarda en cargar, tener un color de fondo asegura que el elemento tenga un aspecto presentable y legible en lugar de dejarlo con un fondo transparente o blanco por defecto.

## `background-repeat`

Por defecto los fondos de imagen se repiten para cubrir todo el espacio de la caja, esta propiedad permite definir cómo funciona esa repetición:

- **"no-repeat"**: la imagen de fondo no se va a repetir, sólo se mostrará una vez.
    
- **"repeat-x"**: la imagen sólo se repetirá horizontalmente.
    
- **"repeat-y"**: la imagen sólo se repetirá verticalmente.
    
- **"repeat"**: este es el valor por defecto y repetirá la imagen horizontal y verticalmente hasta cubrir todo el espacio de la caja.

```CSS
section {
    padding: 10px;
    background-image: url('https://source.unsplash.com/random/150x150/?Patterns');
}
```
	
![](./images/12-background-repeat.png)


## `background-position`

En el caso de tener un fondo con una imagen que no se repita esta propiedad nos va a permitir posicionar esa imagen. Por defecto soporta dos valores separados por espacio para especificar las coordenadas _x_ e _y_ de la imagen con respeto al centro de coordenadas, que es la esquina superior izquierda. Aparte de soportar cualquiera de las unidades conocidas (`px`, `rem`, `%`), también soporta posiciones con nombre (y cualquier combinación entre unas y otras):

- **"_left_", "_center_", "_right_"**: para posicionamiento horizontal.
    
- **"_top_", "_center_", "_bottom_"**: para posicionamiento vertical.

```CSS
section {
  background-color: rebeccapurple;
  background-image: url('https://source.unsplash.com/random/500x500/?Animals');
  background-repeat: no-repeat;
  background-position: center;
}
```
	
![](./images/12-background-position.png)

La imagen original tiene un tamaño de 500px, puedes posicionar la imagen para adaptar la parte que quieres que se visualice como imagen de fondo en el contenedor, en este caso 250px de ancho x 250px de alto.

## `background-size`

Permite establecer el tamaño de la imagen especificada como fondo con '_background-image'_. Los posibles valores son:

- **Dos valores separados por espacio**: establece el tamaño de la imagen de fondo, los dos valores pueden ser en las unidades típicas de CSS o _auto_. El valor por defecto de la propiedad es _auto auto_.
    
- **_"contain"_**: encaja la imagen dentro del elemento sin recortarla ni modificar las proporciones. Si la proporción de la imagen no coincide con la del elemento, dejará huecos (o se repetirá).
    
- **_"cover"_**: encaja la imagen en el elemento sin modificar las proporciones, pero sin dejar espacios vacíos; Si la proporción de la imagen no coincide con la del elemento, la recortará.

> **Tip**: Tanto **_contain_** como **_cover_** adaptarán la imagen lo máximo posible, de forma que si es demasiado grande la encogerán y si es demasiado pequeña la estirarán (siempre sin deformarla).

```CSS
section {
  background-color: rebeccapurple;
  background-image: url('https://source.unsplash.com/random/?street-photography');
  background-repeat: no-repeat;
  background-size: cover;
}
```
	

![](./images/12-background-size.png)
  
