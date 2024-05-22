import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { BaseMessage, BaseMessageProps } from './BaseMessage';
import { texts } from './texts';

export interface ErrorMessageProps extends Omit<BaseMessageProps, 'type'> {
    /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
    alert?: boolean;
    locale?: 'nb' | 'nn' | 'en';
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
    alert = true,
    locale = 'nb',
    ...rest
}) => {
    const priorityHighIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik00NzkuODgxLTE2My4wOHEtMjEuNzg0IDAtMzcuMTc4LTE1LjUxMy0xNS4zOTQtMTUuNTEzLTE1LjM5NC0zNy4yOTd0MTUuNTEzLTM3LjE3OHExNS41MTMtMTUuMzk0IDM3LjI5Ny0xNS4zOTR0MzcuMTc4IDE1LjUxM3ExNS4zOTQgMTUuNTEzIDE1LjM5NCAzNy4yOTd0LTE1LjUxMyAzNy4xNzhxLTE1LjUxMyAxNS4zOTQtMzcuMjk3IDE1LjM5NFptLS4wNjEtMTk2LjE1MXEtMTkuNTg5IDAtMzMuMzU3LTEzLjg5Ni0xMy43NjktMTMuODk2LTEzLjc2OS0zMy40MXYtMzYzLjA3OHEwLTE5LjUxNCAxMy45NDktMzMuNDEgMTMuOTQ5LTEzLjg5NiAzMy41MzctMTMuODk2IDE5LjU4OSAwIDMzLjM1NyAxMy44OTYgMTMuNzY5IDEzLjg5NiAxMy43NjkgMzMuNDF2MzYzLjA3OHEwIDE5LjUxNC0xMy45NDkgMzMuNDEtMTMuOTQ5IDEzLjg5Ni0zMy41MzcgMTMuODk2WiIvPjwvc3ZnPg==';

    return (
        <BaseMessage
            type="error"
            ariaLabel={texts[locale].error.ariaLabel}
            icon={<Icon fileUrl={priorityHighIcon} size="xl" />}
            role={alert ? 'alert' : 'group'}
            {...rest}
        />
    );
};
