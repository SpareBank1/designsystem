import React from 'react';
import { NumberedList, NumberedListProps } from './NumberedList';
import { NumberedListItem } from './NumberedListItem';
import { render, screen } from '@testing-library/react';

const renderNumberedList = (props?: NumberedListProps) =>
    render(
        <NumberedList {...props}>
            <NumberedListItem>Firstly</NumberedListItem>
            <NumberedListItem>Secondly</NumberedListItem>
        </NumberedList>,
    );

describe('<NumberedList>', () => {
    it('renders without exploding', () => {
        renderNumberedList();
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    it('has the correct class', () => {
        renderNumberedList({ className: 'test-class' });
        const list = screen.getByRole('list');
        expect(list.classList.contains('ffe-numbered-list')).toBeTruthy();
        expect(list.classList.contains('test-class')).toBeTruthy();
    });
    it('passes props', () => {
        renderNumberedList({ id: 'that-id' });
        const list = screen.getByRole('list');
        expect(list.getAttribute('id')).toBe('that-id');
        expect(list.innerHTML).toContain('Firstly');
    });
    it('renders condensed modifier', () => {
        renderNumberedList({ condensed: true });
        const list = screen.getByRole('list');
        expect(
            list.classList.contains('ffe-numbered-list--condensed'),
        ).toBeTruthy();
    });
});
