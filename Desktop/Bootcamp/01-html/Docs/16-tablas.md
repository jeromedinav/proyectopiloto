En HTML, una tabla es un conjunto de datos estructurados que se distribuyen en filas y columnas, lo que se conoce como datos tabulados. Las tablas son útiles para buscar valores entre diversos tipos de datos que tienen algún grado de conexión, de una manera rápida y sencilla.

Actualmente **no se recomienda utilizar tablas para definir la estructura de un documento HTML**, aún se utilizan para presentar información tabular, como estadísticas o información técnica. En estos casos, las tablas son una herramienta muy útil para presentar grandes cantidades de datos de manera organizada y fácil de leer.


## Estructura de una tabla

Para crear una tabla en HTML, se utilizan varios elementos, como:

- `<table>` Esta etiqueta define una tabla y agrupa todos los demás elementos que la conforman, incluyendo etiquetas de apertura y cierre.
    

- `<tr>` Define una fila de celdas y agrupa todas las celdas que pertenecen a esa fila mediante etiquetas de apertura y cierre.
    

- `<td>` Esta etiqueta define una celda y delimita su contenido mediante etiquetas de apertura y cierre. También se puede utilizar el atributo '_colspan'_ y '_rowspan'_ para indicar cuántas columnas y filas ocupa la celda, respectivamente.
    

- `<th>` Este elemento es igual que `<td>` pero con la particularidad de que representa un título en la tabla, lo que significa que su contenido se relaciona con toda la fila o columna que representa. Se puede definir el atributo '_[scope](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)'_ para indicar a qué grupo de celdas se refiere el título. Si no se especifica, el navegador lo seleccionará automáticamente.
    

Ejemplo de una tabla en HTML:

```HTML
<table>
	<tr>
		<th>Película</th>
		<th>Año</th>
		<th>Plataforma</th>
	</tr>
	<tr>
		<td>The Unforgivable</td>
		<td>2020</td>
		<td>Netflix</td>
	</tr>
	<tr>
		<td>Spider-man: Homecoming</td>
		<td>2017</td>
		<td>Netflix</td>
	</tr>
	<tr>
		<td>Zack Snider´s Justice League</td>
		<td>2020</td>
		<td>HBO Max</td>
	</tr>
</table>
```

	
![](./images/16-img-tablas.png)


> **Info**: El ejemplo de la tabla, así como otros ejemplos en esta sección de HTML se aplica un estilo básico utilizando CSS. Recuerda que HTML se encarga de la estructura y el contenido, mientras que CSS se ocupa de la presentación y el diseño. No esperes que la tabla se vea exactamente igual solo con HTML. Profundizaremos en el uso de CSS para personalizar el estilo en el siguiente módulo.


### Atributos `colspan` y `rowspan`

Los atributos '_colspan'_ y '_rowspan'_ son utilizados para fusionar varias celdas de una tabla en una sola celda, ya sea horizontal o verticalmente, respectivamente.

El atributo '_colspan'_ se utiliza para especificar cuántas columnas de la tabla debe abarcar una celda determinada. Por ejemplo, si una celda tiene un valor de `colspan="3"`, significa que esa celda abarca tres columnas de la tabla. La sintaxis para '_colspan'_ es la siguiente:

```HTML
<td colspan="número de columnas a fusionar">contenido de la celda</td>
```

El atributo '_rowspan'_, por otro lado, se utiliza para especificar cuántas filas de la tabla debe abarcar una celda determinada. Por ejemplo, si una celda tiene un valor de `rowspan="2"`, significa que esa celda abarca dos filas de la tabla. La sintaxis para '_rowspan'_ es la siguiente:

```HTML
<td rowspan="número de filas a fusionar">contenido de la celda</td>
```

Por ejemplo, puedes usar solo una celda de cabecera para identificar el título y el autor del libro.

```HTML
<table>
	<tr>
		<th colspan="2">Libro (esta celda ocupa 2 columnas)</th>
		<th>Año</th>
	</tr>
	<tr>
		<td>IT</td>
		<td>Stephen King</td>
		<td>1986</td>
	</tr>
	<tr>
		<td>Carrie</td>
		<td>Stephen King</td>
		<td>1974</td>
	</tr>
	<tr>
		<td>El Resplandor</td>
		<td>Stephen King</td>
		<td>1977</td>
	</tr>
</table>
```
	
![Ejemplo de tabla con colspan](./images/table_book_example.png)

Se incluye una celda de cabecera con el título "Libro" para las primeras dos columnas. Debido al valor asignado al atributo '_colspan'_, esta celda se estira para que ocupe el espacio de dos:

- _'colspan'_ - permite que una celda de la tabla abarque el ancho de más de una celda o columna. Su valor por defecto es 1.
    
- _'rowspan'_ - permite que una sola celda de la tabla abarque la altura de más de una celda o fila. Su valor por defecto es 1.
    

Tanto '_colspan'_ como '_rowspan'_ son atributos de los dos elementos de tabla `<td>` y `<th>`.

El valor de cualquiera de los atributos debe ser un número entero positivo. El valor especifica el número de columnas o filas que llena la celda.

> **Tip**: Una tabla siempre debe tener una estructura regular: todas las filas deben tener el mismo número de columnas y viceversa. Si alguna celda tiene un '_colspan'_ o '_rowspan'_ distinto de 1, no solo ocupará el espacio de varias celdas, sino que contará como si lo fuera.


## Semántica en tablas

La semántica en las tablas es importante para ayudar a los usuarios y herramientas de accesibilidad a entender la estructura de los datos que se muestran. En HTML5, se han añadido elementos específicos para tablas, como `<caption>`, `<thead>`, `<tbody>`, `<tfoot>` y `<colgroup>`, que ofrecen una estructura semántica para las tablas.

- La etiqueta `<caption>` se utiliza para definir el título de la tabla. Es muy importante de cara a la accesibilidad ya que le indica al usuario de qué trata su contenido. Si se incluye, debe ser **siempre** el primer elemento dentro de `<table>`. Su posición se puede cambiar mediante la propiedad de CSS `caption-side`.
    

- La etiqueta `<thead>` se utiliza para definir la cabecera de la tabla y agrupar las celdas que pertenecen a ella. Esta etiqueta debe colocarse después de la etiqueta `<table>` y antes de la etiqueta `<tbody>` o `<tfoot>`.
    

- La etiqueta `<tbody>` se utiliza para definir el cuerpo de la tabla y agrupar las celdas que pertenecen a él. Esta etiqueta debe colocarse después de la etiqueta `<thead>` y antes de la etiqueta `<tfoot>`.
    

- La etiqueta `<tfoot>` se utiliza para definir el pie de la tabla y agrupar las celdas que pertenecen a él. Esta etiqueta debe colocarse después de la etiqueta `<tbody>`.
    

- La etiqueta `<colgroup>` se utiliza para agrupar columnas en una tabla y definir los atributos que afectan a varias columnas.
    

Estas etiquetas no tienen ninguna diferencia a nivel visual, sino que se utilizan para ofrecer una estructura semántica adecuada para las tablas y mejorar la accesibilidad de los datos.

```HTML
<table>
	<thead>
		<tr>
			<th colspan="2">Libro (esta celda ocupa 2 columnas)</th>
			<th>Año</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>IT</td>
			<td>Stephen King</td>
			<td>1986</td>
		</tr>
		<tr>
			<td>Carrie</td>
			<td>Stephen King</td>
			<td>1974</td>
		</tr>
		<tr>
			<td>El Resplandor</td>
			<td>Stephen King</td>
			<td>1977</td>
		</tr>
	</tbody>
</table>
```

> **Tip**: Como siempre, puedes [visitar la MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) para más información.


## Resumen

- Las tablas en HTML son útiles para presentar grandes cantidades de datos de manera organizada y fácil de leer.
    
- Los elementos principales de una tabla son: `<table>`, `<tr>`, `<td>`, y `<th>`.
    
- Los atributos '_colspan'_ y '_rowspan'_ se utilizan para fusionar varias celdas de una tabla en una sola celda.
    
- La semántica en las tablas se mejora con los elementos `<thead>`, `<tbody>`, `<tfoot>`, y `<colgroup>` que, aunque no tienen diferencia visual, ofrecen una estructura semántica adecuada para las tablas y mejoran la accesibilidad de los datos.
    
- Los elementos para estructurar tablas no tienen diferencia visual, pero ofrecen una estructura semántica adecuada para las tablas y mejoran la accesibilidad de los datos.

