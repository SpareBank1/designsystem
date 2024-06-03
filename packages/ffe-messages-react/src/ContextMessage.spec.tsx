import React from 'react';
import { ContextMessage } from './ContextMessage';
import { MessageHeader } from './MessageHeader';
import { render, screen } from '@testing-library/react';

describe('<ContextMessage />', () => {
    it.each([
        ['info', 'group', 'Infomelding'],
        ['error', 'alert', 'Feilmelding'],
        ['success', 'group', 'Suksessmelding'],
        ['tips', 'group', 'Tipsmelding'],
        ['news', 'group', 'Nyhetsmelding'],
    ] as const)('should render each type %s', (type, role, name) => {
        render(<ContextMessage type={type} />);
        expect(screen.getByRole(role, { name })).toBeInTheDocument();
    });

    it('should default header', () => {
        render(
            <ContextMessage
                type="info"
                header={<MessageHeader>hello world</MessageHeader>}
            />,
        );
        expect(
            screen.getByRole('heading', {
                name: 'hello world',
                level: 2,
            }),
        ).toBeInTheDocument();
    });

    it('should render custom header', () => {
        render(
            <ContextMessage
                type="info"
                header={<MessageHeader as="h3">hello world</MessageHeader>}
            />,
        );
        expect(
            screen.getByRole('heading', {
                name: 'hello world',
                level: 3,
            }),
        ).toBeInTheDocument();
    });

    it('should render string header', () => {
        render(<ContextMessage type="info" header="hello world" />);
        expect(
            screen.getByRole('heading', {
                name: 'hello world',
                level: 2,
            }),
        ).toBeInTheDocument();
    });

    it('should set classes ', () => {
        render(<ContextMessage type="info" className="my-class" />);
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-message')).toBeTruthy();
        expect(group.classList.contains('ffe-message--context')).toBeTruthy();
        expect(group.classList.contains('ffe-message--info')).toBeTruthy();
        expect(group.classList.contains('my-class')).toBeTruthy();
        expect(group.classList.contains('ffe-message--colored-bg')).toBeFalsy();
        expect(
            group.classList.contains('ffe-message--context-compact'),
        ).toBeFalsy();
    });

    it('should --context-compact modifier classes ', () => {
        render(<ContextMessage type="info" compact={true} />);
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-message')).toBeTruthy();
        expect(group.classList.contains('ffe-message--context')).toBeTruthy();
        expect(
            group.classList.contains('ffe-message--context-compact'),
        ).toBeTruthy();
        expect(group.classList.contains('ffe-message--info')).toBeTruthy();
    });

    it('should --colored-bg modifier classes ', () => {
        render(<ContextMessage type="info" onColoredBg={true} />);
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-message')).toBeTruthy();
        expect(group.classList.contains('ffe-message--context')).toBeTruthy();
        expect(
            group.classList.contains('ffe-message--colored-bg'),
        ).toBeTruthy();
        expect(group.classList.contains('ffe-message--info')).toBeTruthy();
    });

    it('should be closeable', async () => {
        render(<ContextMessage type="info" closeButton={true} />);
        expect(
            screen.getByRole('button', { name: 'Lukk' }),
        ).toBeInTheDocument();
    });
});
