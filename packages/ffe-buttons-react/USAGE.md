Knapper gir brukerne mulighet for å gjøre ulike typer handlinger i brukergrensesnittet, som:

-   Starte en prosess. F.eks. «Bli kunde», «Sjekk pris», «Meld skade».
-   Gi en kommando til systemet. F.eks. «Skriv ut», «Last ned», «Betal», «Bestill».
-   Beslutte noe. F.eks. «Kjøp», «Aksepter», «Overfør».
-   Navigere i brukergrensesnittet. F.eks. «Neste», «Fortsett», «Søk».
-   Endre modus eller visning. F.eks. «Redigér» for å gå til redigeringsmodus, «Vis flere» for å ekspandere en liste.

### Hvordan bruke knapper?

I SpareBank 1 har vi ulike knapper til ulikt bruk (se tabell nedenfor). Hvilken knapp som skal brukes til hva bestemmes av handlingens prioritet og konteksten knappen skal brukes i. Prioriteten vurderes kvalitativt basert på handlingens viktighet og frekvens. En handling som gjøres sjelden, men har svært høy viktighet enten for brukeren eller SB1, bør få høy eller svært høy prioritet. F.eks. knapper for å starte en prosess eller beslutte noe, som "Bli kunde", "Meld skade" og "Kjøp". En handling som har lav eller middels viktighet, men høy bruksfrekvens vil kunne få høy eller middels prioritet (men aldri svært høy). F.eks. knapper som er del av en prosess, som "Legg til godkjenning" og "Fortsett". En handling som sjelden brukes og har lav viktighet, men fortsatt må være tilgjengelig, vil som regel få lav prioritet. F.eks. å hente opp et klageskjema.

Valg av prioritet kan også vurderes relativt avhengig av hvilke andre knapper som er i umiddelbar nærhet. F.eks. vil kanskje en lagre-knapp gis høy prioritet, mens avbryt-knappen ved siden av gis lav prioritet (selv om den brukes relativt ofte).

```js
const { BindersIkon, PlussIkon } = require('../ffe-icons-react');

<table className="ffe-table">
    <thead>
        <tr>
            <th scope="col">
                <span className="ffe-table__heading">Knapp</span>
            </th>
            <th scope="col">
                <span className="ffe-table__heading">Bruksommråde</span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="ffe-table__cell">
                <ActionButton onClick={f => f}>Action knapp</ActionButton>
            </td>
            <td className="ffe-table__cell">
                ActionButton brukes til svært høyt prioriterte handlinger (call
                to action) som krever en knapp som skiller seg ut fra de andre
                knappene. Det skal som hovedregel kun være én ActionButton per
                side.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <PrimaryButton onClick={f => f}>Primary knapp</PrimaryButton>
            </td>
            <td className="ffe-table__cell">
                PrimaryButton brukes for høyt prioriterte handlinger.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <SecondaryButton onClick={f => f}>
                    Secondary knapp
                </SecondaryButton>
            </td>
            <td className="ffe-table__cell">
                SecondaryButton brukes for middels prioriterte handlinger. Kan
                ha ikon.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <SecondaryButton leftIcon={<BindersIkon />} onClick={f => f}>
                    Secondary m/ ikon
                </SecondaryButton>
            </td>
            <td className="ffe-table__cell" />
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <TertiaryButton onClick={f => f}>Tertiary knapp</TertiaryButton>
            </td>
            <td className="ffe-table__cell">
                Lavt prioriterte handlinger skal være tertiærknapp. Kan ha ikon.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <TertiaryButton leftIcon={<BindersIkon />} onClick={f => f}>
                    Tertiary m/ ikon
                </TertiaryButton>
            </td>
            <td className="ffe-table__cell" />
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <ExpandButton onClick={f => f}>Expand knapp</ExpandButton>
            </td>
            <td className="ffe-table__cell" />
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <InlineExpandButton onClick={f => f}>
                    Inline expand knapp
                </InlineExpandButton>
            </td>
            <td className="ffe-table__cell" />
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <ShortcutButton onClick={f => f}>Shortcut knapp</ShortcutButton>
            </td>
            <td className="ffe-table__cell" />
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <TaskButton icon={<PlussIkon />}>Task knapp</TaskButton>
            </td>
            <td className="ffe-table__cell" />
        </tr>
    </tbody>
</table>;
```

Retningslinjene for hvilke knapper som brukes når er ikke absolutte. Du må også vurdere den totale komposisjonen av skjermbildet knappen skal brukes i.

Generelt for alle knapper gjelder:

-   Knappen skal tydelig kommuniserer hvilken handling som skjer når brukeren trykker på den, enten ved en beskrivende tekst, et ikon eller begge deler. Tekst på knapper bør være et verb i imperativ form. Unntak er konvensjoner som "Neste".
-   Knappen skal som hovedregel være synlig hele tiden. Knapper som dukker opp etter en rekke handlinger gjør det vanskelig for brukeren å få oversikt.
-   Teksten på knappen skal beskrive hva som skjer når man klikker på knappen. Teksten skal være så kort som mulig og bør ikke bryte over to linjer.

### Når skal knapper ikke brukes?

-   Generelt brukes ikke primær eller sekundærknapper for å navigere til sider utenfor løsningen. Bruk heller [lenke](#linktext).
-   Knapper brukes vanligvis til å gjøre handlinger, ikke for å ta valg. For å ta valg, bruk [checkbox](#checkbox) eller [radioknapp](#radioknapper) isteden og forplikt med en knapp.

### Relaterte komponenter

-   [Checkbox](#checkbox)
-   [Radioknapp](#radioknapper)
-   [Lenke](#linktext)
