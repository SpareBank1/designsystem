# Delt Live Code Editor for Storybook

Denne mappen inneholder delte utilities for live code editing-funksjonalitet på tvers av alle komponenter i designsystemet.

## 🚀 Kom i gang

### Bruk den automatiske generatoren

```bash
npm run generate:livecode ComponentName packages/ffe-component-react [AdditionalComponent1] [AdditionalComponent2]
```

**Eksempler:**
```bash
# For en enkel komponent
npm run generate:livecode Button packages/ffe-buttons-react

# For en komponent med avhengigheter
npm run generate:livecode Accordion packages/ffe-accordion-react AccordionItem
```

### Manuel implementering

1. **Importer den delte komponenten:**
   ```tsx
   import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';
   ```

2. **Definer templates for komponenten:**
   ```tsx
   const buttonTemplates = {
       simple: {
           name: 'Enkelt',
           icon: '📝',
           code: `<Button>Klikk meg</Button>`
       },
       variants: {
           name: 'Varianter',
           icon: '🎨',
           code: `<Button variant="primary">Primær</Button>`
       }
   };
   ```

3. **Opprett story med utility-funksjonen:**
   ```tsx
   export const LiveCodeEditor: Story = createLiveCodeStory(Button, {
       templates: buttonTemplates,
       additionalComponents: { /* andre komponenter som trengs */ },
       defaultTemplate: 'simple',
       title: 'Button Live Code Editor',
       description: 'Interaktiv editor for Button komponenten.'
   });
   ```

## 📚 API

### `createLiveCodeStory(component, config)`

Utility-funksjon som lager en komplett live code story.

**Parametere:**
- `component` - Hovedkomponenten som skal redigeres
- `config.templates` - Object med template-definisjoner
- `config.additionalComponents?` - Andre komponenter som skal være tilgjengelige
- `config.defaultTemplate?` - Standard template (default: første template)
- `config.title?` - Tittel for editoren
- `config.description?` - Beskrivelse for story

### Template struktur

```tsx
interface Template {
    name: string;      // Visningsnavn i dropdown
    icon: string;      // Emoji/ikon for template
    code: string;      // JSX-kode for template
}
```

## 🔧 Funksjoner

### ✅ Smart auto-save
- Lagrer kun endringer (ikke opprinnelig template)
- Husker hvilken template som ble brukt
- Gjenoppretter riktig context ved lasting

### ✅ Template-håndtering
- Visuell indikator når koden er endret
- Enkelt å tilbakestille til original template
- Bekreftelse ved bytte av template med ulagrede endringer

### ✅ Brukeropplevelse
- Monaco Editor med TypeScript/JSX syntax highlighting
- Real-time preview med feilhåndtering
- Fullscreen-modus
- Dark/light theme toggle
- Nedlasting av kode

## 📁 Filstruktur

```
.storybook/shared/
├── LiveCodeEditor.tsx    # Hovedkomponent og utility
└── README.md            # Denne filen

packages/ffe-*-react/src/
├── Component.livecode.stories.tsx  # Generert live code story
└── Component.stories.tsx          # Vanlige stories
```

## 🎯 Fordeler med denne tilnærmingen

### ✅ **Skalbar**
- En komponent som fungerer for alle pakker
- Konsistent brukeropplevelse
- Lettere å vedlikeholde og oppdatere

### ✅ **Fleksibel**
- Konfiguerbar for alle typer komponenter
- Støtter avhengigheter mellom komponenter
- Kan tilpasses per komponent

### ✅ **Automatisert**
- Generator script for rask setup
- Standardisert filstruktur
- Mindre boilerplate kode

### ✅ **Type-sikker**
- Full TypeScript support
- Intellisense i editor
- Type-sjekking av templates

## 🔄 Migrering fra eksisterende løsning

Hvis du allerede har en manuell live code implementering:

1. Kjør generator scriptet: `npm run generate:livecode YourComponent packages/your-package`
2. Kopier templates fra eksisterende implementering
3. Test at alt fungerer
4. Slett den gamle implementeringen

## 🆘 Feilsøking

### Problem: "Cannot resolve module"
**Løsning:** Sjekk at import path til shared komponenten er riktig:
```tsx
// Riktig for pakker i packages/ folder
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';
```

### Problem: "Component not in scope"
**Løsning:** Legg til manglende komponenter i `additionalComponents`:
```tsx
createLiveCodeStory(MainComponent, {
    additionalComponents: {
        MissingComponent,
        AnotherComponent
    }
    // ...
});
```

### Problem: "Template ikke synlig"
**Løsning:** Sjekk at template struktur er riktig:
```tsx
const templates = {
    templateKey: {
        name: 'Synlig navn',
        icon: '📝',
        code: `<Component />`
    }
};
``` 