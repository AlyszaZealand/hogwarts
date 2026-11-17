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

# Hogwarts

- Dette er en node.js-applikation med en REST API.
- Databasen er mongodb.

## Teknologi

- Brug JavaScript (Node.js).
- Brug mongodb som database.
- mongodb collection hedder hogwarts.
- Hold løsningen enkel og forståelig.

## GitHub workflow

Når du arbejder med en udviklingsopgave:

Flyt Issue til In progress, hvis det ikke allerede er der.
Commit/push først efter brugerens godkendelse af ændringerne.
Opret PR efter commit/push.
Flyt Issue til Review, når PR er oprettet.
Review og Done kræver menneskelig godkendelse.
Må ikke flytte Issue automatisk til Done.

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
12. Commit og push alle ændringer til Issue-branchen, når brugeren
    har godkendt koden ("Keep all").
13. Brug en commit-besked, der refererer Issue-nummeret, fx "Closes #1: ...".
14. Push til remote, så en pull request kan oprettes.
15. Implementer kun det valgte Issue. 
16. Kør relevante test efter implementering. 
17. Kontroller alle acceptkriterier. 
18. Referer Issue-nummeret i pull requesten. 
19. Flyt Issue til Review, når pull requesten er klar. 
20. Merge ikke uden menneskelig godkendelse. 
21. Flyt ikke selv et Issue til Done uden menneskelig godkendelse.

## Kvalitet

AI-genereret kode er ikke automatisk korrekt.

Koden skal kunne forklares, testes og reviewes af udvikleren.
```
