# Contributing

Forbedring av dokumentasjon, bugfixes, åpning av issues med spørsmål, bugrapporter, eller feature-ønsker - alle kan
bidra, og ingen bidrag er for små! :tada:

I dette dokumentet vil du finne alt du skulle trenge av informasjon for å hjelpe til med å gjøre frontend-biblioteket
vårt enda bedre. Sitter du igjen med ubesvarte spørsmål etter å ha lest dette dokumentet, er terskelen lav for å åpne et
issue her på Github med `question`-labelen. Om du heller vil kan du også spørre på den interne HipChat-kanalen
"Designsystem".

* [Hvordan bidrar jeg?](#hvordan-bidrar-jeg)
  * [Som designer](#som-designer)
  * [Som utvikler](#som-utvikler)
    * [Github-konto og arbeidsflyt](#github-konto-og-arbeidsflyt)
    * [Utviklingsmiljø](#utviklingsmiljø)
    * [Kodestandard](#kodestandard)
    * [Formatering](#formatering)
    * [LESS](#less)
    * [React](#react)
    * [Testdekning](#testdekning)
    * [Dokumentasjon](#dokumentasjon)
    * [Commit-meldinger](#commit-meldinger)
    * [Pull requests](#pull-requests)
* [Lage en ny FFE-komponent](#lage-en-ny-ffe-komponent)
* [Publisering](#publisering)
* [Har du fortsatt sporsmål?](#har-du-fortsatt-spørsmål)

## Hvordan bidrar jeg?

Her er litt relevant informasjon om hvordan vi utvikler FFE, og hvordan du kan bidra med endringer.

### Som designer

_Help us help you_ :bowing_man: Hva lurer du som designer på om designsystemet? Kommenter på [issue #39](https://github.com/SpareBank1/designsystem/issues/39)
eller [kom med et endringsforslag direkte i denne teksten](https://help.github.com/articles/editing-files-in-your-repository/).

### Som utvikler

For å fikse en bug eller legge til en feature trenger du i prinsippet to ting:

1. En Github-konto
2. Et utviklingsmiljø

Vi går igjennom i mer detalj i seksjonene under.

#### Github-konto og arbeidsflyt

For å komme med pull requests må man ha en Github-konto. Hvis du ikke har en allerede kan du lage en
[her](https://github.com/join). Du kan bruke din private e-post som hovedepost om du vil, men legg i hvertfall til
SpareBank 1 e-posten din til kontoen og [bruk den til commits for dette repoet](https://help.github.com/articles/setting-your-commit-email-address-in-git/).

Om du ikke er en del av SpareBank 1 organisasjonen på Github og du er ansatt eller konsulent kan du kontakte @antidecaf
eller @kwltrs for å bli lagt til. Da får du tilgang til å pushe brancher direkte til repositoriet.

Alternativt kan du bruke forks (som er en mer vanlig workflow her på Github). Trykk på Fork-knappen oppe til høyre og
jobb mot din egen fork for så å lage en pull request derfra når du er klar. Hvis du vil lese mer om denne workflowen og
prøve deg fram i et annet repo har @wkillerud [et repo her](https://github.com/wkillerud/pr) hvor du kan lese mer og
prøve alle stegene fra fork til merget PR.

Workflowen for en bug eller feature blir kort oppsummert denne:

1. Assign issuet til deg for å vise at du jobber med den :raising_hand_woman:
2. Om du ikke har gjort det alt, klon repoet (eller fork det og klon forken) til maskinen din og lag en branch :rocket:
3. Gjør endringen din og test den :construction_worker_man:
4. Skriv en detaljert commit-melding (mer om det [her](#commit-meldinger)) :writing_hand:
5. Push endringene til repoet eller din fork :weight_lifting_woman:
6. Github skal se at du nylig har pushet en endring og vil tilby deg å lage en Pull Request. Hvis ikke kan du finne fram
til branchen din og lage en pull request på den måten. Se [Github sine hjelpesider](https://help.github.com/articles/creating-a-pull-request/)
om du ikke finner fram :female_detective:
7. Vent på en review. Du kan legge til tidligere bidragsytere som reviewers. :hourglass_flowing_sand:
8. Når pull requesten er godkjent kan den merges, og endringen blir med i neste release av pakken :tada:

#### Utviklingsmiljø

Utviklingsmiljøet krever at du har en nyere versjon av [Node og NPM](https://nodejs.org/en/) installert. Vi anbefaler
å bruke LTS-versjonen (long term support), siden det er denne som kjøres på byggserverne våre.

Klon repositoryet og installer avhengigheter:

```bash
git clone git@github.com:SpareBank1/designsystem.git
cd designsystem
npm install
```

Når alt er lastet ned og installert, har du følgende kommandoer til din rådighet:

```bash
npm start     # Start en utviklingsserver på localhost:6060
npm test      # Kjør alle test suits
npm run lint  # Lint alle filer
npm run build # Bygg alle prosjekter
```

For andre lavnivå-kommandoer, kjør `npm run` for å få full oversikt.

#### Kodestandard

Vi prøver å holde koden på samme nivå på tvers av dette monorepoet. Dette hjelper oss å utvikle nye features raskere,
samt å bruke mindre tid på code reviews. Denne seksjonen forklarer litt om de forskjellige tekniske valgene vi bruker
på tvers av pakkene våre.

#### Formatering

Vi bruker [prettier](https://prettier.io) til formatere koden vår (både JS og LESS). Det kjøres enten i editoren din
eller manuelt på stagede endringer med `npm run prettier`. Du kan sette opp `prettier` til
å [kjøre i editoren din slik](https://prettier.io/docs/en/editors.html).

#### LESS

All stylingkode blir skrevet i [LESS](http://lesscss.org/). LESS er et supersett av CSS, som gir oss endel
funksjonalitet som ikke (enda) finnes i CSS, eller som ikke er støttet i nettlesere vi må forholde oss til.

##### Bruk minst mulig funksjonalitet

LESS er et kraftig verktøy - og kraftige verktøy har en tendens til å bli misbrukt. Derfor prøver vi å bruke minst mulig
av funksjonaliteten LESS tilbyr. Generelt sett prøver vi å kun bruke variabler og nesting, med noen få unntak.

##### BEM - block, element, modifier

For å unngå problematikk i forbindelse med [spesifisitet i CSS](https://css-tricks.com/specifics-on-css-specificity/),
følger vi en konvensjon som heter [BEM](http://getbem.com/). Sett deg inn i reglene denne konvensjonen pålegger oss,
slik at ny kode følger samme konvensjon som den eksisterende.

#### React

React-komponentene i FFE har i stor grad automatiserte kodestandardssjekker gjennom linting. Allikevel er det et par
mønstre vi oppfordrer til å følge for å øke gjenbrukbarheten av en komponent:

##### Bruk ES2015+

All koden vår transpileres før den eksporteres. Dette betyr at du trygt kan bruke nye features i JavaScript-språket
som ikke støttes i alle nettlesere enda.

##### Videresend props

For å gjøre API-overflaten til en komponent så gjennomsiktig som mulig, oppforder vi til å videresende props til
det underliggende DOM-elementet. Et eksempel kan være en knapp:

```javascript
const Button = ({ children, ...rest }) => (
    <button {...rest}>
        <span className="ffe-button__inner">{children}</span>
    </button>
);
```

Dette gjør at vi ikke trenger å endre komponenten hver gang vi trenger å legge til støtte for en property som bare
skal videresendes til den underliggende DOM-noden.

##### Ikke rename DOM-props

For å unngå at APIene til komponentene våre vokser, anbefales det å ikke rename eksisterende DOM-props. Et eksempel
er aria-tags - ikke rename `aria-invalid` til `invalid` - bare send inn `aria-invalid` og videresend den propen til
riktig DOM-node.

##### Legg til rette for ekstra klassenavn

Mange applikasjoner har behov for å legge til ekstra stiler på visse komponenter. Derfor oppfordres det til å bruke
`classnames`-pakken til å tilrettelegge for ekstra klassenavn:

```javascript
import classNames from 'classnames';
const Button = ({ className, ...rest }) => (
    <button className={classNames('ffe-button', className)} {...rest} />
);
```

##### Andre ting

Dette er ikke en uttømmende liste. Om det kommer opp andre standarder som brukes på tvers i code reviews, ber vi om at
man sender inn et pull request til dette dokumentet som dokumenterer den for fremtidige lesere.

#### Testdekning

Vi prøver å ha høyest mulig testdekning på koden i dette repoet. Siden vi har både LESS- og React- / JavaScript-kode i
FFE, er det to forskjellige måter å teste på

##### LESS: Visuell regresjonstesting

ffe-monorepo har enda ikke støtte for visuell regresjonstesting. Dette vil komme snarest.

##### React og JavaScript

Vi prøver å teste React-komponenter og JavaScript-utilities så godt som overhodet mulig. Har du oppdaget en bug,
vennligst opprett en eller flere tester som bekrefter at feilen blir løst med din endring. Ser du andre test-muligheter
som ikke er dekket, setter vi selvfølgelig pris på om du bidrar med disse også.

Tester burde i hovedsak dekke overflate-APIet til en komponent. Her burde full testdekning være ambisjonen. For interne
mekanismer og hjelpefunksjoner så er ikke kravet like strengt.

#### Dokumentasjon

Vi bruker [Styleguidist](https://react-styleguidist.js.org/) til å dokumentere komponentene våre, både med [JSDoc](http://usejsdoc.org/)
og eksempel-filer. Alle React-komponenter har sin egen `<KomponentNavn>.md` fil, hvor vi beskriver de mest vanlige
bruksscenarioene. Er du usikker på hvordan disse burde se ut, anbefaler vi deg å se på noen av de som eksisterer
allerede - f.eks. [ffe-core-react](./packages/ffe-core-react/src/typography) eller [ffe-buttons-react](./packages/ffe-buttons-react/src).

#### Commit-meldinger

For litt inspirasjon rundt det å skrive gode commit-meldinger og holde loggen ryddig er talken [Deliberate Git av Stephen Ball](https://vimeo.com/72762735)
veldig god. Om du liker bedre å lese er talken publisert i [bloggformat her](http://www.rakeroutes.com/blog/deliberate-git/).

Commit-meldinger følger [conventional commits](https://conventionalcommits.org/)-formatet. Dette gjør vi for å automatisk
kunne generere endringslogger og nye versjonsnumre. På grunn av denne automatiske genereringen er det viktig at
hver commit kun endrer en pakke, og setter riktig "scope" (pakke) for hver commit.

Et eksempel på hvorfor dette er så viktig er hvis du gjør endringer i en pakke, og skriver commit-melding for denne, men
samtidig endrer en liten ting i én fil i en annen pakke, så vil også den andre pakken få tilsvarende version bump og
innhold i changelog.

Husk også at innholdet i commit-meldingen er det eneste innholdet vi får i changeloggen, så bruk litt tid på å beskrive
hva endringen din gjør og hvorfor. Om det er en breaking change så beskriv i commit-meldingen hvordan man migrerer fra
forrige versjon. Om det er en ny feature så beskriv hvordan man tar den i bruk.

Vi skriver commit-meldinger på engelsk.

Dette er lettest forklart med eksempler:

Hvis du skal fikse en bug i `ffe-core` f.eks., så kan commit-meldingen din se slik ut:

```bash
fix(ffe-core): Ensure paragraphs stack neatly in IE11

This version includes a fix to make sure paragraphs are not rendered
upside down in IE11.
```

Hvis du skal legge til en feature i `ffe-buttons-react` f.eks., så kan commit-meldingen din se slik ut:

```
feat(ffe-buttons-react): Add easter egg to ternary button

This version adds a konami code easter egg to ternary buttons, which
transforms them into small dinosaurs.

To use this new feature you need to give a button focus before typing
the Konami code `↑↑↓↓←→←→BA`.
```

Hvis du skal gjøre en breaking change i `ffe-icons-react` f.eks., så kan commit-meldingen din se slik ut
(legg spesielt merke til seksjonene merket med ```diff - skriv disse uten escaping med \\):

```
refactor(ffe-icons-react): Improve API

BREAKING CHANGE: Improve the API of ffe-icons-react.

This commit changes the API of the ffe-icons-react package to take
advantage of dead code eliminination and tree shaking in
Webpack >= 2.

Previously, you imported one and one icon from the corresponding
JSX file. Now all icons are available as named exports from the
root level of `ffe-icons-react`.

If you're using webpack@>=2.0.0,  please make the following changes
to migrate:

\```diff
- import ChevronIkon from '@sb1/ffe-icons-react/chevron-ikon';
- import FamilieIkon from '@sb1/ffe-icons-react/familie-ikon';
+ import { ChevronIkon, FamilieIkon } from '@sb1/ffe-icons-react';
\```

If you're not using a build tool that enables dead code elimination
and tree shaking, please make the following changes to migrate:

\```diff
- import ChevronIkon from '@sb1/ffe-icons-react/chevron-ikon';
- import FamilieIkon from '@sb1/ffe-icons-react/familie-ikon';
+ import ChevronIkon from '@sb1/ffe-icons-react/lib/chevron-ikon';
+ import FamilieIkon from '@sb1/ffe-icons-react/lib/familie-ikon';
\```

This API change allows for cleaner usage and better documentation.
```

For å dobbeltsjekke at du gjorde alt rett, har dette repoet en pre-commithook som sjekker meldingen med
[commitlint](https://github.com/marionebl/commitlint). Hvis ikke alt stemmer overens med det forventede formatet, vil
committen feile, og du vil bli bedt om å rette opp meldingen. Det gjør du med `git commit --amend`.

#### Pull requests

Når du har gjort deg ferdig med koden din, er det på tide å be andre se på koden din. Push koden din til Github
og opprett en pull request. Det vil bli lagt til et par reviewers automatisk, men ta gjerne en titt på
git-loggen til koden / filen(e) du endret på, og legg til disse også. Tidligere bidragsytere har som regel god feedback
å komme med!

Før du lager en pull request kan det være lurt å ta en titt gjennom denne huskelisten:

* Er koden så konsis og forståelig som mulig?
* Har du lagt til et test-case som bekrefter at endringen fungerer?
* Trenger endringen å dokumenteres?

Du kan merge dine egne pull requests, men vi ber om at du får endringene dine godkjent av minst 2 andre før du gjør det.
Dette er for å sikre oss mot regresjoner og bugs så godt vi kan.

Hvis du selv bidrar med tilbakemelding på en pull request, ber vi deg innstendig om å være både høflig og konstruktiv i
kommentarene dine.

## Lage en ny FFE-komponent

Her er ikke prosessen helt bygget opp, men åpne et issue her på Github der du beskriver behovet ditt og legg til
`design`- og `question`-labelen så koordinerer vi derfra. Om du heller vil kan du også spørre på den interne
HipChat-kanalen "Designsystem".

## Publisering

Når en pull request blir merget, releaser Lerna (monorepo-verktøyet vårt) en ny versjon. `CHANGELOG.md` og
versjonsnummer i den relevante `package.json`-filen blir automatisk generert basert på commit-historikken.

## Har du fortsatt spørsmål?

Vi har helt sikkert ikke husket å skrive om alt i denne guiden. Når du kommer på noe som fortsatt ikke er klart eller
besvart i denne guiden, ber vi deg åpne et issue her på Github med `question`-labelen så vil vi svare så snart vi kan.
Om du heller vil kan du også spørre på den interne HipChat-kanalen "Designsystem".

Takk for at du leste denne guiden, og velkommen som bidragsyter til FFE!
