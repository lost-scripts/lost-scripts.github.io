---
Title: LS Shapes Window
Description: Paleta persistente de formas y utilidades para una mejor gestión de vectores Moho®...
Params:
  Author: Rai López
  Version: 0.3.0
  Build: 20240209-0054
  Flags:
    - UPD!
    - BETA
  Shields:
    - src: https://img.shields.io/github/v/release/lost-scripts/ls_shapes_window?color=yellow
      alt: GitHub version
    - src: https://img.shields.io/github/v/tag/lost-scripts/ls_shapes_window
      alt: GitHub tag
    - src: https://img.shields.io/github/downloads/repo-size/lost-scripts/ls_shapes_window/latest/total
      alt: GitHub downloads
Tags:
  - vectors
  - shapes
Categories:
  - window
  - experiment
Category: Script
Subcategory: Index
Date: 2023-10-20T17:29:50.000Z
Lastmod: 2024-02-08T22:54:00.000Z
CommentsRepo: lost-scripts/ls_shapes_window
CommentsRepoId: R_kgDOMXYNXw
CommentsCategoryId: DIC_kwDOMXYNX84CpZZs
---

| ![Icon](index@2x.png "Icon") | [![h-1i]][h-1a] [![h-2i]][h-2a] [![h-3i]][h-3a] |
| :--------------------------- | ----------------------------------------------: |

# LS Shapes Window

Paleta persistente de formas y utilidades para una mejor gestión de vectores Moho® en general y *Liquid Shapes* en particular. Este script proporciona una interfaz visual y amigable para realizar operaciones complejas con formas sin esfuerzo.

<br>

<!--
| SW | ![Release](https://img.shields.io/github/v/release/lost-scripts/ls?color=yellow) ![LS](https://img.shields.io/github/v/tag/lost-scripts/ls) ![Downloads](https://img.shields.io/github/downloads/repo-size/lost-scripts/ls/latest/total) |
| :---: | :---: |
| ![LS Shapes Window UI](index.png) | Herramienta versátil que te ayuda a gestionar y manipular formas en Moho® con facilidad. Este script proporciona una interfaz fácil de usar para realizar operaciones complejas sin esfuerzo. |
-->

<!--
<center>
	<img src="index.png" alt="LS Shapes Window Icon" style="width: 100px; height: 100px;">
	<br>
	<img src="https://img.shields.io/github/v/release/lost-scripts/ls?color=yellow" alt="GitHub version">
	<img src="https://img.shields.io/github/v/tag/lost-scripts/ls" alt="GitHub tag">
	<img src="https://img.shields.io/github/downloads/repo-size/lost-scripts/ls/latest/total" alt="GitHub downloads">
</center>
-->

<!--
{{< html-img src="index.png" class="center" >}}
-->

## Galería

<details align="center" width="100%" class="gallery-holder" style="cursor:pointer; user-select: none;">
	<summary title="Clica la flecha para mostrar/ocultar la galería de imágenes">
		<a inert href="#!"><img align="center" height="96px" src="docs/index_gallery.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" alt="Script UI" style="vertical-align: middle;"></a>&ensp;&ensp;
	</summary>
	<br>
	<table align="center" border="0" class="gallery">
		<tr>
			<td nowrap><!-- width="1024px" for full width container-->
				<img src="docs/index_gallery_1.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="SHAPE Mode for shape managing" height="512px" align="top">&ensp;
				<img src="docs/index_gallery_2.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="STYLE Mode for style managing" height="512px" align="top">&ensp;
				<img src="docs/index_gallery_3.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="TWEAK Menu for shape tweaking &amp; utils" height="512px" align="top">&ensp;
				<img src="docs/index_gallery_4.gif" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="Live/Scrollable (plus customizable) Swatches" height="512px" align="top">&ensp;
				<img src="docs/index_gallery_5.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="Or just keep it compact..." align="top">
				<br>
			</td>
		</tr>
	</table>
</details>

<br>

## Características

- Visualiza las relaciones entre las formas en las capas de un vistazo.
- Saca el máximo partido de las *Formas Líquidas" de Moho gracias a una gestión mejorada.
- Renombra, reordena, oculta/muestra, etc. una o varias formas con facilidad.
- Nuevas maneras de crear formas independientemente de la herramienta seleccionada.
- Ayudantes de selección de formas: Seleccionar todo, Inverso, Similar, Idéntico...
- Gestión, selección y modificación de *Estilos* mejorada.
- Muchas paletas/muestras de color interactivas (y puedes crear las suyas propias fácilmente).
- Funciones de recoloración y otros asistentes.
- Varios modos de visualización de la ventana para adaptarse mejor a sus necesidades.
- Y... ¡mucho más!

<br>

## Instalación

Partiendo de que ya has descomprimido el archivo descargado, dispones de dos métodos de instalación diferentes...

| MANUAL                        | ASISTIDA                      |
| ----------------------------- | ----------------------------- |
| 1. Obtendrás una o varias de las siguientes carpetas: `Menu / ScriptResources / Tool / Utility`.               | 1. Desde el menú principal de Moho, ve a "Guiones -> Instalar Guiones..." y aparecerá una ventana de información.  | 
| 2. Arrástra y suelta (o copia y pega) todas ellas en la carpeta *Scripts* de tu [Carpeta de contenido personalizado][3-1a]. | 2. Pulsa el botón *Selecciona una carpeta de Guion*, ve a la carpeta recién descomprimida (e.g. ls_shapes_window) y selecciónala. |
| 3. Reinicia Moho® o presiona `Alt + Shift + Ctrl + L` para *Recargar Herramientas y Pinceles* y el script debería aparecer en la paleta *Herramientas* y/o en el menú *Guiones*. | 3. Hecho eso, el script debería aparecer en la paleta de *Herramientas* y/o en el menú *Guiones*. Consulta el capítulo [23.17 Instalar guion...][3-2a] del manual de usuario de Moho® para más detalles. |

> ⚠ **ADVERTENCIA:** Por favor, asegúrate de que has desinstalado todo *Lost Script* en tu sistema antes de eliminar cualquier recurso compartido o podrían empezar a dar errores o dejar de funcionar. Para desinstalar un script, simplemente elimina cualquier archivo y carpeta que coincida con su nombre y reinicia Moho® o *Recarga herramientas y pinceles* si es necesario.

<br>

## Uso

1. **Abrir**: Abre la ventana *Shapes Window* desde la paleta *Herramientas* de Moho o mediante su entrada en el menú *Scripts*.
2. **Usar**: Ahora puedes tenerla permanentemente abierta para realizar diversas operaciones con formas.
3. **Personalizar**: Despliega el menú principal de la ventana 🔽 (en la parte superior izquierda) para acceder a diferentes ajustes y acciones.
4. **Tooltips**: Mantén el cursor sobre los diferentes elementos para obtener pistas sobre sus funciones...


<br>

## Collab & Soporte

Las sugerencias y *bugs* pueden ser reportados en la sección [*Issues*](https://github.com/lost-scripts/ls_shapes_window/issues "Ir a la sección ''Issues''") (preferiblemente) o en el hilo correspondiente, si lo hay, en la sección [*Scripting*](https://www.lostmarble.com/forum/viewforum.php?f=12 "Ir a la sección ''Scripting'' del foro Lost Marble") del [*foro Lost Marble*](https://www.lostmarble.com/forum "Ir al foro Lost Marble").

<br>

## Otros...

- <a href="https://lost-scripts.github.io/scripts/ls_shapes_window" data-alt-href="https://github.com/lost-scripts/ls_shapes_window" data-alt-textContent="Repositorio de Shapes window" data-alt-title="Ir al repositorio de Shapes Window...">Página web de Shapes Window</a>
- [Lost Marble Forum topic](https://www.lostmarble.com/forum/viewtopic.php?t=36508 "Go to the Lost Marble Forum topic...")

---

[h-1i]: https://img.shields.io/github/v/release/lost-scripts/ls_shapes_window?color=yellow
[h-1a]: https://github.com/lost-scripts/ls_shapes_window "Release"
[h-2i]: https://img.shields.io/github/v/tag/lost-scripts/ls_shapes_window "LS Shapes Window"
[h-2a]: https://github.com/lost-scripts/ls_shapes_window "LS Shapes Window"
[h-3i]: https://img.shields.io/github/downloads/repo-size/lost-scripts/ls_shapes_window/latest/total "Downloads"
[h-3a]: https://github.com/lost-scripts/ls_shapes_window/latest "Downloads"

[3-1a]: https://manual.lostmarble.com/app/page/1bmBks7y8KPdbPd-ll9kQGPdZJfDf3Rq67BCp8F5Y-FI?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3
[3-2a]: https://manual.lostmarble.com/app/page/1IOuEOfMa7kUwqYPi2ABDhwoWE_KXB1OBCC5ib__iyIE?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3
