import {
    ActionButton,
    ButtonGroup,
    SecondaryButton,
} from '@sb1/ffe-buttons-react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { Modal, type ModalHandle } from './Modal';
import { ModalBlock } from './ModalBlock';

const meta: Meta<typeof Modal> = {
    title: 'Komponenter/Modals/Modal',
    component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Standard: Story = {
    args: {
        ariaLabelledby: 'heading-id',
        locale: 'nb',
        onClose: () => null,
        portalContainer: document.body,
    },
    render: function Render(args) {
        const modalRef = useRef<ModalHandle>(null);
        const headingId = args.ariaLabelledby;

        return (
            <>
                <ActionButton
                    type="button"
                    onClick={() => {
                        modalRef.current?.open();
                    }}
                >
                    Åpne modal
                </ActionButton>
                <Modal ref={modalRef} {...args}>
                    <ModalBlock>
                        <Heading2 id={headingId}>En modal</Heading2>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aperiam atque excepturi exercitationem harum
                            neque obcaecati, ratione sapiente sit temporibus
                            unde.
                        </Paragraph>
                        <ButtonGroup thin={true} ariaLabel="Knappegruppe">
                            <SecondaryButton
                                type="button"
                                onClick={() => {
                                    modalRef.current?.close();
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
    },
};

export const Custom: Story = {
    args: {
        ariaLabelledby: 'heading-id',
        locale: 'nb',
        onClose: () => null,
        portalContainer: document.body,
    },
    render: function Render(args) {
        const modalRef = useRef<ModalHandle>(null);
        const headingId = args.ariaLabelledby;

        return (
            <>
                <ActionButton
                    type="button"
                    onClick={() => {
                        modalRef.current?.open();
                    }}
                >
                    Åpne modal
                </ActionButton>
                <Modal ref={modalRef} {...args}>
                    <div
                        style={{
                            height: 150,
                            width: '100%',
                            background: 'var(--ffe-color-surface-secondary-default)',
                        }}
                    />
                    <ModalBlock>
                        <Heading2 id={headingId}>En modal</Heading2>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aperiam atque excepturi exercitationem harum
                            neque obcaecati, ratione sapiente sit temporibus
                            unde.
                        </Paragraph>
                        <ButtonGroup thin={true} ariaLabel="Knappegruppe">
                            <SecondaryButton
                                type="button"
                                onClick={() => {
                                    modalRef.current?.close();
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
    },
};

export const DarkMode: Story = {
    args: {
        ariaLabelledby: 'heading-id',
        locale: 'nb',
        onClose: () => null,
        portalContainer: document.body,
    },
    render: function Render(args) {
        const modalRef = useRef<ModalHandle>(null);
        const headingId = args.ariaLabelledby;

        return (
            <>
                <ActionButton
                    type="button"
                    onClick={() => {
                        modalRef.current?.open();
                    }}
                >
                    Åpne modal
                </ActionButton>
                <Modal
                    ref={modalRef}
                    {...args}
                    className={'ffe-dark regard-color-scheme-preference'}
                >
                    <ModalBlock>
                        <Heading2 id={headingId}>En modal</Heading2>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aperiam atque excepturi exercitationem harum
                            neque obcaecati, ratione sapiente sit temporibus
                            unde.
                        </Paragraph>
                        <ButtonGroup thin={true} ariaLabel="Knappegruppe">
                            <SecondaryButton
                                type="button"
                                onClick={() => {
                                    modalRef.current?.close();
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
    },
};
