En las próximas secciones, exploraremos en detalle la representación visual en CSS. Comprender su funcionamiento es fundamental, ya que hay innumerables combinaciones de propiedades y efectos que hacen imposible anticipar todos los escenarios.

Durante tu carrera como desarrollador, es probable que te encuentres con comportamientos extraños en diferentes navegadores al trabajar con CSS. Si entiendes bien el modelo de representación visual, serás capaz de determinar si el comportamiento de un elemento es el resultado correcto (aunque inesperado) del motor de CSS.

# Cajas básicas - Basic Boxes

En CSS, se asume que **cada elemento HTML se representa como una caja rectangular**, conocida como _"caja básica"_. Cada caja básica (_basic box_) tiene un área de contenido (_content area_) en su centro, rodeada opcionalmente por relleno (_padding)_, borde (_border_) y margen (_margin)_. Es importante tener en cuenta que estas áreas son opcionales y pueden eliminarse configurándolas con un ancho de cero. Aunque en un futuro la especificación podría permitir cajas no rectangulares, por ahora **todo es rectangular**. El modelo de cajas de CSS define cómo se comportan estos componentes con relación al ancho y alto de la caja y cómo se interrelacionan entre sí.

![Modelo de cajas](./images/box_model.png)

Comencemos a definir ahora, cada una de las propiedades de una caja básica:

## **Ancho y alto de la caja (_width & height_)**

Las propiedades '_width'_ y '_height'_ definen el ancho y alto de las cajas respectivamente y pueden ser definidas en cualquiera de las unidades permitidas en CSS, excepto `height` que por norma general no puede ser definido en unidades de tanto por ciento (`%`).

El valor por defecto es "_auto"_. Cuando tienen ese valor, es el navegador quien calcula el tamaño de las cajas que, por defecto, es el 100% del ancho de la caja padre y el alto establecido por el contenido interno de la caja.

Ejemplo
```CSS
.container {
    width: 200px;
    height: 200px;
}
```
	
![Ejemplo de contenido de caja](./images/content_box_example.png)

En este ejemplo, la regla de estilo define un ancho y una altura de 200 píxeles para el elemento. Puedes comprobar en la imagen de la derecha los valores actuales asignados al contenido del elemento.


## Límites de ancho y de alto

Cuando defines una caja con ancho o alto relativo, como por ejemplo _50%_ o _50vw_, puedes definir unos valores máximos de los que no quieres que se pase, aunque el tamaño del contenedor crezca. Para esto puedes usar las propiedades '_max-width'_, '_max-height'_, '_min-width'_ y '_min-height'_ y la caja tomará esos valores en caso de que el ancho o alto calculado por las propiedades '_width'_ y '_height'_ salga de los límites que establezcas.

```CSS
.caja { 
    /* Ancho y alto relativos con límites */
    width: 50%;
    height: 50%;
    max-width: 400px;
    max-height: 200px;
    min-width: 200px;
    min-height: 100px;
}
```
	
![](./images/06-box-limit.png)

La caja cuenta con un ancho y alto relativos, ajustándose al 50% del tamaño de su contenedor padre. Para mantener el ancho y alto de la caja dentro de ciertos límites, se ha utilizado las propiedades '_max-width'_, '_max-height'_, '_min-width'_ y '_min-height'_. Gracias a estos límites, se garantiza que la caja no se expanda ni se contraiga más allá de los valores especificados, sin importar las dimensiones del contenedor padre. Puedes comprobar su efecto reduciendo el ancho de esta página.
