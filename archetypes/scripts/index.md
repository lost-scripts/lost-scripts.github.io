{{/* 
Archetype template for Moho-related scripts used within the Lost Scripts™ project so, although highly customizable via params, it's tightly coupled to Lost Scripts' conventions and folder structure... Customize or override in your own Hugo project as needed.

⚠️ NOTE: After generating a new script bundle, e.g. `hugo new scripts/ls_new_script`, you'll have to manually remove the ".md" extension from the "index.yaml.md" file.
*/}}

{{- $name1 := upper (index (split .Name "_") 0) -}}
{{- $name2 := replace (substr .Name (add (len $name1) 1)) "_" " " | title -}}
{{- $name := printf "%s %s" $name1 $name2 -}}

---
Title: {{ $name }}
Description: Brief description of {{ $name1 }}'s {{ $name2 }}
Tags:
  - untagged
Date: {{ .Date }}
Modified: {{ .Date }}
Draft: true
---

<table width="100%" border="0"><tr><td align="left" valign="middle" width="96">

[![Icon](docs/index@2x.png "Icon")](#! "Icon")
</td><td align="right" valign="middle" width="1920" nowrap>

[![h-shield1-i]][h-shield1-a] [![h-shield2-i]][h-shield2-a] [![h-shield3-i]][h-shield3-a]
</td></tr></table>

# {{ $name }}

Summary or overview of what the script does and its main purpose.

<br>

## Gallery

<details align="center" width="100%" class="gallery-holder" style="cursor: pointer; user-select: none;">
<summary title="Click here to expand/collapse image gallery"><strong>UI</strong> <sub><sup>(Expand/Collapse)</sup></sub><br><br>

[![UI](docs/index_gallery.png "UI")](#! "UI")
</summary><br>

<table align="center" border="0" class="gallery"><tr>
<td width="XXX" valign="top">

![Image 1](docs/index_gallery_1.png "Description 1")
</td><td width="XXX" valign="top">

![Image 2](docs/index_gallery_2.png "Description 2")
</td>
</tr></table>
</details>

<br>

{{ partial "blocker.html" (dict "name" "installation" "vars" (dict "app" site.Params.app.name "title" (site.Title | singularize))) }}

## Features

- Feature 1
- Feature 2
- Feature 3

<br>

## Installation

[**Download**][h-shield1-a] the file, **unzip** it, and proceed with the installation method of your choice...

| MANUAL                                                                           | ASSISTED                                                                         |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 1. You'll get some of these folders:  `Menu / ScriptResources / Tool / Utility`. | 1. In Moho, go to "Scripts > Install Script..." to open the installation wizard. |
| 2. Place'em all into the *Scripts* folder of your [Custom Content Folder][3-1a]. | 2. Click *Select A Script Folder*, browse to the uzipped folder & **select it**. |
| 3. Restart Moho or press `Alt + Shift + Ctrl + L` to *Reload Tools And Brushes*. | * More details in chapter [23.17 Install Script...][3-2a] of Moho user's manual. |

And that's all! The script should appear in *Tools* palette and/or under *Scripts* menu.

> ⚠ **WARNING:** Please, make sure you have uninstalled every *{{ site.Title | singularize }}* on your system before removing any shared resource or they may start throwing errors or stop working. For uninstalling a script, just remove any file and folder matching its name and restart Moho® or *Reload Tools And Brushes* if necessary.

<br>

## Usage

1. **Opening**: Open *{{ $name2 }}* from Moho's *Tools* palette or via its entry in the *Scripts* menu.
2. **Operating**: Now you can have it permanently open to perform various operations.
3. **Customizing**: Unfold Window's main menu: 🔽 (at top left of the window) to access different settings & actions.
4. **Tooltips**: If *Beginners Mode* is checked, holding the cursor over the different elements will give a hint of their functionality...

<br>

## Collab & Support

Suggestions and bugs can be reported in the [<i>Issues</i>](https://github.com/lost-scripts/{{ .Name }}/issues "Go to ''Issues'' section") section (preferably) or in the corresponding topic, if any, in [<i>Scripting</i>](https://www.lostmarble.com/forum/viewforum.php?f=12 "Go to Lost Marble Forum's ''Scripting'' section") section of the [<i>Lost Marble Forum</i>](https://www.lostmarble.com/forum "Go to the ''Lost Marble Forum''").

<br>

## Other...

- <a href="https://lost-scripts.github.io/scripts/{{ .Name }}" data-alt-href="https://github.com/lost-scripts/{{ .Name }}" data-alt-textContent="{{ $name }} repository" data-alt-title="Go to the {{ $name }} repository...">{{ $name }} webpage</a>
- [Lost Marble Forum topic](https://www.lostmarble.com/forum/viewtopic.php?t=00000 "Go to the {{ site.Params.app.company }} Forum topic...")

---

[h-shield1-i]: https://img.shields.io/github/downloads/lost-scripts/{{.Name}}/total?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZWVlIiBkPSJNMjg4IDMyYTMyIDMyIDAgMSAwLTY0IDB2MjQzbC03My03NGEzMiAzMiAwIDAgMC00NiA0NmwxMjggMTI4YzEzIDEyIDMzIDEyIDQ2IDBsMTI4LTEyOGEzMiAzMiAwIDAgMC00Ni00NmwtNzMgNzRWMzJ6TTY0IDM1MmMtMzUgMC02NCAyOS02NCA2NHYzMmMwIDM1IDI5IDY0IDY0IDY0aDM4NGMzNSAwIDY0LTI5IDY0LTY0di0zMmMwLTM1LTI5LTY0LTY0LTY0SDM0N2wtNDYgNDVhNjQgNjQgMCAwIDEtOTAgMGwtNDUtNDVINjR6bTM2OCA1NmEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6Ii8+PC9zdmc+&color=blue
[h-shield1-a]: https://github.com/lost-scripts/{{.Name}}/releases/latest/download/{{.Name}}.zip "Download latest version..."

[h-shield2-i]: https://img.shields.io/github/release/lost-scripts/{{.Name}}
[h-shield2-a]: https://github.com/lost-scripts/{{.Name}}/releases/latest "Go to release in GitHub..."

[h-shield3-i]: https://img.shields.io/badge/for-{{site.Params.app.name}}_Pro_{{site.Params.app.version}}+-orange
[h-shield3-a]: {{site.Params.app.link}} "Go to {{site.Params.app.name}}® website..."

[3-1a]: https://manual.lostmarble.com/app/page/1bmBks7y8KPdbPd-ll9kQGPdZJfDf3Rq67BCp8F5Y-FI?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3
[3-2a]: https://manual.lostmarble.com/app/page/1IOuEOfMa7kUwqYPi2ABDhwoWE_KXB1OBCC5ib__iyIE?p=1UxA8Gi5DttJku9AmFlSpO0gJw4U9flX3