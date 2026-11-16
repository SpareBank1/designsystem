import React from 'react';
import { Modal, type ModalHandle } from './Modal';
import { act, render, screen } from '@testing-library/react';

/*
const dialogPolyfill = jest.createMockFromModule('dialog-polyfill');
*/

describe('<Modal />', () => {
    /*    beforeAll(() => {
        // @ts-ignore
        dialogPolyfill.registerDialog = jest.fn();
    });*/

    it('should render with classes', () => {
        render(<Modal ariaLabelledby="heading-id" className="custom-class" />);

        const modal = screen.getByRole('dialog', { hidden: true });

        expect(modal.classList.contains('ffe-modal')).toBeTruthy();
        expect(modal.classList.contains('custom-class')).toBeTruthy();
    });

    it('should have close button', () => {
        render(<Modal ariaLabelledby="heading-id" className="custom-class" />);

        const closeButton = screen.getByRole('button', {
            hidden: true,
            name: 'Lukk',
        });

        expect(closeButton).toBeInTheDocument();
    });

    it('should set up heading', () => {
        const headingId = 'heading-id';

        render(
            <Modal ariaLabelledby={headingId} className="custom-class">
                <h2 id={headingId}>heading</h2>
            </Modal>,
        );

        const modal = screen.getByRole('dialog', { hidden: true });
        const heading = screen.getByRole('heading', {
            hidden: true,
            name: 'heading',
        });

        expect(modal.getAttribute('aria-labelledby')).toBe(
            heading.getAttribute('id'),
        );
    });

    describe('open() and close()', () => {
        // jsdom has no showModal() or close(). As in a browser, close() does nothing on a closed dialog, and
        // fires the close event in a task of its own.
        const showModal = jest.fn(function (this: HTMLDialogElement) {
            this.setAttribute('open', '');
        });
        const close = jest.fn(function (this: HTMLDialogElement) {
            if (!this.open) {
                return;
            }
            this.removeAttribute('open');
            setTimeout(() => this.dispatchEvent(new Event('close')));
        });
        const waitForCloseEvent = () =>
            act(() => new Promise(resolve => setTimeout(resolve)));

        beforeAll(() => {
            HTMLDialogElement.prototype.showModal = showModal;
            HTMLDialogElement.prototype.close = close;
        });
        afterAll(() => {
            // @ts-expect-error jsdom has no showModal() of its own
            delete HTMLDialogElement.prototype.showModal;
            // @ts-expect-error jsdom has no close() of its own
            delete HTMLDialogElement.prototype.close;
        });
        beforeEach(() => {
            showModal.mockClear();
            close.mockClear();
        });

        const renderModal = (onClose?: () => void) => {
            const ref = React.createRef<ModalHandle>();
            render(
                <Modal
                    ref={ref}
                    ariaLabelledby="heading-id"
                    onClose={onClose}
                />,
            );
            const dialog = screen.getByRole('dialog', {
                hidden: true,
            }) as HTMLDialogElement;
            return { ref, dialog };
        };

        it('ignores open() on an open dialog and close() on a closed dialog', async () => {
            const onClose = jest.fn();
            const { ref, dialog } = renderModal(onClose);

            act(() => ref.current?.open());
            act(() => ref.current?.open());
            expect(dialog.open).toBe(true);
            expect(showModal).toHaveBeenCalledTimes(1);

            act(() => ref.current?.close());
            act(() => ref.current?.close());
            await waitForCloseEvent();
            expect(dialog.open).toBe(false);
            expect(close).toHaveBeenCalledTimes(1);
            expect(onClose).toHaveBeenCalledTimes(1);
        });

        it('opens the dialog when open() comes before the close event of close()', async () => {
            const onClose = jest.fn();
            const { ref, dialog } = renderModal(onClose);
            act(() => ref.current?.open());

            act(() => {
                ref.current?.close();
                ref.current?.open();
            });
            await waitForCloseEvent();

            expect(dialog.open).toBe(true);
            expect(onClose).not.toHaveBeenCalled();
        });

        it('closes the dialog when close() comes right after open()', () => {
            const { ref, dialog } = renderModal();

            act(() => {
                ref.current?.open();
                ref.current?.close();
            });

            expect(dialog.open).toBe(false);
        });

        it('stays isOpen when onClose opens the modal again', async () => {
            const ref = React.createRef<ModalHandle>();
            const onClose = jest.fn(() => ref.current?.open());
            render(
                <Modal
                    ref={ref}
                    ariaLabelledby="heading-id"
                    onClose={onClose}
                />,
            );
            act(() => ref.current?.open());

            act(() => ref.current?.close());
            await waitForCloseEvent();

            expect(onClose).toHaveBeenCalledTimes(1);
            expect(ref.current?.isOpen).toBe(true);
        });
    });
});
