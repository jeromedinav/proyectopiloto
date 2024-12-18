Una _Media Query_ es una regla reservada en CSS, incorporada con el propósito de permitir a los desarrolladores detectar el medio en el que se muestra el documento. Por ejemplo, usando _Media Queries_ puedes determinar si el documento se muestra de determinada manera en un monitor, en un dispositivo móvil o cuando se envía a una impresora, asignando los estilos apropiados para cada caso.

![Estructura de una Media Query](./images/CSS_media-query_structure.png)

## Media types

La forma más básica de los _media queries_ son los _media types_, los cuales aparecieron por primera vez en CSS2. Estos son etiquetas simples, que indican diferentes tipos de medios:

- **_all_** - Se usa para todos los medios de presentación.
    
- **_print_** - Se usa cuando se imprime el documento y también cuando se requiera mostrar una vista previa de impresión del documento.
    
- **_screen_** - Se utiliza cuando se presenta el documento en un medio de pantalla, como un monitor de ordenador.
    
- **_speech_** - Las propiedades se aplican cuando la página web es procesada por un sintetizador de voz.
    

Se pueden especificar varios _media types_ mediante una lista separada por comas. Los siguientes cuatro ejemplos, constituyen formas equivalentes de aplicación de una hoja de estilo (o un bloque de reglas) tanto para la pantalla como al momento de ser impresa la página web:

```HTML
<link type="text/css" href="frobozz.css" media="screen, print"> 
<style type="text/css" media="screen, print">...</style>
```
	
```CSS
@import url(frobozz.css) screen, print; 
@media screen, print {...}
```

Las _media queries_ se pueden utilizar en los siguientes lugares:

- En el atributo media de un elemento `<link>`
    
- En el atributo media de un elemento de `<style>`.
    
- En la parte del descriptor media de una declaración `@import`
    
- En la parte del descriptor media de una declaración `@media`
    

Las consultas pueden abarcar desde simples “_media types_”, a complicadas combinaciones.

## _Media Queries_ simples

Veamos algunos bloques simples, antes de cubrir todas las posibilidades de las _media queries_. Imagina que quieres establecer que algunos estilos sean diferentes en determinadas situaciones, por si la página se imprime (y en la vista previa de impresión). Aquí hay dos partes muy simples de CSS:

```CSS
h1 {color: maroon;} 

@media print {
    body {background: yellow;} 
}
```

En este ejemplo, los elementos `<h1>` se colorearán en granate en todos los medios, pero al imprimir, el _body_ tendrá un fondo amarillo. Puedes tener en una determinada hoja de estilo tantos bloques `@media` como sea necesario, cada uno con su propio conjunto de descriptores _media_. Incluso podrías encapsular todas tus reglas en un bloque `@media` si quisieras, pero no tendría mucho sentido.

Como puedes ver, dentro de una _media query_ se escribe CSS exactamente igual que lo escribirías fuera. La gracia es que, si las condiciones no se cumplen, ese CSS "no existe". Lo suyo es tener un CSS de base y luego aplicar las modificaciones necesarias en la _query_.

>**Tip**: La sangría que se muestra en esta sección tiene únicamente un propósito de claridad. No es necesario que apliques sangría a las reglas que se encuentren dentro de un bloque `@media`, pero puedes hacerlo si consideras que facilita la lectura de tu CSS.

## Descriptores de media

Además de los _media types_, puedes aplicar _media queries_ en función del valor de cierta propiedad. En ese caso, propiedad y valor irán envueltos en paréntesis. Se pueden combinar con los _media types_, pero si no se especifica ninguno se entenderá que aplica a todos, por lo que estos dos ejemplos son equivalentes:

```CSS
@media all and (min-width: 600px) {
    body {background: blue;}
} 

@media (min-width: 600px) {
    body {background: blue}
}
```

>**Tip**: Recuerda que las condiciones se tienen que cumplir para que el CSS dentro de la _media query_ se aplique. Por ejemplo, en este caso, el _body_ solo tendrá fondo azul si la pantalla mide como mínimo 600 píxeles de ancho.


## Media query para responsividad: principio mobile first

El uso principal que darás a las _media queries_ es el de cambiar el aspecto de la página según el tamaño del visor para que se adapte correctamente. Eso es lo que se llama **_diseño responsive_**.

Para hacerlo, la mejor práctica es aplicar el principio **_mobile first_**: maqueta primero para la pantalla más pequeña (por norma general, el móvil) y vas aplicando _media queries_ subiendo de tamaño. Esto es principalmente por dos motivos: por un lado, la mayoría de las visitas a la web se hacen desde dispositivos móviles, por otro, es más fácil adaptar un contenido "pequeño" a una pantalla más grande, que lo contrario.

Podrías usar solo uno para pasar directamente a la versión escritorio, pero lo mejor es hacer algunas intermedias para teléfonos grandes y _tablets_.

```CSS
/* Aquí se incluiría todo el CSS para la versión destinada a dispositivos móviles de menor tamaño. */

@media (min-width: 600px){
/* Modificaciones para adaptar los estilos a moviles grandes */
}

@media (min-width: 800px){
/* Modificaciones para adaptar a tabletas. Al medir más de 600 píxeles ya cuenta con los cambios del bloque anterior */
}

@media (min-with: 1000px){
/* Modificaciones para la versión de escritorio. De nuevo, ya cuenta con las anteriores */
}
```

>**Tip**: Las medidas usadas en el ejemplo son orientativas. Lo mejor es usar las _Herramientas de Desarrollador_ del navegador para comprobar si nuestra página queda bien en todos los dispositivos.

