Cuando las transiciones se quedan cortas, puedes optar por utilizar animaciones. Con las animaciones CSS, puedes modificar los valores de las propiedades que no forman parte del estado inicial o final establecido de un elemento. Los valores de las propiedades establecidos en el elemento animado no necesariamente deben formar parte de la progresión de la animación. Por ejemplo, con las transiciones, pasar de negro a blanco solamente animará el elemento a través de varios tonos de gris. Sin embargo, con la animación, ese mismo elemento no tiene que ser blanco o negro e incluso durante la animación, no tiene por qué limitarse a pasar solo entre tonos de gris.

Para crear una animación, lo primero es definir los estados por los que pasará mediante la sentencia `@keyframes`. Hay dos formas de hacerlo: con el uso de palabras clave `to` y `from` (para animaciones sencillas), o con porcentajes. Veamos un ejemplo de cada:

```HTML
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animaciones</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: #8b4513;
        animation: slide 2s infinite;
      }

      @keyframes slide {
        from {
          transform: translateY(100px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```
	
---

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animación CSS</title>
    <style>
      #emoji {
        display: inline-block;
        font-size: 5em;
        animation: crazy 1s ease-in-out infinite;
      }

      @keyframes crazy {
        0% {
          transform: rotate(0deg);
        }
        20% {
          transform: rotate(-20deg);
        }
        40% {
          transform: rotate(40deg);
        }
        60% {
          transform: rotate(-20deg);
        }
        80% {
          transform: rotate(40deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    </style>
  </head>
  <body>
      <div id="emoji">🤪</div>
  </body>
</html>
```

Una vez definida la animación, debes asociarla y configurarla mediante propiedades:

- **_'animation-name'_**: define qué _keyframes_ va a usar la animación. El valor debe ser el nombre que le asignes a los _keyframes_.
    

- **_'animation-duration'_**: define cuánto va a durar la animación en segundos (s) o milisegundos (ms).
    

- **_'animation-timing-function'_**: define como va a ser la curva de aceleración de la animación (igual que en las transiciones).
    

- **_'animation-delay'_**: define el retardo en el inicio de la animación, en milisegundos (ms) o segundos (s).
    

- **_'animation-iteration-count'_**: define cuántas veces quieres que se ejecute la animación, puedes usar un valor numérico o _infinite_ si quieres que se ejecute indefinidamente.
    

- **_'animation-direction'_**: define si la animación debe ejecutarse de principio a fin, de fin a principio o alternadamente:
    
    - **_"normal"_**: la animación va a ir entre `from` y `to` (o sus valores porcentuales).
        
    - **_"reverse"_**: ... entre `to` y `from`.
        
    - **_"alternate"_**: alternará entre _normal_ y _reverse_ cada vez que se ejecute la animación (definimos el número de veces que se va a ejecutar en '_animation-iteration-count'_).
        

- **_'animation-fill-mode'_**: define como se aplicará la animación antes y después de su ejecución. Su valor por defecto es _none_ por lo que ningún estilo definido en los _keyframes_ de la animación se va a aplicar si la animación no se está ejecutando. Otros valores son:
    
    - **_"forwards"_**: cuando acabe la animación mantendrá los estilos definidos en los _keyframes_ finales de la animación.
        
    - **_"backwards"_**: el elemento cogerá los estilos definidos en el primer _keyframe_ de la animación tan pronto se le aplique, aunque tenga un retardo en el comienzo de esta.
        
    - **_"both"_**: una combinación de los anteriores.

>**Tip**: Para obtener más información sobre las animaciones, visita la página de MDN dedicada a las [animaciones CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/animation).

