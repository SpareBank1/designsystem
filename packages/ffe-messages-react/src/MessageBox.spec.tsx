import React from 'react';
import { MessageBox } from './MessageBox';
import { MessageHeader } from './MessageHeader';
import { render, screen } from '@testing-library/react';
import { ContextMessage } from './ContextMessage';

describe('<MessageBox />', () => {
    it.each([
        ['info', 'group', 'Infomelding'],
        ['error', 'alert', 'Feilmelding'],
        ['success', 'group', 'Suksessmelding'],
        ['tips', 'group', 'Tipsmelding'],
        ['warning', 'group', 'Advarsel'],
    ] as const)('should render each type %s', (type, role, name) => {
        render(<MessageBox type={type} />);
        expect(screen.getByRole(role, { name })).toBeInTheDocument();
    });

    it('should default header', () => {
        render(
            <MessageBox
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
            <MessageBox
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
        render(<MessageBox type="info" className="my-class" />);
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-message')).toBeTruthy();
        expect(group.classList.contains('ffe-message--box')).toBeTruthy();
        expect(group.classList.contains('ffe-message--info')).toBeTruthy();
        expect(group.classList.contains('my-class')).toBeTruthy();
        expect(group.classList.contains('ffe-message--colored-bg')).toBeFalsy();
    });
});
