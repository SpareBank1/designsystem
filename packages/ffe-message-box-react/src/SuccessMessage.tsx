import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { BaseMessage, BaseMessageProps } from './BaseMessage';
import { texts } from './texts';

export interface SuccessMessageProps extends Omit<BaseMessageProps, 'type'> {
    locale?: 'nb' | 'nn' | 'en';
}

// @ts-ignore
const PlaceHolderContent = ({ visible, setVisible, text }) => {
    return (
        <div>
            <h1>Tittel</h1>
            <p>{text}</p>
            <button onClick={() => setVisible(!visible)}>Toggle</button>
        </div>
    );
};
export const SuccessMessage: React.FC<SuccessMessageProps> = ({
    locale = 'nb',
    ...rest
}) => {
    const checkIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Im0zNzkuMTU0LTMyMy4xNTMgMzYzLTM2My4zODVxNi43NTktNi4zMDcgMTYuMTQ4LTYuNSA5LjM5LS4xOTIgMTYuNDY3IDYuNTUzIDYuNjkyIDcuMTI5IDYuNjkyIDE2LjQ5OSAwIDkuMzcxLTYuNjkyIDE2LjA2M0wzOTkuMzg1LTI3OC41MzlxLTguNjE2IDguNjE1LTIwLjIzMSA4LjYxNS0xMS42MTUgMC0yMC4yMzEtOC42MTVMMTg0LjYxNi00NTIuODQ2cS02LjY5Mi02Ljc1OS02LjU3Ny0xNi4xNDkuMTE2LTkuMzg5IDcuMjQ1LTE2LjQ2NiA3LjEyOS02LjY5MiAxNi4zMDctNi42OTIgOS4xNzggMCAxNi4yNTUgNi42OTJsMTYxLjMwOCAxNjIuMzA4WiIvPjwvc3ZnPg==';

    const [example1, setIsExpanded] = React.useState(false);
    const [example2, setIsExpanded2] = React.useState(false);
    return (
        <div
        //aria-live="polite" //dette er det som fungerer best for skjermlesere sånn jeg ser det.
        >
            {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
            <div>
                <h1>Tittel</h1>
                <p>Eksempel 1 - Meldingen er allerede der (ikke dynamisk)</p>
                <BaseMessage
                    type="info"
                    ariaLabel={texts[locale].success.ariaLabel}
                    icon={<Icon fileUrl={checkIcon} size="xl" />}
                    {...rest}
                />
            </div>
            {!example1 ? (
                <PlaceHolderContent
                    visible={example1}
                    setVisible={setIsExpanded}
                    text={'Eksempel 2 - Meldingen dukker opp og skal ha fokus'}
                />
            ) : (
                <>
                    <BaseMessage
                        type="success"
                        ariaLabel={texts[locale].success.ariaLabel}
                        icon={<Icon fileUrl={checkIcon} size="xl" />}
                        role={'status'}
                        {...rest}
                    />
                    <p>Some other text after</p>
                </>
            )}
            {!example2 ? (
                <PlaceHolderContent
                    visible={example2}
                    setVisible={setIsExpanded2}
                    text={
                        'Eksempel 2 - Meldingen dukker opp og skal IKKE ha fokus'
                    }
                />
            ) : (
                <>
                    <p>Some other text first</p>
                    <BaseMessage
                        type="info"
                        ariaLabel={texts[locale].success.ariaLabel}
                        icon={<Icon fileUrl={checkIcon} size="xl" />}
                        {...rest}
                    />
                </>
            )}
        </div>
    );
};
