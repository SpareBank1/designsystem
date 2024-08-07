import React from 'react';
import { CardBase } from './CardBase';
import { render, screen, within } from '@testing-library/react';

const TEST_ID = 'test-id';

describe('<CardBase/>', () => {
    it('should render an a element with correct class and children inside', () => {
        render(
            <CardBase data-testid={TEST_ID}>
                <div>Hello world</div>
            </CardBase>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-card-base')).toBeTruthy();
        expect(within(card).getByText('Hello world')).toBeInTheDocument();
    });

    it('should render with custom class', () => {
        render(
            <CardBase data-testid={TEST_ID} className="my-custom-class">
                <div />
            </CardBase>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('my-custom-class')).toBeTruthy();
    });

    it('should set bgColor-prop correctly', () => {
        render(
            <CardBase data-testid={TEST_ID} bgColor="frost-30">
                <div />
            </CardBase>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(
            card.classList.contains('ffe-card-base--bg-frost-30'),
        ).toBeTruthy();
    });
    it('should set bgDarkmodeColor-prop correctly', () => {
        render(
            <CardBase data-testid={TEST_ID} bgDarkmodeColor="natt">
                <div />
            </CardBase>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(
            card.classList.contains('ffe-card-base--dm-bg-natt'),
        ).toBeTruthy();
    });
    it('should set shadow-prop correctly', () => {
        render(
            <CardBase data-testid={TEST_ID} shadow={true}>
                <div />
            </CardBase>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-card-base--shadow')).toBeTruthy();
    });
    it('should set noMargin-prop correctly', () => {
        render(
            <CardBase data-testid={TEST_ID} noMargin={true}>
                <div />
            </CardBase>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(
            card.classList.contains('ffe-card-base--no-margin'),
        ).toBeTruthy();
    });
    it('should set textCenter-prop correctly', () => {
        render(
            <CardBase data-testid={TEST_ID} textCenter={true}>
                <div />
            </CardBase>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(
            card.classList.contains('ffe-card-base--text-center'),
        ).toBeTruthy();
    });

    it('should render as wished element', () => {
        render(
            <CardBase as="li">
                <div />
            </CardBase>,
        );
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    });

    it('should set ref', () => {
        const ref = React.createRef<HTMLLIElement>();
        render(
            <CardBase as="li" ref={ref}>
                <div />
            </CardBase>,
        );
        const listitem = screen.getByRole('listitem');
        expect(listitem).toBe(ref.current);
    });
});
