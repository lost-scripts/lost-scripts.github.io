+++
title = 'LS Shapes Window'
tags = ['vectors', 'shapes']
categories = ['window', 'experiment']
category = 'Script'
subcategory = 'Index'
date = 2023-10-20T19:29:50+02:00
lastmod = 2024-02-09T00:54:00+02:00
description = "A persistent shape palette plus helpers for better management of Moho® vectors in general and Liquid Shapes in particular."

[params]
	Author = 'Rai López'
	Version = '0.3.0'
	Build = '20240926-2302'
	Flags = ['UPD!', 'BETA'] # NEW! UPD! WIP! TODO BETA ALPHA
	Shields = [
	{ src="https://img.shields.io/github/v/release/lost-scripts/ls_shapes_window?color=yellow", alt="GitHub version" },
	{ src="https://img.shields.io/github/v/tag/lost-scripts/ls_shapes_window", alt="GitHub tag"},
	{ src="https://img.shields.io/github/downloads/repo-size/lost-scripts/ls_shapes_window/latest/total", alt="GitHub downloads"}]
+++

| ![Icon](index@2x.png "Icon") | [![h-1i]][h-1a] [![h-2i]][h-2a] [![h-3i]][h-3a] |
| :--------------------------- | ----------------------------------------------: |

# LS Shapes Window

A versatile tool that helps you manage and manipulate shapes in Moho® with ease. This script provides a user-friendly interface for performing complex shape operations effortlessly.

<br>

<!--
| SW | ![Release](https://img.shields.io/github/v/release/lost-scripts/ls?color=yellow) ![LS](https://img.shields.io/github/v/tag/lost-scripts/ls) ![Downloads](https://img.shields.io/github/downloads/repo-size/lost-scripts/ls/latest/total) |
| :---: | :---: |
| ![LS Shapes Window UI](index.png) | A versatile tool that helps you manage and manipulate shapes in Moho® with ease. This script provides a user-friendly interface for performing complex shape operations effortlessly. |
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

## Gallery (Expandable)

<details align="center" width="100%" style="cursor:pointer; user-select: none;">
	<summary title="Click the arrow to expand/collapse image gallery">
		<a inert href="#!"><img align="center" height="96px" src="ScriptResources/ls_shapes_window/docs/index_gallery.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" alt="Script UI" style="vertical-align: middle;"></a>&ensp;&ensp;
	</summary>
	<br>
	<!--<div style="width: 100%; overflow-x: auto; border-radius: var(--round); border: 1px solid var(--gray-A5); box-shadow: -1px 2px 3px 1px rgba(0, 0, 0, 0.16) inset;">-->
		<table align="center" class="gallery" style="border: none;">
			<tr>
				<td nowrap><!-- width="1024px" for full width container-->
					<img src="ScriptResources/ls_shapes_window/docs/index_gallery_1.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="SHAPE Mode for shape managing" height="512px" align="top">&ensp;
					<img src="ScriptResources/ls_shapes_window/docs/index_gallery_2.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="STYLE Mode for style managing" height="512px" align="top">&ensp;
					<img src="ScriptResources/ls_shapes_window/docs/index_gallery_3.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="TWEAK Menu for shape tweaking &amp; utils" height="512px" align="top">&ensp;
					<img src="ScriptResources/ls_shapes_window/docs/index_gallery_4.gif" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="Live/Scrollable (plus customizable) Swatches" height="512px" align="top">&ensp;
					<img src="ScriptResources/ls_shapes_window/docs/index_gallery_5.png" onerror="this.onerror=null; this.src=this.getAttribute('src').split('/').pop();" title="Or just keep it compact..." align="top">
					<br>
				</td>
			</tr>
		</table>
	<!--</div>-->
</details>

<br>

## Main Features

- Visualize layers' shape relationships at a glance.
- Take the most of *Liquid Shapes* thanks to improved management.
- Rename, reorder, hide/show, etc. one or several shapes with ease.
- New ways of shape creation independently of selected tool.
- Shape selection helpers: Select all, Inverse, Similar, Identical...
- Improved *Style* management, picking and modification.
- Many interactive "live" Swatches (and you can easily make your own).
- Recoloring features plus other helpers.
- Several window display modes to better suit your needs.

<br>

## Installation

Starting from you have already unzipped the downloaded file, you actually have two different installation methods...

| MANUAL                        | ASSISTED                      |
| ----------------------------- | ----------------------------- |
| 1. You'll get one or more of the following folders: `Menu / ScriptResources / Tool / Utility`.           | 1. From Moho's main menus, go to "Scripts -> Install Script..." and a window with some info will appear.           | 
| 2. Drag & Drop (or Copy & Paste) them all into the Scripts folder of your [Custom Content Folder][3-1a]. | 2. Press *Select A Script Folder* button, browse to the just uzipped folder (e.g. ls_shapes_window) and select it. |
| 3. Restart Moho® or press `Alt + Shift + Ctrl + L` to *Reload Tools And Brushes* and the script should appear in *Tools* palette and/or under *Scripts* menu.   | 3. That done, the script should appear in *Tools* palette and/or under *Scripts* menu. See chapter [23.17 Install Script...][3-2a] of Moho® user's manual for further details.     |

> ⚠ WARNING: Please, make sure you have uninstalled every Lost Script on your system before removing any of these shared resources or they may start throwing errors or stop working. For uninstalling a script, just remove any file and folder matching its name and restart Moho® or Reload Tools And Brushes if necessary.

<br>

## Usage

1. **Opening**: Open the *LS Shapes Window* from Moho®'s *Tools* palette or *Scripts* menu entry.
2. **Operating**: Now you can have it permanently open to perform various shape operations.
3. **Customizing**: Unfold Window's main menu: 🔽 (at top left of the window) to access diffent settings & actions.
4. **Tooltips**: Hold the cursor over the different elements to get a hint of their functions...

<br>

## Collab & Support

Suggestions and bugs can be reported in the [<i>Issues</i>](https://github.com/lost-scripts/ls_shapes_window/issues "Go to ''Issues'' section") section (preferably) or in the corresponding topic, if any, in [<i>Scripting</i>](https://www.lostmarble.com/forum/viewforum.php?f=12 "Go to Lost Marble Forum's ''Scripting'' section") section of the [<i>Lost Marble Forum</i>](https://www.lostmarble.com/forum "Go to the ''Lost Marble Forum''").

<br>

## Other...

| [👉 Go to the Lost Scripts™ website...](https://lost-scripts.github.io/scripts/ls_shapes_window) | [👉 Go to Lost Marble Forum topic...](https://www.lostmarble.com/forum/viewtopic.php?t=36508) |
| :---: | :---: |

---

[h-1i]: https://img.shields.io/github/v/release/lost-scripts/ls_shapes_window?color=yellow
[h-1a]: https://github.com/lost-scripts/ls_shapes_window "Release"
[h-2i]: https://img.shields.io/github/v/tag/lost-scripts/ls_shapes_window "LS Shapes Window"
[h-2a]: https://github.com/lost-scripts/ls_shapes_window "LS Shapes Window"
[h-3i]: https://img.shields.io/github/downloads/repo-size/lost-scripts/ls_shapes_window/latest/total "Downloads"
[h-3a]: https://github.com/lost-scripts/ls_shapes_window/latest "Downloads"

[3-1a]: https://manual.lostmarble.com/app/page/1bmBks7y8KPdbPd-ll9kQGPdZJfDf3Rq67BCp8F5Y-FI?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3
[3-2a]: https://manual.lostmarble.com/app/page/1IOuEOfMa7kUwqYPi2ABDhwoWE_KXB1OBCC5ib__iyIE?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3
