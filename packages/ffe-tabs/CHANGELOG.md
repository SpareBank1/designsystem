# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 100.0.0 (2025-09-09)


### Bug Fixes

* Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59cedf4a76e30880305ed06ca165dce707920))
* **ffe-core:** remove kv type module to fix build errors among consumers ([6ea36b4](https://github.com/SpareBank1/designsystem/commit/6ea36b44d434b5d8b7ad7816f027b19a191d9d15))
* **ffe-tabs:** added peerDependency to ffe-core@^13.0.0 ([f48ae2e](https://github.com/SpareBank1/designsystem/commit/f48ae2e94ec412b5a2b56fb6b322104b4835c271))
* **ffe-tabs:** broadens version of peer dependencies ([57b12e9](https://github.com/SpareBank1/designsystem/commit/57b12e9448edb1d84bcf2f1b119a707405551ba8))
* **ffe-tabs:** bytter ut museo sans med ny sparebank1-font ([e3728b4](https://github.com/SpareBank1/designsystem/commit/e3728b43e4c995be4cd1ce30c909f94fb3000de0))
* **ffe-tabs:** change text values to rem ([5049122](https://github.com/SpareBank1/designsystem/commit/5049122824d97724f325dab54f5f109cc9adad6f))
* **ffe-tabs:** endrer border tykkelse på tabgroup ([6ec89ad](https://github.com/SpareBank1/designsystem/commit/6ec89adce148e4e55cfed32e89ec156ec1f0fafe))
* **ffe-tabs:** fikse at TabGroup går ut til kanten på mobil ([cae360a](https://github.com/SpareBank1/designsystem/commit/cae360af073ee11c37b74cef68fbbc970ef817f1))
* **ffe-tabs:** fikse bug på desktop ([b7a2d25](https://github.com/SpareBank1/designsystem/commit/b7a2d25bfc7ceddb270230fe95a6e4dbbe21d366))
* **ffe-tabs:** fikser typo i css property ([a23c1b7](https://github.com/SpareBank1/designsystem/commit/a23c1b7741062ca020ee9a678d92c476b24bb8c2))
* **ffe-tabs:** fix semantiske farger pressed state tabs ([ceff4d2](https://github.com/SpareBank1/designsystem/commit/ceff4d28c3da0259acf49efb3aa63659dae698bd))
* **ffe-tabs:** fjerner z-index fra tabs ([7c8665f](https://github.com/SpareBank1/designsystem/commit/7c8665fe24642515cd099ca5cc9b6b5940d994d3))
* **ffe-tabs:** hovering styles only when using pointer/mouse ([e3c5c31](https://github.com/SpareBank1/designsystem/commit/e3c5c31800b597741942acd05ffb280537da5174))
* **ffe-tabs:** make no break tabs shrink ([06acc40](https://github.com/SpareBank1/designsystem/commit/06acc40ff4628ad34ef299f96aa87aa298042e03))
* **ffe-tabs:** oppdatert fargevariabel ([26fbacb](https://github.com/SpareBank1/designsystem/commit/26fbacb829bf66f08175616803d003a984e20102))
* **ffe-tabs:** Remove screen type from media queries, see [#719](https://github.com/SpareBank1/designsystem/issues/719) ([12671cc](https://github.com/SpareBank1/designsystem/commit/12671cca1b8349f08933f8ee24b9ca7ac247b58a))
* **ffe-tabs:** remove white-space: nowrap; from tabs ([fcd36e8](https://github.com/SpareBank1/designsystem/commit/fcd36e832b343436b02e2ab31c0ad41278039c7b))
* **ffe-tabs:** replace hardcoded spacing with variables ([d8ace87](https://github.com/SpareBank1/designsystem/commit/d8ace87d07ed29d24869d9b28435f3727bab49c3))
* remove all references to internal system ([ff22340](https://github.com/SpareBank1/designsystem/commit/ff22340368528b953e69155f80a2497b1c100575))


### chore

* add @sb1/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4a5f8f0b0d881dc126764478e82533e873))


* feat(ffe-tabs)!: nye fargevariabler ([f4e5940](https://github.com/SpareBank1/designsystem/commit/f4e5940a25befa13b3afac89828a8d4540d4415e))
* feat(ffe-tabs)!: Semantiske farger ([9f16c48](https://github.com/SpareBank1/designsystem/commit/9f16c48d3e4075149291928454139626c645aaac))


### Features

* Change tab styling to resemble actual tabs, rename components ([afd8cbc](https://github.com/SpareBank1/designsystem/commit/afd8cbc04bc305d236940a69b682e9cdf13de428))
* **ffe-tab-button:** Added ffe-tab-button--dark ([53da86e](https://github.com/SpareBank1/designsystem/commit/53da86eefb45ab559acf977e6b4601e90f754d74))
* **ffe-tabs:** add :host for shadow dom support ([5e6c6cf](https://github.com/SpareBank1/designsystem/commit/5e6c6cfe0bdbbd62fbf738819d7d5818f1409f74))
* **ffe-tabs:** add darkmode styling overrides ([668eef5](https://github.com/SpareBank1/designsystem/commit/668eef51d1e53c77e31a7fa8c203dfb2bdb59041))
* **ffe-tabs:** adds MuseoSans font as fallback font ([9287223](https://github.com/SpareBank1/designsystem/commit/92872237c8a7896c127f3dacb7d94f9c024ac5b4))
* **ffe-tabs:** fjerner tabButton og tabButtonGroup ([c2ee132](https://github.com/SpareBank1/designsystem/commit/c2ee1321af06c535e544a8d28a1d3f79967dfb65))
* **ffe-tabs:** legg til theming ([d6e8101](https://github.com/SpareBank1/designsystem/commit/d6e8101cbdf76379c988c0e00e90d401da5f3c4f))
* **ffe-tabs:** new class ffe-tab-button-group ([c296198](https://github.com/SpareBank1/designsystem/commit/c2961987a8c40a2bc9034d97ed9babda4c64580a)), closes [#201](https://github.com/SpareBank1/designsystem/issues/201)
* **ffe-tabs:** oppdaterte farger iht ny profil ([fcd3d74](https://github.com/SpareBank1/designsystem/commit/fcd3d744e0bc3be4fc0d067bb055e8b58111243f))
* **ffe-tabs:** redesign av faner ([6febd6c](https://github.com/SpareBank1/designsystem/commit/6febd6ce746ac7e01b4b76d8b1c717c5f1faa492))
* **ffe-tabs:** regard-color-scheme-preference for darkmode ([c920a20](https://github.com/SpareBank1/designsystem/commit/c920a20759b28955bda9515029b03596c8a6da3f))
* **ffe-tabs:** tilbyr kompilert css i tillegg til less ([683c66c](https://github.com/SpareBank1/designsystem/commit/683c66c0489daa49dc5310347899f550d9cc4ee0))
* **ffe-tabs:** update internal dependencies ([794f32b](https://github.com/SpareBank1/designsystem/commit/794f32b9020e5ab1ceaf890beb88a3908cad14aa))


### BREAKING CHANGES

* Breaking pga. oppdateringer i ffe-core som fjerner noen fargevariabler og legger til nye fargevariabler. Se change log
https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs
* oppgraderer til semantiske farger
* **ffe-tabs:** "native" class to get dark mode
is not supported anymore.

Use class "regard-color-scheme-preference" on an
element wrapping the components.
* **ffe-tabs:** Makes the styling package @sb1/ffe-core a required
dependency and removes it as peer dependency.
* **ffe-tabs:** fjerner styling knyttet til tabButton og tabButtonGroup
* **ffe-tabs:** visuelle endringer i komponenten kan medføre regresjonsfeil
* **ffe-tabs:** ny font i alt innhold
* **ffe-tabs:** This fix changes all font-size and line-height values from px to rem,
this is to solve an issue with zooming in iOS.
* **ffe-tabs:** This commit is likely to cause small visual regressions caused by slightly altered margin and padding values.
* This commit renames the existing Tab and TabGroup components to TabButton and TabButtonGroup. A new Tab and TabGroup component is added, but uses different styling in order to represent actual tabs.
* All packages have been renamed to add the @sb1 scope.

See links [1] and [2] to read more about package scopes.

Unfortunately this requires you update both your dependencies in
`package.json` and all `import` or `require` statements in your code.
Also, you unfortunately have to upgrade all FFE packages at once due to
dependency between packages. If you are on the latest version prior to
this breaking change the upgrade should be a matter of updating
`package.json` with new package names and versions, and updating your
imports.

To help find the proper package versions you can either browse to the
packages you need or check out the list of Git tags either on
Github [3] or by cloning the repository and running the `git tag`
command. All package versions get a tag in the format
_package@version_.

Update your `package.json` with the latest package version and add the
@sb1 scope to the package name:

```diff
- "ffe-core": "11.0.2",
+ "@sb1/ffe-core": "11.0.2",
```

Scoped packages all get put in a subdirectory in `node_modules/`. In our
case packages will be put in the `node_modules/@sb1/` directory. If your
build depends on file paths (for instance for copying fonts) you need to
update that path to include the scope.

The directory structure also means you have to update your imports, both
in Less and in JavaScript.

Using `less-plugin-npm-import`:

```diff
- @import 'npm://ffe-core/less/ffe';
+ @import 'npm://@sb1/ffe-core/less/ffe';
```

Using Webpack:

```diff
- @import '~ffe-core/less/ffe';
+ @import '~@sb1/ffe-core/less/ffe';
```

Using plain old paths:

```diff
- @import '../path/to/node_modules/ffe-core/less/ffe';
+ @import '../path/to/node_modules/@sb1/ffe-core/less/ffe';
```

JavaScript `import`:

```diff
- import { ActionButton } from 'ffe-buttons-react';
+ import { ActionButton } from '@sb1/ffe-buttons-react';
```

JavaScript `require`:

```diff
- const { ActionButton } = require('ffe-buttons-react').default;
+ const { ActionButton } = require('@sb1/ffe-buttons-react').default;
```

[1]: https://docs.npmjs.com/misc/scope
[2]: https://docs.npmjs.com/getting-started/scoped-packages
[3]: https://github.com/sparebank1/designsystem/tags





## [16.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@16.0.4...@sb1/ffe-tabs@16.0.5) (2025-09-08)

**Note:** Version bump only for package @sb1/ffe-tabs





## [16.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@16.0.3...@sb1/ffe-tabs@16.0.4) (2025-08-29)

**Note:** Version bump only for package @sb1/ffe-tabs





## [16.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@16.0.2...@sb1/ffe-tabs@16.0.3) (2025-08-27)

**Note:** Version bump only for package @sb1/ffe-tabs





## [16.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@16.0.1...@sb1/ffe-tabs@16.0.2) (2025-08-20)

**Note:** Version bump only for package @sb1/ffe-tabs





## [16.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@16.0.0...@sb1/ffe-tabs@16.0.1) (2025-07-24)


### Bug Fixes

* **ffe-tabs:** fjerner z-index fra tabs ([7c8665f](https://github.com/SpareBank1/designsystem/commit/7c8665fe24642515cd099ca5cc9b6b5940d994d3))





# [16.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.25...@sb1/ffe-tabs@16.0.0) (2025-07-16)


* feat(ffe-tabs)!: nye fargevariabler ([f4e5940](https://github.com/SpareBank1/designsystem/commit/f4e5940a25befa13b3afac89828a8d4540d4415e))


### BREAKING CHANGES

* Breaking pga. oppdateringer i ffe-core som fjerner noen fargevariabler og legger til nye fargevariabler. Se change log
https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs





## [15.0.25](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.24...@sb1/ffe-tabs@15.0.25) (2025-05-14)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.24](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.23...@sb1/ffe-tabs@15.0.24) (2025-05-13)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.23](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.22...@sb1/ffe-tabs@15.0.23) (2025-05-12)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.22](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.21...@sb1/ffe-tabs@15.0.22) (2025-05-12)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.21](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.20...@sb1/ffe-tabs@15.0.21) (2025-05-08)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.20](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.19...@sb1/ffe-tabs@15.0.20) (2025-04-30)


### Bug Fixes

* **ffe-tabs:** oppdatert fargevariabel ([26fbacb](https://github.com/SpareBank1/designsystem/commit/26fbacb829bf66f08175616803d003a984e20102))





## [15.0.19](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.18...@sb1/ffe-tabs@15.0.19) (2025-04-29)


### Bug Fixes

* **ffe-core:** remove kv type module to fix build errors among consumers ([6ea36b4](https://github.com/SpareBank1/designsystem/commit/6ea36b44d434b5d8b7ad7816f027b19a191d9d15))





## [15.0.18](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.17...@sb1/ffe-tabs@15.0.18) (2025-04-16)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.17](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.16...@sb1/ffe-tabs@15.0.17) (2025-04-07)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.16](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.15...@sb1/ffe-tabs@15.0.16) (2025-04-01)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.15](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.14...@sb1/ffe-tabs@15.0.15) (2025-03-24)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.14](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.13...@sb1/ffe-tabs@15.0.14) (2025-03-21)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.12...@sb1/ffe-tabs@15.0.13) (2025-03-17)


### Bug Fixes

* **ffe-tabs:** fix semantiske farger pressed state tabs ([ceff4d2](https://github.com/SpareBank1/designsystem/commit/ceff4d28c3da0259acf49efb3aa63659dae698bd))





## [15.0.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.11...@sb1/ffe-tabs@15.0.12) (2025-03-14)


### Bug Fixes

* **ffe-tabs:** endrer border tykkelse på tabgroup ([6ec89ad](https://github.com/SpareBank1/designsystem/commit/6ec89adce148e4e55cfed32e89ec156ec1f0fafe))





## [15.0.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.10...@sb1/ffe-tabs@15.0.11) (2025-03-13)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.9...@sb1/ffe-tabs@15.0.10) (2025-03-12)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.8...@sb1/ffe-tabs@15.0.9) (2025-03-10)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.7...@sb1/ffe-tabs@15.0.8) (2025-03-07)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.6...@sb1/ffe-tabs@15.0.7) (2025-03-07)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.5...@sb1/ffe-tabs@15.0.6) (2025-03-06)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.4...@sb1/ffe-tabs@15.0.5) (2025-03-03)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.3...@sb1/ffe-tabs@15.0.4) (2025-02-28)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.2...@sb1/ffe-tabs@15.0.3) (2025-02-26)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.1...@sb1/ffe-tabs@15.0.2) (2025-02-26)

**Note:** Version bump only for package @sb1/ffe-tabs





## [15.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@15.0.0...@sb1/ffe-tabs@15.0.1) (2025-02-24)

**Note:** Version bump only for package @sb1/ffe-tabs





# [15.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.1.5...@sb1/ffe-tabs@15.0.0) (2025-02-19)


* feat(ffe-tabs)!: Semantiske farger ([9f16c48](https://github.com/SpareBank1/designsystem/commit/9f16c48d3e4075149291928454139626c645aaac))


### BREAKING CHANGES

* oppgraderer til semantiske farger





## [14.1.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.1.4...@sb1/ffe-tabs@14.1.5) (2025-02-07)

**Note:** Version bump only for package @sb1/ffe-tabs





## [14.1.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.1.3...@sb1/ffe-tabs@14.1.4) (2025-01-27)

**Note:** Version bump only for package @sb1/ffe-tabs





## [14.1.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.1.2...@sb1/ffe-tabs@14.1.3) (2025-01-21)

**Note:** Version bump only for package @sb1/ffe-tabs





## [14.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.1.1...@sb1/ffe-tabs@14.1.2) (2025-01-21)

**Note:** Version bump only for package @sb1/ffe-tabs





## [14.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.1.0...@sb1/ffe-tabs@14.1.1) (2025-01-14)

**Note:** Version bump only for package @sb1/ffe-tabs





# [14.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.0.5...@sb1/ffe-tabs@14.1.0) (2024-11-19)


### Features

* **ffe-tabs:** tilbyr kompilert css i tillegg til less ([683c66c](https://github.com/SpareBank1/designsystem/commit/683c66c0489daa49dc5310347899f550d9cc4ee0))





## [14.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.0.4...@sb1/ffe-tabs@14.0.5) (2024-10-23)

**Note:** Version bump only for package @sb1/ffe-tabs





## [14.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.0.3...@sb1/ffe-tabs@14.0.4) (2024-09-06)

**Note:** Version bump only for package @sb1/ffe-tabs





## [14.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.0.2...@sb1/ffe-tabs@14.0.3) (2024-09-06)

**Note:** Version bump only for package @sb1/ffe-tabs





## [14.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.0.1...@sb1/ffe-tabs@14.0.2) (2024-09-05)

**Note:** Version bump only for package @sb1/ffe-tabs





## [14.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@14.0.0...@sb1/ffe-tabs@14.0.1) (2024-08-30)

**Note:** Version bump only for package @sb1/ffe-tabs





# [14.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.31...@sb1/ffe-tabs@14.0.0) (2024-08-23)


### Features

* **ffe-tabs:** regard-color-scheme-preference for darkmode ([c920a20](https://github.com/SpareBank1/designsystem/commit/c920a20759b28955bda9515029b03596c8a6da3f))


### BREAKING CHANGES

* **ffe-tabs:** "native" class to get dark mode
is not supported anymore.

Use class "regard-color-scheme-preference" on an
element wrapping the components.





## [13.1.31](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.30...@sb1/ffe-tabs@13.1.31) (2024-08-13)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.30](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.29...@sb1/ffe-tabs@13.1.30) (2024-08-13)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.29](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.28...@sb1/ffe-tabs@13.1.29) (2024-08-06)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.28](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.27...@sb1/ffe-tabs@13.1.28) (2024-07-22)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.27](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.26...@sb1/ffe-tabs@13.1.27) (2024-07-19)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.26](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.25...@sb1/ffe-tabs@13.1.26) (2024-07-12)


### Bug Fixes

* **ffe-tabs:** fikser typo i css property ([a23c1b7](https://github.com/SpareBank1/designsystem/commit/a23c1b7741062ca020ee9a678d92c476b24bb8c2))





## [13.1.25](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.24...@sb1/ffe-tabs@13.1.25) (2024-07-10)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.24](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.23...@sb1/ffe-tabs@13.1.24) (2024-06-18)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.23](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.22...@sb1/ffe-tabs@13.1.23) (2024-06-11)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.22](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.21...@sb1/ffe-tabs@13.1.22) (2024-06-10)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.21](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.20...@sb1/ffe-tabs@13.1.21) (2024-06-05)

**Note:** Version bump only for package @sb1/ffe-tabs





## [13.1.20](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.19...@sb1/ffe-tabs@13.1.20) (2024-06-04)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.19](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.18...@sb1/ffe-tabs@13.1.19) (2024-05-29)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.18](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.17...@sb1/ffe-tabs@13.1.18) (2024-05-13)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.17](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.16...@sb1/ffe-tabs@13.1.17) (2024-05-09)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.16](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.15...@sb1/ffe-tabs@13.1.16) (2024-05-07)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.15](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.14...@sb1/ffe-tabs@13.1.15) (2024-05-03)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.14](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.13...@sb1/ffe-tabs@13.1.14) (2024-05-03)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.12...@sb1/ffe-tabs@13.1.13) (2024-04-29)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.11...@sb1/ffe-tabs@13.1.12) (2024-04-18)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.10...@sb1/ffe-tabs@13.1.11) (2024-03-14)

### Bug Fixes

-   **ffe-tabs:** hovering styles only when using pointer/mouse ([e3c5c31](https://github.com/SpareBank1/designsystem/commit/e3c5c31800b597741942acd05ffb280537da5174))

## [13.1.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.9...@sb1/ffe-tabs@13.1.10) (2024-03-08)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.8...@sb1/ffe-tabs@13.1.9) (2024-02-29)

### Bug Fixes

-   **ffe-tabs:** make no break tabs shrink ([06acc40](https://github.com/SpareBank1/designsystem/commit/06acc40ff4628ad34ef299f96aa87aa298042e03))
-   **ffe-tabs:** remove white-space: nowrap; from tabs ([fcd36e8](https://github.com/SpareBank1/designsystem/commit/fcd36e832b343436b02e2ab31c0ad41278039c7b))

## [13.1.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.7...@sb1/ffe-tabs@13.1.8) (2024-02-28)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.6...@sb1/ffe-tabs@13.1.7) (2024-02-26)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.5...@sb1/ffe-tabs@13.1.6) (2024-02-12)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.4...@sb1/ffe-tabs@13.1.5) (2024-02-05)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.3...@sb1/ffe-tabs@13.1.4) (2024-02-05)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.2...@sb1/ffe-tabs@13.1.3) (2024-01-16)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.1...@sb1/ffe-tabs@13.1.2) (2023-10-19)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.1.0...@sb1/ffe-tabs@13.1.1) (2023-10-11)

**Note:** Version bump only for package @sb1/ffe-tabs

# [13.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.0.3...@sb1/ffe-tabs@13.1.0) (2023-09-15)

### Features

-   **ffe-tabs:** add :host for shadow dom support ([5e6c6cf](https://github.com/SpareBank1/designsystem/commit/5e6c6cfe0bdbbd62fbf738819d7d5818f1409f74))

## [13.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.0.2...@sb1/ffe-tabs@13.0.3) (2023-04-27)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.0.1...@sb1/ffe-tabs@13.0.2) (2023-02-08)

**Note:** Version bump only for package @sb1/ffe-tabs

## [13.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@13.0.0...@sb1/ffe-tabs@13.0.1) (2022-12-19)

**Note:** Version bump only for package @sb1/ffe-tabs

# [13.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.1.1...@sb1/ffe-tabs@13.0.0) (2022-12-05)

### Features

-   **ffe-tabs:** update internal dependencies ([794f32b](https://github.com/SpareBank1/designsystem/commit/794f32b9020e5ab1ceaf890beb88a3908cad14aa))

### BREAKING CHANGES

-   **ffe-tabs:** Makes the styling package @sb1/ffe-core a required
    dependency and removes it as peer dependency.

## [12.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.1.0...@sb1/ffe-tabs@12.1.1) (2022-11-28)

**Note:** Version bump only for package @sb1/ffe-tabs

# [12.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.17...@sb1/ffe-tabs@12.1.0) (2022-11-08)

### Features

-   **ffe-tabs:** legg til theming ([d6e8101](https://github.com/SpareBank1/designsystem/commit/d6e8101cbdf76379c988c0e00e90d401da5f3c4f))

## [12.0.17](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.16...@sb1/ffe-tabs@12.0.17) (2022-10-28)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.16](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.15...@sb1/ffe-tabs@12.0.16) (2022-10-20)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.15](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.14...@sb1/ffe-tabs@12.0.15) (2022-10-18)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.14](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.13...@sb1/ffe-tabs@12.0.14) (2022-10-04)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.12...@sb1/ffe-tabs@12.0.13) (2022-09-28)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.11...@sb1/ffe-tabs@12.0.12) (2022-08-31)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.10...@sb1/ffe-tabs@12.0.11) (2022-08-08)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.9...@sb1/ffe-tabs@12.0.10) (2022-08-05)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.8...@sb1/ffe-tabs@12.0.9) (2022-06-07)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.7...@sb1/ffe-tabs@12.0.8) (2022-05-30)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.6...@sb1/ffe-tabs@12.0.7) (2022-05-19)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.5...@sb1/ffe-tabs@12.0.6) (2022-03-31)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.4...@sb1/ffe-tabs@12.0.5) (2022-03-21)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.3...@sb1/ffe-tabs@12.0.4) (2022-03-14)

### Bug Fixes

-   **ffe-tabs:** fikse at TabGroup går ut til kanten på mobil ([cae360a](https://github.com/SpareBank1/designsystem/commit/cae360af073ee11c37b74cef68fbbc970ef817f1))

## [12.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.2...@sb1/ffe-tabs@12.0.3) (2022-03-11)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.1...@sb1/ffe-tabs@12.0.2) (2022-03-09)

**Note:** Version bump only for package @sb1/ffe-tabs

## [12.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@12.0.0...@sb1/ffe-tabs@12.0.1) (2022-03-03)

### Bug Fixes

-   **ffe-tabs:** fikse bug på desktop ([b7a2d25](https://github.com/SpareBank1/designsystem/commit/b7a2d25bfc7ceddb270230fe95a6e4dbbe21d366))

# [12.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.1.0...@sb1/ffe-tabs@12.0.0) (2022-03-03)

### Features

-   **ffe-tabs:** fjerner tabButton og tabButtonGroup ([c2ee132](https://github.com/SpareBank1/designsystem/commit/c2ee1321af06c535e544a8d28a1d3f79967dfb65))

### BREAKING CHANGES

-   **ffe-tabs:** fjerner styling knyttet til tabButton og tabButtonGroup

# [11.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.13...@sb1/ffe-tabs@11.1.0) (2022-03-03)

### Features

-   **ffe-tabs:** redesign av faner ([6febd6c](https://github.com/SpareBank1/designsystem/commit/6febd6ce746ac7e01b4b76d8b1c717c5f1faa492))

## [11.0.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.12...@sb1/ffe-tabs@11.0.13) (2022-02-28)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.11...@sb1/ffe-tabs@11.0.12) (2021-11-30)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.10...@sb1/ffe-tabs@11.0.11) (2021-11-19)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.9...@sb1/ffe-tabs@11.0.10) (2021-11-04)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.8...@sb1/ffe-tabs@11.0.9) (2021-11-01)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.7...@sb1/ffe-tabs@11.0.8) (2021-11-01)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.6...@sb1/ffe-tabs@11.0.7) (2021-10-29)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.5...@sb1/ffe-tabs@11.0.6) (2021-10-20)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.4...@sb1/ffe-tabs@11.0.5) (2021-10-08)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.3...@sb1/ffe-tabs@11.0.4) (2021-10-06)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.2...@sb1/ffe-tabs@11.0.3) (2021-09-24)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.1...@sb1/ffe-tabs@11.0.2) (2021-09-17)

**Note:** Version bump only for package @sb1/ffe-tabs

## [11.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@11.0.0...@sb1/ffe-tabs@11.0.1) (2021-09-10)

**Note:** Version bump only for package @sb1/ffe-tabs

# [11.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@9.1.1...@sb1/ffe-tabs@11.0.0) (2021-09-06)

### Features

-   **ffe-tabs:** oppdaterte farger iht ny profil ([fcd3d74](https://github.com/SpareBank1/designsystem/commit/fcd3d744e0bc3be4fc0d067bb055e8b58111243f))

### BREAKING CHANGES

-   **ffe-tabs:** visuelle endringer i komponenten kan medføre regresjonsfeil

# [10.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@9.1.1...@sb1/ffe-tabs@10.0.0) (2021-09-06)

### Features

-   **ffe-tabs:** oppdaterte farger iht ny profil ([fcd3d74](https://github.com/SpareBank1/designsystem/commit/fcd3d744e0bc3be4fc0d067bb055e8b58111243f))

### BREAKING CHANGES

-   **ffe-tabs:** visuelle endringer i komponenten kan medføre regresjonsfeil

## [9.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@9.1.0...@sb1/ffe-tabs@9.1.1) (2021-06-17)

**Note:** Version bump only for package @sb1/ffe-tabs

# [9.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@9.0.1...@sb1/ffe-tabs@9.1.0) (2021-04-14)

### Features

-   **ffe-tabs:** adds MuseoSans font as fallback font ([9287223](https://github.com/SpareBank1/designsystem/commit/92872237c8a7896c127f3dacb7d94f9c024ac5b4))

## [9.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@9.0.0...@sb1/ffe-tabs@9.0.1) (2021-03-25)

**Note:** Version bump only for package @sb1/ffe-tabs

# [9.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@8.0.6...@sb1/ffe-tabs@9.0.0) (2021-03-17)

### Bug Fixes

-   **ffe-tabs:** bytter ut museo sans med ny sparebank1-font ([e3728b4](https://github.com/SpareBank1/designsystem/commit/e3728b43e4c995be4cd1ce30c909f94fb3000de0))

### BREAKING CHANGES

-   **ffe-tabs:** ny font i alt innhold

## [8.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@8.0.5...@sb1/ffe-tabs@8.0.6) (2021-03-15)

### Bug Fixes

-   **ffe-tabs:** broadens version of peer dependencies ([57b12e9](https://github.com/SpareBank1/designsystem/commit/57b12e9448edb1d84bcf2f1b119a707405551ba8))

## [8.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@8.0.4...@sb1/ffe-tabs@8.0.5) (2021-03-08)

**Note:** Version bump only for package @sb1/ffe-tabs

## [8.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@8.0.3...@sb1/ffe-tabs@8.0.4) (2021-02-03)

**Note:** Version bump only for package @sb1/ffe-tabs

## [8.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@8.0.2...@sb1/ffe-tabs@8.0.3) (2021-02-02)

**Note:** Version bump only for package @sb1/ffe-tabs

## [8.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@8.0.1...@sb1/ffe-tabs@8.0.2) (2021-01-11)

**Note:** Version bump only for package @sb1/ffe-tabs

## [8.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@8.0.0...@sb1/ffe-tabs@8.0.1) (2020-12-03)

**Note:** Version bump only for package @sb1/ffe-tabs

# [8.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.10...@sb1/ffe-tabs@8.0.0) (2020-11-20)

### Bug Fixes

-   **ffe-tabs:** change text values to rem ([5049122](https://github.com/SpareBank1/designsystem/commit/5049122824d97724f325dab54f5f109cc9adad6f))

### BREAKING CHANGES

-   **ffe-tabs:** This fix changes all font-size and line-height values from px to rem,
    this is to solve an issue with zooming in iOS.

## [7.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.9...@sb1/ffe-tabs@7.0.10) (2020-11-05)

**Note:** Version bump only for package @sb1/ffe-tabs

## [7.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.8...@sb1/ffe-tabs@7.0.9) (2020-08-25)

**Note:** Version bump only for package @sb1/ffe-tabs

## [7.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.7...@sb1/ffe-tabs@7.0.8) (2020-03-18)

**Note:** Version bump only for package @sb1/ffe-tabs

## [7.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.6...@sb1/ffe-tabs@7.0.7) (2020-03-16)

**Note:** Version bump only for package @sb1/ffe-tabs

## [7.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.5...@sb1/ffe-tabs@7.0.6) (2020-03-13)

**Note:** Version bump only for package @sb1/ffe-tabs

## [7.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.4...@sb1/ffe-tabs@7.0.5) (2020-02-26)

**Note:** Version bump only for package @sb1/ffe-tabs

## [7.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.3...@sb1/ffe-tabs@7.0.4) (2020-02-26)

**Note:** Version bump only for package @sb1/ffe-tabs

## [7.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.1...@sb1/ffe-tabs@7.0.3) (2020-02-26)

**Note:** Version bump only for package @sb1/ffe-tabs

## [7.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.1...@sb1/ffe-tabs@7.0.2) (2020-02-25)

**Note:** Version bump only for package @sb1/ffe-tabs

## [7.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@7.0.0...@sb1/ffe-tabs@7.0.1) (2020-02-10)

**Note:** Version bump only for package @sb1/ffe-tabs

# [7.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.2.0...@sb1/ffe-tabs@7.0.0) (2019-12-18)

### Bug Fixes

-   **ffe-tabs:** replace hardcoded spacing with variables ([d8ace87](https://github.com/SpareBank1/designsystem/commit/d8ace87d07ed29d24869d9b28435f3727bab49c3))

### BREAKING CHANGES

-   **ffe-tabs:** This commit is likely to cause small visual regressions caused by slightly altered margin and padding values.

# [6.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.10...@sb1/ffe-tabs@6.2.0) (2019-12-16)

### Features

-   **ffe-tabs:** add darkmode styling overrides ([668eef5](https://github.com/SpareBank1/designsystem/commit/668eef51d1e53c77e31a7fa8c203dfb2bdb59041))

## [6.1.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.9...@sb1/ffe-tabs@6.1.10) (2019-10-31)

**Note:** Version bump only for package @sb1/ffe-tabs

## [6.1.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.8...@sb1/ffe-tabs@6.1.9) (2019-10-21)

### Bug Fixes

-   **ffe-tabs:** Remove screen type from media queries, see [#719](https://github.com/SpareBank1/designsystem/issues/719) ([12671cc](https://github.com/SpareBank1/designsystem/commit/12671cca1b8349f08933f8ee24b9ca7ac247b58a))

## [6.1.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.7...@sb1/ffe-tabs@6.1.8) (2019-10-16)

**Note:** Version bump only for package @sb1/ffe-tabs

## [6.1.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.6...@sb1/ffe-tabs@6.1.7) (2019-10-14)

**Note:** Version bump only for package @sb1/ffe-tabs

## [6.1.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.5...@sb1/ffe-tabs@6.1.6) (2019-09-18)

**Note:** Version bump only for package @sb1/ffe-tabs

## [6.1.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.4...@sb1/ffe-tabs@6.1.5) (2019-08-27)

**Note:** Version bump only for package @sb1/ffe-tabs

## [6.1.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.3...@sb1/ffe-tabs@6.1.4) (2019-04-24)

**Note:** Version bump only for package @sb1/ffe-tabs

## [6.1.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.2...@sb1/ffe-tabs@6.1.3) (2018-12-11)

**Note:** Version bump only for package @sb1/ffe-tabs

## [6.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.1...@sb1/ffe-tabs@6.1.2) (2018-11-26)

**Note:** Version bump only for package @sb1/ffe-tabs

## [6.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.1.0...@sb1/ffe-tabs@6.1.1) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-tabs

# [6.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.0.4...@sb1/ffe-tabs@6.1.0) (2018-10-25)

### Features

-   **ffe-tab-button:** Added ffe-tab-button--dark ([53da86e](https://github.com/SpareBank1/designsystem/commit/53da86e))

<a name="6.0.4"></a>

## [6.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.0.3...@sb1/ffe-tabs@6.0.4) (2018-09-19)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="6.0.3"></a>

## [6.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.0.2...@sb1/ffe-tabs@6.0.3) (2018-08-23)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="6.0.2"></a>

## [6.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.0.1...@sb1/ffe-tabs@6.0.2) (2018-08-09)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="6.0.1"></a>

## [6.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@6.0.0...@sb1/ffe-tabs@6.0.1) (2018-07-23)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="6.0.0"></a>

# [6.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.8...@sb1/ffe-tabs@6.0.0) (2018-07-18)

### Features

-   Change tab styling to resemble actual tabs, rename components ([afd8cbc](https://github.com/SpareBank1/designsystem/commit/afd8cbc))

### BREAKING CHANGES

-   This commit renames the existing Tab and TabGroup components to TabButton and TabButtonGroup. A new Tab and TabGroup component is added, but uses different styling in order to represent actual tabs.

<a name="5.0.0"></a>

# [5.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.8...@sb1/ffe-tabs@5.0.0) (2018-07-18)

### Features

-   Change tab styling to resemble actual tabs, rename components ([afd8cbc](https://github.com/SpareBank1/designsystem/commit/afd8cbc))

### BREAKING CHANGES

-   This commit renames the existing Tab and TabGroup components to TabButton and TabButtonGroup. A new Tab and TabGroup component is added, but uses different styling in order to represent actual tabs.

<a name="4.1.8"></a>

## [4.1.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.7...@sb1/ffe-tabs@4.1.8) (2018-06-20)

### Bug Fixes

-   **ffe-tabs:** added peerDependency to ffe-core@^13.0.0 ([f48ae2e](https://github.com/SpareBank1/designsystem/commit/f48ae2e))

<a name="4.1.7"></a>

## [4.1.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.6...@sb1/ffe-tabs@4.1.7) (2018-06-18)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="4.1.6"></a>

## [4.1.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.5...@sb1/ffe-tabs@4.1.6) (2018-06-04)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="4.1.5"></a>

## [4.1.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.4...@sb1/ffe-tabs@4.1.5) (2018-05-29)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="4.1.4"></a>

## [4.1.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.3...@sb1/ffe-tabs@4.1.4) (2018-05-22)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="4.1.3"></a>

## [4.1.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.2...@sb1/ffe-tabs@4.1.3) (2018-05-08)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="4.1.2"></a>

## [4.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.1...@sb1/ffe-tabs@4.1.2) (2018-05-04)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="4.1.1"></a>

## [4.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.1.0...@sb1/ffe-tabs@4.1.1) (2018-05-03)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="4.1.0"></a>

# [4.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.0.4...@sb1/ffe-tabs@4.1.0) (2018-04-24)

### Features

-   **ffe-tabs:** new class ffe-tab-button-group ([c296198](https://github.com/SpareBank1/designsystem/commit/c296198)), closes [#201](https://github.com/SpareBank1/designsystem/issues/201)

<a name="4.0.4"></a>

## [4.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.0.3...@sb1/ffe-tabs@4.0.4) (2018-04-11)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="4.0.3"></a>

## [4.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.0.2...@sb1/ffe-tabs@4.0.3) (2018-04-10)

**Note:** Version bump only for package @sb1/ffe-tabs

<a name="4.0.2"></a>

## [4.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.0.0...@sb1/ffe-tabs@4.0.2) (2018-03-07)

### Bug Fixes

-   Correct peerDependencies after breaking change ([aab59ce](https://github.com/SpareBank1/designsystem/commit/aab59ce))

<a name="4.0.1"></a>

## [4.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-tabs@4.0.0...@sb1/ffe-tabs@4.0.1) (2018-03-02)

### Bug Fixes

-   Correct peerDependencies after breaking change ([4318363](https://github.com/SpareBank1/designsystem/commit/4318363))

<a name="4.0.0"></a>

# 4.0.0 (2018-02-25)

### Bug Fixes

-   remove all references to internal system ([ff22340](https://github.com/SpareBank1/designsystem/commit/ff22340))

### Chores

-   add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))

### BREAKING CHANGES

-   All packages have been renamed to add the @sb1 scope.

See links [1] and [2] to read more about package scopes.

Unfortunately this requires you update both your dependencies in
`package.json` and all `import` or `require` statements in your code.
Also, you unfortunately have to upgrade all FFE packages at once due to
dependency between packages. If you are on the latest version prior to
this breaking change the upgrade should be a matter of updating
`package.json` with new package names and versions, and updating your
imports.

To help find the proper package versions you can either browse to the
packages you need or check out the list of Git tags either on
Github [3] or by cloning the repository and running the `git tag`
command. All package versions get a tag in the format
_package@version_.

Update your `package.json` with the latest package version and add the
@sb1 scope to the package name:

```diff
- "ffe-core": "11.0.2",
+ "@sb1/ffe-core": "11.0.2",
```

Scoped packages all get put in a subdirectory in `node_modules/`. In our
case packages will be put in the `node_modules/@sb1/` directory. If your
build depends on file paths (for instance for copying fonts) you need to
update that path to include the scope.

The directory structure also means you have to update your imports, both
in Less and in JavaScript.

Using `less-plugin-npm-import`:

```diff
- @import 'npm://ffe-core/less/ffe';
+ @import 'npm://@sb1/ffe-core/less/ffe';
```

Using Webpack:

```diff
- @import '~ffe-core/less/ffe';
+ @import '~@sb1/ffe-core/less/ffe';
```

Using plain old paths:

```diff
- @import '../path/to/node_modules/ffe-core/less/ffe';
+ @import '../path/to/node_modules/@sb1/ffe-core/less/ffe';
```

JavaScript `import`:

```diff
- import { ActionButton } from 'ffe-buttons-react';
+ import { ActionButton } from '@sb1/ffe-buttons-react';
```

JavaScript `require`:

```diff
- const { ActionButton } = require('ffe-buttons-react').default;
+ const { ActionButton } = require('@sb1/ffe-buttons-react').default;
```

[1]: https://docs.npmjs.com/misc/scope
[2]: https://docs.npmjs.com/getting-started/scoped-packages
[3]: https://github.com/sparebank1/designsystem/tags

<a name="3.0.9"></a>

## [3.0.9](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.8...ffe-tabs@3.0.9) (2018-02-23)

**Note:** Version bump only for package ffe-tabs

<a name="3.0.8"></a>

## [3.0.8](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.7...ffe-tabs@3.0.8) (2018-02-22)

**Note:** Version bump only for package ffe-tabs

<a name="3.0.7"></a>

## [3.0.7](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.6...ffe-tabs@3.0.7) (2018-02-20)

**Note:** Version bump only for package ffe-tabs

<a name="3.0.6"></a>

## [3.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.5...ffe-tabs@3.0.6) (2018-02-15)

**Note:** Version bump only for package ffe-tabs

<a name="3.0.5"></a>

## [3.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-tabs@3.0.4...ffe-tabs@3.0.5) (2018-02-01)

**Note:** Version bump only for package ffe-tabs

<a name="3.0.4"></a>

## 3.0.4 (2018-01-30)

**Note:** Version bump only for package ffe-tabs

## 3.0.3

-   Removed the text transformation styling of the `ffe-tab-button`

## 3.0.2

-   Support both versions 9 and 10 of `ffe-core`

## 3.0.1

-   Replaced hardcoded transition properties with variables from ffe-core

# 3.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

-   Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

## 2.1.2

-   Removed use of `line-height` to set `ffe-tab-button` height, instead use `padding`. This so line breaks won't look awkward - with padding around every text row.

## 2.1.1

Lagt til `outline: 0` på focus og active for å unngå "dobbel" fokus i Firefox.

# 2.1.0

Endringssuffikset `--condensed` kan brukes til kompaktknapper.

# 2.0.0

BREAKING: `ffe-tab-button` får hvit bakgrunnsfarge, ikke gjennomsiktig

For gjennomsiktig knapp bruk `--ghost`-modifieren (`ffe-tab-button ffe-tab-button--ghost`).

Tabs skal som standard ha hvit bakgrunnsfarge, ikke være gjennomsiktige.
Siden fargen var eksplisitt satt til transparent kan det hende enkelte er
avhengige av den oppførselen. De er nå nødt til å bruke `--ghost`-modifieren.

# 1.0.0

Første versjon av pakken. Less-filene har før dette ligget i
ffe-tabs ble skilt ut fra ffe-core i ffe-core v8.0.0.
