import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { CopyText } from './CopyText';

const writeText = jest.fn().mockResolvedValue(undefined);

Object.assign(navigator, {
    clipboard: { writeText },
});

const defaultProps = { children: 'kontonummer 1234 56 78901', label: 'Kopier kontonummer' };

const renderCopyText = (props = {}) =>
    render(<CopyText {...defaultProps} {...props} />);

describe('<CopyText />', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        writeText.mockClear();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('renders children inside the button', () => {
        renderCopyText();
        expect(
            screen.getByRole('button', { name: 'Kopier kontonummer' }),
        ).toHaveTextContent('kontonummer 1234 56 78901');
    });

    it('renders a button with the label prop as aria-label', () => {
        renderCopyText({ label: 'Kopier kontonummer' });
        expect(
            screen.getByRole('button', { name: 'Kopier kontonummer' }),
        ).toBeInTheDocument();
    });

    it('uses label prop as aria-label', () => {
        renderCopyText();
        expect(
            screen.getByRole('button', { name: 'Kopier kontonummer' }),
        ).toBeInTheDocument();
    });

    it('copies children text to clipboard on click', async () => {
        renderCopyText();
        await act(async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(writeText).toHaveBeenCalledWith('kontonummer 1234 56 78901');
    });

    it('copies copyText prop instead of children when provided', async () => {
        renderCopyText({ copyText: '12345678901' });
        await act(async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(writeText).toHaveBeenCalledWith('12345678901');
    });

    it('changes aria-label to copiedLabel after click', async () => {
        renderCopyText({ copiedLabel: 'Kopiert!' });
        await act(async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(
            screen.getByRole('button', { name: 'Kopiert!' }),
        ).toBeInTheDocument();
    });

    it('defaults copiedLabel to "Kopiert"', async () => {
        renderCopyText();
        await act(async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(
            screen.getByRole('button', { name: 'Kopiert' }),
        ).toBeInTheDocument();
    });

    it('viser Kopiert-feedback etter klikk', async () => {
        renderCopyText();
        await act(async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(screen.getAllByText('Kopiert')).toHaveLength(1);
    });

    it('resets to original label and clears live region after 2 seconds', async () => {
        renderCopyText();
        await act(async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        await act(async () => {
            jest.advanceTimersByTime(2000);
        });
        expect(
            screen.getByRole('button', { name: 'Kopier kontonummer' }),
        ).toBeInTheDocument();
    });

    it('adds ffe-copy-text class', () => {
        renderCopyText();
        expect(
            screen.getByRole('button').classList.contains('ffe-copy-text'),
        ).toBe(true);
    });

    it('merges custom className', () => {
        renderCopyText({ className: 'my-class' });
        const btn = screen.getByRole('button');
        expect(btn.classList.contains('ffe-copy-text')).toBe(true);
        expect(btn.classList.contains('my-class')).toBe(true);
    });

    it('videresender ref til button-elementet', () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(<CopyText {...defaultProps} ref={ref} />);
        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('bruker execCommand-fallback når Clipboard API mangler', async () => {
        const originalClipboard = (navigator as any).clipboard;
        delete (navigator as any).clipboard;
        const execCommand = jest.fn().mockReturnValue(true);
        (document as any).execCommand = execCommand;
        renderCopyText();
        await act(async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(execCommand).toHaveBeenCalledWith('copy');
        expect(
            screen.getByRole('button', { name: 'Kopiert' }),
        ).toBeInTheDocument();
        delete (document as any).execCommand;
        Object.assign(navigator, { clipboard: originalClipboard });
    });

    it('viser ikke Kopiert-feedback når writeText rejecter', async () => {
        writeText.mockRejectedValueOnce(new Error('permission denied'));
        const warnSpy = jest
            .spyOn(console, 'warn')
            .mockImplementation(() => {});
        renderCopyText();
        await act(async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(
            screen.getByRole('button', { name: 'Kopier kontonummer' }),
        ).toBeInTheDocument();
        expect(warnSpy).toHaveBeenCalled();
        warnSpy.mockRestore();
    });

    it('gjør ingenting og advarer når det ikke er noe å kopiere', async () => {
        const warnSpy = jest
            .spyOn(console, 'warn')
            .mockImplementation(() => {});
        render(
            <CopyText label="Kopier">
                <span>ikke-streng</span>
            </CopyText>,
        );
        await act(async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(writeText).not.toHaveBeenCalled();
        expect(warnSpy).toHaveBeenCalledWith(
            expect.stringContaining('ingenting å kopiere'),
        );
        warnSpy.mockRestore();
    });
});
