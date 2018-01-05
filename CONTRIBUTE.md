# Contribute

**Velkommen til contributor-guiden til FFE!**

Alle som ønsker kan bidra til FFE. Her vil du finne alt du skulle trenge av informasjon for å kunne bidra med å gjøre
frontend-biblioteket vårt enda bedre.
Sitter du igjen med ubesvarte spørsmål etter å ha lest dette dokumentet, er terskelen lav for å høre med oss på
HipChat-kanalen vår - Alliansens Frontend-forum.

Ingen bidrag er for små! Forbedring av dokumentasjon, bugfixes, mangler du ikke har tid
eller kunnskap til å fikse på egenhånd — alt er nyttig!

## Hvordan bidrar jeg?

Her er litt relevant informasjon om hvordan vi utvikler FFE, og hvordan du kan bidra med endringer.

### Utvikling

Utviklingsmiljøet krever at du har en nyere versjon av [Node og NPM](https://nodejs.org/en/) installert. Vi anbefaler
å bruke LTS-versjonen (long term support), siden det er denne som kjøres på byggserverne våre.

Klon repositoryet og installer avhengigheter:

```bash
git clone ssh://git@stash.intern.sparebank1.no:22/ffe/ffe-monorepo.git
cd ffe-monorepo
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

### Kodestandard

Vi prøver å holde koden på samme nivå på tvers av dette monorepoet. Dette hjelper oss å utvikle nye features raskere,
samt å bruke mindre tid på code reviews. Denne seksjonen forklarer litt om de forskjellige tekniske valgene vi bruker
på tvers av pakkene våre.

#### Formattering

Vi bruker [prettier](https://prettier.io) til formattere koden vår (både JS og LESS). Det skjer automatisk når du
committer endringer. Du kan sette opp `prettier` til å [kjøre i editoren din
også](https://prettier.io/docs/en/editors.html) om du vil.

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

### Testdekning

Vi prøver å ha høyest mulig testdekning på koden i dette repoet. Siden vi har både LESS- og React- / JavaScript-kode i
FFE, er det to forskjellige måter å teste på

#### LESS: Visuell regresjonstesting

ffe-monorepo har enda ikke støtte for visuell regresjonstesting. Dette vil komme snarest.

#### React og JavaScript

Vi prøver å teste React-komponenter og JavaScript-utilities så godt som overhodet mulig. Har du oppdaget en bug,
vennligst opprett en eller flere tester som bekrefter at feilen blir løst med din endring. Ser du andre test-muligheter
som ikke er dekket, setter vi selvfølgelig pris på om du bidrar med disse også.

Tester burde i hovedsak dekke overflate-APIet til en komponent. Her burde full testdekning være ambisjonen. For interne
mekanismer og hjelpefunksjoner så er ikke kravet like strengt.

### Dokumentasjon

Vi bruker [Styleguidist](https://react-styleguidist.js.org/) til å dokumentere komponentene våre, både med
[JSDoc](http://usejsdoc.org/) og eksempel-filer. Alle React-komponenter har sin egen `<KomponentNavn>.md` fil, hvor vi
beskriver de mest vanlige bruksscenarioene. Er du usikker på hvordan disse burde se ut, anbefaler vi deg å se på noen
av de som eksisterer allerede - f.eks.
[ffe-core-react](./packages/ffe-core-react/src/typography)
eller [ffe-buttons-react](./packages/ffe-buttons-react/src).

### Commit-meldinger

Commit-meldinger i Git er et viktig verktøy for å holde rammeverkets historie enkel og lesbar. Vi skriver commits i FFE
på engelsk. I tillegg til [vanlig god praksis rundt å skrive beskrivende
commit-meldinger](https://medium.com/@steveamaza/how-to-write-a-proper-git-commit-message-e028865e5791), ber vi deg om
å følge en standard til:

Commit-meldinger følger [conventional commits](https://conventionalcommits.org/)-formatet. Dette gjør vi for å automatisk
kunne generere endringslogger og nye versjonsnumre. Det oppfordres til at hver commit kun endrer en pakke, og setter
riktig "scope" (pakke) for hver commit. Dette hjelper oss å automatisere publisering av changelogs etc.

Dette er lettest forklart med eksempler:

Hvis du skal fikse en bug i `ffe-core` f.eks., så kan commit-meldingen din se slik ut:

```
fix(ffe-core): Ensure paragraphs stack neatly in IE11

This commit adds a fix to make sure paragraphs are not rendered
upside down in IE11.
```

Hvis du skal legge til en feature i `ffe-buttons-react` f.eks., så kan commit-meldingen din se slik ut:

```
feat(ffe-buttons-react): Add easter egg to ternary button

This commit adds a konami code easter egg to ternary buttons, which
transforms them into small dinosaurs.
```

For å dobbeltsjekke at du gjorde alt rett, har dette repoet en pre-commithook som sjekker meldingen med
[commitlint](https://github.com/marionebl/commitlint). Hvis ikke alt stemmer overens med det forventede formatet, vil
committen feile, og du vil bli bedt om å rette opp meldingen. Det gjør du med `git commit --amend`.

### Pull requests

Når du har gjort deg ferdig med koden din, er det på tide å be andre se på koden din. Push koden din til Stash /
Bitbucket, og opprett en pull request. Det vil bli lagt til et par reviewers automatisk, men ta gjerne en titt på
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

Denne seksjonen må fortsatt skrives. Spør på HipChat-rommet om detaljer!

## Importere en eksisterende FFE-komponent

Vi er midt i en migrasjonsfase, hvor noen FFE-pakker har sine egne repositories. Det kan du hjelpe til med å rydde opp
i! Si ifra på HipChat at du vil migrere en eksisterende komponent, og følg denne guiden:

### Importer koden (inkludert git-historikken)

For å dra inn et eksisterende prosjekt, lag en ny branch og bruk `git subtree add` kommandoen. Her er et eksempel med
hvordan det så ut for `ffe-core`:

```bash
$ git subtree add --prefix packages/ffe-core ssh://git@stash.intern.sparebank1.no:22/ffe/ffe-core.git master
```

Denne kommandoen importerer alle filer og git-historikk til `ffe-monorepo`, slik at ingenting blir borte i migrasjonen.

### Rydd i komponenten

* Fjern `build.sh` og npm-scriptene `postpublish`, `preversion` og `has-published` i `package.json`.
* Fiks `publishConfig` og `repository` i `package.json`
* Fjern commit-hooks (se etter husky i `package.json`).
* Endre `license`-feltet i `package.json` til `UNLICENSED`.
* Linting
  * Oppdatere eller fjern `.stylelintrc` og `.eslintrc` (Trenger ikke en extends-regler pga. eslintrc på toplevel i
    repoet; kun overstyring av regler).
  * Fjern dependencies til `eslint-plugin-*/-config-*`. Behold kun eslint.
  * Fjern dependencies til `stylelint-config-*`. Behold kun stylelint.
* Fjern `.editorconfig`
* Fjern alt i .npmrc bortsett fra `package-lock=false`
* Fjern `ffe-visual-tests-support` og alt relatert til gemini (.gemini.yml)
* Oppgradere komponenten til å støtte React 16
* Fiks hoisting errors (se stdout til lerna bootstrap i neste trinn)
* Sjekk at `npm run build/test/lint` fungerer

For LESS-pakker:

* Legg til import av pakkens less i `packages/ffe-all.less`

### Kjør `lerna bootstrap`

```
$ npx lerna bootstrap
```

### Formatter med prettier

Installer `prettier` globalt og formatter alle `.jsx?`, `.json` og `.less`-filer i prosjektet.

Et eksempel kan være:

```
prettier --write src/*.js *.json *.js examples/*.js
```

Prettier kjøres også på alle filer du har staget for commit når du commiter. Derfor vil du av og til se endringer i
formattering selv om du ikke nødvendigvis gjorde det selv.

### Legg til scope i `commitlint.config.js`

Prosjektet du legger til må ligge i denne filen for at du skal kunne committe under dette scopet. Under `scope-enum`
legger du til navnet på prosjektet du akkurat har lagt til.

### Legg til dokumentasjon i `styleguide.config.js`

For at dokumentasjonen skal dukke opp i styleguidist-dokumentasjonen, må den legges til som en `section` i
`styleguide.config.js`. Du kan se på eksisterende seksjoner hvordan det kan gjøres.

### Lag en pull request!

Til slutt lager du en pull request, og legger til alle relevante reviewers.

## Publisering

Når en pull request blir merget, releaser Lerna (monorepo-verktøyet vårt) en ny versjon. `CHANGELOG.md` og
versjonsnummer i den relevante `package.json`-filen blir automatisk generert basert på commit-historikken.

## Har du fortsatt spørsmål?

Vi har helt sikkert ikke husket å skrive om alt i denne guiden. Når du kommer på noe som fortsatt ikke er klart eller
besvart i denne guiden, ber vi deg ta kontakt med Alliansens Front-end Forum på HipChat. Der vil du få svar så fort noen
har tid.

Takk for at du leste denne guiden, og velkommen som bidragsyter til FFE!
