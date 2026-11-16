import React, { useEffect, useImperativeHandle, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { CloseButton } from './CloseButton';
import { Locale } from './types';

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
    readonly isOpen: boolean;
    readonly dialogRef: React.RefObject<HTMLDialogElement>;
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
            portalContainer,
            ...rest
        },
        ref,
    ) => {
        // SSR does not have access to document/window etc.
        const [isClient, setIsClient] = useState(false);
        const [isOpen, setIsOpen] = useState(false);
        const dialogRef = useRef<HTMLDialogElement>(null);
        const htmlOverflowY = useRef(
            isClient ? document.documentElement.style.overflowY : '',
        );

        useImperativeHandle(ref, () => ({
            open: () => {
                // Prevent opening an already open modal. Ask the dialog, not isOpen: isOpen becomes false
                // only in the close event, and the browser fires that event in a later task than close().
                if (dialogRef.current && !dialogRef.current.open) {
                    setIsOpen(true);
                    dialogRef.current.showModal();
                }
            },
            close: () => {
                // Prevent closing an already closed modal
                if (dialogRef.current?.open) {
                    dialogRef.current.close();
                }
            },
            // Expose isOpen state
            get isOpen() {
                return isOpen;
            },
            // Expose dialogRef directly
            dialogRef,
        }));

        useEffect(() => {
            setIsClient(true);
        }, []);

        useEffect(() => {
            const inShadow =
                isClient &&
                dialogRef.current?.getRootNode() instanceof ShadowRoot;
            if (inShadow) {
                const html = document.documentElement;
                if (isOpen) {
                    htmlOverflowY.current = html.style.overflowY;
                    html.style.overflowY = 'hidden';
                } else if (!isOpen) {
                    html.style.overflowY = htmlOverflowY.current;
                }
            }
        }, [isClient, isOpen]);

        useEffect(() => {
            if (isOpen && dialogRef.current) {
                dialogRef.current.focus();
            }
        }, [isOpen]);

        useEffect(() => {
            if (
                isClient &&
                dialogRef.current &&
                typeof dialogRef.current.showModal !== 'function'
            ) {
                import('dialog-polyfill').then(
                    ({ default: dialogPolyfill }) => {
                        if (dialogRef.current) {
                            dialogPolyfill.registerDialog(dialogRef.current);
                        }
                    },
                );
            }
        }, [isClient]);

        return isClient
            ? createPortal(
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
                          // A close event from an earlier close() still fires when the dialog has been
                          // opened again in the meantime. The dialog is not closed then.
                          if (dialogRef.current?.open) {
                              return;
                          }
                          // Before onClose, so that isOpen stays true when onClose opens the modal again.
                          setIsOpen(false);
                          onClose?.();
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
                  portalContainer ?? document.body,
              )
            : null;
    },
);
