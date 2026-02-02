# @sb1/ffe-accordion-react

## Beskrivelse

Kollapsbare seksjoner for å organisere innhold som kan åpnes og lukkes. `Accordion` er wrapper-komponenten som definerer overskriftsnivå, `AccordionItem` representerer hver seksjon.

Bruk accordion når innholdet er sekundært eller detaljert, og når brukeren trenger å fokusere på én del om gangen.

## Installasjon

```bash
npm install --save @sb1/ffe-accordion-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/accordion/.

Denne pakken er avhengig av `@sb1/ffe-collapse-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene.

### Props

#### Accordion

`Accordion` er wrapper-komponenten som grupperer `AccordionItem`-elementer og setter overskriftsnivå.

| Prop           | Type                         | Påkrevd | Standardverdi | Beskrivelse                                          |
| -------------- | ---------------------------- | ------- | ------------- | ---------------------------------------------------- |
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Ja      | -             | HTML-overskriftsnivå (h1-h6) for accordion-headinger |
| `className`    | `string`                     | Nei     | -             | Ekstra CSS-klasser for wrapper-elementet             |
| `children`     | `React.ReactNode`            | Ja      | -             | AccordionItem-elementer                              |

Accordion arver også alle standard HTML div-attributter (`React.ComponentPropsWithoutRef<'div'>`).

#### AccordionItem

`AccordionItem` representerer en enkelt kollapsbar seksjon innenfor en `Accordion`.

| Prop           | Type                        | Påkrevd | Standardverdi | Beskrivelse                                                                                                    |
| -------------- | --------------------------- | ------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| `heading`      | `React.ReactNode`           | Ja      | -             | Overskriften som vises i den klikkbare knappen. Kan være tekst eller JSX                                       |
| `children`     | `React.ReactNode`           | Ja      | -             | Innholdet som vises når seksjonen er åpen                                                                      |
| `defaultOpen`  | `boolean`                   | Nei     | `false`       | Om seksjonen skal være åpen ved første render (ukontrollert modus)                                             |
| `isOpen`       | `boolean`                   | Nei     | -             | Kontrollerer om seksjonen er åpen. Når satt, må tilstanden styres eksternt (kontrollert modus)                 |
| `onToggleOpen` | `(isOpen: boolean) => void` | Nei     | -             | Callback som kalles når brukeren klikker for å åpne/lukke. Parameteren `isOpen` er den nye tilstanden          |
| `ariaLabel`    | `string`                    | Nei     | -             | Egendefinert aria-label for toggle-knappen. Bruk for bedre tilgjengelighet når heading ikke er beskrivende nok |
| `noPadding`    | `boolean`                   | Nei     | `false`       | Fjerner standard padding fra innholdsområdet. Nyttig for egendefinert styling eller lister                     |
| `className`    | `string`                    | Nei     | -             | Ekstra CSS-klasser for accordion-item-elementet                                                                |

AccordionItem arver også alle standard HTML div-attributter (`React.ComponentPropsWithoutRef<'div'>`).

## Eksempler

### Enkel bruk

```tsx
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    return (
        <Accordion headingLevel={2}>
            <AccordionItem heading="Første seksjon">
                Innhold for første seksjon
            </AccordionItem>
            <AccordionItem heading="Andre seksjon">
                Innhold for andre seksjon
            </AccordionItem>
            <AccordionItem heading="Tredje seksjon" defaultOpen>
                Denne seksjonen er åpen som standard
            </AccordionItem>
        </Accordion>
    );
}
```

### Med JSX i heading

`heading`-propen aksepterer `React.ReactNode`, så du kan bruke JSX-elementer:

```tsx
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    return (
        <Accordion headingLevel={2}>
            <AccordionItem
                heading={
                    <span>
                        Heading med <strong>formatering</strong>
                    </span>
                }
            >
                Innhold med formatert heading
            </AccordionItem>
        </Accordion>
    );
}
```

### Med callback ved åpning/lukking

Bruk `onToggleOpen` for å reagere på brukerinteraksjon:

```tsx
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    return (
        <Accordion headingLevel={3}>
            <AccordionItem
                heading="Vilkår og betingelser"
                onToggleOpen={isOpen =>
                    console.log('Seksjon er nå:', isOpen ? 'åpen' : 'lukket')
                }
            >
                Her er vilkårene...
            </AccordionItem>
        </Accordion>
    );
}
```

### Kontrollert modus

For full kontroll over åpen/lukket-tilstand, bruk `isOpen` sammen med `onToggleOpen`:

```tsx
import { useState } from 'react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Accordion headingLevel={2}>
            <AccordionItem
                heading="Kontrollert seksjon"
                isOpen={isOpen}
                onToggleOpen={setIsOpen}
            >
                Denne seksjonen styres av ekstern state
            </AccordionItem>
        </Accordion>
    );
}
```

### Uten padding (for egendefinert styling)

Bruk `noPadding` når du vil ha full kontroll over innholdets styling, for eksempel ved lister:

```tsx
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    return (
        <Accordion headingLevel={2}>
            <AccordionItem heading="Liste med elementer" noPadding>
                <div>
                    <div
                        style={{
                            borderTop: '1px solid #ccc',
                            padding: '8px 16px',
                        }}
                    >
                        Første element
                    </div>
                    <div
                        style={{
                            borderTop: '1px solid #ccc',
                            padding: '8px 16px',
                        }}
                    >
                        Andre element
                    </div>
                    <div
                        style={{
                            borderTop: '1px solid #ccc',
                            padding: '8px 16px',
                        }}
                    >
                        Tredje element
                    </div>
                </div>
            </AccordionItem>
        </Accordion>
    );
}
```

### Med aria-label for bedre tilgjengelighet

```tsx
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

function MyComponent() {
    return (
        <Accordion headingLevel={2}>
            <AccordionItem heading="FAQ" ariaLabel="Åpne ofte stilte spørsmål">
                Her er svar på vanlige spørsmål...
            </AccordionItem>
        </Accordion>
    );
}
```

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
