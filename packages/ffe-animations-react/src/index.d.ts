import * as React from 'react';

export interface AnimationPlayerProps {
    animationData: Object;
}

declare class AnimationPlayer extends React.Component<
    AnimationPlayerProps,
    any
> {}
