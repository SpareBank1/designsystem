import React from 'react';
import { SystemMessage } from './SystemMessage';
import { render, screen } from '@testing-library/react';

describe('<SystemMessage />', () => {
    it.each([
        ['info', 'group', 'Infomelding'],
        ['error', 'alert', 'Feilmelding'],
        ['success', 'group', 'Suksessmelding'],
        ['tips', 'group', 'Tipsmelding'],
        ['news', 'group', 'Nyhetsmelding'],
    ] as const)('should render each type %s', (type, role, name) => {
        render(<SystemMessage type={type} />);
        expect(screen.getByRole(role, { name })).toBeInTheDocument();
    });

    it('should set classes ', () => {
        render(<SystemMessage type="info" className="my-class" />);
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-message')).toBeTruthy();
        expect(group.classList.contains('ffe-message--system')).toBeTruthy();
        expect(group.classList.contains('ffe-message--info')).toBeTruthy();
        expect(group.classList.contains('my-class')).toBeTruthy();
        expect(group.classList.contains('ffe-message--colored-bg')).toBeFalsy();
    });

    it('should --colored-bg modifier classes ', () => {
        render(<SystemMessage type="info" onColoredBg={true} />);
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-message')).toBeTruthy();
        expect(group.classList.contains('ffe-message--system')).toBeTruthy();
        expect(
            group.classList.contains('ffe-message--colored-bg'),
        ).toBeTruthy();
        expect(group.classList.contains('ffe-message--info')).toBeTruthy();
    });

    it('should be closeable', async () => {
        render(<SystemMessage type="info" />);
        expect(
            screen.getByRole('button', { name: 'Lukk' }),
        ).toBeInTheDocument();
    });
});
