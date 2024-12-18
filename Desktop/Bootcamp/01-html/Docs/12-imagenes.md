El elemento HTML para incrustar imágenes es `<img>`. Este elemento requiere como mínimo el atributo '_src'_ para especificar la ruta de la imagen que quieres incorporar.

```HTML
<img src="/images/logo.png" alt="Logo en color" />
```

El atributo '_alt'_ contiene una descripción textual de la imagen, no es obligatorio, pero es increíblemente útil para la accesibilidad; los lectores de pantalla leen esta descripción para que los usuarios sepan lo que significa la imagen, por lo que siempre debes incluirlo. Además, el texto alternativo se muestra en caso de que la imagen no se haya podido cargar por algún motivo.

Ejemplo de una imagen cuya ruta no existe y cómo se ve en el navegador:

```HTML
<img src="/imagen_fallida.jpg" alt="Foto de la Atlántida" />
```

En este caso, el enlace a la foto no existe o no funciona y se muestra el texto alternativo definido en el atributo '_alt'_:


<img src="/imagen_fallida.jpg" alt="Foto de la Atlántida" />


## Otros elementos para trabajar con imágenes

A mayores, HTML5 ofrece otros dos elementos para trabajar con imágenes (el elemento `<img>` iría dentro de ellos):

- `<picture>`: Inserta una imagen en el documento. En conjunto con la etiqueta `<source>` ofrece múltiples imágenes con resoluciones diferentes. Es conveniente para crear sitios web adaptables. [Ver más información en la MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture).

```HTML
<picture>
  <source srcset="imagen_grande.jpg" media="(min-width: 800px)">
  <source srcset="imagen_mediana.jpg" media="(min-width: 400px)">
  <img src="imagen_pequena.jpg" alt="Descripción de la imagen">
</picture>
```

En caso de que el ancho mínimo de la ventana del navegador sea de 800 píxeles, el navegador seleccionará y mostrará la imagen `imagen_grande.jpg`, y si el ancho mínimo es de 400 píxeles la imagen `imagen_mediana.jpg`. Si ninguna de las condiciones de los elementos `<source>` se cumple, el navegador utilizará la imagen especificada en el elemento `<img>`, que es `imagen_pequena.jpg` en este caso.

- `<figure>`: Este elemento representa contenido autónomo (no necesariamente imágenes), potencialmente con un título opcional que se especifica a través del elemento `<figcaption>` y que a diferencia del atributo '_alt'_, no tiene por qué describir la imagen. La imagen y el título se muestran como una unidad singular.

```HTML
<figure>
   <img src="https://images.pexels.com/photos/10914515/pexels-photo-10914515.jpeg" alt="Un gato jugando">
   <figcaption>Los gatos son animales muy apreciados como mascota</figcaption>
</figure>
```


![](./images/)

|Formatos de imagen admitidos|Descripción|
|-----------------------------------|-------------|
|APNG [(Animated Portable Network Graphics)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)|Buena elección para secuencias de animación sin pérdida (GIF tiene un rendimiento menor).|
|AVIF [(AV1 Image File Format)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image)|Excelente alternativa tanto para imágenes fijas y animadas, por su alto rendimiento.|
|GIF [(Graphics Interchange Format)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format)|Imágenes simples y animaciones.|
|JPEG [(Joint Photographic Expert Group image)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image)|Extraordinaria opción para la compresión con pérdida de imágenes fijas (actualmente el más popular).|
|PNG [(Portable Network Graphics)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#png_portable_network_graphics)|Estupendo formato para la compresión con pérdida de imágenes fijas ( ligeramente con una mejor calidad que JPEG). Ofrece gran variedad de opciones de transparencia.|
|SVG [(Scalable Vector Graphics)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)|Formato de imagen vectorial. Recomendado para imágenes que deben mostrarse con precisión en diferentes tamaños.|
|WebP [(Web Picture format)](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image)|Excelente elección tanto para imágenes fijas como animadas.|

## Imágenes en SVG

Las imágenes _SVG_ son archivos que usan matemáticas para dibujar una imagen. Al no estar basadas en píxeles, pueden ser escaladas sin perder calidad, lo que las hace perfectas para gráficos e iconos que deben mostrarse en diferentes tamaños.

Puedes incrustar imágenes en formato _SVG_ (_Scalable Vector Graphics_) en tu página web como cualquier otra imagen, pero su código se parece más a HTML (XML) con una etiqueta `<svg>`. Si copias ese código en lugar de usar la etiqueta `<img>` con la ruta de la imagen, puedes:

- No almacenar la imagen en el servidor, ya que la información estará directamente en el código.
    
- Modificar la imagen mediante CSS, pudiendo animarla o modificarla dinámicamente con JavaScript.
    

Por ejemplo, este es el _SVG_ de un icono con forma de corazón:

```HTML
<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg
      aria-hidden="true"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style="width: 150"
      xml:space="preserve"
      fill="red"
    >
      <path
        d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936C512,137.911,498.388,101.305,474.655,74.503z"
      />
    </svg>
```


![](./images/heart_example.png)

