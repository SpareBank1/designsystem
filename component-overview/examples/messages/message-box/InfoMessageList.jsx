import {
    MessageBox,
    MessageHeader,
    MessageList,
    MessageListItem,
} from '@sb1/ffe-messages-react';

<MessageBox
    header={<MessageHeader>Viktige ting å huske på</MessageHeader>}
    type="info"
>
    <MessageList>
        <MessageListItem>SpareBank 1 gir deg full oversikt</MessageListItem>
        <MessageListItem>Ikke vær redd for å ta kontakt</MessageListItem>
    </MessageList>
</MessageBox>;
