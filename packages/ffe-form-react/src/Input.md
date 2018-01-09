_The bread and butter_ av skjemaene våre.

Vi har tre varianter av inputfelt:

1. standard
2. inline
3. text-like

_Standard_ og _inline_ er mest relevant for utviklere. De ser helt like ut, men opprører seg annerledes i samspillet
med andre elementer på siden.

```js
<Input placeholder="Skriv noe her..." />
```

_Text-like_-varianten er designet for å kunne brukes som en del av en setning med et minimum av ramme rundt:

```js
<p className="ffe-body-paragraph">
    Jeg er <Input textLike={true} /> år gammel
</p>
```
