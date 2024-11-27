import React from 'react';
import Lottie from 'lottie-react';
import { Object } from 'prop-types';

export default function AnimationPlayer(props) {
    const { animationData, ...rest } = props;
    return <Lottie animationData={animationData} {...rest} />;
}

AnimationPlayer.propTypes = {
    /** A JSON Object with the animation data */
    animationData: Object.isRequired,
};
