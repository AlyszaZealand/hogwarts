# Projekt Titel - Hogwarts

## Arkitektur og mappestruktur
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

## Kvalitet
- AI-genereret kode er ikke automatisk korrekt
- Koden skal kunne forklares, testes og reviewes af udvikleren
- Alle ændringer skal kunne spores tilbage til et Issue
