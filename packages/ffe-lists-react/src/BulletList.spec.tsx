import React from 'react';
import { BulletList, BulletListProps } from './BulletList';
import { BulletListItem } from './BulletListItem';
import { render, screen } from '@testing-library/react';

const renderBulletList = (props?: Partial<BulletListProps>) =>
    render(
        <BulletList {...props}>
            <BulletListItem>Firstly</BulletListItem>
            <BulletListItem>Secondly</BulletListItem>
        </BulletList>,
    );

describe('<BulletList>', () => {
    it('renders without exploding', () => {
        renderBulletList();
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    it('has the correct class', () => {
        renderBulletList({ className: 'test-class' });
        const list = screen.getByRole('list');
        expect(list.classList.contains('ffe-bullet-list')).toBeTruthy();
        expect(list.classList.contains('test-class')).toBeTruthy();
    });
    it('passes props', () => {
        renderBulletList({ id: 'that-id' });
        const list = screen.getByRole('list');
        expect(list.getAttribute('id')).toBe('that-id');
        expect(list.innerHTML).toContain('Firstly');
    });
    it('renders condensed modifier', () => {
        renderBulletList({ condensed: true });
        const condensedList = screen.getByRole('list');
        expect(
            condensedList.classList.contains('ffe-bullet-list--condensed'),
        ).toBeTruthy();
    });
});
