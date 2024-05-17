import React from 'react';
import { CheckList, CheckListProps } from './CheckList';
import { CheckListItem } from './CheckListItem';
import { render, screen } from '@testing-library/react';

const renderCheckList = (props?: CheckListProps) =>
    render(
        <CheckList {...props}>
            <CheckListItem>Firstly</CheckListItem>
            <CheckListItem>Secondly</CheckListItem>
        </CheckList>,
    );

describe('<CheckList>', () => {
    it('has the correct class', () => {
        renderCheckList({ className: 'test-class' });
        const list = screen.getByRole('list');
        expect(list.classList.contains('ffe-check-list')).toBeTruthy();
        expect(list.classList.contains('test-class')).toBeTruthy();
    });
    it('passes props', () => {
        renderCheckList({ id: 'that-id' });
        const list = screen.getByRole('list');
        expect(list.getAttribute('id')).toBe('that-id');
        expect(list.innerHTML).toContain('Firstly');
    });
    it('sets the correct class when columns prop is 2', () => {
        renderCheckList({ columns: 2 });
        const list = screen.getByRole('list');
        expect(list.classList.contains('ffe-check-list--two-columns')).toBe(
            true,
        );
    });
    it('only supports 1 and 2 columns', () => {
        renderCheckList({ columns: 3 as 2 });
        const list = screen.getByRole('list');
        expect(list.classList.contains('ffe-check-list--two-columns')).toBe(
            false,
        );
    });
});

describe('<CheckListItem />', () => {
    it('render correct icon isCross false', () => {
        render(<CheckListItem>An item</CheckListItem>);
        const icon = screen.getByRole('img');
        expect(icon.classList.contains('ffe-check-list__icon--cross')).toBe(
            false,
        );
        expect(icon.classList.contains('ffe-check-list__icon--check')).toBe(
            true,
        );
    });

    it('render correct icon isCross true', () => {
        render(<CheckListItem isCross={true}>An item</CheckListItem>);
        const icon = screen.getByRole('img');
        expect(icon.classList.contains('ffe-check-list__icon--cross')).toBe(
            true,
        );
        expect(icon.classList.contains('ffe-check-list__icon--check')).toBe(
            false,
        );
    });
});
