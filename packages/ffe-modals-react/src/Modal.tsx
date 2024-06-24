import React, { useEffect, useImperativeHandle, useRef } from 'react';
import classnames from 'classnames';
import { CloseButton } from './CloseButton';
import { Locale } from './types';

export interface ModalProps extends React.ComponentPropsWithoutRef<'dialog'> {
    /** Id of modal heading */
    ariaLabelledby: string;
    /** Id of modal heading */
    locale?: Locale;
    /** Called when dialog is closed */
    onClose?: () => void;
}

export type ModalHandle = {
    readonly open: () => void;
    readonly close: () => void;
};

export const Modal = React.forwardRef<ModalHandle, ModalProps>(
    (
        {
            children,
            onClick,
            ariaLabelledby,
            className,
            locale = 'nb',
            onClose,
            ...rest
        },
        ref,
    ) => {
        const modalRef = useRef<HTMLDialogElement>(null);

        useImperativeHandle(ref, () => ({
            open: () => {
                modalRef.current?.showModal();
            },
            close: () => {
                modalRef.current?.close();
            },
        }));

        useEffect(() => {
            const handleClose = () => {
                onClose?.();
            };
            const modal = modalRef.current;

            modal?.addEventListener('close', handleClose);

            return () => {
                modal?.removeEventListener('close', handleClose);
            };
        }, [onClose]);

        return (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <dialog
                {...rest}
                ref={modalRef}
                className={classnames('ffe-modal', className)}
                aria-labelledby={ariaLabelledby}
                onClick={event => {
                    const target = event.target as HTMLDialogElement;
                    if (target.nodeName === 'DIALOG') {
                        target.close();
                    }
                    onClick?.(event);
                }}
            >
                <div className="ffe-modal__body">
                    <CloseButton
                        onClick={() => modalRef.current?.close()}
                        locale={locale}
                    />
                    {children}
                </div>
            </dialog>
        );
    },
);
