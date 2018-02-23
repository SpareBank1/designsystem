# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.0.3"></a>
## [1.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-webfonts@1.0.2...ffe-webfonts@1.0.3) (2018-02-23)




**Note:** Version bump only for package ffe-webfonts

<a name="1.0.2"></a>
## [1.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-webfonts@1.0.1...ffe-webfonts@1.0.2) (2018-02-22)




**Note:** Version bump only for package ffe-webfonts

<a name="1.0.1"></a>
## [1.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-webfonts@1.0.0...ffe-webfonts@1.0.1) (2018-02-19)




**Note:** Version bump only for package ffe-webfonts

<a name="1.0.0"></a>
# 1.0.0 (2018-02-15)


### Features

* **ffe-webfonts:** New package with FFE webfonts


### BREAKING CHANGES

* **ffe-webfonts:** This package contains all webfonts and font-face
definitions from ffe-core.

*Caveat*: TrueType font files are no longer included.  This effectively
drops support for Museo Sans webfont in IE 8 and older IEs.

Upgrade from ffe-core: Install ffe-webfonts and include the less file
accordingly the package's README.  Change your `@build-path` to `@fonts-path`.
Please note that `fonts-path` is the actual `fonts`-folder and not the parent
folder.
