---
Title: LS (Core)
Description: Recursos comunes/compatidos del proyecto Lost Scripts.
Tags: [utils, deps]
Subcategory: Index
Date: 2023-10-17T4:24:43
LastMod: 2024-02-09T00:54:00
Weight: -1
---

<!--{{% adjust-paths %}}-->
<table id='top' width='100%' border='0'>
    <tr>
        <td align='center' valign='middle' width='96'>
            <picture>
                <source media='(prefers-color-scheme: dark)' srcset='../../../scripts/ls_shapes/assets/icon_dark.png'>
                <source media='(prefers-color-scheme: light)' srcset='../../../scripts/ls_shapes/assets/icon_light.png'>
                <img src='../../../scripts/ls_shapes/assets/icon.png' width='48' alt='Icon' title='LS: Essential shared resources and core modules required for the Lost Scripts&trade; project to work with MOHO Animation Software.' class='colorize'>
            </picture>
        </td>
        <td align='right' valign='middle' width='916' nowrap>
            <a href='https://github.com/lost-scripts/ls/releases/latest/download/ls.zip' title='Download latest version...'><img src='https://img.shields.io/github/downloads/lost-scripts/ls/total?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZWVlIiBkPSJNMjg4IDMyYTMyIDMyIDAgMSAwLTY0IDB2MjQzbC03My03NGEzMiAzMiAwIDAgMC00NiA0NmwxMjggMTI4YzEzIDEyIDMzIDEyIDQ2IDBsMTI4LTEyOGEzMiAzMiAwIDAgMC00Ni00NmwtNzMgNzRWMzJ6TTY0IDM1MmMtMzUgMC02NCAyOS02NCA2NHYzMmMwIDM1IDI5IDY0IDY0IDY0aDM4NGMzNSAwIDY0LTI5IDY0LTY0di0zMmMwLTM1LTI5LTY0LTY0LTY0SDM0N2wtNDYgNDVhNjQgNjQgMCAwIDEtOTAgMGwtNDUtNDVINjR6bTM2OCA1NmEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6Ii8+PC9zdmc+&color=blue&label=Download' alt='Download'></a> 
            <a href='https://github.com/lost-scripts/ls/releases/latest' title='Go to release in GitHub...'><img src='https://img.shields.io/github/v/release/lost-scripts/ls?logo=github&color=yellow&label=Release' alt='Release'></a> 
            <a href='https://moho.lostmarble.com/' title='Go to Moho® homepage...'><img src='https://img.shields.io/badge/For-Moho_-orange' alt='Moho'></a> 
        </td>
    </tr>
</table>
<!--{{% /adjust-paths %}}-->

<!-- Pure Markdown style head...
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

# *LS<sub><sup><sup> Core</sup></sup></sub>*

El *Core* (núcleo) que te proporciona todos los módulos y recursos que el programa de animación *[Moho®](https://moho.lostmarble.com/)* necesita para el buen funcionamiento de *Lost Scripts™* y derivados. Si algo no funciona como esperabas... ¡comprueba que está actualizado!

<br>

## *Scripts destacados*

<table width='100%' border='3' class='card'><tr>
    <td align='center' width='96'><a href='https://github.com/lost-scripts/ls_shapes'><picture><source media='(prefers-color-scheme: dark)' srcset='https://raw.githubusercontent.com/lost-scripts/lost-scripts/refs/heads/main/docs/ls_shapes/assets/icon_dark.png'><source media='(prefers-color-scheme: light)' srcset='https://raw.githubusercontent.com/lost-scripts/lost-scripts/refs/heads/main/docs/ls_shapes/assets/icon_light.png'><img src='https://raw.githubusercontent.com/lost-scripts/lost-scripts/refs/heads/main/docs/ls_shapes/assets/icon.png' width='48' alt='Icon' class='colorize'></picture></a></td>
    <td width='724'><div><a href='https://github.com/lost-scripts/ls_shapes'><strong>Shapes</strong></a><br>Persistent shape palette plus helpers for better Moho&reg; vector/s management.</div></td>
    <td align='center' width='192'><a href='https://github.com/lost-scripts/ls_shapes/releases/latest/download/ls_shapes.zip'><img src='https://img.shields.io/github/downloads/lost-scripts/ls_shapes/total?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZWVlIiBkPSJNMjg4IDMyYTMyIDMyIDAgMSAwLTY0IDB2MjQzbC03My03NGEzMiAzMiAwIDAgMC00NiA0NmwxMjggMTI4YzEzIDEyIDMzIDEyIDQ2IDBsMTI4LTEyOGEzMiAzMiAwIDAgMC00Ni00NmwtNzMgNzRWMzJ6TTY0IDM1MmMtMzUgMC02NCAyOS02NCA2NHYzMmMwIDM1IDI5IDY0IDY0IDY0aDM4NGMzNSAwIDY0LTI5IDY0LTY0di0zMmMwLTM1LTI5LTY0LTY0LTY0SDM0N2wtNDYgNDVhNjQgNjQgMCAwIDEtOTAgMGwtNDUtNDVINjR6bTM2OCA1NmEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6Ii8+PC9zdmc+&color=blue&label=' alt='Download' title='Download: ls_shapes.zip' width='160'></a></td>
</tr></table>
<table width='100%' border='3' class='card'><tr>
    <td align='center' width='96'><a href='https://github.com/lost-scripts/ls_dummy'><picture><source media='(prefers-color-scheme: dark)' srcset='https://raw.githubusercontent.com/lost-scripts/lost-scripts/refs/heads/main/docs/ls_dummy/assets/icon_dark.png'><source media='(prefers-color-scheme: light)' srcset='https://raw.githubusercontent.com/lost-scripts/lost-scripts/refs/heads/main/docs/ls_dummy/assets/icon_light.png'><img src='https://raw.githubusercontent.com/lost-scripts/lost-scripts/refs/heads/main/docs/ls_dummy/assets/icon.png' width='48' alt='Icon' class='colorize'></picture></a></td>
    <td width='724'><div><a href='https://github.com/lost-scripts/ls_dummy'><strong>Dummy</strong></a><br>A dummy script/placeholder just for the sake of testing different parts of the READMEs and Lost Script&trade; webpage.</div></td>
    <td align='center' width='192'><a href='https://github.com/lost-scripts/ls_dummy'><img src='https://img.shields.io/badge/Soon…-inactive.svg' alt='Download' title='Download: Unavailable' width='160'></a></td>
</tr></table>


<!-- Pure Markdown style cards...
| [![m1-1i]][m1-1a] | <div align="right">[![m1-3i]][m1-3a] [![m1-4i]][m1-4a] [![m1-5i]][m1-5a]</div> |
| :---------------: | ------------------------------------------------------------------------------ |
| [![m1-2i]][m1-1a] | A persistent shape palette plus helpers for better management of Moho® vectors in general and Liquid Shapes in particular. |

[m1-1i]: https://img.shields.io/badge/Shapes-blue.svg
[m1-1a]: /scripts/ls_shapes "Go to Shapes Window webpage..."
[m1-2i]: /scripts/ls_shapes/icon.png
[m1-3i]: https://img.shields.io/github/v/release/lost-scripts/ls_shapes?color=yellow
[m1-3a]: https://github.com/lost-scripts/ls_shapes "Release"
[m1-4i]: https://img.shields.io/github/v/tag/lost-scripts/ls_shapes "Shapes Window"
[m1-4a]: https://github.com/lost-scripts/ls_shapes "Release"
[m1-5i]: https://img.shields.io/github/v/release/lost-scripts/ls_shapes?color=yellow
[m1-5a]: https://github.com/lost-scripts/ls_shapes "Release"
-->

<!-- 
<table width="100%" border="2" class="cardplus">
	<tr>
		<th width="96" valign="top">
			<a href="/scripts/ls_shapes_window/" title="Go to ''Shapes Window'' page..."><img src="https://img.shields.io/badge/Shapes%20Window-blue.svg" width="96" height="20"></a>
		</th>
		<th align="right" valign="middle" nowrap>
			<a href="https://moho.lostmarble.com/" title="Go to Moho website"><img height="20px" src="https://img.shields.io/badge/For-Moho_Pro_14.3+-orange" alt="Moho version"></a>
			<a href="https://github.com/lost-scripts/ls_shapes_window/releases/latest" title="Go to download page"><img height="20px" src="https://img.shields.io/github/v/release/lost-scripts/ls_shapes_window?logo=github" alt="GitHub version"></a>
			<a href="#!" style="cursor: default;"><img height="20px" src="https://img.shields.io/github/downloads/lost-scripts/ls_shapes_window/total.svg?color=yellow" alt="GitHub downloads"></a>
		</th>
	</tr>
	<tr>
		<td width="96" align="center" valign="middle">
			<a inert href="#!" style="cursor: default;"><img src="https://raw.githubusercontent.com/RaiLopez/ls_shapes/main/docs/assets/icon.png" alt="Icon" width="50%" class="colorize"></a>
		</td>
		<td width="1920" valign="middle">
			<div>
				A persistent shape palette plus many other helpers for better management of Moho® vectors in general and <i>Liquid Shapes</i> in particular... That's all!
			</div>
		</td>
	</tr>
</table>
-->
<br>

## *Características*

Más que características de cara al usuario, *LS<sub><sup><sup> Core</sup></sup></sub>* trabaja de forma interna no sólo para satisfacer los requisitos de desarrollo de *Lost Scripts™* como los arriba expuestos, sino también para ampliar (dentro de lo posible) las posibilidades de scripting del programa con *nuevos* tipos de funciones, métodos, widgets de interfaz de usuario y mucho más...

<br>

## *Instalación*

Partiendo de que ya has descomprimido el archivo descargado, e independientemente de si se trata del *Core* o de cualquier otro script, dispones de dos métodos de instalación diferentes...

| MANUAL (RECOMENDADO)                                                               | ASISTIDA POR MOHO®                                                                     |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1. Obtendrás algunas de estas carpetas:  `Menu / ScriptResources / Tool / Utility` | 1. En Moho, ve a "Guiones > Instalar Guiones…" para abrir el asistente de instalación* |
| 2. Ponlas en la carpeta *Scripts* de tu [Carpeta de contenido personalizado][3-1a] | 2. Pulsa *Selecciona una carpeta de Guion*, ve y **selecciona** la que descomprimiste  |
| 3. Reinicia Moho® (o `Alt+Shift+Ctrl + L` para *Recargar Herramientas y Pinceles*) | *  Para más detalles, ve a la sección [23.17 Instalar guion…][3-2a] del manual de Moho |

¡Y eso es todo! Las dependencias se habrán actualizado y el script debería aparecer en la paleta *Herramientas* y/o en el menú *Scripts*, si corresponde.

> ⚠ **ADVERTENCIA:** Por favor, asegúrate de que has desinstalado todo *Lost Script* en tu sistema antes de eliminar los recursos compartidos o podrían empezar a dar errores o dejar de funcionar. Para desinstalar un script, simplemente elimina cualquier archivo y carpeta que coincida con su nombre y reinicia Moho® o *Recarga herramientas y pinceles* si es necesario.

<br>

## *Uso*

Como usuario habitual de Moho®, normalmente no tendrás que interactuar con este conjunto de utilidades más allá de aplicar actualizaciones cuando estén disponibles o sean necesarias. Como desarrollador de scripts, **en el futuro** (EN DESARROLLO!) podrás hacer uso de los módulos y facilidades que proporciona de forma similar a como lo harías con los oficiales.

<br>

## *Colab y soporte*

Las sugerencias y *bugs* pueden ser reportados en la sección [*Issues*](https://github.com/lost-scripts/ls/issues "Ir a la sección ''Issues''") (preferiblemente) o en el hilo correspondiente, si lo hay, en la sección [*Scripting*](https://www.lostmarble.com/forum/viewforum.php?f=12 "Ir a la sección ''Scripting'' del foro Lost Marble") del [*foro Lost Marble*](https://www.lostmarble.com/forum "Ir al foro Lost Marble").

<br>

## *Otros...*

- <a href="https://lost-scripts.github.io/scripts/ls" data-alt-href="https://github.com/lost-scripts/ls" data-alt-textContent="Repositorio de LS" data-alt-title="Ir al repositorio de LS...">Página web de LS</a>

---

<p align="center" style="display: none;">Copyright © 2024 · Rai López · Todos los derechos reservados</p>

[h-1i]: https://img.shields.io/github/v/release/lost-scripts/ls?color=yellow
[h-1a]: https://github.com/lost-scripts/ls "Release"
[h-2i]: https://img.shields.io/github/v/tag/lost-scripts/ls "LS"
[h-2a]: https://github.com/lost-scripts/ls "LS"
[h-3i]: https://img.shields.io/github/downloads/repo-size/lost-scripts/ls/latest/total "Downloads"
[h-3a]: https://github.com/lost-scripts/ls/latest "Downloads"

[3-1a]: https://manual.lostmarble.com/app/page/1bmBks7y8KPdbPd-ll9kQGPdZJfDf3Rq67BCp8F5Y-FI?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3 "Ir al manual de Moho..."
[3-2a]: https://manual.lostmarble.com/app/page/1IOuEOfMa7kUwqYPi2ABDhwoWE_KXB1OBCC5ib__iyIE?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3 "Ir al manual de Moho..."
