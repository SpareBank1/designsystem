# Contribute

Det er viktig for oss at våre forskjellige team bidrar til å utvikle og vedlikeholde FFE. Det hjelper bl.a. med å sikre
at frontenden til løsningene er levende og i sync på tvers av løsninger i vårt økosystem.

## TL;DR

* Klon (ikke fork) repoet
* Branch fra `master`
* Gjør endringen, kjør tester, og oppdater visuelle testers baseline om det trengs
* Oppdater `CHANGELOG.md`
* Oppdater versjonsnummeret i `package.json`. Følg SemVer.
* Squash alle commits til én enkelt commit.
* Lag en PR fra feature/bugfix-branch til `master`
* Legg til et godt antall reviewers som har vært involvert i koden du endrer eller som bør ha en mening om den.
* Sørg for at branchen bygger grønt før merge.
    [Jenkins bygger automatisk feature branches](https://digitalbankbyggmaster.test.sparebank1.no/job/ffe-core_BUILDS-ALL-BRANCHES/)
    i FFE-repoet (derfor viktig at det ikke forkes, så Jenkins finner branchen)
* Merge til `master`. Dersom `package.json` har en ny versjon publiserer
    [Jenkins](https://digitalbankbyggmaster.test.sparebank1.no/job/ffe-core_master/) pakken til Nexus.

## Hvordan lage en ny feature eller bugfix

Start ved å klone repositoriet. Det er viktig at du _ikke forker_ repoet for at endringen enkelt skal kunne merges inn senere.
Når repoet er klonet må du kjøre `$ npm install`.

```
$ git clone ssh://git@stash.intern.sparebank1.no:22/ffe/ffe-core.git
$ cd ffe-core/
$ npm install
$ npm start
```

Branch ut fra master og gi branchen et beskrivende navn:

```
$ git checkout -b feature/unicorn-factory
$ git checkout -b bugfix/you-saw-nothing
```

Gjør endringen din og bekreft at den fungerer på eksempelsiden. Kjør også testene lokalt før du lager en pull request.

Det finnes et utility-script som bygger og kjører testene for deg: `./build.sh`

Om endringen krever en ny versjon av pakken på Nexus oppdaterer du versjonen i `package.json` i henhold til [Semantic Versioning (SemVer)](http://semver.org/):

Kort fortalt:

* Bugfixer er PATCH
* Nye features er MINOR
* En breaking change (endret klassenavn og liknende) er MAJOR

Oppdater `CHANGELOG.md` dersom endringen vil lage en ny versjon av pakken. Ved en MAJOR, skriv hvilke endringer en konsument må gjøre for å oppgradere.

### Visuell regresjonstestning

Det utføres visuell regresjonstestning på Jenkins med Gemini.

Ved endringer som gjør at testene feiler må det aktuelle baseline-screenshotet oppdateres. Dette gjøres med scriptet `./update_visual-tests-baselines.sh`.

## Hvordan lage nytt repo/paket
FFE består av ett antal paket med `ffe-` som paketnamnprefix. Paket består i regel av styling på less-format,
før paket som innehåller ReactJS-komponenter brukas `-react` som utskiljande paketnamnsuffix. Det finnes en korrespondans
mellan styling-paket och tillsvarande react-paket, e.g. innehåller `ffe-buttons-react` ReactJS-komponenter som
brukar styling i `ffe-buttons`.

Vid upprættelse av nytt paket och git-repo bør saken tas upp på `#Alliansens Frontend-forum` och åtminstone en
Stash projekt-administratør från vardera Forsikring och Banksamarbeidet involveras i beslutet.

## Utviklermiljø

Om du vil finnes det et ferdig miljø med alle avhengiheter satt opp som enkelt kan startes med Vagrant:

[vagrant-dev](https://stash.intern.sparebank1.no/projects/DE/repos/vagrant-dev/browse)

De visuelle testene (Gemini) bruker native-moduler, så miljøet du bruker må ha g++-compiler tilgjengelig før du kjører testene:

SpareBank1s RHEL-baserte utviklerplatform:

`$ sudo yum install gcc-c++`

Legacy Ubuntu-basert virtuell utviklerplatform:

`$ sudo apt-get install -y g++`

Du vil så klart også trenge Node og NPM installert.

## Tidligere releaseprosedyrer

Tidligere laget vi en egen pull request for å publisere ny versjon. Dette erfarte vi som problematisk da det til tider
ble laget en "backlog" av ikke-publiserte endringer på master. De som da publiserte pakken var ikke godt nok kjent med
tidligere endringer til å ta en god avgjørelse på versjonsnummer (major, minor, patch?). Ulempen med ny release-prosedyre
er at det kan oppstå konflikter på versjonsnummer med flere PRer på samme pakke. Dette må da håndteres manuelt ved hvert
tilfelle.
