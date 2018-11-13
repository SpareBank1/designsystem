Markupen for eksempelet under [Bruk](#!/Detaljliste) ser slik ut:

```jsx static
<DetailList>
    <Detail label="Egenandel">
        <DetailContent>4&nbsp;000,-</DetailContent>
    </Detail>

    <Detail label="Egenandel">
        <DetailContent>4&nbsp;000,-</DetailContent>
        <DetailContent cta={true}>
            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>
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
            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>
        </DetailContent>
    </Detail>
</DetailList>
```
