Produktkort brukes for å vise produkter og detaljer om disse. De kan gjerne fungere som navigasjon.

```jsx
const { BilIkon, HusIkon } = require('ffe-icons-react');

<div>
    <ProductCard
        icon={<BilIkon />}
        heading="Bilforsikring"
        details="Fullkasko"
    />
    <ProductCard
        icon={<HusIkon />}
        heading="Husforsikring"
    />
</div>
```

Produktkort kan ha en tilkoblet status.

```jsx
const { BilIkon, HusIkon } = require('ffe-icons-react');

<div>
    <ProductCard
        icon={<BilIkon />}
        heading="Bilforsikring"
        details="Fullkasko"
        status="Nye vilkår"
    />
    <ProductCard
        icon={<HusIkon />}
        heading="Husforsikring"
        status="Fornyelse"
    />
</div>
```