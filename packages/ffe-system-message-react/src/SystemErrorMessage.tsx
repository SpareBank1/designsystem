import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { texts } from './texts';
import { SystemMessage, SystemMessageProps } from './SystemMessage';

export interface SystemErrorMessageProps
    extends Omit<SystemMessageProps, 'modifier'> {
    /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
    alert?: boolean;
}

export const SystemErrorMessage: React.FC<SystemErrorMessageProps> = ({
    locale = 'nb',
    alert,
    ...rest
}) => {
    const priorityHighIconSmall =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00NzkuNzg4LTE4Ny4wOHEtMjEuNTM3IDAtMzYuNjYyLTE1LjMzN3QtMTUuMTI1LTM2Ljg3NHEwLTIxLjUzNyAxNS4zMzctMzYuNjYyIDE1LjMzNy0xNS4xMjQgMzYuODc0LTE1LjEyNCAyMS41MzcgMCAzNi42NjIgMTUuMzM3dDE1LjEyNSAzNi44NzRxMCAyMS41MzctMTUuMzM3IDM2LjY2MS0xNS4zMzcgMTUuMTI1LTM2Ljg3NCAxNS4xMjVabS0uMDYyLTE5Ni4xNTFxLTE5LjM0MSAwLTMyLjg0LTEzLjcwOS0xMy41LTEzLjcwOS0xMy41LTMyLjk2di0zMTYuNjg1cTAtMTkuMjUxIDEzLjc3NC0zMi43OTQgMTMuNzczLTEzLjU0MiAzMy4xMTQtMTMuNTQyIDE5LjM0MSAwIDMyLjg0IDEzLjcwOSAxMy41IDEzLjcwOSAxMy41IDMyLjk2djMxNi42ODVxMCAxOS4yNTEtMTMuNzc0IDMyLjc5NC0xMy43NzMgMTMuNTQyLTMzLjExNCAxMy41NDJaIi8+PC9zdmc+';
    return (
        <SystemMessage
            modifier="error"
            aria-label={texts[locale].error.ariaLabel}
            locale={locale}
            icon={<Icon fileUrl={priorityHighIconSmall} size="sm" />}
            role={alert ? 'alert' : 'group'}
            {...rest}
        />
    );
};
