import React from 'react';
import { node, oneOf, string } from 'prop-types';
import { Icon } from '@sb1/ffe-icons-react';
import BaseMessage from './BaseMessage';
import texts from './texts';

const SuccessMessage = ({ locale, ...rest }) => {
    const checkIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Im0zNzkuMTU0LTMyMy4xNTMgMzYzLTM2My4zODVxNi43NTktNi4zMDcgMTYuMTQ4LTYuNSA5LjM5LS4xOTIgMTYuNDY3IDYuNTUzIDYuNjkyIDcuMTI5IDYuNjkyIDE2LjQ5OSAwIDkuMzcxLTYuNjkyIDE2LjA2M0wzOTkuMzg1LTI3OC41MzlxLTguNjE2IDguNjE1LTIwLjIzMSA4LjYxNS0xMS42MTUgMC0yMC4yMzEtOC42MTVMMTg0LjYxNi00NTIuODQ2cS02LjY5Mi02Ljc1OS02LjU3Ny0xNi4xNDkuMTE2LTkuMzg5IDcuMjQ1LTE2LjQ2NiA3LjEyOS02LjY5MiAxNi4zMDctNi42OTIgOS4xNzggMCAxNi4yNTUgNi42OTJsMTYxLjMwOCAxNjIuMzA4WiIvPjwvc3ZnPg==';

    return (
        <BaseMessage
            type="success"
            ariaLabel={texts[locale].success.ariaLabel}
            icon={<Icon fileUrl={checkIcon} size="xl" />}
            {...rest}
        />
    );
};

SuccessMessage.defaultProps = {
    locale: 'nb',
};

SuccessMessage.propTypes = {
    /** The content of the message box */
    children: node,
    /** Any extra class names to the wrapping DOM node */
    className: string,
    /** The icon to show. Has a default value, but can be overridden */
    icon: node,
    /** An optional title for the message */
    title: node,
    /** 'nb', 'nn', or 'en' */
    locale: oneOf(['en', 'nb', 'nn']),
};

export default SuccessMessage;
