import React from 'react';
import { BaseSelector, BaseSelectorProps } from './BaseSelector';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type Suggestion = { name: string };

const getSuggestions = (): Suggestion[] => {
    return [{ name: '1' }, { name: '2' }, { name: '3' }] as const;
};

const propsBaseSelector = (suggestions = getSuggestions()) => {
    return {
        suggestions,
        renderSuggestion: () => <h1>hei</h1>,
        onSuggestionSelect: () => {},
        value: '',
        locale: 'nb' as const,
        shouldSelectHighlightedOnTab: true,
        shouldHideSuggestionsOnReset: true,
        id: 'account-selector',
    };
};

const renderBaseSelector = (props?: Partial<BaseSelectorProps<Suggestion>>) => {
    return render(<BaseSelector {...propsBaseSelector()} {...props} />);
};

describe('<BaseSelector> methods', () => {
    it('should show suggestions on input change', async () => {
        const user = userEvent.setup();
        const value = 't';
        const onChangeSpy = jest.fn();
        const onSuggestionListChangeSpy = jest.fn();
        renderBaseSelector({
            onChange: onChangeSpy,
            onSuggestionListChange: onSuggestionListChangeSpy,
        });
        const input = screen.getByRole('textbox');
        await act(async () => {
            await user.type(input, value);
        });
        expect(onChangeSpy).toHaveBeenCalledWith(value);
        expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should show suggestions on input focus', async () => {
        const user = userEvent.setup();
        const onFocusSpy = jest.fn();
        renderBaseSelector({
            onFocus: onFocusSpy,
        });
        const input = screen.getByRole('textbox');
        await act(async () => {
            await user.type(input, 'value');
        });
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should show suggestions on input click', async () => {
        const user = userEvent.setup();
        const onClickSpy = jest.fn();
        renderBaseSelector({
            onClick: onClickSpy,
        });
        const input = screen.getByRole('textbox');
        await act(async () => {
            await user.click(input);
        });
        expect(onClickSpy).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should hide suggestions on input blur', async () => {
        const user = userEvent.setup();
        const onBlurSpy = jest.fn();
        renderBaseSelector({ onBlur: onBlurSpy });
        const input = screen.getByRole('textbox');
        await act(async () => {
            await user.type(input, 'value');
            await user.tab();
        });
        expect(onBlurSpy).toHaveBeenCalledTimes(1);
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should hide suggestions on input reset', async () => {
        const user = userEvent.setup();
        const onResetSpy = jest.fn();
        renderBaseSelector({
            onReset: onResetSpy,
        });
        const input = screen.getByRole('textbox');
        await act(async () => {
            await user.type(input, 'value{Escape}');
        });
        expect(onResetSpy).toHaveBeenCalledTimes(1);
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should show suggestions on input reset', async () => {
        const user = userEvent.setup();
        const onResetSpy = jest.fn();
        renderBaseSelector({
            onReset: onResetSpy,
            shouldHideSuggestionsOnReset: false,
        });
        const input = screen.getByRole('textbox');
        await act(async () => {
            await user.type(input, 'value{Escape}');
        });
        expect(onResetSpy).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should call onInputReset on reset button mousedown', async () => {
        const user = userEvent.setup();
        const onResetSpy = jest.fn();

        renderBaseSelector({
            value: 'notempty',
            onReset: onResetSpy,
        });

        const resetButton = screen.getByRole('button', { name: 'Nullstill' });
        await act(async () => {
            await user.click(resetButton);
        });
        expect(onResetSpy).toHaveBeenCalled();
    });

    it('should call onFocus on expandOrCollapse button mousedown when suggestions not showing', async () => {
        const user = userEvent.setup();
        const onFocusSpy = jest.fn();
        renderBaseSelector({ onFocus: onFocusSpy });
        const expandButton = screen.getByRole('button', {
            name: 'Vis kontoliste',
        });
        await act(async () => {
            await user.click(expandButton);
        });
        expect(onFocusSpy).toHaveBeenCalled();
    });

    it('should call onBlur on expandOrCollapse button mousedown when suggestions are showing', async () => {
        const user = userEvent.setup();
        const onBlurSpy = jest.fn();

        renderBaseSelector({ onBlur: onBlurSpy });
        const expandButton = screen.getByRole('button', {
            name: 'Vis kontoliste',
        });
        await act(async () => {
            await user.click(expandButton);
            await user.tab();
        });
        expect(onBlurSpy).toHaveBeenCalled();
    });

    it('should call onBlur on input blur', async () => {
        const user = userEvent.setup();
        const onBlurSpy = jest.fn();

        renderBaseSelector({ onBlur: onBlurSpy });
        const input = screen.getByRole('textbox');
        await act(async () => {
            await user.click(input);
            await user.tab();
        });
        expect(onBlurSpy).toHaveBeenCalled();
    });
});

describe('<BaseSelector> keyboard navigation', () => {
    it('should show suggestions on ALT + DOWN', () => {
        renderBaseSelector();
        const input = screen.getByRole('textbox');
        fireEvent.keyDown(input, {
            key: 'ArrowDown',
            altKey: true,
        });
        expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should hide suggestions on ALT + UP', () => {
        renderBaseSelector();
        const input = screen.getByRole('textbox');
        fireEvent.keyDown(input, {
            key: 'ArrowUp',
            altKey: true,
        });
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should reset input on ESC', () => {
        const onResetSpy = jest.fn();
        renderBaseSelector({ onReset: onResetSpy });
        const input = screen.getByRole('textbox');

        fireEvent.keyDown(input, {
            key: 'Escape',
        });
        expect(onResetSpy).toHaveBeenCalledTimes(1);
    });
});

describe('<BaseSelector> focus', () => {
    it('should maintain focus on suggestionClick', async () => {
        const onBlurSpy = jest.fn();
        const onFocusSpy = jest.fn();
        renderBaseSelector({
            onBlur: onBlurSpy,
            onFocus: onFocusSpy,
        });
        const input = screen.getByRole('textbox');
        fireEvent.focus(input);
        const [option] = screen.getAllByRole('option');
        fireEvent.click(option);
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(onBlurSpy).not.toHaveBeenCalled();
    });

    it('should maintain focus on resetClick', () => {
        const onBlurSpy = jest.fn();
        const onFocusSpy = jest.fn();
        renderBaseSelector({
            onBlur: onBlurSpy,
            onFocus: onFocusSpy,
        });
        const input = screen.getByRole('textbox');
        fireEvent.focus(input);
        const resetButton = screen.getByRole('button', {
            name: 'Skjul kontoliste',
        });
        fireEvent.click(resetButton);

        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(onBlurSpy).not.toHaveBeenCalled();
    });

    it('should not show suggestions on focus', () => {
        const onFocusSpy = jest.fn();
        renderBaseSelector({
            shouldShowSuggestionsOnFocus: false,
            onFocus: onFocusSpy,
        });
        const input = screen.getByRole('textbox');
        fireEvent.focus(input);
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
});
