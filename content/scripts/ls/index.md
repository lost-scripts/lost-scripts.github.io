---
Title: LS (Core)
Description: Lost Scripts project's common/shared resources.
Params:
  Author: Rai López
  Version: 0.0.1
  Build: 20250114-0005
  Flags: [UPD!] # NEW! UPD! WIP! TODO BETA ALPHA
  Starred: [ls_shapes, ls_dummy] # The chosen ones for glory
Tags: [utils, deps]
Date: 2023-10-17T4:24:43
LastMod: 2024-02-09T00:54:00
Weight: -1
---

<!--{{% adjust-paths %}}-->
<table id='top' width='100%' border='0'>
    <tr>
        <td align='center' valign='middle' width='96'>
            <picture>
                <source media='(prefers-color-scheme: dark)' srcset='assets/icon_dark.png'>
                <source media='(prefers-color-scheme: light)' srcset='assets/icon_light.png'>
                <img src='assets/icon.png' width='48' alt='Icon' title='LS: Essential shared resources and core modules required for the Lost Scripts&trade; project to work with MOHO Animation Software.' class='colorize'>
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

# *LS<sub><sup><sup> Core</sup></sup></sub>*

Provides all the necessary shared/common resources and helpers that *[Moho®](https://moho.lostmarble.com/) Animation Software* needs for the well functioning of *Lost Scripts™* and derivatives. If something didn't work as expected... check it's up to date!

<br>

## *Featured Scripts*

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

[m1-1i]: https://img.shields.io/badge/Shapes%20Window-blue.svg
[m1-1a]: /scripts/ls_shapes_window "Go to Shapes Window webpage..."
[m1-2i]: /scripts/ls_shapes_window/index@2x.png
[m1-3i]: https://img.shields.io/github/v/release/lost-scripts/ls_shapes_window?color=yellow
[m1-3a]: https://github.com/lost-scripts/ls_shapes_window "Release"
[m1-4i]: https://img.shields.io/github/v/tag/lost-scripts/ls_shapes_window "Shapes Window"
[m1-4a]: https://github.com/lost-scripts/ls_shapes_window "Release"
[m1-5i]: https://img.shields.io/github/v/release/lost-scripts/ls_shapes_window?color=yellow
[m1-5a]: https://github.com/lost-scripts/ls_shapes_window "Release"
-->

<!-- Alternative...
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

## *Features*

More than user-facing features, *LS<sub><sup><sup> Core</sup></sup></sub>* works under the hood not only to meet the development requirements of *Lost Scripts™* like the ones just above, but also to extend (within the limits) the scripting possibilities of the program with *new* kind of functions, methods, UI widgets and more...

<br>

## *Installation*

Starting from you have already unzipped the downloaded file, and regardless of whether it is the Core or any other script, you actually have two different installation methods...

| MANUAL (RECOMMENDED)                                                             | ASSISTED BY MOHO®                                                                |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 1. You'll get some of these folders:  `Menu / ScriptResources / Tool / Utility`  | 1. In Moho®, go to "Scripts > Install Script…" to open the installation wizard*  |
| 2. Place'em all into the *Scripts* folder of your [Custom Content Folder][3-1a]  | 2. Click *Select A Script Folder*, browse to the unzipped folder & **select it** |
| 3. Restart Moho or press `Alt + Shift + Ctrl + L` to *Reload Tools And Brushes*  | *  More details in chapter [23.17 Install Script…][3-2a] of Moho® user's manual  |

And that's it! All dependencies will have been updated and the script should appear in the *Tools* palette and/or in the *Scripts* menu if applicable.

> ⚠ **WARNING:** Please, make sure you have uninstalled every *Lost Script* on your system before removing any shared resource or they may start throwing errors or stop working. For uninstalling a script, just remove any file and folder matching its name and restart Moho® or *Reload Tools And Brushes* if necessary.

<br>

## *Usage*

As a regular *Moho®* user, you will not normally have to interact with this set of utilities beyond applying updates when available or required. As a script developer, **in the future** (WIP!) you will be able to make use of the modules and facilities it provides in a similar way as you would with official ones.

<br>

## *Collab & Support*

Suggestions and bugs can be reported in the [<i>Issues</i>](https://github.com/lost-scripts/ls/issues "Go to ''Issues'' section") section (preferably) or in the corresponding topic, if any, in [<i>Scripting</i>](https://www.lostmarble.com/forum/viewforum.php?f=12 "Go to Lost Marble Forum's ''Scripting'' section") section of the [<i>Lost Marble Forum</i>](https://www.lostmarble.com/forum "Go to the ''Lost Marble Forum''").

<br>

## *Other...*

- <a href="https://lost-scripts.github.io/scripts/ls" data-alt-href="https://github.com/lost-scripts/ls" data-alt-textContent="LS repository" data-alt-title="Go to the LS repository...">LS webpage</a>

---

<p align="center" style="display: none;">Copyright © 2024 · Rai López · All Rights Reserved</p>

[h-1i]: https://img.shields.io/github/v/release/lost-scripts/ls?color=yellow
[h-1a]: https://github.com/lost-scripts/ls "Release"
[h-2i]: https://img.shields.io/github/v/tag/lost-scripts/ls "LS"
[h-2a]: https://github.com/lost-scripts/ls "LS"
[h-3i]: https://img.shields.io/github/downloads/repo-size/lost-scripts/ls/latest/total "Downloads"
[h-3a]: https://github.com/lost-scripts/ls/latest "Downloads"

[3-1a]: https://manual.lostmarble.com/app/page/1bmBks7y8KPdbPd-ll9kQGPdZJfDf3Rq67BCp8F5Y-FI?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3 "Go to Moho® Manual..."
[3-2a]: https://manual.lostmarble.com/app/page/1IOuEOfMa7kUwqYPi2ABDhwoWE_KXB1OBCC5ib__iyIE?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3 "Go to Moho® Manual..."
