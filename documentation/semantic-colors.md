# Semantiske farger

For å oppdatere semantiske farger fra Figma:

1. Dupliser fila `.env.example` og rename den til `.env`
    - Fyll inn [`PERSONAL_ACCESS_TOKEN`](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens)
        - Tokenet du generer trenger lesetilgang til `Variables`
    - Fyll inn `FILE_KEY`
        - Det er segmentet etter `design/` i DS 2.0 Core fila.
2. Kjør `npm run sync-figma-to-tokens`
3. Kjør `npm run build` og se at alt bygger riktig og at filene `packags/ffe-core/less/colors-semantic.less` ser ok ut. At det er noe i den og at det ser ut som nogenlunde fornuftige css custom properties
