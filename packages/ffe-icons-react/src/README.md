Ikonene kan importeres på to måter:

1.  Som _named imports_ fra `@sb1/ffe-icons-react`
2.  Som _default imports_ fra `@sb1/ffe-icons-react/lib/`

Alternativ 1 er å foretrekke **dersom du har konfigurert [tree-shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)**.
Om du ikke har konfigurert tree-shaking bør du bruke alternativ 2 for å unngå å bundle flere ikoner enn du faktisk bruker.

**Alternativ 1**

```js static
import { InfoIkon } from '@sb1/ffe-icons-react`;
```

**Alternativ 2**

```js static
import InfoIkon from '@sb1/ffe-icons-react/lib/info-ikon`;
```
