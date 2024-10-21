import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { txt } from './texts';
import { Locale } from './types';

interface CloseButtonProps {
    locale: Locale;
    onClick: React.MouseEventHandler;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
    locale,
    onClick,
}) => {
    return (
        <button
            aria-label={txt[locale].close}
            className="ffe-message__close"
            onClick={onClick}
            type="button"
        >
            <Icon
                fileUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDQyLjg0NyAzMDkuMDc2LTI3MS45MjRxLTguMzA3IDguMzA4LTE3Ljg4NCA4LTkuNTc2LS4zMDctMTguMjY4LTktOC42OTMtOC42OTItOC42OTMtMTguNTc2dDguNjkzLTE4LjU3Nkw0NDIuODQ3LTQ4MCAyNzEuOTI0LTY1MC45MjRxLTguMzA4LTguMzA3LTgtMTguMzg0LjMwNy0xMC4wNzYgOS0xOC43NjggOC42OTItOC42OTMgMTguNTc2LTguNjkzdDE4LjU3NiA4LjY5M0w0ODAtNTE3LjE1M2wxNzAuOTI0LTE3MC45MjNxOC4zMDctOC4zMDggMTguMzg0LTguNSAxMC4wNzYtLjE5MyAxOC43NjggOC41IDguNjkzIDguNjkyIDguNjkzIDE4LjU3NnQtOC42OTMgMTguNTc2TDUxNy4xNTMtNDgwbDE3MC45MjMgMTcwLjkyNHE4LjMwOCA4LjMwNyA4LjUgMTcuODg0LjE5MyA5LjU3Ni04LjUgMTguMjY4LTguNjkyIDguNjkzLTE4LjU3NiA4LjY5M3QtMTguNTc2LTguNjkzTDQ4MC00NDIuODQ3WiIvPjwvc3ZnPg=="
                size="sm"
            />
        </button>
    );
};
