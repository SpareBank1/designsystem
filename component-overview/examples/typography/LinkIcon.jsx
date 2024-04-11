import {LinkIcon} from '@sb1/ffe-core-react';
import {Icon } from '@sb1/ffe-icons-react';
import chatIcon from '@sb1/ffe-icons/icons/open/300/md/chat.svg';

() => {
    return (<>
        <LinkIcon href="https://www.sparebank1.no">
            <Icon ariaLabel="chat" fileUrl={chatIcon} size="md"/>
        </LinkIcon>
    </>)
}


