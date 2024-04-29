import React from 'react';
import { node, oneOf, string } from 'prop-types';
import { Icon } from '@sb1/ffe-icons-react';
import BaseMessage from './BaseMessage';
import texts from './texts';

const InfoMessage = ({ locale = 'nb', ...rest }) => {
    const infoIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik00NzkuODgxLTY5NC42MTVxLTI2LjE4OCAwLTQ0LjM4MS0xOC4zMTEtMTguMTkyLTE4LjMxMi0xOC4xOTItNDQuNXQxOC4zMTItNDQuMzhxMTguMzExLTE4LjE5MyA0NC40OTktMTguMTkzIDI2LjE4OCAwIDQ0LjM4MSAxOC4zMTIgMTguMTkyIDE4LjMxMSAxOC4xOTIgNDQuNDk5IDAgMjYuMTg5LTE4LjMxMiA0NC4zODEtMTguMzExIDE4LjE5Mi00NC40OTkgMTguMTkyWm0uMDI0IDU1NC42MTRxLTE3LjgyOCAwLTMwLjIxMi0xMi40NTItMTIuMzg1LTEyLjQ1Mi0xMi4zODUtMzAuMjR2LTM1OS4yMjlxMC0xNy43ODkgMTIuNDgtMzAuMjQgMTIuNDc5LTEyLjQ1MiAzMC4zMDctMTIuNDUydDMwLjIxMiAxMi40NTJxMTIuMzg1IDEyLjQ1MSAxMi4zODUgMzAuMjR2MzU5LjIyOXEwIDE3Ljc4OC0xMi40OCAzMC4yNC0xMi40NzkgMTIuNDUyLTMwLjMwNyAxMi40NTJaIi8+PC9zdmc+';
    return (
        <BaseMessage
            type="info"
            ariaLabel={texts[locale].info.ariaLabel}
            icon={<Icon fileUrl={infoIcon} size="xl" />}
            {...rest}
        />
    );
};

InfoMessage.propTypes = {
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

export default InfoMessage;
