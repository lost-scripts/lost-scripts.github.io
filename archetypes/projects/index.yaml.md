{{- /* $bundle :=  path.Base (strings.TrimSuffix "/" (replace .File.Path .File.LogicalName "")) */ -}}
{{- $bundlePath := replace .File.Path .File.LogicalName "" -}}
{{- $bundleName := path.Base (strings.TrimSuffix "/" $bundlePath) -}}

Author: {{ site.Params.author.name }}
Version: 0.0.0
Build: {{ now.Format "20060102-1504" }}
Flags: # NEW! UPD! WIP! TODO BETA ALPHA
  - BETA
Giscus:
  repo: {{ site.Params.github.user }}/{{ $bundleName }}
  repoId: {{ site.Params.giscus.app }}
  categoryId: DIC_kwDOO4wZic4CrvVY
Comments: false
Readmes: false
Shields:
  - src: https://img.shields.io/github/downloads/lost-scripts/{{ $bundleName }}/total?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZjhmOGY4IiBkPSJNMjg4IDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgMjQyLjctNzMuNC03My40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM2wxMjggMTI4YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDEyOC0xMjhjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMjg4IDI3NC43IDI4OCAzMnpNNjQgMzUyYy0zNS4zIDAtNjQgMjguNy02NCA2NGwwIDMyYzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzJjMC0zNS4zLTI4LjctNjQtNjQtNjRsLTEwMS41IDAtNDUuMyA0NS4zYy0yNSAyNS02NS41IDI1LTkwLjUgMEwxNjUuNSAzNTIgNjQgMzUyem0zNjggNTZhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4eiIvPjwvc3ZnPg==&{{ $bundleName }}.zip
    alt: Download latest version...
    ddl: true
  - src: https://img.shields.io/github/release/{{ site.Params.github.user }}/{{ $bundleName }}
    url: {{ site.Params.github.href }}{{ site.Params.github.user }}/{{ $bundleName }}/releases/latest
    alt: Go to release in GitHub...
  - src: https://img.shields.io/badge/for-{{ site.Params.app.name }}_Pro_{{ site.Params.app.version }}+-orange
    url: {{ site.Params.app.link }}
    alt: Go to {{ site.Params.app.name }}® website...