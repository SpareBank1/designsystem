import type { Meta } from '@storybook/react';

const meta: Meta = {
    title: 'Dokumentasjon/Live Code Editor',
    parameters: {
        docs: {
            description: {
                component: `
# 🔥 Live Code Editor System

Delt live code editor løsning for alle komponenter i designsystemet.

## ✅ Implementerte komponenter

Vi har nå live code editor for følgende komponenter:

### 🪗 Accordion
- **Lokasjon:** \`Komponenter/Accordion/Live Code Editor (Shared)\`
- **Templates:** Enkelt, Flere elementer, Interaktiv, Stylet
- **Demonstrerer:** Accordion + AccordionItem kombinasjon

### 🔘 Buttons  
- **Lokasjon:** \`Komponenter/Buttons/Live Code Editor\`
- **Templates:** Enkelt, Button typer, Størrelser, Tilstander, Interaktiv, Custom styling
- **Demonstrerer:** PrimaryButton, SecondaryButton, ActionButton, TertiaryButton

### 📇 Cards
- **Lokasjon:** \`Komponenter/Cards/Live Code Editor\`
- **Templates:** Enkelt, Bakgrunnsfarger, Layout varianter, Interaktiv, Showcase
- **Demonstrerer:** CardBase med forskjellige bgColor og layout props

## 🚀 Kom i gang med nye komponenter

### Automatisk generator:
\`\`\`bash
npm run generate:livecode ComponentName packages/ffe-component-react [AdditionalComponent1]
\`\`\`

### Eksempler:
\`\`\`bash
# Enkel komponent
npm run generate:livecode Button packages/ffe-buttons-react

# Med avhengigheter
npm run generate:livecode Modal packages/ffe-modals-react ModalHeader ModalBody ModalFooter
\`\`\`

## 📚 Bruk den delte komponenten

\`\`\`tsx
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const templates = {
    simple: {
        name: 'Enkelt',
        icon: '📝',
        code: \`<MyComponent>Innhold</MyComponent>\`
    }
};

export const LiveCodeEditor = createLiveCodeStory(MyComponent, {
    templates,
    additionalComponents: { /* andre komponenter */ },
    defaultTemplate: 'simple'
});
\`\`\`

## 🔧 Funksjoner

- ✅ **Smart auto-save** - Lagrer kun endringer
- ✅ **Template-håndtering** - Lett å bytte mellom eksempler  
- ✅ **Real-time preview** - Umiddelbar tilbakemelding
- ✅ **Type-sikkerhet** - Full TypeScript støtte
- ✅ **Monaco Editor** - Syntax highlighting og autocompletion
- ✅ **Dark/light theme** - Tilpasset brukerens preferanser
- ✅ **Fullscreen modus** - For dyptgående redigering
- ✅ **Kode nedlasting** - Eksporter arbeide ditt

## 🎯 Neste steg

1. Test live code editorene for Accordion, Buttons og Cards
2. Opprett live code stories for flere komponenter
3. Tilpass templates etter behov per komponent
4. Samle tilbakemelding fra team

Gå til de individuelle komponentene for å teste live code editoren!
                `,
            },
        },
    },
};

export default meta;

// Just a placeholder story since this is documentation
export const Documentation = {
    render: () => null,
}; 