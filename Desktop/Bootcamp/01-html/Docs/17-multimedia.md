Los elementos multimedia en HTML permiten crear experiencias más interactivas y atractivas para los usuarios, mejorando la experiencia y el impacto visual de un sitio web. Entre estos elementos se encuentra los que trataremos en esta sección: `<audio>`, `<video>` e `<iframe>`.

## Audio

En HTML5 se incorporó el elemento `<audio>` para incluir archivos de audio en las páginas web.

Existen varios atributos que puedes aplicar a la etiqueta `<audio>` para controlar la reproducción y comportamiento del audio:

- **_'src'_**: especifica la ruta al archivo multimedia que quieres reproducir.
    

- **_'controls'_**: muestra unos botones que permiten controlar la reproducción (reproducción/pausa, control de volumen…).
    

- **_'autoplay'_**: el audio empieza a reproducirse automáticamente en cuanto carga lo suficiente. Es recomendable usar este atributo con precaución, ya que la reproducción automática puede ser molesta para los usuarios.
    

- **_'loop'_**: Si el audio llega al final de la reproducción, vuelve a reproducirse desde el principio automáticamente hasta que se pare manualmente.
    

- **_'muted'_**: Por defecto, el volumen está desactivado.
    

Ejemplo de la etiqueta `<audio>` con varios de sus atributos:

```HTML
<audio src="/audios/song.mp3" controls loop muted></audio>
```

El formato de audio más recomendado es _.mp3_ que está soportado por todos los navegadores modernos.

![Ejemplo de reproductor de audio en Firefox](./images/audio_player_example.png)


## Video

La etiqueta `<video>` fue introducida en HTML5 junto con la etiqueta `<audio>`. Igual que `<audio>`, `<video>` tiene los mismos atributos, y a mayores dispone de los siguientes atributos:

- **_'height'_** y '**_width'_**: especifican el alto y el ancho respectivamente. Aunque la medida exacta es mejor definirla con CSS, estos atributos sirven para reservar espacio al elemento y evitar saltos a medida que carguen.
    

- **_'poster'_**: muestra una imagen fija en lugar del vídeo hasta que se reproduzca, ya sea manualmente o cuando se carga automáticamente si se ha especificado el atributo '**_autoplay'_**.

```HTML
<video src="/videos/cat.mp4" poster="/images/cat.jpg" controls width="500"></video>
```

![Ejemplo de reproductor de video](./images/video_player_example.png)

> **Tip**: Tanto en imágenes como en vídeos, si no pones la proporción de ancho y alto adecuado, se deformarán; por lo que puede ser interesante poner solo uno (normalmente la altura, '_height'_).

> **Tip**: La apariencia de los controles tanto de `video` como de `audio` están marcados por el navegador y no lo puedes modificar. Para personalizar los controles, es necesario crear botones personalizados y asociar las acciones correspondientes utilizando _JavaScript_.


## iframe

El elemento `<iframe>` en HTML es útil para insertar diferentes tipos de contenido, como documentos, vídeos y mapas, directamente en una página web. Es especialmente efectivo para agregar vídeos de plataformas externas como _YouTube_ o _Vimeo_, sin sobrecargar el servidor de la página con el contenido del vídeo.

Para incrustar un vídeo de una fuente externa utilizando `<iframe>`, sigue estos pasos:

1. Ve al vídeo que deseas incrustar en la plataforma de alojamiento de videos (por ejemplo, _YouTube_).  
    
2. Busca el botón de "Compartir" o "_Share_" debajo del video y haz clic en él.  
    
3. Selecciona la opción "Incrustar" o "_Embed_" en el menú que aparece. Esto te proporcionará un fragmento de código HTML que contiene un `<iframe>`.  
    
4. Copia el fragmento de código y pégalo en el código HTML de tu página web donde deseas que aparezca el vídeo.
    

El fragmento de código incrustado incluirá la etiqueta `<iframe>` con los siguientes atributos:

- **_'src'_**: La URL del vídeo que se va a incrustar.
    
- **_'width'_** y '**_height'_**: El ancho y alto del `<iframe>` en píxeles.
    
- **_'frameborder'_**: Especifica si se debe mostrar un borde alrededor del `<iframe>`. Por lo general, se establece en "0" para ocultar el borde.
    
- **_'allow'_**: Permite ciertas funciones en el `<iframe>`. En este caso, se permite el uso de acelerómetro, reproducción automática, escritura en portapapeles, medios cifrados, giroscopio, función "_picture-in-picture_" y compartir en la web.
    
- **_'allowfullscreen'_**: Permite que el vídeo se reproduzca en pantalla completa cuando el usuario lo solicite.
    

A continuación, un ejemplo de cómo se vería un `<iframe>` incrustando un vídeo de _YouTube_:

```HTML
<iframe width="560" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
web-share" allowfullscreen></iframe>
```

Prueba a crear una página web e incrustarle el código anterior para ver el resultado.

![Ejemplo de video de Youtube incrustado con iframe](./images/iframe_youtube_example.png)

