Produktkort brukes for å vise produkter og detaljer om disse. De kan gjerne fungere som navigasjon.

```jsx
const { BilIkon, HusIkon } = require('@sb1/ffe-icons-react');

<div>
    <ProductCard
        icon={<BilIkon fill="#002776" />}
        heading="Bilforsikring"
        details="Fullkasko"
    />
    <ProductCard
        icon={<HusIkon fill="#002776" />}
        heading="Husforsikring"
    />
</div>
```

Produktkort kan ha en tilkoblet status.

```jsx
const { BilIkon, HusIkon } = require('@sb1/ffe-icons-react');

<div>
    <ProductCard
        icon={<BilIkon fill="#002776" />}
        heading="Bilforsikring"
        details="Fullkasko"
        status="Nye vilkår"
    />
    <ProductCard
        icon={<HusIkon fill="#002776" />}
        heading="Husforsikring"
        status="Fornyelse"
    />
</div>
```
