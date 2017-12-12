# Primary button

Knappen blir brukt i de tilfellene man trenger å ha flere knapper på en side. Denne knappen kan for eksempel være
kjøp, bestill, selg, les mer om osv. Det finnes tilfeller der man gjerne skulle ha brukt en action ghost-knapp, men på
grunn av beige bakgrunn vil det passe bedre med primary button.

I begge tilfeller (både action ghost og primary) kan man ha flere knapper ved siden av hverandre.

```js
<PrimaryButton
    onClick={() => { alert('Hei!'); }}
>
    Klikk på meg!
</PrimaryButton>
```

For å vise at noe skjer når bruker har trykket på en knapp, og dersom systemet er veldig treigt, vil det bli vist en
progressindikator – spinner – på knappen.

```js
<PrimaryButton
    isLoading={true}
    ariaLoadingMessage="Jeg jobber med saken..."
>
    Klikk på meg!
</PrimaryButton>
```
