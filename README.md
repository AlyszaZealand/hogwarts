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

# Brug denne instruktion til agenten for hvert Issue:
```
Læs GitHub Issue #X og undersøg projektet. 
Forklar først kort, hvilke filer du vil ændre. 
Implementer kun dette Issue og respekter lagdelingen. 
Kør test, og vis mig ændringerne. 
Du må ikke markere Issue som Done – det gør jeg selv. 
```

# TEST: Brug denne instruktion til agenten for hvert Issue:
```
Læs GitHub Issue #X og undersøg projektet.
Forklar først kort, hvilke filer du vil ændre, og vent på min godkendelse af planen, før du implementerer.
Implementer kun dette Issue og respekter lagdelingen.
Lav test, der dækker acceptkriterierne, kør dem og vis mig ændringerne.
Commit og push først, når jeg har skrevet "Keep all" – opret derefter en PR, der refererer issuet, og flyt issuet til Review.
Du må ikke markere issuet som Done – det gør jeg selv.
```

# FEJL 
- Jeg kiggede på koden agenten implementerede.
- Derefter klikkede jeg på "Keep all".
- Derfor blev der ikke dannet nogen pull request med Issue #1.
- Der kom først pull request efter commit fra webstorm.
<img width="923" height="115" alt="Screenshot 2026-11-15 182756" src="https://github.com/user-attachments/assets/e9c97554-cd84-4129-a020-af8117acfbd6" />
- Husk at tage issue til Sprint Backlog og Assign til dig selv, før du implementerer.

# Efter implementering af et Issue
- Start programmet.
- Test i Postman.
- Derefter flyt Issue til Done.

# START: Lav Scrum Board/Issues
- Lav et Scrum board i GitHub Project.
- Lav kolonnerne: Product Backlog, Sprint Backlog, In progress, Review, Done.
- Lav et Issue for hver opgave med acceptkriterier.
- Assign Issues til den specificerede bruger.

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
Skriv denne prompt til agenten:
```
Brug GitHub MCP.

Find det GitHub Project, der hører til dette projekt.

Vis:
- Projectets navn
- de forskellige statusser
- de Issues der ligger i Projectet

Du må ikke ændre noget.
```

# Copilot projekt regler
Lav et .github/copilot-instructions.md fil i roden af projektet med følgende indhold:
```
.github/copilot-instructions.md
```
Instructions for GitHub Copilot
```
# Hogwarts

Dette er en node.js-applikation med en REST API.
Databasen er mongodb.

## Teknologi

- Brug JavaScript (Node.js).
- Brug mongodb som database.
- Hold løsningen enkel og forståelig.

## GitHub workflow

Når du arbejder med en udviklingsopgave:

1. Brug et rigtigt GitHub Issue som kilde til opgaven.
2. Hent GitHub Issue gennem GitHub MCP.
3. Brug ikke README eller lokale markdown-filer som erstatning for et GitHub Issue.
4. Arbejd kun med Issues, der findes i GitHub Project.
5. Arbejd kun med det Issue, brugeren har valgt eller som er assigned til brugeren i Sprint Backlog.
6. Læs hele Issue og alle acceptkriterier før du planlægger.
7. Fortæl altid Issue-nummer og titel, før du foreslår en plan.
8. Lav en kort implementeringsplan før kode ændres.
9. Vent på brugerens godkendelse af planen.
10. Flyt Issue til In progress, når implementeringen starter.
11. Opret en separat branch til Issue.
12. Implementer kun det valgte Issue.
13. Kør relevante test efter implementering.
14. Kontroller alle acceptkriterier.
15. Referer Issue-nummeret i pull requesten.
16. Flyt Issue til Review, når pull requesten er klar.
17. Merge ikke uden menneskelig godkendelse.
18. Flyt ikke selv et Issue til Done uden menneskelig godkendelse.

## Kvalitet

AI-genereret kode er ikke automatisk korrekt.

Koden skal kunne forklares, testes og reviewes af udvikleren.
```

# Copilot skal finde Issues i Project
Skriv denne prompt til agenten:
```
Brug GitHub MCP.

Find det Issue i Sprint Backlog,
som er assigned til mig.

Brug GitHub Project og det rigtige GitHub Issue som kilde.
Brug ikke README som opgavebeskrivelse.

Fortæl mig:

1. Issue-nummer
2. Issue-titel
3. acceptkriterierne
4. hvad opgaven går ud på

Undersøg derefter den eksisterende JavaScript-kode, hvis der er nogen.

Lav til sidst en kort implementeringsplan.

Du må ikke ændre kode eller GitHub-status endnu.
```

# Copilot skal implementere Issue
Skriv denne prompt til agenten:
```
Planen er godkendt.

Arbejd nu med det valgte GitHub Issue.

1. Flyt Issue til In progress.
2. Opret en passende branch til Issue.
3. Implementer den godkendte plan.
4. Kør relevante kontroller eller test.
5. Kontroller alle acceptkriterier.

Stop derefter.

Vis:
- hvilke filer du har ændret
- hvad du har ændret
- resultatet af test
- om alle acceptkriterier er opfyldt

Commit, push og opret ikke pull request endnu.
```

# Copilot skal oprette pull request
Skriv denne prompt til agenten:
```
Implementeringen er kontrolleret og godkendt.

Commit de relevante ændringer og push branchen.

Opret derefter en pull request til main.

Pull requesten skal:
- referere det GitHub Issue vi arbejder på
- beskrive ændringerne kort
- beskrive hvordan løsningen er testet

Flyt derefter Issue til Review.

Du må ikke merge pull requesten.
Du må ikke flytte Issue til Done.
```

# Review og merge af pull request / DONE
Åben pull requesten i GitHub og gennemgå ændringerne.





