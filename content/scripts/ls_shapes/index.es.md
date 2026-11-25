---
Title: LS Shapes Window
Description: Paleta de formas y utilidades para una mejor gestión de vectores en Moho®
Tags: [vectors, shapes]
Date: 2023-10-20 17:29:50
Modified: 2025-10-11 22:15:00
Aliases: [/scripts/ls_shapes_window/]
---

<!--{{% adjust-paths %}}-->
<table id='top' width='100%' border='0'>
    <tr>
        <td align='center' valign='middle' width='96'>
            <picture>
                <source media='(prefers-color-scheme: dark)' srcset='./assets/icon_dark.png'>
                <source media='(prefers-color-scheme: light)' srcset='./assets/icon_light.png'>
                <img src='./assets/icon.png' width='48' alt='Icon' title='Shapes: Persistent shape palette plus helpers for better Moho&reg; vector/s management.' class='colorize'>
            </picture>
        </td>
        <td align='right' valign='middle' width='916' nowrap>
            <a href='https://github.com/lost-scripts/ls_shapes/releases/latest/download/ls_shapes.zip' title='Download latest version...'><img src='https://img.shields.io/github/downloads/lost-scripts/ls_shapes/total?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZWVlIiBkPSJNMjg4IDMyYTMyIDMyIDAgMSAwLTY0IDB2MjQzbC03My03NGEzMiAzMiAwIDAgMC00NiA0NmwxMjggMTI4YzEzIDEyIDMzIDEyIDQ2IDBsMTI4LTEyOGEzMiAzMiAwIDAgMC00Ni00NmwtNzMgNzRWMzJ6TTY0IDM1MmMtMzUgMC02NCAyOS02NCA2NHYzMmMwIDM1IDI5IDY0IDY0IDY0aDM4NGMzNSAwIDY0LTI5IDY0LTY0di0zMmMwLTM1LTI5LTY0LTY0LTY0SDM0N2wtNDYgNDVhNjQgNjQgMCAwIDEtOTAgMGwtNDUtNDVINjR6bTM2OCA1NmEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6Ii8+PC9zdmc+&color=blue&label=Download' alt='Download'></a> 
            <a href='https://github.com/lost-scripts/ls_shapes/releases/latest' title='Go to release in GitHub...'><img src='https://img.shields.io/github/v/release/lost-scripts/ls_shapes?logo=github&color=yellow&label=Release' alt='Release'></a> 
            <a href='https://moho.lostmarble.com/' title='Go to Moho® homepage...'><img src='https://img.shields.io/badge/For-Moho_Moho®_14.3+_Pro-orange' alt='Moho'></a> 
        </td>
    </tr>
</table>
<!--{{% /adjust-paths %}}-->

<!-- Pure Markdown style heads...
| ![Icon](icon.png "Icon") | [![h-1i]][h-1a] [![h-2i]][h-2a] [![h-3i]][h-3a] |
| :----------------------- | ----------------------------------------------: |
-->
<!-- Or a mixture...
<table id="top" width="100%" border="0"><tr><td align="left" valign="middle" width="96">

[![Icon](assets/icon.png "Icon")](#! "Icon")
</td><td align="right" valign="middle" width="1920" nowrap>

[![h-shield1-i]][h-shield1-a] [![h-shield2-i]][h-shield2-a] [![h-shield3-i]][h-shield3-a]
</td></tr></table>
-->
# LS Shapes Window

Paleta persistente de formas con utilidades para una mejor gestión de los vectores de Moho® en general y las *Liquid Shapes* en particular. Este script ofrece una interfaz visual y amigable para realizar sin esfuerzo desde las operaciones con formas más básicas hasta las más complejas, además de modos de ventana dedicados que también llevan la gestión de estilos y grupos de puntos al siguiente nivel.

<br>

## Galería

<details align="center" width="100%" class="gallery-holder" style="cursor: pointer; user-select: none;">
<summary title="Haz clic aquí para expandir/contraer la galería de imágenes"><strong>UI</strong> <sub><sup>(Expandir/Contraer)</sup></sub><br><br>

[![UI](assets/image_gallery.png "UI")](#! "UI")
</summary><br>

<table align="center" border="0" class="gallery"><tr>
<td width="178" valign="top"><!-- width="1024px" for full width container-->

![SHAPE Mode](assets/image_gallery_mode_1.png "SHAPE Mode para la gestión de formas")
</td><td width="178" valign="top">

![STYLE Mode](assets/image_gallery_mode_2.png "STYLE Mode para la gestión de estilos")
</td><td width="178" valign="top">

![STYLE Mode](assets/image_gallery_mode_3.png "GROUP Mode para la gestión de grupos de puntos")
</td><td width="178" valign="top">

![TWEAK Menu](assets/image_gallery_tweak_menu.png "TWEAK Menu para retoques y utilidades")
</td><td width="264" valign="top">

![LIVE Swatches](assets/image_gallery_view_swatches.gif "Live/Scrollable (amén de personalizables) Swatches")
</td><td width="178" valign="top">

![COMPACT Mode](assets/image_gallery_window_compact.png "O simplemente déjala compacta...")
</td>
</tr></table>
</details>
<!--
<details align="center" width="100%" class="gallery-holder" style="cursor:pointer; user-select: none;">
	<summary title="Click the arrow to expand/collapse image gallery">
		<a inert href="#!"><img align="center" height="96px" src="assets/image_gallery.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" alt="Script UI" style="vertical-align: middle;"></a>&ensp;&ensp;
	</summary>
	<br>
	<table align="center" border="0" class="gallery">
		<tr>
			<td nowrap data-comment="Use width='1024px' for full width container">
				<img src="assets/image_gallery_1.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="SHAPE Mode for shape management" height="512px" align="top">&ensp;
				<img src="assets/image_gallery_2.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="STYLE Mode for style management" height="512px" align="top">&ensp;
				<img src="assets/image_gallery_3.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="GROUP Mode for point group management" height="512px" align="top">&ensp;
				<img src="assets/image_gallery_4.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="TWEAK Menu for shape tweaking &amp; utils" height="512px" align="top">&ensp;
				<img src="assets/image_gallery_5.gif" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="Live/Scrollable (plus customizable) Swatches" height="512px" align="top">&ensp;
				<img src="assets/image_gallery_6.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="Or just keep it compact..." align="top">
				<br>
			</td>
		</tr>
	</table>
</details>
-->
<br>

## Características

- Hazte una idea precisa del contenido de las capas y las relaciones entre formas de un vistazo.
- Sácale el máximo partido a las *Formas Líquidas* de Moho® gracias a una gestión mejorada.
- Renombra, reordena, oculta/muestra, etc. uno o varios elementos con facilidad.
- Nuevas maneras de crear formas (incluso *formas apiladas*) sin importar la herramienta actual.
- Asistentes de selección de formas: Seleccionar todo, Inverso, Similar, Idéntico...
- *Selección basada en puntos* mejorada y sensible al modo.
- Gestión, selección y creación de *Estilos* mejoradas.
- Gestión, reordenación y modificación de *grupos de puntos* mejoradas.
- Muchas paletas/muestras de color interactivas (¡y puedes crear las tuyas fácilmente!).
- Modelo de color HSV y funciones de recoloreado, además de muchas otras utilidades.
- Varios modos de visualización de ventana para adaptarse mejor a tus necesidades.
- Y cómo no... ¡mucho más!

<br>

## Descarga e instalación

[**Descarga**][h-shield1-a] el archivo, **descomprímelo**, y procede con el método de instalación que prefieras...

| MANUAL (RECOMENDADO)                                                               | ASISTIDA POR MOHO®                                                                     |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1. Obtendrás algunas de estas carpetas:  `Menu / ScriptResources / Tool / Utility` | 1. En Moho, ve a "Guiones > Instalar Guiones…" para abrir el asistente de instalación* |
| 2. Ponlas en la carpeta *Scripts* de tu [Carpeta de contenido personalizado][3-1a] | 2. Pulsa *Selecciona una carpeta de Guion*, ve y **selecciona** la que descomprimiste  |
| 3. Reinicia Moho® (o `Alt+Shift+Ctrl + L` para *Recargar Herramientas y Pinceles*) | *  Para más detalles, ve a la sección [23.17 Instalar guion…][3-2a] del manual de Moho |

Y eso es todo! El script debería aparecer en la paleta *Herramientas* y/o dentro del menú *Guiones*.

> ⚠ **ADVERTENCIA:** Por favor, asegúrate de que has desinstalado todo *Lost Script* en tu sistema antes de eliminar cualquier recurso compartido, de lo contrario podrían empezar a dar errores o dejar de funcionar. Para desinstalar un script, simplemente elimina cualquier archivo y carpeta que coincida con su nombre y reinicia Moho® o *Recarga herramientas y pinceles* si es necesario.

<br>

## Uso

1. **Abrir**: Abre la ventana *Shapes* desde la paleta *Herramientas* de Moho® o mediante su entrada en el menú *Guiones*.
2. **Usar**: Ahora puedes mantenerla abierta permanentemente para visualizar y realizar diversas operaciones relacionadas con los vectores de Moho®.
3. **Personalizar**: Despliega el *Menú Principal* de la ventana (arriba a la izquierda ≡) para acceder a diferentes ajustes y acciones.
4. **Tooltips**: Mantén el cursor sobre los distintos elementos, especialmente con *Beginners Mode* activado, para obtener pistas sobre su funcionalidad.
5. **Ayuda rápida**: También hay un práctico diálogo con abundante información útil accesible desde *Menú principal > Ayuda...*

<br>

![HELP](https://raw.githubusercontent.com/lost-scripts/ls_shapes/refs/heads/main/ScriptResources/ls_shapes/HELP.png "Imagen de guía rápida")

<br>

## Colab & soporte

Las sugerencias y *bugs* se pueden reportar en la sección [*Issues*](https://github.com/lost-scripts/ls_shapes/issues "Ir a la sección ''Issues''") (preferiblemente) o en el hilo correspondiente, si lo hay, en la sección [*Scripting*](https://www.lostmarble.com/forum/viewforum.php?f=12 "Ir a la sección ''Scripting'' del foro Lost Marble") del [*foro Lost Marble*](https://www.lostmarble.com/forum "Ir al foro Lost Marble").

<br>

## Agradecimientos

Mi más sincero agradecimiento a...

- **Stanislav Zuliy** (Stan), por todas sus contribuciones y generosidad.
- **Lukas Krepel**, por allanar el camino *modeless* 🙂
- **Mike Kelley**, por permitirme usar las entrañas de su genial script *Adjust Colors*.
- **Wes** (synthsin75), **Paul** (hayasidist) y **Sam** (SimplSam), por su apoyo en los [foros de LM](https://www.lostmarble.com/forum).
- **Copilot** y **ChatGPT**, por... erm... ¿Por qué no? 🤷‍♂️

Y, por supuesto, a **Lost Marble** y al talentoso equipo de Moho® por su arduo trabajo y por hacer todo esto posible (otra vez).

<br>

## Otros...

- <a href="https://lost-scripts.github.io/scripts/ls_shapes" data-alt-href="https://github.com/lost-scripts/ls_shapes" data-alt-textContent="Repositorio de Shapes window" data-alt-title="Ir al repositorio de Shapes Window...">Página web de Shapes Window</a>
- [Lost Marble Forum topic](https://www.lostmarble.com/forum/viewtopic.php?t=36508 "Go to the Lost Marble Forum topic...")

---

[h-shield1-i]: https://img.shields.io/github/downloads/lost-scripts/ls_shapes/total?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZWVlIiBkPSJNMjg4IDMyYTMyIDMyIDAgMSAwLTY0IDB2MjQzbC03My03NGEzMiAzMiAwIDAgMC00NiA0NmwxMjggMTI4YzEzIDEyIDMzIDEyIDQ2IDBsMTI4LTEyOGEzMiAzMiAwIDAgMC00Ni00NmwtNzMgNzRWMzJ6TTY0IDM1MmMtMzUgMC02NCAyOS02NCA2NHYzMmMwIDM1IDI5IDY0IDY0IDY0aDM4NGMzNSAwIDY0LTI5IDY0LTY0di0zMmMwLTM1LTI5LTY0LTY0LTY0SDM0N2wtNDYgNDVhNjQgNjQgMCAwIDEtOTAgMGwtNDUtNDVINjR6bTM2OCA1NmEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6Ii8+PC9zdmc+&color=blue
[h-shield1-a]: https://github.com/lost-scripts/ls_shapes/releases/latest/download/ls_shapes.zip "Descarga la última versión..."

[h-shield2-i]: https://img.shields.io/github/release/lost-scripts/ls_shapes
[h-shield2-a]: https://github.com/lost-scripts/ls_shapes/releases/latest "Ir al lanzamiento en GitHub..."

[h-shield3-i]: https://img.shields.io/badge/for-Moho_Pro_14.5+_(Win)-orange
[h-shield3-a]: https://moho.lostmarble.com/ "Ir al sito web de Moho..."

[3-1a]: https://manual.lostmarble.com/app/page/1bmBks7y8KPdbPd-ll9kQGPdZJfDf3Rq67BCp8F5Y-FI?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3
[3-2a]: https://manual.lostmarble.com/app/page/1IOuEOfMa7kUwqYPi2ABDhwoWE_KXB1OBCC5ib__iyIE?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3
