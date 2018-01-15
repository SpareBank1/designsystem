# DetailList

Wrapper rundt `ffe-grid-react` for å vise en liste med key-value(s) par, feks forskjellige egenskaper ved en forsikring og lignende.

Denne er ment som en erstatning for `ffe-details-list` som ikke er kompatibel med kolonnene i grid-layouten vi bruker. Det er noen forskjeller i hvordan denne ser ut og hvordan `ffe-details-list` ser ut (det er en del av poenget) men grunnleggende funksjonalitet er det samme.

* Man har en "label" og en eller to kolonner med data der kolonne nummer to feks kan brukes til en beskrivende tekst.
* Man har, hvis dataene kan redigeres, en call-to-action som kan brukes for å legge inn in-line redigering av innholdet, åpne en ny rad under, eller hva man skulle ha behov for å gjøre. Denne call-to-action kolonnen legger seg da helt ut til høyre.

På store skjermer vil listen rendres slik:

![image](ffe-grid-details-react/lg.png)

På mellomstore skjermer slik:

![image](ffe-grid-details-react/md.png)

Og på små skjermer brekker innholdet om og stackes i høyden, slik:

![image](ffe-grid-details-react/sm.png)

Markupen for eksempelet over ser slik ut:

```jsx static
<DetailList>

    <Detail label="Egenandel">
        <DetailContent>4&nbsp;000,-</DetailContent>
    </Detail>

    <Detail label="Egenandel">
        <DetailContent>4&nbsp;000,-</DetailContent>
        <DetailContent cta={true}>
            <TertiaryButton onClick={f => f}>
                ENDRE
            </TertiaryButton>
        </DetailContent>
    </Detail>

    <Detail label="Kjørelengde per år">
        <DetailContent>30&nbsp;000 km</DetailContent>
        <DetailContent className="ffe-small-text">
            Kilometerstanden kan ikke overstige 80&nbsp;100 km før 17.02.2017
        </DetailContent>
    </Detail>

    <Detail label="Kjørelengde per år">
        <DetailContent>30&nbsp;000 km</DetailContent>
        <DetailContent className="ffe-small-text">
            Kilometerstanden kan ikke overstige 80&nbsp;100 km før 17.02.2017
        </DetailContent>
        <DetailContent cta={true}>
            <TertiaryButton onClick={f => f}>
                ENDRE
            </TertiaryButton>
        </DetailContent>
    </Detail>

</DetailList>
```
