# @sb1/ffe-system-message-react

> **Denne pakken er foreldet** - Bruk [ffe-messages-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages-react) i stedet.

## Installasjon

```bash
npm install @sb1/ffe-system-message-react @sb1/ffe-system-message
```

## Eksporterte komponenter

| Komponent              | Formaal                               |
| ---------------------- | ------------------------------------- |
| `SystemErrorMessage`   | Vise feilmeldinger til brukeren       |
| `SystemInfoMessage`    | Vise informasjonsmeldinger            |
| `SystemSuccessMessage` | Bekrefte at en handling var vellykket |
| `SystemNewsMessage`    | Vise nyheter eller oppdateringer      |

## Grunnleggende bruk

```tsx
import { SystemErrorMessage, SystemInfoMessage } from '@sb1/ffe-system-message-react';

<SystemErrorMessage>Noe gikk galt.</SystemErrorMessage>
<SystemInfoMessage>Vi oppdaterer systemet klokken 22:00.</SystemInfoMessage>
```

## Avanserte eksempler

### Med onCloseRest callback

```tsx
const [showMessage, setShowMessage] = useState(true);

{
    showMessage && (
        <SystemSuccessMessage onCloseRest={() => setShowMessage(false)}>
            Operasjonen var vellykket!
        </SystemSuccessMessage>
    );
}
```

### Feilmelding uten umiddelbar opplesning

```tsx
<SystemErrorMessage alert={false}>Det oppstod en feil.</SystemErrorMessage>
```

## Avhengigheter

Krever CSS-stiler:

```tsx
import '@sb1/ffe-system-message/less/ffe-system-message.less';
```

## Tilgjengelighet

- `SystemErrorMessage` bruker `role="alert"` som standard
- Lukkeknappen har lokalisert `aria-label`
