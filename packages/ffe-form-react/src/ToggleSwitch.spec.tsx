import React from 'react';
import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';
import { render, screen } from '@testing-library/react';

const renderToggleSwitch = (props?: Partial<ToggleSwitchProps>) =>
    render(
        <ToggleSwitch onChange={() => {}} {...props}>
            Hello world
        </ToggleSwitch>,
    );

describe('<ToggleSwitch />', () => {
    it('should render a switch', () => {
        renderToggleSwitch();
        expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('should render a default value if passed', () => {
        const { rerender } = render(
            <ToggleSwitch onChange={() => {}} checked={undefined}>
                Hello world
            </ToggleSwitch>,
        );
        const switchElement = screen.getByRole('switch');
        expect(switchElement).not.toBeChecked();
        rerender(
            <ToggleSwitch onChange={() => {}} checked={true}>
                Hello world
            </ToggleSwitch>,
        );
        expect(switchElement).toBeChecked();
    });

    it('should apply the same id to <label> and <input>', () => {
        const { container } = renderToggleSwitch({
            name: 'Some text goes here',
        });
        const label = container.querySelector('label');
        const switchElement = screen.getByRole('switch');

        expect(label?.getAttribute('for')).toBe(
            switchElement?.getAttribute('id'),
        );
    });

    it('should apply a unique id for each instance', () => {
        renderToggleSwitch({ name: 'Some text goes here' });
        renderToggleSwitch({ name: 'Some other text goes here' });

        const [id1, id2] = screen
            .getAllByRole('switch')
            .map(it => it.getAttribute('id'));

        expect(id1).not.toBe(id2);
    });

    it('should not change id when re-rendering an instance', () => {
        const { rerender } = render(
            <ToggleSwitch onChange={() => {}} checked={undefined}>
                Hello world
            </ToggleSwitch>,
        );
        const switchElement = screen.getByRole('switch');
        const idFirstRender = switchElement.getAttribute('id');

        rerender(
            <ToggleSwitch onChange={() => {}} checked={undefined}>
                Hello world
            </ToggleSwitch>,
        );
        const idSecondRender = switchElement.getAttribute('id');

        expect(idFirstRender).toBe(idSecondRender);
    });

    it('should allow to override the id', () => {
        const id = 'this-is-not-a-generated-id';
        const { container } = renderToggleSwitch({
            id,
            name: 'Some text goes here',
        });

        const label = container.querySelector('label');
        const switchElement = screen.getByRole('switch');

        expect(label?.getAttribute('for')).toBe(id);
        expect(switchElement.getAttribute('id')).toBe(id);
    });

    it('should set arbitrary props (rest) on input', () => {
        renderToggleSwitch({
            name: 'toggle',
            tabIndex: -1,
        });

        const switchElement = screen.getByRole('switch');
        expect(switchElement.getAttribute('name')).toBe('toggle');
        expect(switchElement.getAttribute('tabIndex')).toBe('-1');
    });

    it('should render additional props if passed', () => {
        const { container } = renderToggleSwitch({
            onText: 'ooon',
            offText: 'offf',
            description: 'hei',
        });

        expect(
            container.querySelector('.ffe-toggle-switch__label-on')
                ?.textContent,
        ).toMatch(/ooon/);
        expect(
            container.querySelector('.ffe-toggle-switch__label-off')
                ?.textContent,
        ).toMatch(/offf/);
        expect(
            container.querySelector('.ffe-toggle-switch__label-description')
                ?.textContent,
        ).toMatch(/hei/);
    });

    it('should hide on/off text if specified', () => {
        const { container } = renderToggleSwitch({
            hideOnOff: true,
        });

        expect(
            container.querySelector('.ffe-toggle-switch--hide-on-off'),
        ).toBeTruthy();
        expect(
            container.querySelector('.ffe-toggle-switch__label-on'),
        ).toBeFalsy();
        expect(
            container.querySelector('.ffe-toggle-switch__label-off'),
        ).toBeFalsy();
    });

    it('should render children', () => {
        const { container } = renderToggleSwitch();
        const label = container.querySelector('label');
        expect(label?.textContent).toContain('Hello world');
    });
});
