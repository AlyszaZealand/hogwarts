# Arkitektur og mappestruktur
```
project-root/
├── src/
│   ├── controllers/     # Håndterer server respons baseret på ruten
│   ├── models/          # Data objekter og kald til api
│   ├── repositories/    # Håndterer data fra databasen
│   ├── routes/          # Express routes
│   ├── services/        # Håndterer logik og kald til api
│   └── app.js           # Konfiguration af express app
├── tests/               
│   └── api/             # Endpoint test
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

# STEP 1: Lav Scrum Board/Issues
- Lav et Scrum board i GitHub Project.
- Lav kolonnerne: Product Backlog, Sprint Backlog, In progress, Review, Done.
- Lav et Issue for hver opgave med acceptkriterier.
- Assign Issues til den specificerede bruger.
- Efter assign skal den valgte Issue rykkes til Sprint Backlog.
- Derefter brug instruktion til agenten.
- Husk at markerer copilot-instructions.md filen.

# STEP 2: Brug denne instruktion til agenten for hvert Issue:
```
Læs GitHub Issue #X og undersøg projektet.
Forklar først kort, hvilke filer du vil ændre, og vent på min godkendelse af planen, før du implementerer.
Implementer kun dette Issue og respekter lagdelingen.
Lav test, der dækker acceptkriterierne, kør dem og vis mig ændringerne.
Commit og push først, når jeg har skrevet "Keep all" – opret derefter en PR, der refererer issuet, og flyt issuet til Review.
Du må ikke markere issuet som Done – det gør jeg selv.
```

Eksempel på Issue:
```
# Title: Projekt, model og liste over bøger

## Behov

Opret et Express-projekt, forbind MongoDB og lav GET /api/books. 
Der skal være tre bøger i databasen. 
Følg mappestrukturen ovenfor.

## Acceptkriterier

Serveren starter; 
GET returnerer en JSON-liste; 
data ligger i MongoDB.

## Afgrænsning

Der skal ikke implementeres nogen brugerflade.
```

# Kontroller om MCP er tilgængelig
- Dette er skrevet ind i Copilot projekt regler som et punkt.
- Dette kontrolleres ved at markerer copilot-instructions.md filen.
- Ellers kan agenten ikke rykke issues til Sprint Backlog, In Progress og In Review.
```
GitHub-adgang (tjek først ved hver session)
Instruktion...
```

# Copilot projekt regler
Lav et .github/copilot-instructions.md fil i roden af projektet med følgende indhold:
```
.github/copilot-instructions.md
```
Instructions for GitHub Copilot
```
# Projekt Titel - Hogwarts

## Arkitektur og mappestruktur
project-root/
├── src/
│   ├── controllers/     # Håndterer server respons baseret på ruten
│   ├── models/          # Data objekter og kald til api
│   ├── repositories/    # Håndterer data fra databasen
│   ├── routes/          # Express routes
│   ├── services/        # Håndterer logik og kald til api
│   └── app.js           # Konfiguration af express app
├── tests/               
│   └── api/             # Endpoint test
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation

## GitHub-adgang (tjek først ved hver session)
- Kontrollér straks ved sessionens start, om GitHub CLI/MCP har de nødvendige scopes:
  kør `gh auth status` – tokenet skal indeholde scopes: `repo`, `read:project` og `project`
- Hvis `read:project` eller `project` mangler, så følg denne procedure:
  1. Kør selv `gh auth refresh -h github.com -s project,read:project`
  2. Vis brugeren engangskoden og linket (https://github.com/login/device)
     og bed brugeren om at åbne linket i browseren, taste koden og klikke Authorize
  3. Underret tydeligt, at dette skal ske med det samme, mens kommandoen stadig kører –
     koden er engangs og udløber hurtigt
  4. Når brugeren har bekræftet godkendelsen i browseren, så kør `gh auth status`
     igen for at kontrollere, at scopes nu vises
  5. Fortsæt først, når scopes vises
- Hvis koden udløber eller ikke blev godkendt i tide (fx "koden blev ikke autoriseret"):
  kør refresh-kommandoen igen med en ny kode og giv brugeren den nye kode og det samme link
- Agenten kan selv flytte issue-status i GitHub Project via MCP – men aldrig til Done

## Projekt
- Node.js-applikation med en REST API
- Database: MongoDB – collection hedder `hogwarts`
- Sprog: JavaScript (Node.js)
- Hold løsningen enkel og forståelig – koden skal kunne forklares, testes og reviewes af udvikleren

## Workflow

### 1. Vælg opgave
- Brug et rigtigt GitHub Issue som kilde til opgaven
- Hent issuet gennem GitHub MCP
- Arbejd kun med Issues, der findes i GitHub Project, og som er assigned til brugeren i Sprint Backlog
- Brug ikke README eller lokale markdown-filer som erstatning for et GitHub Issue
- Læs hele issuet og **alle** acceptkriterier, før du planlægger

### 2. Planlægning
- Fortæl altid Issue-nummer og titel, før du foreslår en plan
- Lav en kort implementeringsplan, før kode ændres
- Vent på brugerens godkendelse af planen, før implementeringen starter

### 3. Implementering
- Flyt issuet til **In Progress**, når implementeringen starter (hvis det ikke allerede er der)
- Opret en separat branch til issuet, fx `feature/issue-<nummer>-<kort-beskrivelse>`
- Implementér kun det valgte Issue – ingen ændringer ud over dets acceptkriterier

### 4. Test og verifikation
- Lav og kør relevante tests efter implementeringen – testene skal dække acceptkriterierne
- Gennemgå hver enkelt acceptkriterium og bekræft, at det er opfyldt, inden du går videre

### 5. Commit, push og pull request
- Commit og push først, når brugeren har godkendt ændringerne ("Keep all")
- Brug en commit-besked, der refererer Issue-nummeret, fx `Closes #1: ...`
- Push til remote, så en pull request kan oprettes
- Referer Issue-nummeret i pull requesten (titel og beskrivelse)
- Flyt issuet til **Review**, når pull requesten er oprettet

### 6. Menneskelig godkendelse
- Merge aldrig uden menneskelig godkendelse
- Flyt **aldrig** selv et Issue til **Done** – Review og Done kræver menneskelig godkendelse

### 7. Lokal synkronisering efter merge
- Når brugeren har merget pull requesten på GitHub (eller agenten kan se, at PR'en er merged),
  så tjek om lokal `master` har opdateringer klar fra remote
- Hvis `master` har opdateringer klar (fx "↓ 4" i IDE):
  1. Underret brugeren, fx: "Master har X opdateringer klar efter merge af PR'en.
     Skal jeg rykke til master-branchen og pulle ændringerne ned?"
  2. Vent på brugerens godkendelse, før du skifter branch eller kører `git pull`
- Efter godkendelse: skift lokalt til `master`, kør `git pull`, og underret brugeren om,
  at IDE nu står på opdateret `master`
- Spørg derefter brugeren, om den lokale issue-branch skal slettes, og slet den kun efter godkendelse
- Brugeren skal aldrig selv skifte branch eller pulle i IDE/terminalen – men agenten spørger
  altid først og venter på godkendelse, før den skifter branch eller puller
- Arbejd aldrig videre på en gammel issue-branch efter dens PR er merged

## Kvalitet
- AI-genereret kode er ikke automatisk korrekt
- Koden skal kunne forklares, testes og reviewes af udvikleren
- Alle ændringer skal kunne spores tilbage til et Issue
```

# Efter implementering af et Issue fra agenten
- Start programmet.
- Test i Postman.
- Åben pull requesten i GitHub og gennemgå ændringerne.
- Derefter Merge den specifikke issue branch ind til master branch.
- Dette får Issue fra In Review til Done.





