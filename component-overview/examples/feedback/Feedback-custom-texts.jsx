import { Feedback } from '@sb1/ffe-feedback-react';

<Feedback
    locale="nb"
    onThumbClick={console.log}
    onFeedbackSend={console.log}
    headingLevel={2}
    texts={{ feedbackNotSentHeading: 'Synes dere dette ble bra?' }}
/>;
