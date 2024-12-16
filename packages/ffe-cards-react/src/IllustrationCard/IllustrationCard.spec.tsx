import React from 'react';
import { IllustrationCard } from './IllustrationCard';
import { render, screen } from '@testing-library/react';
import { CardRenderProps } from '../types';

const children = <div>Hello world</div>;
const TEST_ID = 'test-id';
const illustration = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="207"
        height="151"
        viewBox="0 0 207 151"
        fill="none"
        aria-hidden={true}
    >
        <path
            fill="#EE8D9C"
            d="m87.248 85.454-1.352-.767c-.653-.366-1.31-.72-1.963-1.067-1.245-.66-2.49-1.301-3.699-2.002-.21-.126-.455-.108-.538.03-.09.138.012.353.227.491 1.209.75 2.442 1.445 3.663 2.158.634.371 1.263.737 1.885 1.12.437.27.868.546 1.287.828l.293.204c.921.533 1.82 1.138 2.561 1.858.365.36.707.755.868 1.156.048.102.06.198.09.294.006.09.018.204.006.198-.006.006.006 0-.042.024a.807.807 0 0 1-.24.06c-.287.036-.628-.018-.969-.066-.227-.036-.455-.054-.688-.102a26.416 26.416 0 0 1-3.765-.995c-.891-.3-1.765-.635-2.62-1.019a37.62 37.62 0 0 1-3.185-1.6c-.21-.12-.449-.102-.532.036-.084.138.012.347.221.48 1.03.659 2.137 1.222 3.232 1.708.868.39 1.76.737 2.657 1.072 1.25.456 2.514.882 3.83 1.187.228.06.467.102.7.156.39.042.79.102 1.245.042.162-.024.341-.066.527-.162a.956.956 0 0 0 .473-.563c.072-.27.024-.432.006-.606a2.808 2.808 0 0 0-.15-.48c-.263-.599-.67-1.024-1.077-1.432-.826-.79-1.736-1.438-2.64-2.073l-.31-.168Z"
        />
    </svg>
);

describe('IllustrationCard', () => {
    it('should render correct class and contain a div with body class', () => {
        render(
            <IllustrationCard data-testid={TEST_ID} img={illustration}>
                {children}
            </IllustrationCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-illustration-card')).toBeTruthy();
        expect(card.querySelector('.ffe-illustration-card__body')).toBeTruthy();
    });

    it('should add modifying classes when modifiers are given', () => {
        render(
            <IllustrationCard
                data-testid={TEST_ID}
                condensed={true}
                img={illustration}
            >
                {children}
            </IllustrationCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-illustration-card')).toBeTruthy();
        expect(
            card.classList.contains('ffe-illustration-card--condensed'),
        ).toBeTruthy();
    });

    it('should render children as a function', () => {
        render(
            <IllustrationCard
                data-testid={TEST_ID}
                img={illustration}
                children={(Components: CardRenderProps) => (
                    <Components.Text>Hello world</Components.Text>
                )}
            />,
        );
        const card = screen.getByTestId(TEST_ID);
        const p = card.querySelector('p');
        expect(p?.classList.contains('ffe-card-body__text')).toBeTruthy();
        expect(p?.textContent).toEqual('Hello world');
    });

    it('should render my custom class', () => {
        render(
            <IllustrationCard
                data-testid={TEST_ID}
                img={illustration}
                className="my-custom-class"
            >
                {children}
            </IllustrationCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-illustration-card')).toBeTruthy();
        expect(card.classList.contains('my-custom-class')).toBeTruthy();
    });

    it('should render as wished element', () => {
        render(
            <IllustrationCard as="li" img={illustration}>
                {children}
            </IllustrationCard>,
        );
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    });

    it('should set ref', () => {
        const ref = React.createRef<HTMLLIElement>();
        render(
            <IllustrationCard as="li" ref={ref} img={illustration}>
                {children}
            </IllustrationCard>,
        );
        const listitem = screen.getByRole('listitem');
        expect(listitem).toBe(ref.current);
    });

    it('should render illustration on the right when modifier iconPosition="right', () => {
        render(
            <IllustrationCard
                as="li"
                illustrationPosition="right"
                img={illustration}
            >
                {children}
            </IllustrationCard>,
        );
        const card = screen.getByRole('listitem');
        const bodyElement = card.querySelector(
            '.ffe-illustration-card__body',
        ) as Element;
        const illustrationElement = card.querySelector(
            '.ffe-illustration-card__illustration',
        ) as Element;
        expect(card.classList.contains('ffe-illustration-card')).toBeTruthy();
        expect(
            card.classList.contains('ffe-illustration-card--right'),
        ).toBeTruthy();

        expect(
            bodyElement?.compareDocumentPosition(illustrationElement) &
                Node.DOCUMENT_POSITION_FOLLOWING,
        ).toBeTruthy();
    });
});
