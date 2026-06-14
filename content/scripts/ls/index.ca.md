---
Title: LS (Core)
Description: Recursos comuns/compartits del projecte Lost Scripts.
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

# *LS<sub><sup><sup> Core</sup></sup></sub>*

El *Core* (nucli) que et proporciona tots els mòduls i recursos que el programa d'animació *[Moho®](https://moho.lostmarble.com/)* necessita per al bon funcionament de *Lost Scripts™* i derivats. Si alguna cosa no funciona com esperaves... comprova que està actualitzat!

<br>

## *Scripts destacats*

<table width='100%' border='3' class='card'><tr>
    <td align='center' width='96'><a href='https://github.com/lost-scripts/ls_shapes'><picture><source media='(prefers-color-scheme: dark)' srcset='https://raw.githubusercontent.com/lost-scripts/lost-scripts/refs/heads/main/docs/ls_shapes/assets/icon_dark.png'><source media='(prefers-color-scheme: light)' srcset='https://raw.githubusercontent.com/lost-scripts/lost-scripts/refs/heads/main/docs/ls_shapes/assets/icon_light.png'><img src='https://raw.githubusercontent.com/lost-scripts/lost-scripts/refs/heads/main/docs/ls_shapes/assets/icon.png' width='48' alt='Icon' class='colorize'></picture></a></td>
    <td width='724'><div><a href='https://github.com/lost-scripts/ls_shapes'><strong>Shapes</strong></a><br>Persistent shape palette plus helpers for better Moho&reg; vector/s management.</div></td>
    <td align='center' width='192'><a href='https://github.com/lost-scripts/ls_shapes/releases/latest/download/ls_shapes.zip'><img src='https://img.shields.io/github/downloads/lost-scripts/ls_shapes/total?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZWVlIiBkPSJNMjg4IDMyYTMyIDMyIDAgMSAwLTY0IDB2MjQzbC03My03NGEzMiAzMiAwIDAgMC00NiA0NmwxMjggMTI4YzEzIDEyIDMzIDEyIDQ2IDBsMTI4LTEyOGEzMiAzMiAwIDAgMC00Ni00NmwtNzMgNzRWMzJ6TTY0IDM1MmMtMzUgMC02NCAyOS02NCA2NHYzMmMwIDM1IDI5IDY0IDY0IDY0aDM4NGMzNSAwIDY0LTI5IDY0LTY0di0zMmMwLTM1LTI5LTY0LTY0LTY0SDM0N2wtNDYgNDVhNjQgNjQgMCAwIDEtOTAgMGwtNDUtNDVINjR6bTM2OCA1NmEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6Ii8+PC9zdmc+&color=blue&label=' alt='Download' title='Download: ls_shapes.zip' width='160'></a></td>
</tr></table>


<!-- Pure Markdown style cards...
| [![m1-1i]][m1-1a] | <div align="right">[![m1-3i]][m1-3a] [![m1-4i]][m1-4a] [![m1-5i]][m1-5a]</div> |
| :---------------: | ------------------------------------------------------------------------------ |
| [![m1-2i]][m1-1a] | Paleta de formes persistents més ajudants per a una millor gestió dels vectors Moho® en general i de les formes líquides en particular. |

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
				Paleta de formes persistents i moltes altres utilitats per a una millor gestió dels vectors Moho® en general i les <i>Formes líquides</i> en particular!
			</div>
		</td>
	</tr>
</table>
-->
<br>

## *Característiques*

Més que característiques de cara a l'usuari, *LS<sub><sup><sup> Core</sup></sup></sub>* treballa de forma interna no només per satisfer els requisits de desenvolupament de *Lost Scripts™* com els exposats més amunt, sinó també per ampliar (dins del possible) les possibilitats de scripting del programa amb *nous* tipus de funcions, mètodes, widgets d'interfície d'usuari i molt més...

<br>

## *Instal·lació* ![](assets/image_nothingtodohere.png "NOTHING TO DO HERE")

~~Partint que ja has descomprimit el fitxer descarregat~~*, i independentment de si es tracta del *Core* o de qualsevol altre script, disposes en realitat de dos mètodes d'instal·lació diferents...

***Descàrrega no disponible (Encara!):** A causa de la fase inicial, totes les dependències del _Core_ ja estan compilades i automàticament integrades en cada paquet d'scripts del catàleg (per exemple, _ls_shapes_). Atès que ja contenen tot el necessari perquè funcionin al vostre sistema, no cal instal·lar res més des d'aquí de moment...

| MANUAL (RECOMANAT)                                                                   | ASSISTIDA PER MOHO®                                                                    |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| 1. Obtindreu algunes d'aquestes carpetes:  `Menu / ScriptResources / Tool / Utility` | 1. A Moho, aneu a "Guions > Instal·lar Guiones…" per obrir l'assistent d'instal·lació* |
| 2. Posa-les a la carpeta *Scripts* de la teva [Carpeta de contingut personal.][3-1a] | 2. Prem *Selecciona una carpeta de Guió*, vés i **selecciona** la que vas descomprimir |
| 3. Reinicieu Moho® o premeu `Alt+Shift+Ctrl + L` per a *Recarregar Eines i Pinzells* | *  Per a més detalls, vegeu secció [23.17 Instal·lar guió…][3-2a] del manual de Moho®  |

I això és tot! Les dependències s'hauran actualitzat i l'script hauria d'aparèixer a la paleta *Eines* i/o al menú *Guiones*, si escau.

> ⚠ **ADVERTÈNCIA:** Si us plau, assegureu-vos que heu desinstal·lat tot *Lost Script* al vostre sistema abans d'eliminar els recursos compartits o podrien començar a donar errors o deixar de funcionar. Per desinstal·lar un script, simplement elimina qualsevol fitxer i carpeta que coincideixi amb el seu nom i reinicia Moho® o *Recarregar eines i pinzells* si cal.

<br>

## *Ús!*

Com a usuari habitual de Moho®, normalment no haureu d'interactuar amb aquest conjunt d'utilitats més enllà d'aplicar actualitzacions quan estiguin disponibles o siguin necessàries. Com a desenvolupador de scripts, **en el futur** (EN DESENVOLUPAMENT!) podràs fer ús dels mòduls i facilitats que proporciona de forma similar a com ho faries amb els oficials.

<br>

## *Colab i suport*

Els suggeriments i *bugs* poden ser reportats a la secció [*Issues*](https://github.com/lost-scripts/ls/issues "Anar a la secció ''Issues''") (o al fil corresponent, si n'hi ha, a la secció [*Scripting*](https://www.lostmarble.com/forum/viewforum.php?f=12 "Anar a la secció ''Scripting'' del fòrum Lost Marble") del [*fòrum Lost Marble*](https://www.lostmarble.com/forum "Anar al fòrum Lost Marble")).

<br>

## *Altres...*

- <a href="https://lost-scripts.github.io/scripts/ls" data-alt-href="https://github.com/lost-scripts/ls" data-alt-textContent="Repositori de LS" data-alt-title="Anar al repositori de LS...">Pàgina web de LS</a>

---

<p align="center" style="display: none;">Copyright © 2024 · Rai López · Tots els drets reservats</p>

[h-1i]: https://img.shields.io/github/v/release/lost-scripts/ls?color=yellow
[h-1a]: https://github.com/lost-scripts/ls "Release"
[h-2i]: https://img.shields.io/github/v/tag/lost-scripts/ls "LS"
[h-2a]: https://github.com/lost-scripts/ls "LS"
[h-3i]: https://img.shields.io/github/downloads/repo-size/lost-scripts/ls/latest/total "Downloads"
[h-3a]: https://github.com/lost-scripts/ls/latest "Downloads"

[3-1a]: https://manual.lostmarble.com/app/page/1bmBks7y8KPdbPd-ll9kQGPdZJfDf3Rq67BCp8F5Y-FI?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3 "Anar al manual de Moho..."
[3-2a]: https://manual.lostmarble.com/app/page/1IOuEOfMa7kUwqYPi2ABDhwoWE_KXB1OBCC5ib__iyIE?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3 "Anar al manual de Moho..."

