import React from 'react';
import { Tag } from './Tag';
import { render, screen } from '@testing-library/react';
import { Icon } from '@sb1/ffe-icons-react';

describe('<Tag/>', () => {
    it('should render a tag', () => {
        render(<Tag variant="info">En tag</Tag>);
        const tag = screen.getByText('En tag');
        expect(tag.classList.contains('ffe-tag')).toBeTruthy();
    });
    it('should render a tag with className', () => {
        render(<Tag className="custom-class">En tag</Tag>);
        const tag = screen.getByText('En tag');
        expect(tag.classList.contains('custom-class')).toBeTruthy();
    });
    describe('Variants', () => {
        it('should render a neutral tag', () => {
            render(<Tag variant="neutral">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(
                tag.classList.contains('ffe-tag--neutral-emphasis'),
            ).toBeTruthy();
        });

        it('should render a critical tag', () => {
            render(<Tag variant="critical">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(
                tag.classList.contains('ffe-tag--critical-emphasis'),
            ).toBeTruthy();
        });

        it('should render a success tag', () => {
            render(<Tag variant="success">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(
                tag.classList.contains('ffe-tag--success-emphasis'),
            ).toBeTruthy();
        });

        it('should render a warning tag', () => {
            render(<Tag variant="warning">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(
                tag.classList.contains('ffe-tag--warning-emphasis'),
            ).toBeTruthy();
        });

        it('should render a tip tag', () => {
            render(<Tag variant="tip">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(
                tag.classList.contains('ffe-tag--tip-emphasis'),
            ).toBeTruthy();
        });

        it('should render an info tag', () => {
            render(<Tag variant="info">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(
                tag.classList.contains('ffe-tag--info-emphasis'),
            ).toBeTruthy();
        });
    });

    describe('Types', () => {
        it('should render an emphasis tag', () => {
            render(<Tag type="emphasis">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(
                tag.classList.contains('ffe-tag--neutral-emphasis'),
            ).toBeTruthy();
        });

        it('should render a subtle tag', () => {
            render(<Tag type="subtle">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(
                tag.classList.contains('ffe-tag--neutral-subtle'),
            ).toBeTruthy();
        });
    });

    describe('Icon styling', () => {
        it('should render a tag with an icon with correct color', () => {
            const warning =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik0xMTEuOTEtMTQ0cS0xMC45MSAwLTE5LjEzLTQuOTVRODQuNTctMTUzLjkgODAtMTYycS01LTgtNC41LTE4dDUuNS0xOWwzNjgtNjE0cTUtOSAxMy41My0xMyA4LjUyLTQgMTcuNS00IDguOTcgMCAxNy40NyA0IDguNSA0IDEzLjUgMTNsMzY4IDYxNHE1IDkgNS41IDE5dC00LjUgMThxLTUgOC0xMyAxM3QtMTguOTEgNUgxMTEuOTFaTTE3NS0yMTZoNjEwTDQ4MC03MjQgMTc1LTIxNlptMzA0Ljc5LTQ4cTE1LjIxIDAgMjUuNzEtMTAuMjl0MTAuNS0yNS41cTAtMTUuMjEtMTAuMjktMjUuNzF0LTI1LjUtMTAuNXEtMTUuMjEgMC0yNS43MSAxMC4yOXQtMTAuNSAyNS41cTAgMTUuMjEgMTAuMjkgMjUuNzF0MjUuNSAxMC41Wm0wLTEyMHExNS4yMSAwIDI1LjcxLTEwLjM1VDUxNi00MjB2LTEyMHEwLTE1LjMtMTAuMjktMjUuNjVRNDk1LjQyLTU3NiA0ODAuMjEtNTc2dC0yNS43MSAxMC4zNVE0NDQtNTU1LjMgNDQ0LTU0MHYxMjBxMCAxNS4zIDEwLjI5IDI1LjY1UTQ2NC41OC0zODQgNDc5Ljc5LTM4NFptLjIxLTg2WiIvPjwvc3ZnPg==';

            render(
                <Tag>
                    <Icon fileUrl={warning} size="sm" aria-hidden={false} />
                    Ikke betalt
                </Tag>,
            );
            const icon = screen.getByRole('img');
            const tag = screen.getByText('Ikke betalt');

            const iconColor = getComputedStyle(icon).color;
            const tagColor = getComputedStyle(tag).color;

            expect(iconColor).toBe(tagColor);
        });
    });

    describe('Sizes', () => {
        it('should render a tag with size sm', () => {
            render(<Tag size="sm">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(tag.classList.contains('ffe-tag--sm')).toBeTruthy();
        });

        it('should render a tag with size lg', () => {
            render(<Tag size="lg">En tag</Tag>);
            const tag = screen.getByText('En tag');
            expect(tag.classList.contains('ffe-tag--lg')).toBeTruthy();
        });
    });
});
