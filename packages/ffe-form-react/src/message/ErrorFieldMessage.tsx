import React, { ElementType } from 'react';
import { BaseFieldMessage, BaseFieldMessageProps } from './BaseFieldMessage.js';

export type ErrorFieldMessageProps<As extends ElementType = any> = Omit<
    BaseFieldMessageProps<As>,
    'type' | 'role'
> & { role?: BaseFieldMessageProps['role'] };

export const ErrorFieldMessage: React.FC<ErrorFieldMessageProps> = ({
    role = 'alert',
    ...rest
}) => {
    return <BaseFieldMessage role={role} {...rest} type="error" />;
};
