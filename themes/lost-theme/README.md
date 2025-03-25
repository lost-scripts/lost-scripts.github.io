# Lost Theme

Lost Theme is an item focused Hugo theme packed with customizable, eye-catching and powerful features. It is **work in progress**, tho... so expect ongoing changes/updates and enhancements.


## Features

- Tab/Accordion navigator for intuitive content organization.
- Navigator filters for enhanced usability.
- Search box for quick access to relevant content.
- Dark mode toggle for better readability.
- Customizable highlight colors for personal styling.
- Multi-language localization support.
- Link Dock for links, Email, RSS feed, etc.
- And much more...


## Installation

1. Make sure you have Hugo installed. If not, follow the [Hugo installation guide](https://gohugo.io/getting-started/installing/).
2. Clone this repository into the `themes` folder of your Hugo project:

	```bash
	git clone https://github.com/lost-scripts/lost-theme themes/lost-theme
	```
3. Add the theme to your config.toml:

	```toml
	theme = "lost-theme"
	```


## Using the Theme

Start the development server:

```bash
hugo server
Open your browser at http://localhost:1313 to preview the site.
```

Customize content by adding your files to the `content/` folder of your Hugo project. For more details on how to structure your content and configuration, refer to the [Hugo Documentation](https://gohugo.io/documentation/).


## Configuration

Lost Theme can be tailored to your needs via the config.toml file. Below are some key configuration options:

```toml
baseURL = 'https://username.github.io/'
languageCode = 'en-us'
defaultContentLanguage = 'en'
defaultContentLanguageInSubdir = false
enableMissingTranslationPlaceholder = true
title = 'Site Name'
copyright = 'Copyright © [YEAR] · [NAME] · All Rights Reserved'
theme = 'lost-theme'
publishDir = 'docs'

[params]
homepage = '/scripts/ls/' # In case you want some post/item be your homepage
homeIcon = 'house'
subtitle = 'Site subtitle'
author = { name = 'Name', homepage = 'https://username.github.io/' }
copyrightAlt = '© [YEAR] · [NAME] · ARR'
since = 2024
banner = false
faStyle = 'solid'
```

For a full list of configuration options, visit the [theme documentation](https://github.com/lost-scripts/lost-theme/wiki).


## Developing the Theme

Lost Theme is managed as a Git Subtree in projects that use it. Below are the steps to set up and maintain this workflow.


## Initial Setup

1. Add *Lost Theme* as a Git Subtree to your project (ensure the `../lost-theme` repository is accessible from your project root):

```bash
git subtree add --prefix=themes/lost-theme ../lost-theme main --squash
```


## Making Changes to the Theme

1. Edit files directly in `themes/lost-theme` subtree within your Hugo project and **never** in the theme repo itself, this ensures you are working in context of a real-world project, making testing and debugging much easier.

2. Remember to **always commit the changes** to your project before proceeding:

	```bash
	git add themes/lost-theme # Specifying the subtree directory can bring you more control than `git add .` in this case.
	git commit -m "Update Lost Theme: [describe changes]"
	```


## Pushing Changes to the Theme Repository

In order to ease pushing to a central *non bare* repository, check whether `receive.denyCurrentBranch` in `.git/config` is set to `updateInstead`, or simply run (once-time action!) the following command:


```bash
git config receive.denyCurrentBranch updateInstead # Ensures that changes pushed to the central repository will automatically update the worktree of the `main` branch.
```

After committing changes as stated in above point two, you can push them to the central repository:


```bash
git subtree push --prefix=themes/lost-theme ../lost-theme main
```


## Pulling Updates from the Theme Repository

To synchronize updates from the theme repository:

```bash
git subtree pull --prefix=themes/lost-theme ../lost-theme main --squash # `--squash` helps to avoid mixing historical commits of the theme directly into the user's project.
```

## Known Issues

- Translated pages have trouble showing images inserted in HTML format.
- The list is simply too longer right now, but I'll keep adding more as they come to mind...

## Support

If you encounter issues or have questions, feel free to write a comment or open a ticket in the [Issues](https://github.com/lost-scripts/lost-theme/issues) section.


## Other...

- **Bare Repository:** The central repository for the theme could be cloned as bare repository using this command `git clone --bare https://github.com/lost-scripts/lost-theme` instead, which avoids using the `git config receive.denyCurrentBranch updateInstead` configuration. A bare repository avoids conflicts when pushing from multiple projects but complicates maintenance because you lose direct visibility into the files. You also can convert an existing non-bare repository to bare, but this process is more advanced and requires careful management of the worktree. Refer to Git's documentation for detailed steps.

- **Multiple Sites Using the Theme:** This workflow supports using the same theme repository across multiple Hugo projects. Push updates from one project and pull them into others to maintain consistency.
