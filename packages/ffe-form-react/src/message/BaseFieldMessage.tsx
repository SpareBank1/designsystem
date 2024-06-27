import React, { ElementType } from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import classNames from 'classnames';
import { ComponentWithoutRefAsPropParams } from '../types';

export type BaseFieldMessageProps<As extends ElementType = any> =
    ComponentWithoutRefAsPropParams<As> & {
        type: 'success' | 'info' | 'error';
        role: 'status' | 'alert' | 'none';
        /** Adds alternative styling for better contrast on certain backgrounds */
        onColoredBg?: boolean;
    };

/**
 * Internal factory component
 * @ignore
 */
export const BaseFieldMessage: React.FC<BaseFieldMessageProps> = props => {
    const {
        children,
        className,
        as: Comp = 'div',
        type,
        role = 'status',
        onColoredBg,
        ...rest
    } = props;

    const priorityHighIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00NzkuNzg4LTE4Ny4wOHEtMjEuNTM3IDAtMzYuNjYyLTE1LjMzN3QtMTUuMTI1LTM2Ljg3NHEwLTIxLjUzNyAxNS4zMzctMzYuNjYyIDE1LjMzNy0xNS4xMjQgMzYuODc0LTE1LjEyNCAyMS41MzcgMCAzNi42NjIgMTUuMzM3dDE1LjEyNSAzNi44NzRxMCAyMS41MzctMTUuMzM3IDM2LjY2MS0xNS4zMzcgMTUuMTI1LTM2Ljg3NCAxNS4xMjVabS0uMDYyLTE5Ni4xNTFxLTE5LjM0MSAwLTMyLjg0LTEzLjcwOS0xMy41LTEzLjcwOS0xMy41LTMyLjk2di0zMTYuNjg1cTAtMTkuMjUxIDEzLjc3NC0zMi43OTQgMTMuNzczLTEzLjU0MiAzMy4xMTQtMTMuNTQyIDE5LjM0MSAwIDMyLjg0IDEzLjcwOSAxMy41IDEzLjcwOSAxMy41IDMyLjk2djMxNi42ODVxMCAxOS4yNTEtMTMuNzc0IDMyLjc5NC0xMy43NzMgMTMuNTQyLTMzLjExNCAxMy41NDJaIi8+PC9zdmc+';

    const checkIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Im0zOTUtMzcyLjM4NCAyNzAuNTM5LTI2OS41MzhxNy45MjMtNy45MjMgMTcuNjkyLTcuNjE2IDkuNzY5LjMwOCAxOC4wNzYgOC42MTYgOC4zMDggOC4zMDcgOC4zMDggMTcuODg0IDAgOS41NzYtOC4zMDggMTcuODg0bC0yODMgMjgyLjk5OXEtOS44NDYgOS44NDYtMjIuODA3IDkuODQ2LTEyLjk2MSAwLTIyLjgwNy05Ljg0NmwtMTE0LTExMy45OTlxLTcuOTIzLTcuOTIzLTguMzA4LTE3LjY5Mi0uMzg0LTkuNzY5IDcuOTIzLTE4LjA3NiA4LjMwOC04LjMwOCAxNy44ODQtOC4zMDggOS41NzcgMCAxNy44ODQgOC4zMDhMMzk1LTM3Mi4zODRaIi8+PC9zdmc+';

    const infoIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00NzkuNzg4LTY3MnEtMjUuOTQyIDAtNDMuODY0LTE4LjEzNS0xNy45MjMtMTguMTM2LTE3LjkyMy00NC4wNzd0MTguMTM1LTQzLjg2NHExOC4xMzUtMTcuOTIzIDQ0LjA3Ni0xNy45MjMgMjUuOTQyIDAgNDMuODY0IDE4LjEzNiAxNy45MjMgMTguMTM1IDE3LjkyMyA0NC4wNzZ0LTE4LjEzNSA0My44NjRRNTA1LjcyOS02NzIgNDc5Ljc4OC02NzJabS4yNTcgNTA3Ljk5OXEtMjAuODE0IDAtMzUuNDI5LTE0LjU4NC0xNC42MTUtMTQuNTgzLTE0LjYxNS0zNS40MTZ2LTI5Ni42MTRxMC0yMC44MzMgMTQuNTctMzUuNDE2IDE0LjU3LTE0LjU4MyAzNS4zODQtMTQuNTgzdDM1LjQyOSAxNC41ODNxMTQuNjE1IDE0LjU4MyAxNC42MTUgMzUuNDE2djI5Ni42MTRxMCAyMC44MzMtMTQuNTcgMzUuNDE2LTE0LjU3IDE0LjU4NC0zNS4zODQgMTQuNTg0WiIvPjwvc3ZnPg==';

    return (
        <Comp
            className={classNames(
                `ffe-field-message`,
                { 'ffe-field-message--on-colored-bg': onColoredBg },
                `ffe-field-message--${type}`,
                className,
            )}
            role={role}
            {...rest}
        >
            <span
                className={classNames(
                    `ffe-field-message__icon`,
                    `ffe-field-message__icon--${type}'`,
                )}
            >
                {(() => {
                    switch (type) {
                        case 'error':
                            return (
                                <Icon
                                    fileUrl={priorityHighIcon}
                                    ariaLabel="Utropstegn"
                                    size="sm"
                                />
                            );
                        case 'success':
                            return (
                                <Icon
                                    fileUrl={checkIcon}
                                    ariaLabel="hake-ikon"
                                    size="sm"
                                />
                            );
                        case 'info':
                            return (
                                <Icon
                                    fileUrl={infoIcon}
                                    ariaLabel="info-ikon"
                                    size="sm"
                                />
                            );
                        default:
                            return (
                                <Icon
                                    fileUrl={infoIcon}
                                    ariaLabel="info-ikon"
                                    size="sm"
                                />
                            );
                    }
                })()}
            </span>
            {children}
        </Comp>
    );
};
