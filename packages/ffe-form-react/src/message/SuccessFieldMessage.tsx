import React, { ElementType } from 'react';
import { BaseFieldMessage, BaseFieldMessageProps } from './BaseFieldMessage.js';

export type SuccessFieldMessageProps<As extends ElementType = any> = Omit<
    BaseFieldMessageProps<As>,
    'type' | 'role'
> & { role?: BaseFieldMessageProps['role'] };

export const SuccessFieldMessage: React.FC<SuccessFieldMessageProps> = ({
    ...rest
}) => {
    return <BaseFieldMessage role="none" {...rest} type="success" />;
};
