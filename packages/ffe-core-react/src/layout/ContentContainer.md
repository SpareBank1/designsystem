Vurdér å bruke Grid i stedet for disse layoutmekanismene. Grid er en god del mer fleksibelt.

```js
<SectionWrapper>
    <ContentContainer>
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ContentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ContentContainer
        bgGrey={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ContentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ContentContainer
        bgSand={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ContentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ContentContainer
        bgSand={true}
        small={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ContentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ContentContainer
        bgSand={true}
        large={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ContentContainer>
</SectionWrapper>
```

```js
<SectionWrapper>
    <ContentContainer
        bgSand={true}
        noSpace={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ContentContainer>
</SectionWrapper>
```


```js
<SectionWrapper>
    <ContentContainer
        bgSand={true}
        textLeft={true}
    >
        <Paragraph>
            Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og
            mobilbank får du med en gang, og bankkortet kommer i posten om en ukes
            tid.
        </Paragraph>
    </ContentContainer>
</SectionWrapper>
```
