# Knapper

En knapp kommuniserer tydelig hvilken handling som skjer når brukeren trykker på den. Den består av beskrivende tekst,
et bilde eller begge.


## Layout

Noe felles styling finnes for plasseringen av flere knapper ved siden av hverandre i grupper.

En knappegruppe sørger for å ha en uniform padding mellom knappene og resten av layouten, og riktig marginer mellom
knapper inne i samme gruppe. Typisk brukes dette for å samle en Action og en Secondary for "Godkjenn eller Avbryt".

```js
<div className="ffe-button-group">
    <ActionButton>
        Kjøp
    </ActionButton>
    <SecondaryButton>
        Avbryt
    </SecondaryButton>
</div>
```
