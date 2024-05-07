import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { render, screen } from '@testing-library/react';
import { TaskButton, TaskButtonProps } from './TaskButton';
import { Optional } from './types';

const defaultProps = { children: 'Click me', icon: <span /> };
const renderTaskButton = (props?: Optional<TaskButtonProps, 'icon'>) =>
    render(<TaskButton {...defaultProps} {...props} />);

describe('<TaskButton />', () => {
    it('passes on any prop', () => {
        renderTaskButton({
            'aria-label': 'some label',
        });
        const button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toEqual('some label');
    });

    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderTaskButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });

    it('sends icon prop on as leftIcon prop', () => {
        renderTaskButton({
            icon: <Icon ariaLabel="icon" fileUrl="fileUrl" size="md" />,
        });
        const icon = screen.getByRole('img');
        expect(icon.getAttribute('style')).toContain('fileUrl');
    });
});
