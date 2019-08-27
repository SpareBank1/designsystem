```jsx
const { InfoIkon } = require('../../packages/ffe-icons-react/lib');

<ContextInfoMessage icon={<InfoIkon />}>
    Denne seksjonen er ikke skrevet enda
</ContextInfoMessage>;
```

Komponent for å enkelt lage ekspanderbart område.

Merk at komponenten er avhengig av å få angitt transition styling for `height`.\
Dette gjøres helst ved å importere less-filen fra pakkens less-mappe.\
Alternativt kan man gjøre det ved å selv legge styling i klassen
`.ffe-collapse-transition`, legge det på en egen klasse og sende inn via
property `className` eller style det direkte via property `style`.
