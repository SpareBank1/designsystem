import React from 'react';
import { node, string, bool, oneOf } from 'prop-types';
import { Icon } from '@sb1/ffe-icons-react';
import BaseMessage from './BaseMessage';
import texts from './texts';

const ErrorMessage = props => {
    const { alert, locale, ...rest } = props;

    const priorityHighIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik00NzkuODgxLTE2My4wOHEtMjEuNzg0IDAtMzcuMTc4LTE1LjUxMy0xNS4zOTQtMTUuNTEzLTE1LjM5NC0zNy4yOTd0MTUuNTEzLTM3LjE3OHExNS41MTMtMTUuMzk0IDM3LjI5Ny0xNS4zOTR0MzcuMTc4IDE1LjUxM3ExNS4zOTQgMTUuNTEzIDE1LjM5NCAzNy4yOTd0LTE1LjUxMyAzNy4xNzhxLTE1LjUxMyAxNS4zOTQtMzcuMjk3IDE1LjM5NFptLS4wNjEtMTk2LjE1MXEtMTkuNTg5IDAtMzMuMzU3LTEzLjg5Ni0xMy43NjktMTMuODk2LTEzLjc2OS0zMy40MXYtMzYzLjA3OHEwLTE5LjUxNCAxMy45NDktMzMuNDEgMTMuOTQ5LTEzLjg5NiAzMy41MzctMTMuODk2IDE5LjU4OSAwIDMzLjM1NyAxMy44OTYgMTMuNzY5IDEzLjg5NiAxMy43NjkgMzMuNDF2MzYzLjA3OHEwIDE5LjUxNC0xMy45NDkgMzMuNDEtMTMuOTQ5IDEzLjg5Ni0zMy41MzcgMTMuODk2WiIvPjwvc3ZnPg==';

    return (
        <BaseMessage
            type="error"
            ariaLabel={texts[locale].error.ariaLabel}
            icon={
                <Icon
                    fileUrl={priorityHighIcon}
                    ariaLabel={texts[locale].error.icon}
                    size="xl"
                />
            }
            role={alert ? 'alert' : 'group'}
            {...rest}
        />
    );
};

ErrorMessage.defaultProps = {
    alert: true,
    locale: 'nb',
};

ErrorMessage.propTypes = {
    /** The content of the message box */
    children: node,
    /** Any extra class names to the wrapping DOM node */
    className: string,
    /** The icon to show. Has a default value, but can be overridden */
    icon: node,
    /** An optional title for the message */
    title: node,
    /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
    alert: bool,
    /** 'nb', 'nn', or 'en' */
    locale: oneOf(['en', 'nb', 'nn']),
};

export default ErrorMessage;
