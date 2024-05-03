import React from 'react';
import StylizedNumberedList from './StylizedNumberedList';
import StylizedNumberedListItem from './StylizedNumberedListItem';
import { render, screen } from '@testing-library/react';

const renderStylizedNumberedList = props =>
    render(
        <StylizedNumberedList {...props}>
            <StylizedNumberedListItem>Firstly</StylizedNumberedListItem>
            <StylizedNumberedListItem>Secondly</StylizedNumberedListItem>
        </StylizedNumberedList>,
    );

describe('<StylizedNumberedList>', () => {
    it('renders without exploding', () => {
        renderStylizedNumberedList();
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    it('has the correct class', () => {
        renderStylizedNumberedList({ className: 'test-class' });
        const list = screen.getByRole('list');
        expect(
            list.classList.contains('ffe-stylized-numbered-list'),
        ).toBeTruthy();
        expect(list.classList.contains('test-class')).toBeTruthy();
    });
    it('passes props', () => {
        renderStylizedNumberedList({ id: 'that-id' });
        const list = screen.getByRole('list');
        expect(list.getAttribute('id')).toBe('that-id');
        expect(list.innerHTML).toContain('Firstly');
    });
});
