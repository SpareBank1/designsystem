# Tabs

Tabs er en komponent for å lage knapper med fane-funksjonalitet - gruppering av innhold der én gruppe er synlig og de øvrige er skjult.

```js
<Tab>
    Dette er en tab button
</Tab>
```

Aktiv/valgt tab kan vises ved å sende inn `selected`:

```js
<Tab
    selected={true}
>
    Dette er en valgt tab button
</Tab>
```

`ghost` eller `condensed` kan sendes inn for å rendre henholdsvis en transparent eller kompakt tab:

```js
<Tab
    ghost={true}
    condensed={true}
>
    Dette er en transparent og kompakt tab button
</Tab>
```

I tillegg kan man sende inn egendefinerte props for å legge til clickhandlere andre attributter:

```js
<Tab
    onClick={() => { alert('Hei'); }}
    data-analytics-track='logMe'
>
    Dette er en tab button
</Tab>
```

Flere tabs kan grupperes i en `TabGroup`:

```js
<TabGroup>
    <Tab>
        Dette er en tab button
    </Tab>
    <Tab>
        Dette er en annen tab button
    </Tab>
</TabGroup>
```