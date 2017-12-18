Knappen blir brukt sammen med de andre knappene, men er ikke like viktig. Den blir brukt ved siden av en annen knapp
for å ikke ta fokus bort fra hovedbudskapet. Knappen er hvit (ikke transparent). Denne knappen kan for eksempel være
legg til flere, avbryt (der dette ikke kan være en tekstlenke) osv. Secondary button kan også ha ikon (16px) for å
skape ekstra affordance til hva slags handling de utfører. F. eks. PDF-ikon i knappen har til hensikt å fortelle
brukeren om at formatet man laster ned er PDF.

```js
<SecondaryButton
    onClick={() => { alert('Hei!'); }}
>
    Klikk på meg!
</SecondaryButton>
```

```js
initialState = { isLoading: false };
<SecondaryButton
    isLoading={state.isLoading}
    onClick={() => setState({ isLoading: !state.isLoading })}
    ariaLoadingMessage="Jeg jobber med saken..."
>
    Klikk for å laste!
</SecondaryButton>
```
