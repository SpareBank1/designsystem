import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { texts } from './texts.js';
import { SystemMessage, SystemMessageProps } from './SystemMessage.js';
export interface SystemInfoMessageProps
    extends Omit<SystemMessageProps, 'modifier'> {}

export const SystemInfoMessage: React.FC<SystemInfoMessageProps> = ({
    locale = 'nb',
    ...rest
}) => {
    const infoIconSmall =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00NzkuNzg4LTY3MnEtMjUuOTQyIDAtNDMuODY0LTE4LjEzNS0xNy45MjMtMTguMTM2LTE3LjkyMy00NC4wNzd0MTguMTM1LTQzLjg2NHExOC4xMzUtMTcuOTIzIDQ0LjA3Ni0xNy45MjMgMjUuOTQyIDAgNDMuODY0IDE4LjEzNiAxNy45MjMgMTguMTM1IDE3LjkyMyA0NC4wNzZ0LTE4LjEzNSA0My44NjRRNTA1LjcyOS02NzIgNDc5Ljc4OC02NzJabS4yNTcgNTA3Ljk5OXEtMjAuODE0IDAtMzUuNDI5LTE0LjU4NC0xNC42MTUtMTQuNTgzLTE0LjYxNS0zNS40MTZ2LTI5Ni42MTRxMC0yMC44MzMgMTQuNTctMzUuNDE2IDE0LjU3LTE0LjU4MyAzNS4zODQtMTQuNTgzdDM1LjQyOSAxNC41ODNxMTQuNjE1IDE0LjU4MyAxNC42MTUgMzUuNDE2djI5Ni42MTRxMCAyMC44MzMtMTQuNTcgMzUuNDE2LTE0LjU3IDE0LjU4NC0zNS4zODQgMTQuNTg0WiIvPjwvc3ZnPg==';
    return (
        <SystemMessage
            modifier="info"
            aria-label={texts[locale].info.ariaLabel}
            locale={locale}
            icon={<Icon size="sm" fileUrl={infoIconSmall} />}
            {...rest}
        />
    );
};
