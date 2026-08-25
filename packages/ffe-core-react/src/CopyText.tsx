import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

export interface CopyTextProps
    extends React.ComponentPropsWithoutRef<'button'> {
    /** Teksten som kopieres. Standard: children hvis det er en streng. */
    copyText?: string;
    /** Beskrivende label for hva som kopieres, f.eks. "Kopier kontonummer". Påkrevd. */
    label: string;
    /** aria-label og live-region-tekst etter kopiering */
    copiedLabel?: string;
}

const CopyIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 -960 960 960"
        width="1em"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
    >
        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-520q0-17 11.5-28.5T160-720q17 0 28.5 11.5T200-680v520h400q17 0 28.5 11.5T640-120q0 17-11.5 28.5T600-80H200Zm160-240v-480 480Z" />
    </svg>
);

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 -960 960 960"
        width="1em"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
    >
        <path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
    </svg>
);

export const CopyText = React.forwardRef<HTMLButtonElement, CopyTextProps>(
    function CopyText(
        {
            children,
            className,
            copyText,
            label,
            copiedLabel = 'Kopiert',
            ...rest
        },
        ref,
    ) {
        const [copied, setCopied] = useState(false);
        const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

        useEffect(
            () => () => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            },
            [],
        );

        const handleCopy = async () => {
            const text =
                copyText ?? (typeof children === 'string' ? children : '');
            if (!text) {
                if (process.env.NODE_ENV !== 'production') {
                    // eslint-disable-next-line no-console
                    console.warn(
                        'CopyText: ingenting å kopiere — sett copyText-prop eller gi en string som children.',
                    );
                }
                return;
            }

            try {
                if (navigator.clipboard?.writeText) {
                    await navigator.clipboard.writeText(text);
                } else {
                    // Fallback for Android WebView uten Clipboard API-støtte
                    const el = document.createElement('textarea');
                    el.value = text;
                    el.style.position = 'fixed';
                    el.style.opacity = '0';
                    document.body.appendChild(el);
                    el.select();
                    const ok = document.execCommand('copy');
                    document.body.removeChild(el);
                    if (!ok) throw new Error('execCommand copy returned false');
                }
            } catch (err) {
                if (process.env.NODE_ENV !== 'production') {
                    // eslint-disable-next-line no-console
                    console.warn('CopyText: kopiering feilet', err);
                }
                return;
            }

            setCopied(true);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => setCopied(false), 2000);
        };

        return (
            <button
                ref={ref}
                type="button"
                {...rest}
                className={classNames('ffe-copy-text', className)}
                aria-label={copied ? copiedLabel : label}
                onClick={handleCopy}
            >
                {children}
                {copied ? <CheckIcon /> : <CopyIcon />}
                {copied && (
                    <span className="ffe-copy-text__feedback" aria-hidden="true">
                        {copiedLabel}
                    </span>
                )}
            </button>
        );
    },
);
