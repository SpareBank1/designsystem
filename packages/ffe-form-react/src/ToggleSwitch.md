Toggle-switcher er av/på-switcher. De tilbyr brukerne valget mellom to avhengige valg og de har alltid en default verdi. De skal brukes i kontekster hvor systemet gir umiddelbare resultater. De skal ikke brukes dersom du har behov for en lagre-knapp i tillegg. I tillegg skal navnet være kort og konsist.

Toggle-switcher kan erstatte to radioknapper eller én enkelt checkbox når en bruker skal velge mellom to avhengige states.

```js
<ToggleSwitch>Jeg vil gjerne ha reklame</ToggleSwitch>
```

Switchen kan skrus på som utgangspunkt med `defaultChecked`:

```js
<ToggleSwitch defaultChecked={true}>
    Send meg interessant informasjon
</ToggleSwitch>
```

Switch alignet til høyre for labelteksten:

```js
<ToggleSwitch alignRight={true}>
    Abonner på ulidelig spennende oppdateringer
</ToggleSwitch>
```
