import * as React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
    large?: boolean;
}

declare class Spinner extends React.Component<SpinnerProps, any> {}

export default Spinner;
