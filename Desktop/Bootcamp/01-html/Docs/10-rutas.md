## Sitio web (web site)

En esencia, un sitio web es un conjunto de documentos HTML, archivos de imagen, hojas de estilo, JavaScript, archivos multimedia y otros recursos que se alojan en un servidor. La acción de moverse de un documento a otro se conoce como "navegar" y es fundamental para la experiencia de usuario en la web.

Por lo general, para desarrollar un sitio web, necesitas crear un archivo por cada página que deseas incluir. Además, puedes incorporar archivos de imagen, hojas de estilo y otros recursos que quieras mostrar en las páginas web.

La siguiente imagen representa cómo se verían los directorios y archivos de un sitio web, dentro del servidor.

![](./images/routes_example.png)

Puedes comprobar en el ejemplo que se incluyen varios directorios para distintos tipos de recursos, además de tres archivos llamados _contacto.html_, _index.html_ y _noticias.html_, que representan las tres páginas web que queremos incluir en este sitio.

Aunque puedes asignar cualquier nombre a estos archivos, algunos servidores como _Apache_ designan archivos por defecto en caso de que el usuario no especifique ninguno. El nombre utilizado con más frecuencia es "_index"_. Si un usuario accede al servidor sin especificar el nombre del archivo que intenta abrir, el servidor busca un archivo con el nombre _index.html_ y lo envía de vuelta al cliente. Por esta razón, el archivo "_index"_ se considera el punto de entrada de tu sitio web y siempre debes asegurarte de incluirlo.

> **Tip**: También puedes guardar los archivos con extensión `.html` en carpetas para tener tu proyecto más organizado. Excepto _index.html_, que siempre debe ir en la raíz (el directorio padre donde se encuentran todos los archivos y subdirectorios).


## Rutas

Antes de aprender cómo vincular unos documentos a otros en HTML, es importante conocer las diferentes formas de especificar rutas. Existen dos tipos: _rutas absolutas_ y _rutas relativas_.

### Rutas absolutas

Una ruta absoluta en HTML es una dirección completa que indica la ubicación de un archivo o recurso a partir de la raíz del servidor web. Se especifica la ruta completa desde la raíz del servidor web hasta el archivo o recurso que se desea acceder. Por ejemplo, `/images/logo.jpg` es una ruta absoluta que indica la ubicación de un archivo de imagen llamado `logo.jpg` en el directorio _images_ en la raíz del servidor web.

```HTML
<img src="/images/logo.png" alt="Logo de mi sitio web">
```

En este caso, la ruta absoluta indica que la imagen `logo.png` se encuentra en la carpeta _images_ ubicada en la raíz del servidor web. Al comenzar con el carácter `/`, la ruta indica que debe comenzar desde la raíz del servidor.

Las rutas absolutas son útiles cuando se trabaja con recursos que se encuentran en diferentes ubicaciones del servidor web y no es posible especificar una ruta relativa desde la ubicación actual del archivo HTML. Sin embargo, el uso de rutas absolutas puede dificultar la portabilidad del sitio web y aumentar la probabilidad de errores en caso de que se cambie la ubicación del recurso o del sitio web en su totalidad.

> **Tip**: > Al utilizar rutas absolutas, es importante asegurarse de que la ubicación de los recursos no cambie. Si la ubicación de un recurso cambia, la ruta absoluta ya no será válida y el sitio web puede dejar de funcionar correctamente.  
> 
> Para evitar este problema, se recomienda utilizar rutas relativas siempre que sea posible. Las rutas relativas se basan en la ubicación actual del archivo HTML y son menos propensas a causar problemas si la ubicación del sitio web cambia.

### Rutas relativas

Una ruta relativa especifica la ubicación de un archivo en relación con la ubicación actual del documento HTML en el que te encuentras. La ruta relativa se añade a la ubicación actual (quitando el archivo) para convertirla en una ruta absoluta. Es decir, en lugar de especificar la ruta completa de un archivo (desde la raíz del sistema de archivos), la ruta relativa comienza desde el directorio actual donde se encuentra el documento HTML.

En este tipo de rutas, el directorio actual se representa con un punto (`.`), aunque la mayoría de las veces se puede omitir.

Por ejemplo, para acceder a `imagen.jpg` dentro del directorio _images_ en el ejemplo anterior desde la raíz, puedes utilizar cualquiera de estas dos rutas relativas:

```
images/imagen.jpg
```

```
./images/imagen.jpg
```

Si estás en la raíz, apenas hay diferencia entre una ruta absoluta y una relativa, pero ¿y si ya estuvieras dentro de la carpeta _images_? Entonces las opciones serían:

```
imagen.jpg
```

```
./imagen.jpg
```

En este caso solo estás trabajando con un nivel, pero imagínate lo que te ahorraría usar una ruta relativa si estuvieses mucho más abajo en el árbol de directorios.


#### Moverse hacia arriba

Has visto cómo usar rutas relativas para moverte hacia abajo, pero ¿cómo puedes acceder a directorios y archivos que estén más arriba? Así como la carpeta actual es `.`, el directorio padre del actual es `..`

Por lo tanto, si estuvieras dentro de la carpeta `images` pero quisieras usar una ruta relativa para acceder a `script.js` dentro del directorio _scripts_, sería:

```
../scripts/script.js
```

De esta forma, primero sales de la carpeta `images`, accediendo a su padre con `..` , y después entras en la carpeta _scripts_.

### Rutas de anclaje

Las rutas de anclaje son una forma de apuntar a un elemento específico dentro del mismo documento HTML. Se crean utilizando el símbolo `#` seguido del id del elemento al que se quiere acceder.

Para que una ruta de anclaje funcione, el elemento al que apunta debe tener un atributo `id`. El valor de este atributo se utiliza para identificar el elemento al que se quiere acceder.

Las siguientes rutas de anclaje apuntan al elemento con el id `noticias`:

```HTML
#noticias
```

```HTML
index.html#noticias
```

```HTML
http://misitio.com/index.html#noticias
```

Cuando un usuario hace clic en un enlace con una ruta de anclaje, el navegador se desplaza hasta el elemento con el `id` especificado. El elemento se coloca en la parte superior de la ventana del navegador, siempre que el desplazamiento lo permita.

Así es como funciona, por ejemplo, la tabla de contenidos de [Wikipedia](https://en.wikipedia.org/wiki/HTML).

