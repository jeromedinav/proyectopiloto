Las transiciones de CSS permiten animar las propiedades de CSS desde un valor original a uno nuevo, con un tiempo establecido, cuando se produce un cambio en el valor de una propiedad. Este cambio puede ser debido a una interacción del usuario o a un cambio de _class_, _id_ u otro estado.

Normalmente, cuando se modifica el valor de una propiedad CSS, el cambio es instantáneo y el nuevo valor de la propiedad reemplaza al anterior en milisegundos. Incluso si dichos cambios toman más tiempo, todavía parece que el cambio se produce en un solo paso, de un valor al siguiente. Por ejemplo, al cambiar el color de fondo al pasar el cursor por encima de un elemento, el fondo cambia de un color al siguiente, sin una transición gradual.

```HTML
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Transiciones</title>
    <style>
      div {
        border: 1px solid black;
        width: 5rem;
        height: 5rem;
        background: darkgreen;
      }

      div:hover {
        background: magenta;
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

Las transiciones CSS proporcionan una forma de controlar precisamente cómo cambia una propiedad de un valor al siguiente durante un período de tiempo. Por lo tanto, puedes hacer que los valores de las propiedades cambien gradualmente, creando efectos agradables y (con suerte) discretos. Si añades el siguiente código a la regla CSS de `div` del ejemplo anterior:

```css
transition: background 1000ms ease;
```

En este ejemplo, en lugar de cambiar instantáneamente el valor de color de un `div` al pasar el cursor, con las transiciones CSS, el `div` se puede configurar para que transicione gradualmente de cyan a magenta durante 1000 milisegundos. Cambiar el color, sin importar el tiempo que lleve, es una transición. Pero al agregar la propiedad de transición CSS, el cambio de color puede ocurrir gradualmente durante un período de tiempo y ser perceptible por el ojo humano.

>**Tip**: Para que una transición pueda aplicarse correctamente, debe haber valores intermedios entre los dos estados. Por ejemplo, no podemos hacer transición de `visibility:hidden;` a `visibility:visible;`, pero sí de `opacity: 0;` a `opacity: 1;` ya que podrá pasar por los valores 0.1, 0.2, 0.3… hasta llegar a 1.

## Propiedades de transición

Para configurar una transición a tu gusto, dispones de varias propiedades:

- **_'transition-property'_:** Esta propiedad especifica el nombre o los nombres de las propiedades CSS a las que se les debe aplicar una transición. Además de los nombres de las propiedades involucradas, puedes asignar el valor _all_ para indicar que todas las propiedades participarán de la transición.
    
- **_'transition-duration'_:** Esta propiedad especifica la duración de la transición en segundos (_s_) o milisegundos (_ms_).
    
- **_'transition-timing-function'_:** Esta propiedad determina la aceleración que se usa para calcular los valores para la transición. Más información abajo.
    
- **_'transition-delay'_:** Esta propiedad especifica el tiempo que el navegador esperará antes de iniciar la transición.
    
- **_'transition'_:** Es una propiedad corta para establecer varias propiedades de transición en un solo lugar. Estas propiedades incluyen '_transition-property'_, '_transition-duration'_, '_transition-timing-function'_ y '_transition-delay'_.
    

Los valores deben aparecer en un orden específico:

1. _'transition-property'_ (obligatorio)
    
2. _'transition-duration'_ (obligatorio)
    
3. _'transition-timing-function'_ (opcional)
    
4. _'transition-delay'_ (opcional)
    

Si solo especificas dos valores, CSS asumirá que se trata de '_transition-property'_ y '_transition-duration'_. Si especificas tres valores, CSS asumirá que se trata de '_transition-property'_, '_transition-duration'_ y '_transition-timing-function'_. Si especificas cuatro valores, entonces se tratarán como '_transition-property'_, '_transition-duration'_, '_transition-timing-function'_ y '_transition-delay'_ respectivamente.

Implementando estas propiedades, le indicas al navegador que tiene que crear todos los pasos de la animación y generar una transición entre el estado actual del elemento y el especificado por las propiedades. A continuación, puedes observar cómo es la estructura de una declaración de _transition_:

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      header {
        background-color: #f0e68c;
        margin: 30px;
        padding: 15px;
        text-align: center;
        border: 1px solid;
        transition: transform 1s ease-in-out 0s;
      }
      header:hover {
        transform: rotate(5deg);
      }
      #titulo {
        font: bold 26px Verdana, sans-serif;
      }
    </style>
  </head>
  <body>
    <section class="main-container">
      <header><p class="titulo">Pasa el ratón por encima</p></header>
    <section>
  </body>
</html>
```

> **Tip**: Si quieres que el elemento transicione no solo cuando se le aplica el cambio, si no también cuando se le quite, es necesario aplicar la transición al elemento normal. Es decir, si por ejemplo tenemos un enlace que cambia de color al poner el cursor encima y queremos que ese cambio sea progresivo tanto al poner el ratón como al quitarlo, aplicaremos la transición a `a` y no a `a:hover`.

### **Tipos de velocidad/aceleración**

La velocidad (o aceleración) por defecto en las transiciones es "_ease-in-out"_, más lento al principio y al final. Otros valores posibles son "_ease-in"_ (más lento al principio), "_ease-out"_ (más lento al final), _linear_ (velocidad constante) o puede definirse a través de una curva de aceleración, que se expresa con la función _cubic-bezier()_ y con cuatro valores en base a 1, separados por comas. Puedes ver más sobre esta función en [http://cubic-bezier.com/](http://cubic-bezier.com/)

