import { Feedback } from '@sb1/ffe-feedback-react';

<Feedback
  locale="nn"
  onThumbClick={console.log}
  onFeedbackSend={console.log}
  contactLink={{
    onClick: () => console.log('Contact link clicked'),
  }}
  headingLevel={2}
/>
