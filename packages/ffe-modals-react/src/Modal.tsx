import React, { useEffect, useImperativeHandle, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { CloseButton } from './CloseButton';
import { Locale } from './types';
import dialogPolyfill from 'dialog-polyfill';

export interface ModalProps extends React.ComponentPropsWithoutRef<'dialog'> {
    /** Id of modal heading */
    ariaLabelledby: string;
    /** Locale used */
    locale?: Locale;
    /** Called when dialog is closed */
    onClose?: () => void;
    /** Container for portal, default is document.body */
    portalContainer?: Parameters<typeof createPortal>[1];
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
            portalContainer = document.body,
            ...rest
        },
        ref,
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const dialogRef = useRef<HTMLDialogElement>(null);
        const htmlOverflowY = useRef(document.documentElement.style.overflowY);

        useImperativeHandle(ref, () => ({
            open: () => {
                setIsOpen(true);
                dialogRef.current?.showModal();
            },
            close: () => {
                dialogRef.current?.close();
            },
        }));

        useEffect(() => {
            const html = document.documentElement;
            const inShadow =
                dialogRef.current?.getRootNode() instanceof ShadowRoot;
            if (inShadow) {
                if (isOpen) {
                    htmlOverflowY.current = html.style.overflowY;
                    html.style.overflowY = 'hidden';
                } else if (!isOpen) {
                    html.style.overflowY = htmlOverflowY.current;
                }
            }
        }, [isOpen]);

        useEffect(() => {
            if (
                dialogRef.current &&
                typeof dialogRef.current.showModal !== 'function'
            ) {
                dialogPolyfill.registerDialog(dialogRef.current);
            }
        }, []);

        return createPortal(
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <dialog
                {...rest}
                ref={dialogRef}
                className={classnames('ffe-modal', className)}
                aria-labelledby={ariaLabelledby}
                onClick={event => {
                    const target = event.target as HTMLDialogElement;
                    if (target.nodeName === 'DIALOG') {
                        target.close();
                    }
                    onClick?.(event);
                }}
                onClose={() => {
                    onClose?.();
                    setIsOpen(false);
                }}
            >
                <div className="ffe-modal__body">
                    <CloseButton
                        onClick={() => dialogRef.current?.close()}
                        locale={locale}
                    />
                    {children}
                </div>
            </dialog>,
            portalContainer,
        );
    },
);
