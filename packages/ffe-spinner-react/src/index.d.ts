import * as React from 'react';

export interface SpinnerProps extends React.ComponentProps<'span'> {
    className?: string;
    immediate?: boolean;
    large?: boolean;
    loadingText: React.ReactNode;
    locale?: 'en' | 'nb' | 'nn';
}

declare class Spinner extends React.Component<SpinnerProps, any> {}

export default Spinner;
