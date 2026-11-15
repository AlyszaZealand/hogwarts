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