import { InfoMessage } from '@sb1/ffe-message-box-react';
import { Paragraph } from '@sb1/ffe-core-react';
import { Icon } from '@sb1/ffe-icons-react';
import shoppingCartIcon from '@sb1/ffe-icons/icons/300/open/lg/shopping_cart.svg';

() => {

    return (<>
        <InfoMessage title="Handlevognen din er tom" icon={<Icon ariaLabel="handlevogn" fileUrl={shoppingCartIcon} size="lg" />}>
            <Paragraph>Du har ingenting i handlevognen din.</Paragraph>
        </InfoMessage>
    </>)
}


