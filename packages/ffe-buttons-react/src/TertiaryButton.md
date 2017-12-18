Tekst-knapp, samme oppførsel som en lenke – men uten “clicked state”. For eksempel en avbryt-lenke ved siden av en
knapp. Tertiary button kan også ha ikon (16px) for å skape ekstra affordance til hva slags handling de utfører. F. eks.
PDF-ikon i knappen har til hensikt å fortelle brukeren om at formatet man laster ned er PDF.

```js
<TertiaryButton
    onClick={() => { alert('Hei!'); }}
>
    Klikk på meg!
</TertiaryButton>
```
