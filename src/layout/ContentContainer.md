# Content container

Vurdér å bruke Grid i stedet for disse layoutmekanismene. Grid er en god del mer fleksibelt.

```js
<SectionWrapper>
    <ConentContainer>
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ConentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ConentContainer
        bgGrey={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ConentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ConentContainer
        bgSand={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ConentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ConentContainer
        bgSand={true}
        small={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ConentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ConentContainer
        bgSand={true}
        large={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ConentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ConentContainer
        bgSand={true}
        noSpace={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ConentContainer>
</SectionWrapper>
```


```js
<SectionWrapper>
    <ConentContainer
        bgSand={true}
        textLeft={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ConentContainer>
</SectionWrapper>
```
