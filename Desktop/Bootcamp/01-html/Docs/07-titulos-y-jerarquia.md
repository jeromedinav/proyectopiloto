## Títulos (_headings_)

En HTML contamos con 6 niveles de títulos que van desde `<h1>` (el principal) hasta el `<h6>`. El nivel de título representa el nivel que ocupa el contenido al que se refiere en la jerarquía y no el estilo (el estilo lo marca CSS), por lo que siempre debes mantener un orden lógico.

Por ejemplo, puedes pasar de un `<h4>` a un `<h2>` si estás volviendo para arriba en la jerarquía, pero nunca puedes pasar de un `<h2>` a un `<h4>`, ya que primero tendrías que pasar por un `<h3>`.

Del mismo modo, **nunca debería haber más de un** `<h1>` **en una página**, ya que este representa la base de la jerarquía y engloba todo el contenido de la página. Por lo general, el elemento `<h1>` se encuentra dentro del `<header>` principal (no debes confundirse con la etiqueta `<head>` del documento) que, a su vez, se ubica directamente dentro del `<body>`, sin estar subordinado a ningún otro contenedor.

Observa esta estructura:

![](./images/title_structure.png)

El código HTML de la estructura anterior podría ser algo como esto (para abreviar, centrémonos solo el `body`):

```HTML
  <body>
    <header>
      <h1>Titulo principal</h1>
    </header>
    <main>
      <section>
        <h2>Seccion principal 1</h2>
        <p>Contenido de la primera seccion</p>

        <aside>
          <h3>Titulo del aside</h3>
          <section>
            <h4>Seccion del aside 1</h4>
            <p>Contenido de la primera seccion dentro del aside</p>
          </section>

          <section>
            <h4>Seccion del aside 2</h4>
            <p>Contenido de la segunda seccion dentro del aside</p>
          </section>
        </aside>
      </section>

      <section>
        <h2>Seccion principal 2</h2>
        <p>Contenido de la segunda seccion</p>
      </section>
    </main>
  </body>
```

Puede tener sentido saltar niveles al ir hacia arriba en la jerarquía si quieres cambiar de rama, pero no tendría sentido saltarlos hacia abajo porque implicaría un “hueco” en el árbol.

En HTML, no es necesario contener secciones pequeñas en un contenedor específico. Los títulos pueden marcar divisiones en el contenido, independientemente de si estas divisiones están contenidas en un contenedor o no.

Por ejemplo, la siguiente estructura de HTML utiliza títulos para marcar divisiones en el contenido, pero no utiliza contenedores:

```html
<html>
  <head>
    <title>Mi página web</title>
  </head>
  <body>
    <h1>Título principal</h1>
    <p>Este es un párrafo que forma parte de la sección principal.</p>
    <h2>Sección 1</h2>
      <p>Este es un párrafo que forma parte de la sección 1.</p>
      <h3>Subsección 1</h3>
        <p>Este es un párrafo que forma parte de la subsección 1.</p>
    <h2>Sección 2</h2>
      <p>Este es un párrafo que forma parte de la sección 2.</p>
  </body>
</html>
```

Esta estructura podría representar una página web con una sección principal y dos secciones secundarias. El título principal (`<h1>Título principal</h1>`) marca la sección principal de la página. El párrafo que sigue al título principal forma parte de la sección principal. La sección 1 está marcada por el título `<h2>Sección 1</h2>`, y el párrafo que sigue al título `<h2>Sección 1</h2>` forma parte de la sección 1. La subsección 1 de la sección 1 está marcada por el título `<h3>Subsección 1</h3>`, y el párrafo que sigue al título `<h3>Subsección 1</h3>` forma parte de la subsección 1. La sección 2 está marcada por el título `<h2>Sección 2</h2>`, y el párrafo que sigue al título `<h2>Sección 2</h2>` forma parte de la sección 2.

> **Tip**: Puedes mantener o reiniciar la jerarquía de títulos en los elementos `<article>` ya que son independientes de su contexto. Si optas por reiniciar la jerarquía, es recomendable comenzar con el elemento `<h2>`, ya que se debe usar solo un elemento `<h1>` por página.

