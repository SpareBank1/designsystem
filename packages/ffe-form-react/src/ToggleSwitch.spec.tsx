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
    it('should render a checkbox', () => {
        renderToggleSwitch();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should render a default value if passed', () => {
        const { rerender } = render(
            <ToggleSwitch onChange={() => {}} checked={undefined}>
                Hello world
            </ToggleSwitch>,
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
        rerender(
            <ToggleSwitch onChange={() => {}} checked={true}>
                Hello world
            </ToggleSwitch>,
        );
        expect(checkbox).toBeChecked();
    });

    it('should apply the same id to <label> and <input>', () => {
        const { container } = renderToggleSwitch({
            name: 'Some text goes here',
        });
        const label = container.querySelector('label');
        const checkbox = screen.getByRole('checkbox');

        expect(label?.getAttribute('for')).toBe(checkbox?.getAttribute('id'));
    });

    it('should apply a unique id for each instance', () => {
        renderToggleSwitch({ name: 'Some text goes here' });
        renderToggleSwitch({ name: 'Some other text goes here' });

        const [id1, id2] = screen
            .getAllByRole('checkbox')
            .map(it => it.getAttribute('id'));

        expect(id1).not.toBe(id2);
    });

    it('should not change id when re-rendering an instance', () => {
        const { rerender } = render(
            <ToggleSwitch onChange={() => {}} checked={undefined}>
                Hello world
            </ToggleSwitch>,
        );
        const checkbox = screen.getByRole('checkbox');
        const idFirstRender = checkbox.getAttribute('id');

        rerender(
            <ToggleSwitch onChange={() => {}} checked={undefined}>
                Hello world
            </ToggleSwitch>,
        );
        const idSecondRender = checkbox.getAttribute('id');

        expect(idFirstRender).toBe(idSecondRender);
    });

    it('should allow to override the id', () => {
        const id = 'this-is-not-a-generated-id';
        const { container } = renderToggleSwitch({
            id,
            name: 'Some text goes here',
        });

        const label = container.querySelector('label');
        const checkbox = screen.getByRole('checkbox');

        expect(label?.getAttribute('for')).toBe(id);
        expect(checkbox.getAttribute('id')).toBe(id);
    });

    it('should set arbitrary props (rest) on input', () => {
        renderToggleSwitch({
            name: 'toggle',
            tabIndex: -1,
        });

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox.getAttribute('name')).toBe('toggle');
        expect(checkbox.getAttribute('tabIndex')).toBe('-1');
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
