En ocasiones, necesitarás una forma de realizar operaciones más complejas y cercanas a las que podrías llevar a cabo a través de un lenguaje de programación, diferentes a aquellas más conocidas propias de un lenguaje de estilos.

Las funciones CSS corresponden a un mecanismo de apoyo que te permite realizar operaciones y cálculos sencillos de un forma ágil y simple, sin necesidad de renunciar a hacerlo con CSS. Algunas de las más usadas son las siguientes:

- **_calc()_**: permite realizar operaciones con unidades CSS, tales como `px`, `%`, `vw`, `vh` u otras.
    
- **_min()_**: permite calcular el valor mínimo de las unidades establecidas.
    
- **_max()_**: permite calcular el valor máximo de las unidades.
    
- **_clamp()_**: permite calcular valores ‘ajustados’. Es análogo a `max(MIN, min(VAL, MAX))`
    
- **_attr()_**: permite obtener el valor de un atributo desde CSS.

## **Función** `calc()`. Cálculo de valores

En algunas ocasiones, es posible que necesites indicar valores precalculados por el navegador. Por ejemplo, la suma de dos valores que ‘_a priori_’ desconoces o no sabes exactamente cuánto suman, pero que sí debería conocer dicho valor el navegador.

Esto es posible hacerlo con la función `calc()` de CSS, como se muestra a continuación:

> _HTML_
```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Función calc()</title>
    <style>
      .box {
        width: calc(200px + 1em);
        height: 150px;
        background: darkgreen;
      }
    </style>
  </head>
  <body>
    <section class="box"></section>
  </body>
</html>
```
	
![](./images/20-calc.png)

Como puedes comprobar, se pueden usar operaciones como sumas (`+`), restas (`-`), multiplicaciones (`*`) o divisiones (`/`) que usen alguna de las unidades soportadas por CSS, como por ejemplo, números, dimensiones, porcentajes, tiempos, ángulos, etc...

Un uso práctico para la función `calc()` es hacer que el contenido de una página ocupe todo el alto de la ventana (_100vh_) menos el espacio que ocupa la cabecera y el pie de página, si hubiese:

> _HTML_
```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      header {
        height: 80px;
        background-color: #333;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer {
        height: 60px;
      }
        
      main {
        height: calc(100% - 80px - 60px);
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <p>Este es el contenido de main</p>
      </main>
      <footer>Pie de página</footer>
  </body>
</html>
```
	
![](./images/20-calc-2.png)

Ten en cuenta que también se pueden anidar funciones `calc()` una dentro de otra. Resulta especialmente interesante su utilización junto a variables (_custom properties_) CSS.

## Función `min()`. Valor mínimo

Si necesitas que en una propiedad se aplique un valor entre varias posibilidades. Partiendo de dichas contingencias, no sabrás con certeza cuál necesitas, pero sí sabrás una de sus cualidades: el valor mínimo.

CSS permite usar la función `min()` con la cual puedes elegir el valor más pequeño entre 2 o más opciones aplicadas por parámetro:

> _HTML_
```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Función min()</title>
    <style>
      .box {
        width: min(200px, 25%);
        height: 150px;
        background: darkgreen;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```
	
![](./images/20-min.png)

Esta regla aplicaría un '_width'_ de 200px, siempre y cuando el 25% del elemento padre sea más grande de 200px.


## Función `max()`. Valor máximo

Así como cuentas con la función `min()`, tienes también una función `max()`. Como puedes imaginar, dicha función sirve para lo contrario que la función `min()`: obtener el valor máximo entre varias alternativas posibles.

En el siguiente ejemplo, utilizamos más de 2 parámetros (ambas funciones permiten múltiples valores, no necesariamente dos):

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Función max()</title>
    <style>
      .box {
        width: max(200px - 100px, 25%, 14vw);
		height: 200px;
		background: darkgreen;
      }
    </style>
  </head>
  <body>
    <section class="box"></section>
  </body>
</html>
```
	
![](./images/20-max.png)

Como puedes comprobar en el ejemplo, se produce un cálculo entre `200px - 100px`. Tanto en `min()` como en `max()`, puedes realizar operaciones directas en su interior sin necesidad de utilizar la función `calc()`.

## Función `clamp()`. Valor ajustado

Ahora piensa en un caso en el que podrías necesitar obtener el valor intermedio. Con la función `clamp()` puedes realizar, de forma concisa la operación `max(MIN, min(VAL, MAX))`

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Función clamp()</title>
    <style>
      .box {
        width: max(100px, min(25%, 300px));
        width: clamp(100px, 25%, 300px);
        height: 150px;
        background: red;
      }
    </style>
  </head>
  <body>
    <section class="box"></section>
  </body>
</html>
```
	
![](./images/20-clamp.png)

En el ejemplo existen dos líneas con un '_width'_. Ambas líneas son equivalentes. El primer valor de `clamp()` corresponde al valor mínimo, mientras que el tercero corresponde al valor máximo. De esta forma, el navegador realiza lo siguiente:

- Primero obtiene el valor mínimo entre el segundo y tercer parámetro.
    
- Luego obtiene el valor máximo entre el primer parámetro y el resultado anterior.
    
- Posteriormente, utiliza el resultado de la operación anterior en el '_width'_.
    

En el ejemplo, el ancho será del 25% siempre que pueda, pero sin ser nunca inferior a 100px ni superior a 300px.

## Función `attr()`

Aunque no es de naturaleza matemática como las anteriores, la función CSS `attr()`, te permite obtener el valor de un atributo HTML y utilizarlo desde CSS, generalmente con fines decorativos.

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Función attr()</title>
    <style>
      .box {
        width: 150px;
        height: 150px;
        background-color: darkgreen;
      }

      .box::before {
        content: attr(data-author);
        font-size: 22px;
        color: white;
      }
    </style>
  </head>
  <body>
    <section class="box" data-author="John Doe"></section>
  </body>
</html>
```
	
![](./images/20-attr.png)

Por medio de un _pseudo-elemento_ CSS, se usa la propiedad _content_ para pedirle al navegador que utilice el valor del atributo '_data-author'_ correspondiente al elemento donde está siendo aplicado el CSS para mostrarlo como contenido. De todas las funciones CSS, `attr()` es la más antigua y la que cuenta con mejor soporte en los navegadores.

