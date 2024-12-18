En los inicios de las hojas de estilo en cascada (CSS), los elementos estaban limitados a ser rectangulares y orientados de forma rígida en los ejes horizontal y vertical. Se utilizaron trucos para crear la apariencia de inclinación en los elementos, pero en esencia todo se mantenía dentro de una cuadrícula rígida. A partir de finales de la década de 2000, surgió un interés en poder romper las limitaciones de la cuadrícula y transformar objetos de formas más interesantes, incluso en tres dimensiones.

## Propiedad `transform`

La propiedad '_transform'_ te permite aplicar muchas transformaciones diferentes. Algunas de las más utilizadas son:

### translate(…)

La función`translate()` permite desplazar un elemento en el eje horizontal o vertical. Su funcionamiento es similar al de `position: relative`, pero sus transformaciones son más modernas y eficientes, ya que pueden aprovechar la aceleración de la tarjeta gráfica del dispositivo.

Se pueden utilizar cualquier unidad de medida con valores positivos o negativos. Si se indica un solo valor, se aplicará a ambos ejes. Si se especifican dos valores, el primero será para el eje horizontal y el segundo para el vertical. También existe la opción de dividir en `translateX(…)` y `translateY(…)`.

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Transform translate</title>
    <style>
      div {
        position: absolute;
        padding: 3px;
        width: 150px;
        height: 150px;
        border: 2px solid #8b4513;
        opacity: 0.3;
        background-color: #f0e68c;
        text-align: center;
      }

      .desplazada {
        opacity: 1;
        transform: translate(2rem, 4rem);
      }
    </style>
  </head>
  <body>
    <div>Caja en posición original</div>
    <div class="desplazada">Este es un div de 150x150 píxeles.</div>
  </body>
</html>
```
	
![](./images/23-translate.png)


### rotate(…)

Permite rotar el elemento. Recibe un número en unidad "_deg_" (grados). Si el número es positivo, girará en el sentido horario; si es negativo, en sentido antihorario.

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Transform rotate</title>
    <style>
      div {
        padding: 3px;
        width: 150px;
        height: 150px;
        border: 2px solid #8b4513;
        background-color: #f0e68c;
        margin-top: 20px;
        
        transform: rotate(30deg);
      }
    </style>
  </head>
  <body>
    <div>Este es un div de 150x150 píxeles.</div>
  </body>
</html>
```
	
![](./images/23-rotate.png)


### scale(...)

Permite escalar el elemento. No estaríamos simplemente cambiando su ancho y su alto, sino que todo su contenido se escalaría a la vez, deformándose si no mantiene la proporción.

Acepta cualquier número sin unidad, que funcionará como multiplicador. Si solo indicamos uno, aplicará a los dos ejes; mientras que, si indicamos dos, el primero será en horizontal y el segundo en vertical. También se puede dividir en `scaleY(…)` y `scaleX(…)` El valor por defecto es 1.

>**Tip**: Si usas valores negativos, el elemento se "dará la vuelta"

Ejemplo

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Transform rotate</title>
	<style>
	  div {
	    width: 150px;
	    height: 150px;
	    padding: 3px;
	    border: 2px solid #8b4513;
	    background-color: #f0e68c;
	    margin-top: 20px;
	                    
		transform: scale(-1, 0.5);
		}
	</style>
  </head>
  <body>
	<div>Este es un div de 150x150 píxeles.</div>
  </body>
</html>
```
	
![](./images/23-scale.png)


## Propiedad `transform-origin`

Si te fijas, todas las transformaciones se han aplicado desde el centro. Es decir, `scale()` se aplicó desde el centro hacia fuera y `rotation()` como si tuviera el eje en el píxel central. Eso lo puedes modificar con la propiedad '_transform-origin'_. Como valor, acepta cualquier medida con relación al eje de coordenadas (esquina superior izquierda), aunque lo más cómodo es usar las palabras clave "_top"_, "_right"_, "_bottom"_ y "_left"_.

Si al mismo ejemplo de la rotación de arriba le añadimos lo siguiente dentro de la regla del `div`:

```CSS
transform-origin: bottom left;
```
	
![](./images/23-transform-origin.png)

Ahora, el eje es el de la esquina inferior izquierda.
