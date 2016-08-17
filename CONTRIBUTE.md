# Contribute
Det er viktig for oss at våre forskjellige team bidrar til å utvikle og vedlikeholde FFE. Det hjelper bl.a. med å sikre
at frontenden til løsningene er levende og i sync på tvers av løsninger i vårt økosystem.

## Pull Requests
* Gjøres mot master.
* Oppdater `CHANGELOG.md`
* Oppdater versjonsnummeret i package.json ifølge SemVer (dette trigger en publisering av pakken ved bygg når branchen er merget).
* Legg til et godt antall reviewers som har vært involvert i koden du endrer eller som bør ha en mening om den.
* Squash alle commits til en enkelt commit.
* Sørg for at branchen bygger grønt før merge.

## Publisering
Projektet publiseres til Nexus av byggserver ved bygg av master-branchen dersom versjonsnummeret i `package.json` ikke
er publisert tidligere.

## Tidligere release prosedyrer
Tidligere laget vi en egen pull request for å publisere ny versjon. Dette erfarte vi som problematisk da det til tider
ble laget en "backlog" av ikke-publiserte endringer på master. De som da publiserte pakken var ikke godt nok kjent med
tidligere endringer til å ta en god avgjørelse på versjonsnummer (major, minor, patch?). Ulempen med ny release-prosedyre
er at det kan oppstå konflikter på versjonsnummer med flere PRer på samme pakke. Dette må da håndteres manuelt ved hvert
tilfelle.
