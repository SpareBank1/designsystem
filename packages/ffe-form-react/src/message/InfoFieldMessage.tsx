import React, { ElementType } from 'react';
import { BaseFieldMessage, BaseFieldMessageProps } from './BaseFieldMessage.js';

export type InfoFieldMessageProps<As extends ElementType = any> = Omit<
    BaseFieldMessageProps<As>,
    'type' | 'role'
> & { role?: BaseFieldMessageProps['role'] };

export const InfoFieldMessage: React.FC<InfoFieldMessageProps> = ({
    ...rest
}) => {
    return <BaseFieldMessage role="none" {...rest} type="info" />;
};
