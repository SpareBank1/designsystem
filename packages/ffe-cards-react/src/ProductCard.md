Produktkort brukes for å vise produkter og detaljer om disse. De kan gjerne fungere som navigasjon.

```jsx
const { BilIkon, HusIkon } = require('@sb1/ffe-icons-react');

<div>
    <ProductCard
        icon={<BilIkon className="sb1ds-icon-color" />}
        heading="Bilforsikring"
        details="Fullkasko"
    />
    <ProductCard
        icon={<HusIkon className="sb1ds-icon-color" />}
        heading="Husforsikring"
    />
</div>
```

Produktkort kan ha en tilkoblet status.

```jsx
const { BilIkon, HusIkon } = require('@sb1/ffe-icons-react');

<div>
    <ProductCard
        icon={<BilIkon className="sb1ds-icon-color" />}
        heading="Bilforsikring"
        details="Fullkasko"
        status="Nye vilkår"
    />
    <ProductCard
        icon={<HusIkon className="sb1ds-icon-color" />}
        heading="Husforsikring"
        status="Fornyelse"
    />
</div>
```
