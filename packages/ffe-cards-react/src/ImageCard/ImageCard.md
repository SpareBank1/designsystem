Bildekort er kort med en gitt maksbredde, minimumshøyde, og et topplasert bilde.
Den tilbyr alle underkomponenter (CardName, Title, Subtext og Text) og plasserer dem i
gitt rekkefølge nedover i kortet, med teksten midtstilt, nedenfor bildet.

```jsx
const { GrafOppIkon } = require('../../../ffe-icons-react');

<React.Fragment>
    <ImageCard
        image={
            <img
                src="https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg"
                alt=""
            />
        }
    >
        {({ CardName, Title, Subtext, Text }) => (
            <React.Fragment>
                <CardName>Kortnavn</CardName>
                <Title>Tittel</Title>
                <Subtext>En liten undertekst</Subtext>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </React.Fragment>
        )}
    </ImageCard>
    <ImageCard
        image={
            <img
                src="https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg"
                alt=""
                style={{ position: 'relative', bottom: '50px' }}
            />
        }
    >
        {({ Title }) => <Title>Tittel</Title>}
    </ImageCard>
</React.Fragment>;
```
