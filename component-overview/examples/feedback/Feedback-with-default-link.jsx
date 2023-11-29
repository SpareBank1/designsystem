import Feedback from '@sb1/ffe-feedback-react';

<Feedback
  language="nn"
  onThumbClick={console.log}
  onFeedbackSend={console.log}
  contactLink={{
    onClick: () => console.log('Contact link clicked'),
  }}
/>
