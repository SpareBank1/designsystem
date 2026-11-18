import React from 'react';
import { WithCardAction } from './WithCardAction';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardActionRenderProps } from '../types';

describe('<WithCardAction />', () => {
    it('should render a <CardAction /> link by default', () => {
        render(
            <WithCardAction baseClassName="ffe-card-x">
                {({ CardAction }: CardActionRenderProps) => (
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
                {({ CardAction }: CardActionRenderProps) => (
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
                {({ CardAction }: CardActionRenderProps) => (
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
                {({ CardAction }: CardActionRenderProps) => (
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

    describe('modified clicks outside <CardAction />', () => {
        let openSpy: jest.SpyInstance;

        beforeEach(() => {
            openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
        });

        afterEach(() => {
            openSpy.mockRestore();
        });

        const renderCardWithLink = (
            linkProps: React.ComponentPropsWithoutRef<'a'> = {},
        ) =>
            render(
                <WithCardAction baseClassName="ffe-card-x">
                    {({ CardAction }: CardActionRenderProps) => (
                        <>
                            <CardAction href="/test" {...linkProps}>
                                en lenke
                            </CardAction>
                            <p data-testid="text">Some text</p>
                        </>
                    )}
                </WithCardAction>,
            );

        it.each([
            ['metaKey', { metaKey: true }],
            ['ctrlKey', { ctrlKey: true }],
            ['shiftKey', { shiftKey: true }],
        ])(
            'should open link in new tab on %s click and forward the modifier to <CardAction />',
            (_, modifiers) => {
                const linkSpy = jest.fn();
                renderCardWithLink({ onClick: linkSpy });

                fireEvent.click(screen.getByTestId('text'), modifiers);

                expect(linkSpy).toHaveBeenCalledTimes(1);
                expect(linkSpy.mock.calls[0][0]).toMatchObject(modifiers);
                expect(linkSpy.mock.calls[0][0].defaultPrevented).toBe(true);
                expect(openSpy).toHaveBeenCalledWith(
                    'http://localhost/test',
                    '_blank',
                    'noopener',
                );
            },
        );

        it('should open link in new tab on middle click', () => {
            const linkAuxSpy = jest.fn();
            renderCardWithLink({ onAuxClick: linkAuxSpy });

            fireEvent(
                screen.getByTestId('text'),
                new MouseEvent('auxclick', { bubbles: true, button: 1 }),
            );

            expect(linkAuxSpy).toHaveBeenCalledTimes(1);
            expect(openSpy).toHaveBeenCalledWith(
                'http://localhost/test',
                '_blank',
                'noopener',
            );
        });

        it('should ignore right click', () => {
            renderCardWithLink();

            fireEvent(
                screen.getByTestId('text'),
                new MouseEvent('auxclick', { bubbles: true, button: 2 }),
            );

            expect(openSpy).not.toHaveBeenCalled();
        });

        it('should not open new tab on plain click', async () => {
            const user = userEvent.setup();
            const linkSpy = jest.fn((e: React.MouseEvent) =>
                e.preventDefault(),
            );
            renderCardWithLink({ onClick: linkSpy });

            await user.click(screen.getByTestId('text'));

            expect(linkSpy).toHaveBeenCalledTimes(1);
            expect(openSpy).not.toHaveBeenCalled();
        });

        it('should not open new tab when <CardAction /> prevents default', () => {
            renderCardWithLink({ onClick: e => e.preventDefault() });

            fireEvent.click(screen.getByTestId('text'), { metaKey: true });

            expect(openSpy).not.toHaveBeenCalled();
        });

        it('should not open new tab when clicking the link itself', () => {
            renderCardWithLink();

            fireEvent.click(screen.getByRole('link'), { metaKey: true });

            expect(openSpy).not.toHaveBeenCalled();
        });

        it('should forward modified click to a <CardAction /> button without opening a new tab', () => {
            const buttonSpy = jest.fn();
            render(
                <WithCardAction baseClassName="ffe-card-x">
                    {({ CardAction }: CardActionRenderProps) => (
                        <>
                            <CardAction as="button" onClick={buttonSpy}>
                                en knapp
                            </CardAction>
                            <p data-testid="text">Some text</p>
                        </>
                    )}
                </WithCardAction>,
            );

            fireEvent.click(screen.getByTestId('text'), { metaKey: true });

            expect(buttonSpy).toHaveBeenCalledTimes(1);
            expect(openSpy).not.toHaveBeenCalled();
        });
    });

    it('should set refs on <CardAction />', () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <WithCardAction baseClassName="ffe-card-x">
                {({ CardAction }: CardActionRenderProps) => (
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
                {({ CardAction }: CardActionRenderProps) => (
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
                {({ CardAction }: CardActionRenderProps) => (
                    <CardAction as="button">en knapp</CardAction>
                )}
            </WithCardAction>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList).toContain('ffe-card-x--clickable');
    });
});
