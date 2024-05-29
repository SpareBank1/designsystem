import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { BaseMessage, BaseMessageProps } from './BaseMessage';
import { texts } from './texts';

export interface SuccessMessageProps extends Omit<BaseMessageProps, 'type'> {
    locale?: 'nb' | 'nn' | 'en';
}

// @ts-ignore
const PlaceHolderContent = ({ isExpanded, setIsExpanded }) => {
    return (
        <div>
            <h1>Tittel</h1>
            <p>Some content</p>
            <button onClick={() => setIsExpanded(!isExpanded)}>Toggle</button>
        </div>
    );
};
export const SuccessMessage: React.FC<SuccessMessageProps> = ({
    locale = 'nb',
    ...rest
}) => {
    const checkIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Im0zNzkuMTU0LTMyMy4xNTMgMzYzLTM2My4zODVxNi43NTktNi4zMDcgMTYuMTQ4LTYuNSA5LjM5LS4xOTIgMTYuNDY3IDYuNTUzIDYuNjkyIDcuMTI5IDYuNjkyIDE2LjQ5OSAwIDkuMzcxLTYuNjkyIDE2LjA2M0wzOTkuMzg1LTI3OC41MzlxLTguNjE2IDguNjE1LTIwLjIzMSA4LjYxNS0xMS42MTUgMC0yMC4yMzEtOC42MTVMMTg0LjYxNi00NTIuODQ2cS02LjY5Mi02Ljc1OS02LjU3Ny0xNi4xNDkuMTE2LTkuMzg5IDcuMjQ1LTE2LjQ2NiA3LjEyOS02LjY5MiAxNi4zMDctNi42OTIgOS4xNzggMCAxNi4yNTUgNi42OTJsMTYxLjMwOCAxNjIuMzA4WiIvPjwvc3ZnPg==';

    const [isExpanded, setIsExpanded] = React.useState(false);
    return (
        <div
        //aria-live="polite" //dette er det som fungerer best for skjermlesere sånn jeg ser det.
        >
            {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
            {!isExpanded ? (
                <PlaceHolderContent
                    isExpanded={isExpanded}
                    setIsExpanded={setIsExpanded}
                />
            ) : (
                <BaseMessage
                    type="success"
                    ariaLabel={texts[locale].success.ariaLabel}
                    icon={<Icon fileUrl={checkIcon} size="xl" />}
                    {...rest}
                />
            )}
        </div>
    );
};
