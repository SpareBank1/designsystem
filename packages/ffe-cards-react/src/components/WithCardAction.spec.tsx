import React from 'react';
import { WithCardAction } from './WithCardAction';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<WithCardAction />', () => {
    it('should render a <CardAction /> link by default', () => {
        render(
            <WithCardAction baseClassName="ffe-card-x">
                {({ CardAction }) => (
                    <h1>
                        <CardAction href="/test">en lenke</CardAction>
                    </h1>
                )}
            </WithCardAction>,
        );
        const link = screen.getByRole('link', { name: 'en lenke' });
        expect(link).toBeInTheDocument();
    });

    it('should apply class to <CardAction />', () => {
        render(
            <WithCardAction baseClassName="ffe-card-x">
                {({ CardAction }) => (
                    <CardAction href="/test" className="my-class">
                        en lenke
                    </CardAction>
                )}
            </WithCardAction>,
        );
        const link = screen.getByRole('link', { name: 'en lenke' });

        expect(link.classList.contains('ffe-card__action')).toBeTruthy();
        expect(link.classList.contains('my-class')).toBeTruthy();
    });

    it('should render a custom <CardAction />', () => {
        render(
            <WithCardAction baseClassName="ffe-card-x">
                {({ CardAction }) => (
                    <CardAction as="button">en knapp</CardAction>
                )}
            </WithCardAction>,
        );
        const button = screen.getByRole('button', { name: 'en knapp' });
        expect(button).toBeInTheDocument();
    });

    it('should click <CardAction /> when other element clicked', async () => {
        const user = userEvent.setup();
        const cardActionSpy = jest.fn();

        render(
            <WithCardAction baseClassName="ffe-card-x">
                {({ CardAction }) => (
                    <>
                        <CardAction as="button" onClick={cardActionSpy}>
                            en knapp
                        </CardAction>
                        <p data-testid="text">Some text</p>
                    </>
                )}
            </WithCardAction>,
        );
        const text = screen.getByTestId('text');
        await user.click(text);
        expect(cardActionSpy).toHaveBeenCalledTimes(1);
    });

    it('should set refs on <CardAction />', () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <WithCardAction baseClassName="ffe-card-x">
                {({ CardAction }) => (
                    <CardAction as="button" ref={ref}>
                        en knapp
                    </CardAction>
                )}
            </WithCardAction>,
        );
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });

    it('should set refs on <CardAction />', () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <WithCardAction baseClassName="ffe-card-x">
                {({ CardAction }) => (
                    <CardAction as="button" ref={ref}>
                        en knapp
                    </CardAction>
                )}
            </WithCardAction>,
        );
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });

    it('should add clickable class to card when using CardAction', () => {
        const TEST_ID = 'test-id';
        render(
            <WithCardAction baseClassName="ffe-card-x" data-testid={TEST_ID}>
                {({ CardAction }) => (
                    <CardAction as="button">en knapp</CardAction>
                )}
            </WithCardAction>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList).toContain('ffe-card-x--clickable');
    });
});
