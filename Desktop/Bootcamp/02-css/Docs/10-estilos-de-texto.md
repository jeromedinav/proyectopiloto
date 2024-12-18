En esta sección, descubrirás cómo emplear CSS para mejorar el aspecto del texto en tu página web. Gracias a CSS, puedes modificar diferentes propiedades del texto, como el tipo de fuente, tamaño, color, estilo, espaciado y alineación, lo que te permite optimizar el diseño y la legibilidad del contenido.

# Tipografía

Una tipografía o "_font_" en CSS se compone generalmente de muchas variaciones que describen el estilo del texto, como _bold_ (negrita), _italic_ (cursiva), _normal_ y sus combinaciones. Por ejemplo, la fuente tipográfica _Times_ es en realidad una familia de fuentes que incluye variantes como _TimesRegular_, _TimesBold_, _TimesItalic_, _TimesBoldItalic_, etc. Cada una de estas variantes es una fuente real y _Times_ es una combinación de todas ellas.

Ten en cuenta que no todos los dispositivos tienen acceso a las mismas tipografías. Por esta razón, al definir la familia tipográfica de un elemento en CSS, es recomendable proporcionar una lista de ellas separadas por comas en orden de preferencia. El dispositivo del usuario aplicará la primera fuente disponible en la lista. Para asegurarte, **siempre deberías incluir una familia genérica al final** en caso de que ninguna de las fuentes especificadas esté disponible en el sistema del usuario.

```CSS
font-family: "Courier New", Courier, monospace;
```

## Familias genéricas

CSS define cinco familias de fuentes genéricas:

### Fuentes serif

Estas fuentes son proporcionales y tienen serifas (pequeños detalles decorativos que se añaden a los extremos de las líneas que componen las letras). Una fuente es proporcional si todos los caracteres de esta tienen diferentes anchos, con respecto a sus diferentes tamaños. Por ejemplo, una “i” minúscula y una “m” minúscula tienen anchos diferentes. En principio, es mejor para leer en medios impresos. Ejemplos de fuentes _serif_ son _Times_, _Georgia_ y _New Century Schoolbook_.


### Fuentes sans-serif

Estas fuentes son proporcionales y no tienen serifas. Es el tipo de fuente en la que está escrita esta documentación. En teoría, es más cómoda de leer en pantalla. Ejemplos de fuentes _sans-serif_ son _Helvetica_, _Geneva_, _Verdana_, _Arial_ y _Univers_.


### Fuentes monospace

Las fuentes monoespaciadas no son proporcionales. Generalmente se utilizan para mostrar código de programación o datos tabulares. En estas fuentes, cada carácter ocupa la misma cantidad de espacio horizontal que todos los demás caracteres; por lo tanto, una “i” minúscula ocupará el mismo espacio (horizontal) que una “m” minúscula, aunque sus formas de letras reales pueden tener diferentes anchos. Estas fuentes pueden o no tener serifas. Si una fuente tiene anchos de carácter uniformes, se clasifica como monoespaciada, independientemente de la presencia de serifas. Ejemplos de fuentes _monoespace_ son _Courier_, _Courier New_, _Consolas_ y _Andale Mono_.


### Fuentes cursivas

Estas fuentes intentan emular la escritura humana o el llamado _lettering_. Por lo general, se componen en gran parte de curvas fluidas y tienen decoraciones de trazos que superan a las que pueden encontrarse en las fuentes _serif_. Por ejemplo, una “A” mayúscula podría tener un pequeño rizo en la parte inferior de la asta izquierda o componerse enteramente de florituras y rizos. Ejemplos de fuentes cursivas son _Zapf Chancery_, _Author_ y _Comic Sans_.


### Fuentes fantasía

Dichas fuentes no están realmente definidas por ninguna característica única que no sea nuestra incapacidad para clasificarlas fácilmente en una de las otras familias (a veces se les llama fuentes "decorativas" o "de exhibición"). Algunas de estas fuentes son _Western_, _Woodblock_ y _Klingon_.

En teoría, cada familia de fuentes caerá en una de estas familias genéricas. En la práctica, puede no ser el caso, pero es probable que las excepciones (si las hay) sean pocas y distantes entre sí, así que es probable que los navegadores clasifiquen cualquier fuente que no puedan identificar como _serif_, _sans-serif_, _monospace_ o _cursive,_ en la categoría de “_fantasy_”.

![Ejemplo de familia de fuentes](./images/CSS_font-families_example.png)
	
```CSS
body { font-family: serif; }

h1, h2, h3, h4 { font-family: sans-serif; } 

code, pre, tt, kbd { font-family: monospace; } 

p.signature {font-family: cursive;}
```
	
![Ejemplo de familias tipográficas](./images/CSS_font_example.png)

## Especificar familia tipográfica

Como aprendiste al principio de esta sección, puedes aplicar distintas tipografías simplemente indicando su nombre, pero hay algunos detalles para tener en cuenta:


### **Uso de comillas**

Si te fijas en el primer ejemplo de la sección, observarás que solo uno de los nombres de las fuentes ("_Courier New_") iba entre comillas. Las comillas (`”`) son obligatorias cuando el nombre se compone de más de una palabra, separadas por espacios. Es la forma de indicarle a CSS que se trata de un solo nombre.

Sin embargo, **si se usan comillas en una tipografía genérica, CSS no podrá encontrar la fuente**.

En el caso de que sean nombres de una sola palabra, realmente da igual si se ponen las comillas o no.

### **Importar tipografías**

Cuando necesites utilizar una tipografía que no se encuentra entre las opciones habituales, puedes importarlas de fuentes externas como, por ejemplo, [Google Fonts](https://fonts.google.com/). Para ello, la plataforma que utilices (en este caso, _Google Fonts_) debe proporcionar un enlace directo a la fuente. Una vez que hayas importado las fuentes que necesites, podrás utilizarlas en tu página web como cualquier otra tipografía, y el usuario tendrá acceso a ellas.

```CSS
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:wght@400;900&display=swap');

h1 { 
    font-family: 'Permanent Marker', cursive;
}

p {
    font-family: 'Roboto', sans-serif;
}
```
	
![Ejemplo de fuente Roboto](./images/CSS_roboto_family.png)


# Otros estilos de texto

## Estilos de fuente

Ya hemos visto la propiedad '_font-family'_ para definir la tipografía, ahora vamos a ver algunas propiedades más de las fuentes:


### `font-family`

Como has visto en los ejemplos anteriores de esta sección, con la propiedad '_font-family'_ puedes asignar una familia de fuente específica o una lista de familias de fuentes, separadas por comas, en orden de preferencia. El navegador utilizará la primera fuente disponible en la lista.

```CSS
p {
  font-family: "Courier New", Courier, monospace;
}
```
	
![](./images/10-font-family.png)

Si en el ordenador cliente no dispone de la la fuente "_Courier New_", tratará de utilizar la fuente _Courier_ y, si se diese el caso de que tampoco dispusiera de ella, utilizaría la fuente genérica _monospace_.

### `font-size`

La propiedad '_font-size'_ te permite establecer el tamaño del texto. Puedes utilizar distintas unidades de medida, como píxeles (`px`), `em`, `rem` o porcentajes (`%`).

```CSS
p {
  font-size: 24px;
}
```
	
![](./images/10-font-size.png)

### `color`

Para cambiar el color del texto, utiliza la propiedad '_color'_. Puedes especificar el color utilizando cualquiera de los formatos válidos para seleccionar un color en CSS, como nombres de colores, valores _RGB_, valores _HEX_ o valores _HSL_.

```CSS
h1 {
  color: royalblue;
}

p {
  color: chocolate;
}
```
	
![](./images/10-font-color.png)

### `font-style`

Se usa para activar y desactivar el texto en cursiva. Los valores posibles son los siguientes:

- **"normal"**: Pone el texto en tipo de letra normal (desactiva la cursiva).
    
- **"italic"**: Si está disponible establece el texto en la versión cursiva del tipo de letra; si no lo está, simulará cursiva con el modo oblique en su lugar.
    
- **"oblique"**: Pone el texto en una versión de tipo de letra cursiva simulada, que se genera inclinando la versión normal.

```CSS
p {
  font-style: italic;
}
```
	
![](./images/10-font-style.png)
  
### `font-weight`

Establece el grueso o peso del texto. Puede haber muchos valores si dispones de muchas variantes de fuente (como _light_, _normal_, _bold_, _extrabold_, _black_, etc.), pero en realidad raramente usarás alguna de ellas, más allá de los estilos _normal_ y _bold_:

- **_"normal"_, "_bold"_**: grueso del tipo de letra normal y negrita, respectivamente.
    
- **_"lighter"_, "_bolder"_:** Establece el grueso de la negrita del elemento activo, un nivel por debajo o por encima, respectivamente, del grueso de su elemento padre.
    
- **_100_ – _900_:** Valores numéricos de negrita, que proporcionan un control más detallado que las anteriores _keywords_. Cuanto más alto el número, más gruesa la letra.

```CSS
p {
  font-weight: bold;
}
```
	
![](./images/10-font-weight.png)


### `text-transform`

Te permite establecer algunas transformaciones sobre el tipo de letra. Los valores incluyen:

- **_"none"_**: Impide cualquier transformación.
    
- **_"uppercase"_**: Transforma TODO EL TEXTO A MAYÚSCULAS.
    
- **_"lowercase"_**: transforma todo el texto a minúsculas.
    
- **_"capitalize"_**: Transforma Las Letras Iniciales De Cada Palabra A Mayúscula.

```CSS
p {
    text-transform: uppercase;
}
```
	
![](./images/10-text-transform.png)


### `text-decoration`

Activa/desactiva decoraciones en los tipos de letra (lo usarás principalmente para desactivar el subrayado por defecto de los enlaces, una vez les apliques estilo). Los valores disponibles son:

- **_"none"_**: Desactiva cualquier decoración de texto que presente.
    
- **_"underline"_**: Subraya el texto.
    
- **_"overline"_**: Coloca una línea como el subrayado pero encima del texto.
    
- **_"line-through"_**: Tacha el texto.
    

Ten en cuenta que '_text-decoration'_ puede aceptar diversos valores a la vez, de modo que puedes incluir diversas decoraciones simultáneas. Por ejemplo: `text-decoration: underline overline`.

Considera, además, que '_text-decoration'_ es una propiedad abreviada de '_text-decoration-line'_, '_text-decoration-style'_ y '_text-decoration-color'_. Puedes utilizar combinaciones de los valores de esta propiedad para crear efectos interesantes, por ejemplo `text-decoration: line-through red wavy`.

```CSS
p {
    text-decoration: line-through red wavy;
}
```
	
![](./images/10-text-decoration.png)


### `text-shadow`

Define una sombra detrás del texto estableciendo el desplazamiento horizontal, desplazamiento vertical, grado de difusión y color de la sombra respectivamente.

```CSS
h2 {
    text-shadow: 2px 2px 4px limegreen;
}
```
	
![](./images/10-text-shadow.png)


## Estilos de disposición

La disposición del texto afecta a la alineación, interlineado y separación de letras y palabras.

### `text-align`

Para especificar el alineamiento horizontal del texto. Admite los valores tradicionales "_left"_, "_center"_, "_right"_ y "_justify"_. Ten en cuenta que es para posicionar el texto dentro de un elemento y no el elemento en sí.

```CSS
h2 {
    text-align: center;
}

p {
    text-align: justify;
}
```
	
![](./images/10-text-align.png)


### `line-height`

Permite ajustar el espacio entre las líneas de texto. Puedes asignarle un valor numérico sin unidad (que se multiplicará por el tamaño de fuente actual), el valor por defecto es _1.2_.

```CSS
p {
    line-height: 2;
}
```
	
![](./images/10-line-height.png)

### `letter-spacing` y `word-spacing`

Controlan la separación entre letras y palabras, respectivamente. Permiten valores positivos o negativos en cualquiera de las unidades conocidas y funcionan de forma similar.

```CSS
p {
    letter-spacing: 4px;
}
```
	
![](./images/10-letter-spacing.png)

