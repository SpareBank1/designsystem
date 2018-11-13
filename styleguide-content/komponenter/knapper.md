Knapper gir brukerne mulighet for å gjøre ulike typer handlinger i brukergrensesnittet, som:

-   Starte en prosess. F.eks. «Bli kunde», «Sjekk pris», «Meld skade».
-   Gi en kommando til systemet. F.eks. «Skriv ut», «Last ned», «Betal», «Bestill».
-   Beslutte noe. F.eks. «Kjøp», «Aksepter», «Overfør».
-   Navigere i brukergrensesnittet. F.eks. «Neste», «Fortsett», «Søk».
-   Endre modus eller visning. F.eks. «Redigér» for å gå til redigeringsmodus, «Vis flere» for å ekspandere en liste.

### Hvordan bruke knapper?

I SpareBank 1 har vi kommandoknapper som kan brukes til alle typer handlinger, og spesielle knapper som kun skal brukes i spesifikke situasjoner.

For å velge mellom kommandoknappene ActionButton, PrimaryButton, SecondaryButton og TertiaryButton, må du vurdere handlingens prioritet. Prioriteten vurderes kvalitativt basert på viktighet og frekvens:

-   En handling som gjøres sjelden, men har svært høy viktighet enten for brukeren eller SpareBank 1, bør få høy eller svært høy prioritet. F.eks. knapper for å starte en prosess eller beslutte noe, som "Bli kunde", "Meld skade" og "Kjøp".
-   En handling som har lav eller middels viktighet, men høy bruksfrekvens vil kunne få høy eller middels prioritet (men aldri svært høy). F.eks. knapper som er del av en prosess, som "Legg til godkjenning" og "Fortsett".
-   En handling som sjelden brukes og har lav viktighet, men fortsatt må være tilgjengelig, vil som regel få lav prioritet. F.eks. å hente opp et klageskjema.

Valg av kommandoknapp må også vurderes relativt avhengig av hvilke andre knapper som er i umiddelbar nærhet. F.eks. vil kanskje en lagre-knapp gis høy prioritet, mens avbryt-knappen ved siden av gis lav prioritet (selv om den brukes relativt ofte).

```js
const {
    BindersIkon,
    PlussIkon,
} = require('../../packages/ffe-icons-react/lib');

<table className="ffe-table">
    <thead>
        <tr>
            <th scope="col">
                <span className="ffe-table__heading">Knapp</span>
            </th>
            <th scope="col">
                <span className="ffe-table__heading">Bruksområde</span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="ffe-table__cell">
                <ActionButton onClick={f => f}>ActionButton</ActionButton>
            </td>
            <td className="ffe-table__cell">
                Svært høyt prioriterte handlinger (call to action) som krever en
                knapp som skiller seg ut fra de andre knappene. Det skal som
                hovedregel kun være én ActionButton per side/view.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <PrimaryButton onClick={f => f}>PrimaryButton</PrimaryButton>
            </td>
            <td className="ffe-table__cell">Høyt prioriterte handlinger.</td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <SecondaryButton onClick={f => f}>
                    SecondaryButton
                </SecondaryButton>
            </td>
            <td className="ffe-table__cell">
                Middels prioriterte handlinger. Kan ha ikon.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <TertiaryButton onClick={f => f}>TertiaryButton</TertiaryButton>
            </td>
            <td className="ffe-table__cell">
                Lavt prioriterte handlinger. Kan ha ikon.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <ExpandButton onClick={f => f} isExpanded={false}>
                    ExpandButton
                </ExpandButton>
            </td>
            <td className="ffe-table__cell">
                Brukes kun for den spesifikke handlingen å ekspandere/kollapse
                en seksjon.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <InlineExpandButton onClick={f => f} isExpanded={false}>
                    InlineExpandButton
                </InlineExpandButton>
            </td>
            <td className="ffe-table__cell">
                Brukes kun for den spesifikke handlingen å ekspandere/kollapse
                en seksjon fra en linje med tekst.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <ShortcutButton onClick={f => f}>ShortcutButton</ShortcutButton>
            </td>
            <td className="ffe-table__cell">
                Brukes kun som snarvei for å navigere til et annet sted i
                løsningen. Alternativ til <a href="#!/LinkText">Lenke</a>.
            </td>
        </tr>
        <tr>
            <td className="ffe-table__cell">
                <TaskButton icon={<PlussIkon />}>TaskButton</TaskButton>
            </td>
            <td className="ffe-table__cell">
                Kan brukes som alternativ til en kommandoknapp for handlingen å
                legge til noe.
            </td>
        </tr>
    </tbody>
</table>;
```

Generelt for alle knapper gjelder:

-   Knappen skal tydelig kommunisere hvilken handling som skjer når brukeren trykker på den, enten ved en beskrivende tekst, et ikon eller begge deler.
-   Tekst på knapper bør være et verb i imperativ form. Unntak er konvensjoner som "Neste".
-   Teksten skal være så kort som mulig og bør ikke bryte over to linjer.
-   Knappen skal som hovedregel være synlig hele tiden. Knapper som dukker opp etter en rekke handlinger kan gjøre det vanskelig for brukeren å få oversikt.

### Når skal knapper ikke brukes?

-   Generelt brukes ikke primær eller sekundærknapper for å navigere til sider utenfor løsningen. Bruk heller [lenke](#!/LinkText).
-   Knapper brukes vanligvis til å gjøre handlinger, ikke for å ta valg. For å ta valg, bruk [checkbox](#!/CheckBox) eller [radioknapp](#!/RadioButton) isteden og forplikt med en knapp.

### Relaterte komponenter

-   [Checkbox](#!/CheckBox)
-   [Radioknapp](#!/RadioButton)
-   [Lenke](#!/LinkText)

### Relaterte komponenter som ikke er i designsystemet

I SpareBank 1 bruker vi ikke deaktiverte versjoner av knappene (disabled button). Bruk av andre deaktiverte komponenter vurderes fra tilfelle til tilfelle.

Istedenfor en deaktivert knapp, la knappen alltid være synlig og vis gode feilmeldinger hvis brukeren prøver å trykke på knappen før betingelsene for å bruke knappen er innfridd.
