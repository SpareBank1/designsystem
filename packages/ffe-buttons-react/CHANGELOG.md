# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [18.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@18.0.3...@sb1/ffe-buttons-react@18.0.4) (2023-08-29)

### Bug Fixes

-   **ffe-buttons-react:** erstatter fragment i expandbutton med span ([f4ebf37](https://github.com/SpareBank1/designsystem/commit/f4ebf379e4c7f4eac284c453dd1905c79b9adef2))

## [18.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@18.0.2...@sb1/ffe-buttons-react@18.0.3) (2023-06-19)

### Bug Fixes

-   **ffe-buttons-react:** fix MinimalBaseButtonProps ([8853839](https://github.com/SpareBank1/designsystem/commit/8853839b5d5860b1471662823f099b25c0fa8fc8))

## [18.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@18.0.1...@sb1/ffe-buttons-react@18.0.2) (2023-04-28)

### Bug Fixes

-   **ffe-buttons-react:** minimal base button props ([4a29230](https://github.com/SpareBank1/designsystem/commit/4a2923065f759cafb4a2cf3108b42bfc719a0aba))

## [18.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@18.0.0...@sb1/ffe-buttons-react@18.0.1) (2023-04-28)

### Bug Fixes

-   **ffe-buttons-react:** use react.htmlprops instead of react.componentprops ([8cd93e5](https://github.com/SpareBank1/designsystem/commit/8cd93e5897f211baf0d79b086561acc91d17c739))

# [18.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@17.0.3...@sb1/ffe-buttons-react@18.0.0) (2023-04-27)

### Bug Fixes

-   **ffe-buttons-react:** use react.componentsprops instead of react.htmlprops ([6639e09](https://github.com/SpareBank1/designsystem/commit/6639e092f63aa20ed06566b2c8c582b39dde2c6c))

### Features

-   **ffe-buttons-react:** fix button type ([5017312](https://github.com/SpareBank1/designsystem/commit/50173123a257ff7903c3c1163c998bdafe5e54d4))

### BREAKING CHANGES

-   **ffe-buttons-react:** "to" prop is removed. To use react router props
    or similar a generic must be provided.

import { LinkProps } from "react-router-dom";

return <PrimaryButton<LinkProps> to={'somUrl'} />

## [17.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@17.0.2...@sb1/ffe-buttons-react@17.0.3) (2023-04-11)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [17.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@17.0.1...@sb1/ffe-buttons-react@17.0.2) (2023-02-08)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [17.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@17.0.0...@sb1/ffe-buttons-react@17.0.1) (2022-12-19)

**Note:** Version bump only for package @sb1/ffe-buttons-react

# [17.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@16.0.7...@sb1/ffe-buttons-react@17.0.0) (2022-12-05)

### Features

-   **ffe-buttons-react:** update internal dependencies ([961e579](https://github.com/SpareBank1/designsystem/commit/961e5790318bf3fe27bdcc79ae610df18a76ad6b))

### BREAKING CHANGES

-   **ffe-buttons-react:** Makes the styling package @sb1/ffe-buttons a required
    dependency and removes it as peer dependency.

## [16.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@16.0.6...@sb1/ffe-buttons-react@16.0.7) (2022-10-28)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [16.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@16.0.5...@sb1/ffe-buttons-react@16.0.6) (2022-09-09)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [16.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@16.0.4...@sb1/ffe-buttons-react@16.0.5) (2022-08-05)

### Bug Fixes

-   **ffe-buttons-react:** legg til role på span som inneholder loading ikon ([a987d11](https://github.com/SpareBank1/designsystem/commit/a987d11911a66c70d08737d91b2aa6af11f2152a))

## [16.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@16.0.3...@sb1/ffe-buttons-react@16.0.4) (2022-07-29)

### Bug Fixes

-   **ffe-buttons-react:** legg til aria-hidden på kryssikon ([7ed2dc7](https://github.com/SpareBank1/designsystem/commit/7ed2dc7bb824cf06204c902e3d8dc7abb06e380d))

## [16.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@16.0.2...@sb1/ffe-buttons-react@16.0.3) (2022-07-20)

### Bug Fixes

-   **ffe-buttons-react:** legg til aria-hidden på inline og expand button ikoner ([9aa7b59](https://github.com/SpareBank1/designsystem/commit/9aa7b59203d9bb4b89b2e5d44f215c3b4aa7221b))

## [16.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@16.0.1...@sb1/ffe-buttons-react@16.0.2) (2022-05-19)

### Bug Fixes

-   **ffe-buttons-react:** fikser [#1382](https://github.com/SpareBank1/designsystem/issues/1382) og [#1386](https://github.com/SpareBank1/designsystem/issues/1386) ([e61ec8f](https://github.com/SpareBank1/designsystem/commit/e61ec8f30935dc96f279e39869cffa86d064aa3e))

## [16.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@16.0.0...@sb1/ffe-buttons-react@16.0.1) (2022-04-12)

### Bug Fixes

-   **ffe-buttons-react:** add children type on ButtonGruop ([e151283](https://github.com/SpareBank1/designsystem/commit/e15128302c2fd5b45a8f038a69e36070bb7c9728))

# [16.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@15.0.0...@sb1/ffe-buttons-react@16.0.0) (2022-03-11)

### Features

-   **ffe-buttons-react:** remove condensed variant of buttons ([c0df577](https://github.com/SpareBank1/designsystem/commit/c0df57709d751589e4c60db9eee10e0661ff2160)), closes [#1251](https://github.com/SpareBank1/designsystem/issues/1251)

### BREAKING CHANGES

-   **ffe-buttons-react:** remove condensed variant of buttons, i.e. the prop `condensed`.

# [15.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.1.2...@sb1/ffe-buttons-react@15.0.0) (2022-03-08)

### Bug Fixes

-   **ffe-buttons-react:** fjerner --ghost ([428cbf7](https://github.com/SpareBank1/designsystem/commit/428cbf7cd642701a5683390d9af7d2cf181a0588))

### BREAKING CHANGES

-   **ffe-buttons-react:** sletter --ghost og tilhørende prop i react-implementasjonen

## [14.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.1.1...@sb1/ffe-buttons-react@14.1.2) (2022-03-02)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [14.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.1.0...@sb1/ffe-buttons-react@14.1.1) (2022-02-23)

**Note:** Version bump only for package @sb1/ffe-buttons-react

# [14.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.12...@sb1/ffe-buttons-react@14.1.0) (2022-02-18)

### Features

-   **ffe-buttons-react:** import icons without need for tree shaking ([f856288](https://github.com/SpareBank1/designsystem/commit/f8562889018e6f47ecbae1953b1752bcdb362f8f))

## [14.0.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.11...@sb1/ffe-buttons-react@14.0.12) (2022-01-27)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [14.0.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.10...@sb1/ffe-buttons-react@14.0.11) (2022-01-27)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [14.0.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.9...@sb1/ffe-buttons-react@14.0.10) (2022-01-25)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [14.0.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.8...@sb1/ffe-buttons-react@14.0.9) (2022-01-24)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [14.0.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.7...@sb1/ffe-buttons-react@14.0.8) (2021-12-17)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [14.0.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.6...@sb1/ffe-buttons-react@14.0.7) (2021-12-10)

### Bug Fixes

-   **ffe-buttons-react:** use buildtool for transpiling ([0510533](https://github.com/SpareBank1/designsystem/commit/0510533dd523920e1805855e7c35778ca24e524b)), closes [#1294](https://github.com/SpareBank1/designsystem/issues/1294)

## [14.0.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.5...@sb1/ffe-buttons-react@14.0.6) (2021-12-03)

### Bug Fixes

-   **ffe-buttons-react:** swallow klicks when button is loading ([6daa3b8](https://github.com/SpareBank1/designsystem/commit/6daa3b89a13d21976880d0514edd5b8ab7384c79))

## [14.0.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.4...@sb1/ffe-buttons-react@14.0.5) (2021-11-04)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [14.0.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.3...@sb1/ffe-buttons-react@14.0.4) (2021-10-19)

### Bug Fixes

-   **ffe-buttons-react:** fjerner gjenglemte referanser til --dark ([8728a6b](https://github.com/SpareBank1/designsystem/commit/8728a6ba7657f21e9a4bd10b8c419eb9e21532dc))

## [14.0.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.2...@sb1/ffe-buttons-react@14.0.3) (2021-10-18)

### Bug Fixes

-   **ffe-buttons-react:** remove disabled attribute when is-loading ([d666aa1](https://github.com/SpareBank1/designsystem/commit/d666aa1716756e4f878695b5455a09d3b3cd4ecb))

## [14.0.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.1...@sb1/ffe-buttons-react@14.0.2) (2021-10-08)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [14.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@14.0.0...@sb1/ffe-buttons-react@14.0.1) (2021-09-12)

### Bug Fixes

-   **ffe-buttons-react:** minor refactoring ([222cc5f](https://github.com/SpareBank1/designsystem/commit/222cc5fdba0fe7fcb50ff1c803ab645237e5846a))

# [14.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.11...@sb1/ffe-buttons-react@14.0.0) (2021-09-06)

### Bug Fixes

-   **ffe-buttons-react:** justering av utseende og transition ([d192089](https://github.com/SpareBank1/designsystem/commit/d19208944424551ebeb5e03efbff09e933132337))

### BREAKING CHANGES

-   **ffe-buttons-react:** chevron animeres nå i Z-aksen

# [13.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.11...@sb1/ffe-buttons-react@13.0.0) (2021-09-06)

### Bug Fixes

-   **ffe-buttons-react:** justering av utseende og transition ([d192089](https://github.com/SpareBank1/designsystem/commit/d19208944424551ebeb5e03efbff09e933132337))

### BREAKING CHANGES

-   **ffe-buttons-react:** chevron animeres nå i Z-aksen

## [12.2.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.10...@sb1/ffe-buttons-react@12.2.11) (2021-03-15)

### Bug Fixes

-   **ffe-buttons-react:** broadens version of peer dependencies ([2ab2e5c](https://github.com/SpareBank1/designsystem/commit/2ab2e5cf784c2444b692a248d8f117712860631c))

## [12.2.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.9...@sb1/ffe-buttons-react@12.2.10) (2021-02-03)

### Bug Fixes

-   packages/ffe-buttons-react/package.json to reduce vulnerabilities ([7b4412e](https://github.com/SpareBank1/designsystem/commit/7b4412e5adafeba5dc699a34602cab212f4c471e))

## [12.2.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.8...@sb1/ffe-buttons-react@12.2.9) (2021-02-02)

### Bug Fixes

-   **ffe-buttons-react:** reduce vulnerabilities ([414cf6f](https://github.com/SpareBank1/designsystem/commit/414cf6fea3d75ca95c321ee65342f2d140642cf5))

## [12.2.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.7...@sb1/ffe-buttons-react@12.2.8) (2020-11-18)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.2.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.6...@sb1/ffe-buttons-react@12.2.7) (2020-09-15)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.2.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.5...@sb1/ffe-buttons-react@12.2.6) (2020-08-27)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.2.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.4...@sb1/ffe-buttons-react@12.2.5) (2020-08-27)

### Bug Fixes

-   **ffe-buttons-react:** to property when usin react router can be object ([8162b32](https://github.com/SpareBank1/designsystem/commit/8162b32fe7b581297060548520471acb84963ca9))

## [12.2.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.3...@sb1/ffe-buttons-react@12.2.4) (2020-08-04)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.2.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.2...@sb1/ffe-buttons-react@12.2.3) (2020-07-30)

### Bug Fixes

-   **ffe-buttons-react:** fix InlineExpandButton types ([88877ba](https://github.com/SpareBank1/designsystem/commit/88877ba95bf85be1868b829d15d9d22674397c1a))
-   **ffe-buttons-react:** set InlineExpandButton type to "button" ([0a02a57](https://github.com/SpareBank1/designsystem/commit/0a02a575790fed4fa178a5f3379d31c5ed7dcddc))

## [12.2.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.1...@sb1/ffe-buttons-react@12.2.2) (2020-06-29)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.2.0...@sb1/ffe-buttons-react@12.2.1) (2020-06-24)

**Note:** Version bump only for package @sb1/ffe-buttons-react

# [12.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.19...@sb1/ffe-buttons-react@12.2.0) (2020-06-18)

### Features

-   **ffe-system-message-react:** stop using deprecated lifecycle methods ([940e0f8](https://github.com/SpareBank1/designsystem/commit/940e0f8d516eeaec85f08cbe7019b29a6e8b36cf))

## [12.1.19](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.18...@sb1/ffe-buttons-react@12.1.19) (2020-05-27)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.18](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.17...@sb1/ffe-buttons-react@12.1.18) (2020-03-31)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.17](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.16...@sb1/ffe-buttons-react@12.1.17) (2020-03-18)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.16](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.15...@sb1/ffe-buttons-react@12.1.16) (2020-03-16)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.15](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.14...@sb1/ffe-buttons-react@12.1.15) (2020-03-13)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.14](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.13...@sb1/ffe-buttons-react@12.1.14) (2020-03-10)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.12...@sb1/ffe-buttons-react@12.1.13) (2020-03-06)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.11...@sb1/ffe-buttons-react@12.1.12) (2020-02-26)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.10...@sb1/ffe-buttons-react@12.1.11) (2020-02-26)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.8...@sb1/ffe-buttons-react@12.1.10) (2020-02-26)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.8...@sb1/ffe-buttons-react@12.1.9) (2020-02-25)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.7...@sb1/ffe-buttons-react@12.1.8) (2020-02-10)

### Bug Fixes

-   **ffe-buttons-react:** fixing incorrect types ([654a24f](https://github.com/SpareBank1/designsystem/commit/654a24f5d3136b331d345d596117f7b22e99e759))

## [12.1.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.6...@sb1/ffe-buttons-react@12.1.7) (2020-01-16)

### Bug Fixes

-   **ffe-buttons-react:** fixed type definition of innerref ([f5c234d](https://github.com/SpareBank1/designsystem/commit/f5c234d9cb6ff5b4d16c8b1ca2edeb12e95f11fd))

## [12.1.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.5...@sb1/ffe-buttons-react@12.1.6) (2019-12-16)

### Bug Fixes

-   **ffe-buttons-react:** ensuring typedefinition for the to prop for BaseButtonProps ([9f22db6](https://github.com/SpareBank1/designsystem/commit/9f22db6102f24cfbb2989e06ab42a4398b145693))

## [12.1.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.4...@sb1/ffe-buttons-react@12.1.5) (2019-11-20)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.3...@sb1/ffe-buttons-react@12.1.4) (2019-10-28)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [12.1.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.2...@sb1/ffe-buttons-react@12.1.3) (2019-10-16)

### Bug Fixes

-   **ffe-buttons-react:** invalid markup ([a447232](https://github.com/SpareBank1/designsystem/commit/a4472328c9cd365a890e74a007d1033bee701cef))

## [12.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.1...@sb1/ffe-buttons-react@12.1.2) (2019-10-09)

### Bug Fixes

-   **ffe-buttons-react:** bump prop-types ([49aa321](https://github.com/SpareBank1/designsystem/commit/49aa3219e8c1ce272aba2b1c0dc0aa32e3c2a014))
-   **ffe-buttons-react:** element type for type script ([b889371](https://github.com/SpareBank1/designsystem/commit/b8893712997641d01f78aaf3e500f7f9d530ce80))

## [12.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.1.0...@sb1/ffe-buttons-react@12.1.1) (2019-10-03)

### Bug Fixes

-   **ffe-buttons-react:** elementType prop type ([f692c7f](https://github.com/SpareBank1/designsystem/commit/f692c7f))

# [12.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@12.0.0...@sb1/ffe-buttons-react@12.1.0) (2019-09-09)

### Features

-   **ffe-buttons-react:** accept refs created by useRef ([3a1d6e6](https://github.com/SpareBank1/designsystem/commit/3a1d6e6))

# [12.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.3.1...@sb1/ffe-buttons-react@12.0.0) (2019-08-27)

### chore

-   bump React to 16.9 to allow for using hooks etc ([e3901f1](https://github.com/SpareBank1/designsystem/commit/e3901f1))

### BREAKING CHANGES

-   peerDep of React is raised to 16.9. While this in itself
    isn't a breaking change, it allows for the use of hooks in later releases.
    Such changes would just be a minor version, or even a patch, but without
    this major version bump it would result in a runtime error for consumers.

## [11.3.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.3.0...@sb1/ffe-buttons-react@11.3.1) (2019-08-12)

**Note:** Version bump only for package @sb1/ffe-buttons-react

# [11.3.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.14...@sb1/ffe-buttons-react@11.3.0) (2019-05-10)

### Bug Fixes

-   **ffe-buttons-react:** a11y improvements to `ExpandButton` ([a0bfbb8](https://github.com/SpareBank1/designsystem/commit/a0bfbb8)), closes [#619](https://github.com/SpareBank1/designsystem/issues/619)

### Features

-   **ffe-buttons-react:** Add dark style back button ([444dcd7](https://github.com/SpareBank1/designsystem/commit/444dcd7))
-   **ffe-buttons-react:** Added type definitions for typescript ([28f1208](https://github.com/SpareBank1/designsystem/commit/28f1208))

## [11.2.14](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.13...@sb1/ffe-buttons-react@11.2.14) (2019-04-24)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.13](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.12...@sb1/ffe-buttons-react@11.2.13) (2019-04-08)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.12](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.11...@sb1/ffe-buttons-react@11.2.12) (2019-03-25)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.11](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.10...@sb1/ffe-buttons-react@11.2.11) (2019-02-18)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.10](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.9...@sb1/ffe-buttons-react@11.2.10) (2019-01-29)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.9](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.8...@sb1/ffe-buttons-react@11.2.9) (2019-01-10)

### Bug Fixes

-   **ffe-buttons-react:** stop spreading icon prop to Button ([d152176](https://github.com/SpareBank1/designsystem/commit/d152176))

## [11.2.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.7...@sb1/ffe-buttons-react@11.2.8) (2018-12-19)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.6...@sb1/ffe-buttons-react@11.2.7) (2018-12-18)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.5...@sb1/ffe-buttons-react@11.2.6) (2018-12-11)

### Bug Fixes

-   Build tree shakeable packages ([fb4a9ea](https://github.com/SpareBank1/designsystem/commit/fb4a9ea))

## [11.2.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.4...@sb1/ffe-buttons-react@11.2.5) (2018-12-04)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.3...@sb1/ffe-buttons-react@11.2.4) (2018-11-26)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.2...@sb1/ffe-buttons-react@11.2.3) (2018-11-16)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.1...@sb1/ffe-buttons-react@11.2.2) (2018-11-13)

**Note:** Version bump only for package @sb1/ffe-buttons-react

## [11.2.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.2.0...@sb1/ffe-buttons-react@11.2.1) (2018-11-08)

**Note:** Version bump only for package @sb1/ffe-buttons-react

# [11.2.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.1.8...@sb1/ffe-buttons-react@11.2.0) (2018-10-25)

### Bug Fixes

-   **ffe-buttons-react:** Added defaultProps false for dark variant. ([98660c9](https://github.com/SpareBank1/designsystem/commit/98660c9))
-   **ffe-buttons-react:** Revert some small changes in previous commit that should not have been included. ([e37b868](https://github.com/SpareBank1/designsystem/commit/e37b868))

### Features

-   **ffe-buttons-react:** Added dark property for ActionButton, PrimaryButton, SecondaryButton, TertiaryButton with documentation ([a7b68e9](https://github.com/SpareBank1/designsystem/commit/a7b68e9))

## [11.1.8](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.1.7...@sb1/ffe-buttons-react@11.1.8) (2018-10-17)

### Bug Fixes

-   **ffe-buttons-react:** fixed async issues with setState ([d800bcb](https://github.com/SpareBank1/designsystem/commit/d800bcb))

<a name="11.1.7"></a>

## [11.1.7](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.1.6...@sb1/ffe-buttons-react@11.1.7) (2018-08-09)

### Bug Fixes

-   **ffe-buttons-react:** Fix console error in example ([4a1796f](https://github.com/SpareBank1/designsystem/commit/4a1796f)), closes [#356](https://github.com/SpareBank1/designsystem/issues/356)

<a name="11.1.6"></a>

## [11.1.6](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.1.5...@sb1/ffe-buttons-react@11.1.6) (2018-06-14)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="11.1.5"></a>

## [11.1.5](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.1.4...@sb1/ffe-buttons-react@11.1.5) (2018-06-04)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="11.1.4"></a>

## [11.1.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.1.3...@sb1/ffe-buttons-react@11.1.4) (2018-06-04)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="11.1.3"></a>

## [11.1.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.1.2...@sb1/ffe-buttons-react@11.1.3) (2018-05-29)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="11.1.2"></a>

## [11.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.1.1...@sb1/ffe-buttons-react@11.1.2) (2018-05-04)

### Bug Fixes

-   **ffe-buttons-react:** Add space for inline expand button icon ([30234e2](https://github.com/SpareBank1/designsystem/commit/30234e2))
-   **ffe-buttons-react:** fix using wrong property in docs ([3ab38aa](https://github.com/SpareBank1/designsystem/commit/3ab38aa))

<a name="11.1.1"></a>

## [11.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.1.0...@sb1/ffe-buttons-react@11.1.1) (2018-05-04)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="11.1.0"></a>

# [11.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@11.0.0...@sb1/ffe-buttons-react@11.1.0) (2018-04-30)

### Features

-   **ffe-buttons-react:** add inline prop to ButtonGroup ([386670c](https://github.com/SpareBank1/designsystem/commit/386670c)), closes [#213](https://github.com/SpareBank1/designsystem/issues/213)

<a name="11.0.0"></a>

# [11.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@10.1.4...@sb1/ffe-buttons-react@11.0.0) (2018-04-25)

### Bug Fixes

-   **ffe-buttons-react:** Restrict isLoading prop ([946d6ba](https://github.com/SpareBank1/designsystem/commit/946d6ba))

### BREAKING CHANGES

-   **ffe-buttons-react:** Removed support for `isLoading` from any button
    other than ActionButton, PrimaryButton and SecondaryButton.

This commit removes support for the `isLoading` prop for all other
buttons, meaning they will not be disabled or act any differently
if given an `isLoading` prop of true or false.

If you are using `isLoading` with any other kind of button you need
to sit down with design/ux and either start using one of those
three button types or figure out another way to show a loading indicator.

<a name="10.1.4"></a>

## [10.1.4](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@10.1.3...@sb1/ffe-buttons-react@10.1.4) (2018-04-23)

### Bug Fixes

-   **ffe-buttons-react:** Loadable shortcut-buttons ([2c2fe3d](https://github.com/SpareBank1/designsystem/commit/2c2fe3d))

<a name="10.1.3"></a>

## [10.1.3](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@10.1.2...@sb1/ffe-buttons-react@10.1.3) (2018-04-11)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="10.1.2"></a>

## [10.1.2](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@10.1.1...@sb1/ffe-buttons-react@10.1.2) (2018-04-06)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="10.1.1"></a>

## [10.1.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@10.1.0...@sb1/ffe-buttons-react@10.1.1) (2018-03-27)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="10.1.0"></a>

# [10.1.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@10.0.1...@sb1/ffe-buttons-react@10.1.0) (2018-03-22)

### Features

-   **ffe-buttons-react:** Add ButtonGroup ([ed9e2a6](https://github.com/SpareBank1/designsystem/commit/ed9e2a6))

<a name="10.0.1"></a>

## [10.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@10.0.0...@sb1/ffe-buttons-react@10.0.1) (2018-03-13)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="10.0.0"></a>

# [10.0.0](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@9.0.0...@sb1/ffe-buttons-react@10.0.0) (2018-03-07)

### Features

-   **ffe-buttons-react:** Simplify implementation ([e26caf6](https://github.com/SpareBank1/designsystem/commit/e26caf6))

### BREAKING CHANGES

-   **ffe-buttons-react:** This commit re-implements the ffe-buttons-react
    implementation so that it's easier to maintain for future developers.

A missing implementation, `TaskButton`, is also added in this commit.

The opportunity was taken to do some minor API changes as well, since
the prior implementation had some deprecated fields that could be
removed.

With this change, buttons are now much more similar, and follows
(mostly) the same API across button types. There are some differences
between them (some does not support loading indicators, while others
might not support right or left icons. Please refer to the relevant
documentation to learn more about the new APIs.

**Changes in props:**

-   `action` prop is removed.
-   `simpleContent` prop is removed (only used internally)
-   `label` prop is removed. Use `children` instead
-   `isTabbable` prop is removed. Use `tabIndex` instead
-   `disableButton` prop is renamed to its DOM cousin - `disabled`

**Other changes:**
All buttons support `leftIcon` and `rightIcon` props now - with the
following exceptions:

-   `BackButton` does not support any icons by design
-   `InlineExpandButton` does not support `rightIcon` by design
-   `ShortcutButton` does not support `rightIcon` by design
-   `TaskButton` does not support `rightIcon` by design

All buttons now support the `element` prop, which lets you override what
component or DOM element is used to render the button.

<a name="9.0.1"></a>

## [9.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-buttons-react@9.0.0...@sb1/ffe-buttons-react@9.0.1) (2018-03-02)

**Note:** Version bump only for package @sb1/ffe-buttons-react

<a name="9.0.0"></a>

# 9.0.0 (2018-02-25)

### Bug Fixes

-   Fix a few issues with the documentation ([ab3d579](https://github.com/SpareBank1/designsystem/commit/ab3d579))
-   **ffe-buttons-react:** Fixed path to chevron icon ([0eb4b1b](https://github.com/SpareBank1/designsystem/commit/0eb4b1b))
-   Treeshake ffe-icons ([6bc9d6f](https://github.com/SpareBank1/designsystem/commit/6bc9d6f))
-   **ffe-buttons-react:** Remove type propType check ([005890a](https://github.com/SpareBank1/designsystem/commit/005890a))
-   **ffe-icons-react:** Change hardcoded path of npm run build target ([f271067](https://github.com/SpareBank1/designsystem/commit/f271067))

### Chores

-   add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))

### Code Refactoring

-   **ffe-icons-react:** Improve API ([e9b88a4](https://github.com/SpareBank1/designsystem/commit/e9b88a4))

### Features

-   **ffe-buttons-react:** Add contribute.md link to readme ([5474772](https://github.com/SpareBank1/designsystem/commit/5474772))
-   **ffe-buttons-react:** Add element prop ([c7d3c96](https://github.com/SpareBank1/designsystem/commit/c7d3c96))
-   **ffe-buttons-react:** Inline expand button ([c22ce20](https://github.com/SpareBank1/designsystem/commit/c22ce20))
-   **ffe-buttons-react:** Upgrade to React 16 ([2dc5dd9](https://github.com/SpareBank1/designsystem/commit/2dc5dd9))

### Fix

-   Rename all icons to end with -ikon ([a9d5741](https://github.com/SpareBank1/designsystem/commit/a9d5741))

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

-   **ffe-icons-react:** Improve the API of ffe-icons-react.

This commit changes the API of the ffe-icons-react package to take
advantage of dead code eliminination and tree shaking in
Webpack >= 2.

Previously, you imported one and one icon from the corresponding
JSX file. Now all icons are available as named exports from the
root level of `ffe-icons-react`.

If you're using webpack@>=2.0.0, please make the following changes
to migrate:

```diff
- import ChevronIkon from 'ffe-icons-react/chevron-ikon';
- import FamilieIkon from 'ffe-icons-react/familie-ikon';
+ import { ChevronIkon, FamilieIkon } from 'ffe-icons-react';
```

If you're not using a build tool that enables dead code elimination
and tree shaking, please make the following changes to migrate:

```diff
- import ChevronIkon from 'ffe-icons-react/chevron-ikon';
- import FamilieIkon from 'ffe-icons-react/familie-ikon';
+ import ChevronIkon from 'ffe-icons-react/lib/chevron-ikon';
+ import FamilieIkon from 'ffe-icons-react/lib/familie-ikon';
```

This API change allows for cleaner usage and better documentation.

-   This commit renames two icons in ffe-icons.
    `bankid-icon` is now named `bankid-ikon`, and
    `mynter-to-stabler-pluss` is now named `mynter-to-stabler-pluss-ikon`.

In addition, ffe-icons-react receives a fix that unbroke a previous
release

<a name="8.2.4"></a>

## [8.2.4](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.2.3...ffe-buttons-react@8.2.4) (2018-02-23)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.2.3"></a>

## [8.2.3](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.2.2...ffe-buttons-react@8.2.3) (2018-02-22)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.2.2"></a>

## [8.2.2](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.2.1...ffe-buttons-react@8.2.2) (2018-02-21)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.2.1"></a>

## [8.2.1](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.2.0...ffe-buttons-react@8.2.1) (2018-02-20)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.2.0"></a>

# [8.2.0](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.1.7...ffe-buttons-react@8.2.0) (2018-02-16)

### Features

-   **ffe-buttons-react:** Inline expand button

<a name="8.1.7"></a>

## [8.1.7](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.1.6...ffe-buttons-react@8.1.7) (2018-02-15)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.1.6"></a>

## [8.1.6](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.1.5...ffe-buttons-react@8.1.6) (2018-02-09)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.1.5"></a>

## [8.1.5](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.1.4...ffe-buttons-react@8.1.5) (2018-02-05)

### Bug Fixes

-   **ffe-buttons-react:** Remove type propType check

<a name="8.1.4"></a>

## [8.1.4](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.1.3...ffe-buttons-react@8.1.4) (2018-02-01)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.1.3"></a>

## [8.1.3](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.1.2...ffe-buttons-react@8.1.3) (2018-01-31)

### Bug Fixes

-   Treeshake ffe-icons

<a name="8.1.2"></a>

## [8.1.2](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.1.1...ffe-buttons-react@8.1.2) (2018-01-19)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.1.1"></a>

## [8.1.1](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.1.0...ffe-buttons-react@8.1.1) (2018-01-19)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.1.0"></a>

# [8.1.0](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.0.6...ffe-buttons-react@8.1.0) (2018-01-10)

### Features

-   **ffe-buttons-react:** Add element prop

<a name="8.0.6"></a>

## [8.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.0.5...ffe-buttons-react@8.0.6) (2018-01-10)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.5"></a>

## [8.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.0.4...ffe-buttons-react@8.0.5) (2018-01-10)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.4"></a>

## [8.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.0.3...ffe-buttons-react@8.0.4) (2018-01-09)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.3"></a>

## [8.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.0.2...ffe-buttons-react@8.0.3) (2018-01-05)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.2"></a>

## [8.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.0.1...ffe-buttons-react@8.0.2) (2018-01-04)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.1"></a>

## [8.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@8.0.0...ffe-buttons-react@8.0.1) (2018-01-02)

**Note:** Version bump only for package ffe-buttons-react

<a name="8.0.0"></a>

# [8.0.0](https://github.com/SpareBank1/designsystem/compare/ffe-buttons-react@7.0.0...ffe-buttons-react@8.0.0) (2018-01-02)

### Code Refactoring

-   **ffe-icons-react:** Improve API

### BREAKING CHANGES

-   **ffe-icons-react:** Improve the API of ffe-icons-react.

This commit changes the API of the ffe-icons-react package to take
advantage of dead code eliminination and tree shaking in
Webpack >= 2.

Previously, you imported one and one icon from the corresponding
JSX file. Now all icons are available as named exports from the
root level of `ffe-icons-react`.

If you're using webpack@>=2.0.0, please make the following changes
to migrate:

```diff
- import ChevronIkon from '@sb1/ffe-icons-react/chevron-ikon';
- import FamilieIkon from '@sb1/ffe-icons-react/familie-ikon';
+ import { ChevronIkon, FamilieIkon } from '@sb1/ffe-icons-react';
```

If you're not using a build tool that enables dead code elimination
and tree shaking, please make the following changes to migrate:

```diff
- import ChevronIkon from '@sb1/ffe-icons-react/chevron-ikon';
- import FamilieIkon from '@sb1/ffe-icons-react/familie-ikon';
+ import ChevronIkon from '@sb1/ffe-icons-react/lib/chevron-ikon';
+ import FamilieIkon from '@sb1/ffe-icons-react/lib/familie-ikon';
```

This API change allows for cleaner usage and better documentation.

<a name="7.0.0"></a>

# 7.0.0 (2017-12-22)

### Bug Fixes

-   Fix a few issues with the documentation
-   **ffe-buttons-react:** Fixed path to chevron icon
-   **ffe-icons-react:** Change hardcoded path of npm run build target

### Features

-   **ffe-buttons-react:** Add contribute.md link to readme
-   **ffe-buttons-react:** Upgrade to React 16

### Fix

-   Rename all icons to end with -ikon

### BREAKING CHANGES

-   This commit renames two icons in ffe-icons.
    `bankid-icon` is now named `bankid-ikon`, and
    `mynter-to-stabler-pluss` is now named `mynter-to-stabler-pluss-ikon`.

In addition, ffe-icons-react receives a fix that unbroke a previous
release

# 6.2.0

### Features

-   The `ExpandButton` component gets a React implementation. Consumers are in charge of reacting to clicks and
    controlling state.
-   `ActionButton` now has a boolean prop `ghost` to toggle the `--ghost` modifier

### Housekeeping

-   Documentation and refactoring of the button components.

## 6.1.2

### Bugfixes

-   Possible to use extra classes with Tertiary-button with icon

## 6.1.1

### Features

-   Now possible to use leftIcon with Tertiary-button

# 6.1.0

### Features

-   Add prop `buttonRef` so a DOM reference can be obtained

## 6.0.1

### Housekeeping

-   Use PropTypes from prop-types package

# 6.0.0

### BREAKING CHANGES

-   (BREAKING) Remove button names with 'FFE' prefix that were deprecated in v2.1.0
-   To migrate to v6.0.0, change your button imports as follows:
-   FFEActionButton -> ActionButton
-   FFEButton -> Button
-   FFEPrimaryButton -> PrimaryButton
-   FFESecondaryButton -> SecondaryButton
-   FFEShortcutButton -> ShortcutButton

### Features

-   Add condensed property

### Housekeeping

-   Restructure tests
-   Add live examples

# 5.2.0

### Features

-   Added support for icons in `<Button>`, `<SecondaryButton>` and `<TertiaryButton>`.
-   Modified `ShortcutButton` to pass the `<ChevronIcon>` as a `rightIcon` prop to `<Button>`

## 5.1.2

### Bugfixes

-   Bugfix: ShortcutButton used wrong css-class on its icon.

## 5.1.1

### Housekeeping

-   Upgrade eslint and fix linting errors.

# 5.1.0

### Features

-   Add props drop-through to underlying `<Button>` component

# 5.0.0

### BREAKING CHANGES

-   Shortcut button includes the ChevronIcon by default (FFE-115).

# 4.3.0

### Features

-   Added back button

# 4.2.0

### Features

-   Added support for autoFocus (native React prop)

# 4.1.0

### Features

-   `isLoading` will also set the attribute `aria-busy=true` on the button

### Bugfixes

-   Fix truly disabling button while `isLoading` (CSS `pointer-events:none` was an obscure and inefficient way to achieve this)

# 4.0.0

### BREAKING CHANGES

Package has been renamed to ffe-buttons-react (plural). Package
ffe-button-react is now deprecated.

ffe-buttons-react introduces a new peerDependency in ffe-buttons. It also
bumps the peerDependency on ffe-core to ^8.0.1

# 3.0.0

### BREAKING CHANGES

-   (BREAKING): Button's `type` prop has been renamed to `buttonType`. This change
    will only be breaking for direct consumers of the `<Button />` component - not
    its specialized versions `<PrimaryButton />`, `<SecondaryButton />` etc.

### Features

-   Allow overriding a button's `type` prop with `type="button"` or `type="reset"`
    when needed - now the `<*Button />` components behave like regular HTML buttons.
    The default is still `type="submit"`.
-   Allow no `onClick` handler. Since the default type is `submit`, the default
    click handler will trigger a `submit` event, which can be handled elsewhere,
    rendering an `onClick` handler useless.

## 2.4.1

### Bugfixes

-   Fix 'isTabbable' support: buttons are now tabbable by default if 'isTabbable' isn't specified.

# 2.4.0

### Features

-   Buttons now accepts className from prop

# 2.3.0

### Features

-   Buttons now accepts inline styles as a `style` prop

# 2.2.0

### Features

-   Added tertiary button

# 2.1.0

### Features

-   Add 'isTabbable' support.

### Housekeeping

-   Deprecated the 'FFE' prefix in all button names.

# 2.0.0

### BREAKING CHANGES

-   Bump `ffe-core` dependency to 6.x.

# 1.1.0

### Features

-   Add `disableButton` support.

# 1.0.0

-   First version.
