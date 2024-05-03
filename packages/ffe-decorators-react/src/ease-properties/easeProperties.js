import React, { Component } from 'react';

// The easing function used. It's pretty similar to the `ease-out` preset in CSS.
function easeOutCubic(
    currentIteration,
    startValue,
    changeInValue,
    totalIterations,
) {
    return (
        changeInValue * ((currentIteration / totalIterations - 1) ** 3 + 1) +
        startValue
    );
}

// This higher order component eases properties of the component it decorates whenever they change.
export default (properties = {}) =>
    TargetComponent =>
        // The properties argument is an object like this:
        // {
        //      somePropertyToEase: {
        //          duration: 0.5, // duration of easing in seconds
        //          initialValue: 0 // the initial value to start the easing from when the component mounts
        //      },
        //  }
        // , with a property for each property to ease. The duration defaults to 1 second, and there is no default
        // initial value. That means you can do `easeProperties({ prop: {} })(MyComponent)` if you want.
        class EasePropertiesWrapper extends Component {
            // Since we can't be sure that the easing will stop at an exact value (for example, if it's cancelled and
            // restarted halfway through), this method checks whether the `currentValue` is less than a given tolerance.
            // That tolerance is the absolute value of the difference between the eased values divided by expected FPS.
            static withinTolerance(currentValue, fromValue, toValue) {
                const isGrowing = toValue > fromValue;
                const tolerance =
                    Math.abs(
                        isGrowing ? toValue - fromValue : fromValue - toValue,
                    ) / 60;
                return (
                    Math.abs(
                        isGrowing
                            ? toValue - currentValue
                            : currentValue - toValue,
                    ) < tolerance
                );
            }

            constructor(props) {
                super();

                if (!properties || !Object.keys(properties).length) {
                    throw new Error(
                        'The second argument to easeProperties must be an object with at least one property to ' +
                            'ease.',
                    );
                }

                // For each property provided in the properties-argument, construct a part of the state that describes its
                // current state (where the value began, where it's heading, how far it is from completion etc).
                // Finally, the properties are reduced back into an object again.
                this.state = Object.entries(properties)
                    .map(([propName, propOptions]) => {
                        const hasInitialValue =
                            propOptions.initialValue !== undefined;
                        const currentValue = hasInitialValue
                            ? propOptions.initialValue
                            : props[propName];

                        return {
                            currentIteration: 0,
                            currentValue,
                            duration: propOptions.duration || 1, // Very sneaky default value found here.
                            fromValue: currentValue,
                            propName,
                            rafId: -1,
                            toValue: props[propName],
                        };
                    })
                    .reduce(
                        (finalState, propertyState) => ({
                            ...finalState,
                            [propertyState.propName]: propertyState,
                        }),
                        {},
                    );
            }

            // When the component is mounted, we need to check if there's any properties set with an initial value. If so,
            // we need to start easing from said initial value to its target value. We do this by calling
            // requestAnimationFrame and saving its ID to state.
            /* eslint-disable react/no-did-mount-set-state */
            componentDidMount() {
                this.setState(prevState =>
                    Object.entries(prevState)
                        .filter(
                            ([, propertyProps]) =>
                                propertyProps.fromValue !==
                                propertyProps.toValue,
                        )
                        .reduce(
                            (state, [propName]) => ({
                                ...state,
                                [propName]: {
                                    ...prevState[propName],
                                    rafId: window.requestAnimationFrame(
                                        this.nextFrame.bind(this, propName),
                                    ),
                                },
                            }),
                            {},
                        ),
                );
            }

            // When a property changes, and it's specified in the properties HoC argument, it's eased to its next state
            // by requesting animation frames. If an animation frame was currently being processed, it's cancelled before
            // requesting a new one.
            /* eslint-disable react/no-did-update-set-state */
            componentDidUpdate(prevProps) {
                const changed = Object.keys(properties).filter(
                    easedProp => prevProps[easedProp] !== this.props[easedProp],
                );

                if (changed.length < 1) {
                    return;
                }

                this.setState(prevState =>
                    Object.entries(prevState)
                        .filter(([propName]) => changed.includes(propName))
                        .map(([propName, propValue]) => {
                            window.cancelAnimationFrame(
                                prevState[propName].rafId,
                            );
                            return [propName, propValue];
                        })
                        .reduce(
                            (state, [propName]) => ({
                                ...state,
                                [propName]: {
                                    ...prevState[propName],
                                    currentIteration: 0,
                                    fromValue: prevState[propName].currentValue,
                                    rafId: window.requestAnimationFrame(
                                        this.nextFrame.bind(this, propName),
                                    ),
                                    toValue: this.props[propName],
                                },
                            }),
                            {},
                        ),
                );
            }

            componentWillUnmount() {
                Object.values(this.state).forEach(value =>
                    window.cancelAnimationFrame(value.rafId),
                );
            }

            // This is the recursive tweening function. It calculates the next value by providing some values to an easing
            // function, checks if the end of the tweening has been reached, and if not, requests a new animation frame
            // with the updated value.
            nextFrame(propName) {
                const { currentIteration, duration, fromValue, toValue } =
                    this.state[propName];

                const nextValue = easeOutCubic(
                    currentIteration,
                    fromValue,
                    toValue - fromValue,
                    duration * 60,
                );

                const done = EasePropertiesWrapper.withinTolerance(
                    nextValue,
                    fromValue,
                    toValue,
                );

                const nextState = {
                    currentValue: done ? toValue : nextValue,
                    currentIteration: currentIteration + 1,
                };

                if (!done) {
                    nextState.rafId = window.requestAnimationFrame(() =>
                        this.nextFrame(propName),
                    );
                }
                this.setState(prevState => ({
                    [propName]: { ...prevState[propName], ...nextState },
                }));
            }

            render() {
                const easedProps = Object.entries(this.state).reduce(
                    (props, [name, value]) => ({
                        ...props,
                        [name]: value.currentValue,
                    }),
                    {},
                );

                return <TargetComponent {...this.props} {...easedProps} />;
            }
        };
