La accesibilidad web (en frecuencia abreviada como _a11y_) hace referencia a la posibilidad de brindar acceso a los sitios web y a todo su contenido a todas las personas, independientemente de sus limitaciones físicas o aquellas derivadas del contexto de uso.

La tecnología facilita las cosas para muchas personas. Para aquellas personas con algún tipo de discapacidad, la tecnología debe posibilitar y facilitar el acceso. La accesibilidad significa desarrollar contenido que sea lo más accesible posible sin importar las habilidades físicas y/o cognitivas del usuario y sin importar cómo este acceda a la web.

> "La Web está diseñada fundamentalmente para que funcione para todas las personas, independientemente de su hardware, software, idioma, cultura, ubicación, capacidad física o mental. Cuando la web cumple con este objetivo, es accesible para personas con un amplio rango de capacidades auditivas, de movimiento, de vista y habilidades cognitivas". - (_W3C - Accessibility_)

La mayoría de información sobre accesibilidad web que puedes encontrar, y en lo que nos vamos a centrar aquí, se basa principalmente en facilitar el uso de lectores de pantalla para usuarios con problemas de visión.

Esto es así porque es la parte que más depende del código que escribas. Sin embargo, es importante tener en cuenta que la accesibilidad toca otros aspectos, por ejemplo, de diseño: utilizar los colores adecuados para que personas con daltonismo puedan visualizar la web correctamente, crear una navegación sencilla y clara para personas con discapacidad cognitiva, etc.


## Primero semántica

Como refiere, [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/Accessibility), "_Se puede hacer accesible una gran cantidad de contenido web solo asegurándose de que se utilizan los elementos HTML con el propósito correcto todo el tiempo_".

La importancia del uso de HTML semántico (a veces llamado _POSH_, o _Plain Old Semantic HTML_) será un tema en común en muchos de los recursos y en los ejemplos que encontrarás cuando sigas aprendiendo más de HTML. Esto significa usar los elementos correctos de HTML para su propósito determinado, tanto como sea posible.

Puedes estar preguntándote ¿por qué es tan importante? Después de todo, puedes usar una combinación de CSS y JavaScript para hacer que casi cualquier elemento HTML se comporte en la forma que tú quieras. Por ejemplo, un botón que reproduzca un vídeo en tu sitio puede estar hecho así:

```HTML
<div>Reproducir vídeo</div>
```

Pero como verás más adelante, tiene más sentido utilizar el elemento correcto para esta tarea:

```HTML
<button>Reproducir vídeo</button>
```

La etiqueta `<button>` de HTML ya tiene estilos adecuados por defecto (que probablemente quieras sobrescribir), y además también están construidos para ser accesibles con el teclado (el usuario puede navegar entre botones usando la tecla tabulador (_Tab)_ y activar su selección con _Return_ o _Enter_).

Escribir un HTML semántico te llevará e mismo tiempo que uno no semántico si lo haces de forma coherente desde el principio. Además, tiene otras ventajas a mayores de la accesibilidad:

- Fácil desarrollo: obtienes algunas funcionalidades 'gratis', y se podría decir que es más fácil de entender.
    
- Mejor en móviles: el HTML semántico es probablemente más liviano que el código no semántico. Además es más fácil de hacer _responsive_.
    
- Más comprensible para _SEO_: Hace que las páginas web sean más informativas y adaptables, lo que permite a los navegadores y motores de búsqueda interpretar mejor el contenido, así tus documentos web serán más fáciles de encontrar para tus clientes.
    

A continuación, se listan algunas pautas y prácticas recomendadas para implementar la accesibilidad en HTML:

- Utiliza etiquetas semánticas para estructurar el contenido de manera clara y lógica.
    
- Asegura un buen contraste de color entre el texto y el fondo.
    
- Proporciona texto alternativo para las imágenes, mediante el atributo '_alt'_.
    
- Utiliza encabezados (`<h1>`, `<h2>`, etc.) para organizar y jerarquizar el contenido.
    
- Facilita la navegación mediante el teclado y garantiza que todos los elementos interactivos sean accesibles de esta forma.
    
- Asegura que los formularios sean accesibles, con etiquetas asociadas a los campos de entrada y mensajes de error claros.


## ARIA

A veces no es suficiente contar con un diseño sencillo y marcado nativo HTML para cumplir con los objetivos de accesibilidad.

Se están desarrollando propuestas técnicas cada vez más especializadas para complementar la semántica que no puede ser formulada por HTML por sí solo. Los atributos ARIA (_Accessible Rich Internet Applications_) son un ejemplo de estos complementos, los cuales proporcionan información adicional sobre la función, el estado y las propiedades de los elementos. Estos atributos permiten a los dispositivos de asistencia, como los lectores de pantalla, interpretar mejor el contenido y hacer que la aplicación sea más accesible para usuarios con discapacidades visuales, motoras o cognitivas.

El principal objetivo de ARIA es permitir que _JavaScript_ pueda comunicar a las tecnologías asistivas, los cambios dinámicos que ocurran en la página. Las _WAI-ARIA_ son parte de la iniciativa de accesibilidad web del _W3C_ para potenciar la accesibilidad web.

Se debe usar ARIA sabia y moderadamente, de tal forma que proporcione el mayor impacto para las tecnologías asistivas. Añadir ARIA a una página web no cambiará el funcionamiento o la apariencia del _site_ para los usuarios videntes, sin embargo, un código semántico tendrá un efecto positivo en todos sus usuarios. Utilizar una estructura semántica lógica con un toque de ARIA, donde sea necesario, proporcionará una experiencia distintiva y óptima a tus usuarios.

Dos de los atributos ARIA más útiles son:

- **_'aria-label'_**: permite asociar un texto a un elemento.
    
- **_'aria-hidden'_**: si su valor es “_true_” los lectores de pantalla no leerán el contenido de ese elemento.
    

Por ejemplo, el siguiente código muestra un botón no accesible, ya que su contenido es un icono:

```HTML
<button name="favorite">
  <svg viewBox="0 0 10 10">
    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
  </svg>
</button>
```

Para hacerlo accesible, puedes añadir el atributo _aria-hidden=”true”_ al `<svg>` y un texto que describa su función.

```HTML
<button name="favorite">
  <svg aria-hidden="true" viewBox="0 0 10 10">
    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
  </svg>
  Añadir a favoritos
</button>
```

Después, en CSS, pones el tamaño de fuente a 0 para que no se vea el texto, pero seguirá ahí. El atributo _aria_ es para que la imagen no moleste al leer la pantalla, ya que no va a aportar nada útil.

> **Tip**: Como siempre, puedes aprender más sobre los [atributos aria](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics) y la [accesibilidad](https://developer.mozilla.org/en-US/docs/Web/Accessibility) en la MDN.

![](./images/hab_tip_5.png)

