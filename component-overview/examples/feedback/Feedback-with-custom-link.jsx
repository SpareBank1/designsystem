import { Feedback } from '@sb1/ffe-feedback-react';

<Feedback
  locale="nn"
  onThumbClick={console.log}
  onFeedbackSend={console.log}
  contactLink={{
    linkText: 'spør i chatten.',
    onClick: () => confirm('Denne chatten er ikkje så nyttig, så du kan like godt lukke han.'),
  }}
  headingLevel={2}
/>
