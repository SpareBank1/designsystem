Til vanlig viser vi lenker med en understrek. Dette er standard i nettlesere
og gjør det tydelig for besøkende at teksten er en klikkbar lenke.

```jsx
<LinkText href="https://www.sparebank1.no">
    sparebank1.no
</LinkText>
```

Dersom det er tydelig ut fra sammenhengen at en tekst er en lenke eller lenken
består av et ikon uten synlig tekst kan man vurdere å skru av understreken.
Husk at farge alene ikke er nok til å indikere at en tekst er klikkbar. Ikke
alle våre brukere kan skille mellom fargen på lenkene og fargen på brødteksten.

```jsx
const SnakkebobleIkon = require('../../../ffe-icons-react/lib/snakkeboble-ikon').default;

<LinkText
    href="https://www.sparebank1.no"
    underline={false}
>
    <SnakkebobleIkon
        alt="Snakk med oss"
        className="sb1ds-icon"
    />
</LinkText>
```
