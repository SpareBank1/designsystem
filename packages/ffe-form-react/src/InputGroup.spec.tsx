import React from 'react';
import { InputGroup, InputGroupProps } from './InputGroup';
import { Input } from './Input';
import { Label } from './Label';
import { Tooltip } from './Tooltip';
import { ErrorFieldMessage, SuccessFieldMessage } from './message';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const TEST_ID = 'input-group';
const defaultProps = { label: 'label', children: <Input /> };
const renderInputGroup = (props?: Partial<InputGroupProps>) =>
    render(<InputGroup {...defaultProps} {...props} data-testid={TEST_ID} />);

describe('<InputGroup>', () => {
    it('renders a div.ffe-input-group', () => {
        renderInputGroup();
        const inputGroup = screen.getByTestId(TEST_ID);
        expect(inputGroup.tagName).toBe('DIV');
        expect(inputGroup.classList.contains('ffe-input-group')).toBeTruthy();
        expect(
            inputGroup.classList.contains('ffe-input-group--message'),
        ).toBeFalsy();
    });

    it('renders the given child', () => {
        renderInputGroup();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders a Label if a string passed from the label prop', () => {
        const { container } = renderInputGroup({ label: 'custom label' });
        const label = container.querySelector('label');
        expect(label?.textContent).toMatch(/custom label/);
    });

    it('renders a Label with htmlFor set to the same generated value of the children input id', () => {
        const { container } = renderInputGroup();
        const inputId = screen.getByRole('textbox').getAttribute('id');
        const htmlFor = container.querySelector('label')?.getAttribute('for');

        expect(htmlFor).toBe(inputId);
    });

    it('renders a Label with htmlFor set to the same value of the inputId', () => {
        const { container } = renderInputGroup({ inputId: 'my_id' });
        const inputId = screen.getByRole('textbox').getAttribute('id');
        const htmlFor = container.querySelector('label')?.getAttribute('for');

        expect(inputId).toBe('my_id');
        expect(htmlFor).toBe(inputId);
    });

    it('renders a Tooltip if a string is passed as tooltip prop', () => {
        render(<InputGroup {...defaultProps} tooltip="custom tooltip" />);
        const tooltip = screen.getByRole('button', { name: 'Vis hjelpetekst' });
        expect(tooltip).toBeInTheDocument();
    });

    it('renders an ErrorFieldMessage and sets aria-invalid and aria-describedby if a string is passed as fieldMessage', () => {
        renderInputGroup({ fieldMessage: 'such error' });
        const inputGroup = screen.getByTestId(TEST_ID);
        const errorFieldMessage = screen.getByRole('alert');
        const input = screen.getByRole('textbox');

        expect(
            inputGroup.classList.contains('ffe-input-group--message'),
        ).toBeTruthy();
        expect(errorFieldMessage.textContent).toEqual('such error');
        expect(input.getAttribute('aria-invalid')).toBe('true');
        expect(input.getAttribute('aria-describedby')).toContain(
            errorFieldMessage.getAttribute('id'),
        );
    });

    it('renders a Label component if passed a label prop', () => {
        const { container } = renderInputGroup({
            label: <Label>Label text</Label>,
        });

        expect(container.querySelector('label')?.textContent).toBe(
            'Label text',
        );
    });

    it('renders a Tooltip if passed as tooltip prop', () => {
        render(
            <InputGroup
                {...defaultProps}
                tooltip={<Tooltip>Tooltip text</Tooltip>}
            />,
        );
        const tooltip = screen.getByRole('button', { name: 'Vis hjelpetekst' });
        expect(tooltip).toBeInTheDocument();
    });

    it('renders a ErrorFieldMessage and sets aria-invalid and aria-describedby if passed as fieldMessage prop', () => {
        renderInputGroup({
            fieldMessage: <ErrorFieldMessage>Some error</ErrorFieldMessage>,
        });

        const inputGroup = screen.getByTestId(TEST_ID);
        const errorFieldMessage = screen.getByRole('alert');
        const input = screen.getByRole('textbox');

        expect(errorFieldMessage.textContent).toBe('Some error');
        expect(
            inputGroup.classList.contains('ffe-input-group--message'),
        ).toBeTruthy();
        expect(input.getAttribute('aria-invalid')).toBe('true');
        expect(input.getAttribute('aria-describedby')).toContain(
            errorFieldMessage.getAttribute('id'),
        );
    });

    it('connects an ErrorFieldMessage that specifies its own id to the correct input field', () => {
        renderInputGroup({
            fieldMessage: (
                <ErrorFieldMessage id="best-id">Some error</ErrorFieldMessage>
            ),
        });

        const errorFieldMessageId = screen
            .getByRole('alert')
            .getAttribute('id');
        const input = screen.getByRole('textbox');
        expect(errorFieldMessageId).toBe('best-id');
        expect(input.getAttribute('aria-describedby')).toContain(
            errorFieldMessageId,
        );
    });

    it('renders a SuccessFieldMessage and sets aria-describedby but not not aria-invalid if passed as fieldMessage prop', () => {
        renderInputGroup({
            fieldMessage: (
                <SuccessFieldMessage role="alert">
                    Some success
                </SuccessFieldMessage>
            ),
        });
        const inputGroup = screen.getByTestId(TEST_ID);

        const successFieldMessage = screen.getByRole('alert');
        expect(successFieldMessage.textContent).toBe('Some success');
        expect(
            inputGroup.classList.contains('ffe-input-group--message'),
        ).toBeTruthy();
        const input = screen.getByRole('textbox');
        expect(input.getAttribute('aria-invalid')).toBe('false');
        expect(input.getAttribute('aria-describedby')).toContain(
            successFieldMessage.getAttribute('id'),
        );
    });

    it('throws error when receiving multiple children', () => {
        const consoleErrorMock = jest
            .spyOn(console, 'error')
            .mockImplementation();

        const renderWithTooManyChildren = () =>
            renderInputGroup({
                children: [
                    <span key="1">About...</span>,
                    <Input key="2" />,
                    <span key="3"> moneys</span>,
                ],
            });

        expect(renderWithTooManyChildren).toThrow(
            /This element does not support more than one child/,
        );

        consoleErrorMock.mockRestore();
    });

    it('throws error when receiving a <Tooltip /> and onTooltipToggle is used', () => {
        const consoleErrorMock = jest
            .spyOn(console, 'error')
            .mockImplementation();
        const renderWithError = () =>
            renderInputGroup({
                tooltip: <Tooltip>Message</Tooltip>,
                onTooltipToggle: f => f,
            });

        expect(renderWithError).toThrow(
            /Only use the "onTooltipToggle" prop if you're not sending a component/,
        );
        consoleErrorMock.mockRestore();
    });

    it('renders a <Tooltip /> with onTooltipToggle as an onClick if tooltip is true', async () => {
        const user = userEvent.setup();
        const onTooltipToggle = jest.fn();
        renderInputGroup({
            tooltip: true,
            onTooltipToggle,
        });
        const tooltip = screen.getByRole('button');
        await user.click(tooltip);
        expect(onTooltipToggle).toHaveBeenCalled();
    });

    it('supplies id and aria-invalid to function when child is a function', () => {
        renderInputGroup({
            children: props => (
                <div>
                    <span>so cool</span>
                    <Input {...props} />
                    <span> easy stuff</span>
                </div>
            ),
        });

        const input = screen.getByRole('textbox');

        expect(input.getAttribute('id')).toHaveLength(42);
        expect(input.getAttribute('aria-invalid')).toBe('false');
    });

    it('renders a static tooltip and adds aria-describedby if description is set', () => {
        const { container } = renderInputGroup({
            description: 'description',
        });

        const input = screen.getByRole('textbox');
        const description = container.querySelector(
            '.ffe-input-group__description',
        );

        expect(description?.textContent).toBe('description');
        expect(input.getAttribute('aria-describedby')).toContain(
            description?.getAttribute('id'),
        );
    });

    it('throws if both tooltip and description is set', () => {
        const consoleErrorMock = jest
            .spyOn(console, 'error')
            .mockImplementation();
        expect(() =>
            renderInputGroup({ description: 'asda', tooltip: 'asdsad' }),
        ).toThrow(
            'Don\'t use both "tooltip" and "description" on an <InputGroup />, pick one of them',
        );
        consoleErrorMock.mockRestore();
    });

    it('sets aria-describedby with two ids when both fieldMessage and description are defined', () => {
        const { container } = renderInputGroup({
            description: 'description',
            fieldMessage: 'field message',
        });
        const input = screen.getByRole('textbox');
        const fieldMessageId = screen.getByRole('alert').getAttribute('id');
        const descriptionId = container
            .querySelector('.ffe-small-text')
            ?.getAttribute('id');

        expect(input.getAttribute('aria-describedby')).toBe(
            `${fieldMessageId} ${descriptionId}`,
        );
    });

    it('does not set aria-describedby when neither fieldMessage or description is defined', () => {
        renderInputGroup();
        const input = screen.getByRole('textbox');
        expect(input.getAttribute('aria-describedby')).toBeNull();
    });

    it('adds aria-describedby when adding fieldMessage on second render', () => {
        const { rerender } = render(<InputGroup {...defaultProps} />);
        const input = screen.getByRole('textbox');
        expect(input.getAttribute('aria-describedby')).toBeNull();
        rerender(<InputGroup {...defaultProps} fieldMessage="field message" />);

        expect(input.getAttribute('aria-describedby')).toBe(
            screen.getByRole('alert').getAttribute('id'),
        );
    });

    it('adds aria-describedby when adding description on second render', () => {
        const { rerender, container } = render(
            <InputGroup {...defaultProps} />,
        );
        const input = screen.getByRole('textbox');
        expect(input.getAttribute('aria-describedby')).toBeNull();
        rerender(<InputGroup {...defaultProps} description="description" />);

        expect(input.getAttribute('aria-describedby')).toBe(
            container
                .querySelector('.ffe-input-group__description')
                ?.getAttribute('id'),
        );
    });
});
