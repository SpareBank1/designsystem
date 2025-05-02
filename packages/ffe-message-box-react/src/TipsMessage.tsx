import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { BaseMessage, BaseMessageProps } from './BaseMessage.js';
import { texts } from './texts.js';

export interface TipsMessageProps extends Omit<BaseMessageProps, 'type'> {
    locale?: 'nb' | 'nn' | 'en';
}

export const TipsMessage: React.FC<TipsMessageProps> = ({
    locale = 'nb',
    ...rest
}) => {
    const lightbulbIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik00ODAtOTYuOTI0cS0zMC45MjMgMC01My4wNzctMjEtMjIuMTUzLTIxLTIzLjY5Mi01MS45MjNoMTUzLjUzOHEtMS41MzkgMzAuOTIzLTIzLjY5MiA1MS45MjMtMjIuMTU0IDIxLTUzLjA3NyAyMVpNMzUxLjA3Ny0yNDEuNDYzcS05LjY2MyAwLTE2LjE3Ny02LjU2Ny02LjUxNS02LjU2Ni02LjUxNS0xNi4zMDd0Ni41MTUtMTYuMTI1cTYuNTE0LTYuMzg0IDE2LjE3Ny02LjM4NGgyNTcuODQ2cTkuNjYzIDAgMTYuMTc3IDYuNTY2IDYuNTE1IDYuNTY3IDYuNTE1IDE2LjMwOCAwIDkuNzQtNi41MTUgMTYuMTI1LTYuNTE0IDYuMzg0LTE2LjE3NyA2LjM4NEgzNTEuMDc3Wm0tMTkuOTk5LTExNnEtNjAuNjE1LTQwLjY5Mi05NS44NDYtMTAwLjM4NHQtMzUuMjMxLTEzNC41MzdxMC0xMTQuNjkyIDgyLjY1NC0xOTcuMzQ1UTM2NS4zMDgtODcyLjM4MyA0ODAtODcyLjM4M3QxOTcuMzQ1IDgyLjY1NHE4Mi42NTQgODIuNjUzIDgyLjY1NCAxOTcuMzQ1IDAgNzQuODQ1LTM0LjkyMyAxMzQuNTM3LTM0LjkyMyA1OS42OTItOTYuMTU0IDEwMC4zODRIMzMxLjA3OFptMTYuMjMtNDUuMzgzaDI2NS43NzFxNDcuNDU5LTMyIDc0LjQ5OC04Mi4wMjkgMjcuMDM4LTUwLjAyOSAyNy4wMzgtMTA3LjUwOSAwLTk3LjA3Ny02OC43NjktMTY1Ljg0NlQ0ODAtODI2Ljk5OXEtOTcuMDc3IDAtMTY1Ljg0NiA2OC43NjlUMjQ1LjM4NS01OTIuNHEwIDU3LjYwNSAyNy4wMzggMTA3LjU3OSAyNy4wMzkgNDkuOTc1IDc0Ljg4NSA4MS45NzVabTEzMi42OTIgMFoiLz48L3N2Zz4=';
    return (
        <BaseMessage
            type="tips"
            ariaLabel={texts[locale].tip.ariaLabel}
            icon={<Icon fileUrl={lightbulbIcon} size="xl" />}
            {...rest}
        />
    );
};
