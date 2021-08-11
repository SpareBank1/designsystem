Konteksuelle meldinger er informasjon som skal gis i en kontekst. Dette er meldinger som skal utheves, men som kun gir mening i konteksten den er plassert. I motsetning til systemmeldinger, kan disse meldingene plasseres midt i innholdet på siden.

Bruk kontekstuelle meldinger når:

✅ Du vil gi ekstra informasjon i en gitt situasjon

❌ Ikke bruk hvis man egentlig bare trenger en brødtekst.

```jsx
const { LyspareIkon } = require('../../packages/ffe-icons-react/lib');

<React.Fragment>
    <div className="sb1ds-example--grid__col-2">
        <ContextInfoMessage>
            Tilgangen til dine kontoer i "Annen bank" har utløpt
        </ContextInfoMessage>
        <ContextErrorMessage compact={true}>
            Kompakt variant
        </ContextErrorMessage>
        <ContextSuccessMessage headerText="Hurra!">
            Betalingen ble registrert!
        </ContextSuccessMessage>
        <ContextTipMessage icon={<LyspareIkon />}>
            Visste du at du kan få en skattefordel ved sparing i IPS?
        </ContextTipMessage>
        <ContextInfoMessage showCloseButton={true}>Lukkbar</ContextInfoMessage>
    </div>
</React.Fragment>;
```
