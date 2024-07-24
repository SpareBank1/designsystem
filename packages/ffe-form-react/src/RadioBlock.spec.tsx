import React from 'react';
import { RadioBlock, RadioBlockProps } from './RadioBlock';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    children: 'Some choice',
    label: 'Label',
    name: 'choice',
    value: 'value',
    onChange: () => {},
};

const renderRadioBlock = (props?: Partial<RadioBlockProps>) =>
    render(<RadioBlock {...defaultProps} {...props} />);

describe('<RadioBlock />', () => {
    describe('id', () => {
        it('is unique across instances', () => {
            renderRadioBlock();
            renderRadioBlock();

            const [oneId, anotherId] = screen
                .getAllByRole('radio')
                .map(it => it.getAttribute('id'));

            expect(oneId).not.toBe(anotherId);
        });
        it('is stable per instance', () => {
            const { rerender } = render(<RadioBlock {...defaultProps} />);
            const idBeforeUpdate = screen.getByRole('radio').getAttribute('id');

            rerender(<RadioBlock {...defaultProps} selectedValue="red" />);
            const idAfterUpdate = screen.getByRole('radio').getAttribute('id');

            expect(idBeforeUpdate).toBe(idAfterUpdate);
        });
    });
    describe('children', () => {
        it('does not add a class if present', () => {
            const { container } = renderRadioBlock({ children: 'hi there' });
            expect(
                container.querySelector('.ffe-radio-block__wrapper--empty'),
            ).toBeFalsy();
        });
        it('adds a class if not present', () => {
            const { container } = renderRadioBlock({
                children: undefined,
                checked: true,
            });
            expect(
                container.querySelector('.ffe-radio-block__wrapper--empty'),
            ).toBeTruthy();
        });
        it('does not render if not selected', () => {
            const { container } = renderRadioBlock({
                children: 'sample children',
                checked: false,
            });
            expect(
                container.querySelector('.ffe-radio-block__wrapper')
                    ?.textContent,
            ).toBeFalsy();
        });
        it('is rendered if selected', () => {
            const { container } = renderRadioBlock({
                children: 'sample children',
                checked: true,
            });
            expect(
                container.querySelector('.ffe-radio-block__wrapper')
                    ?.textContent,
            ).toBe('sample children');
        });
        it('is rendered if showChildren is true', () => {
            const { container } = renderRadioBlock({
                children: 'sample children',
                showChildren: true,
            });
            expect(
                container.querySelector('.ffe-radio-block__wrapper')
                    ?.textContent,
            ).toBe('sample children');
        });
    });
});
