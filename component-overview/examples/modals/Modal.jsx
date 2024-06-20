import { Modal, ModalBlock } from '@sb1/ffe-modals-react';
import {
    SecondaryButton,
    ActionButton,
    ButtonGroup,
} from '@sb1/ffe-buttons-react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

() => {
    const modalRef = useRef();
    const headingId = useRef(uuid()).current;

    return (
        <>
            <ActionButton
                type="button"
                onClick={() => {
                    modalRef.current.open();
                }}
            >
                Åpne modal
            </ActionButton>
            <Modal ref={modalRef} ariaLabelledby={headingId}>
                <ModalBlock>
                    <Heading2 id={headingId}>En modal</Heading2>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aperiam atque excepturi exercitationem harum neque
                        obcaecati, ratione sapiente sit temporibus unde.
                    </Paragraph>
                    <ButtonGroup thin={true} ariaLabel="Knappegruppe">
                        <SecondaryButton
                            type="button"
                            onClick={() => {
                                modalRef.current.close();
                            }}
                        >
                            Lukk modal
                        </SecondaryButton>
                        <ActionButton autoFocus={true} type="button">
                            Lagre
                        </ActionButton>
                    </ButtonGroup>
                </ModalBlock>
            </Modal>
        </>
    );
};
