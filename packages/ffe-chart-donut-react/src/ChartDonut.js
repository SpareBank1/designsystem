import React from 'react';
import { node, number, string } from 'prop-types';

const NON_BREAKING_SPACE = '\u00A0';

const RADIUS = 150;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ChartDonut({ name, percentage, firstLabel, lastLabel, label }) {
    const offset = CIRCUMFERENCE - (CIRCUMFERENCE / 100) * percentage;

    /*
        The rendered circle consists of two half-circles with a gap between them.
        That means we have to rotate one of them to create this gap and we also have to
        completely remove one of the circles once the other one grows so large that there is
        not enough room to fit the other. The numbers used to rotate, adjust and hide
        half-circles below come from visually inspecting the result at different percentages
        and is not the result of any kind of complex math. If any aspect of this SVG is
        changed, please verify that it looks right for the entire 0-100 percentage range.
    */
    return (
        <div className="ffe-chart-donut">
            <svg
                viewBox="0 0 360 360"
                className="ffe-chart-donut__circle"
                style={{
                    transform: `scale(-1, 1) rotate(${
                        percentage ? 275 : -90
                    }deg)`,
                }}
            >
                {percentage < 95.7 && (
                    <circle
                        className="ffe-chart-donut--first"
                        fill="none"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        cx="50%"
                        cy="50%"
                        r={RADIUS}
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={
                            CIRCUMFERENCE - offset + (percentage ? 22 : 0)
                        }
                    />
                )}
            </svg>
            <svg
                viewBox="0 0 360 360"
                className="ffe-chart-donut__circle"
                style={{
                    transform: `rotate(${percentage ? -85 : -90}deg)`,
                }}
            >
                {percentage > 3.2 && (
                    <circle
                        className="ffe-chart-donut--last"
                        fill="none"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        cx="50%"
                        cy="50%"
                        r={RADIUS}
                        strokeDasharray={
                            CIRCUMFERENCE + (percentage === 100 ? 22 : 0)
                        }
                        strokeDashoffset={offset + (percentage ? 30 : 0)}
                    />
                )}
            </svg>
            <div className="ffe-chart-donut__description">
                <div className="ffe-chart-donut__name ffe-strong-text">
                    {name}
                </div>
                {firstLabel && lastLabel && (
                    <div className="ffe-chart-donut__fractions">
                        <div className="ffe-chart-donut__fraction ffe-chart-donut__fraction--vann">
                            <div className="ffe-chart-donut__amount ffe-strong-text">
                                {`${Number(100 - percentage).toFixed(
                                    0,
                                )}${NON_BREAKING_SPACE}%`}
                            </div>
                            <div className="ffe-chart-donut__type ffe-micro-text">
                                {firstLabel}
                            </div>
                        </div>
                        <div className="ffe-chart-donut__fraction ffe-chart-donut__fraction--frost">
                            <div className="ffe-chart-donut__amount ffe-strong-text">
                                {`${Number(percentage).toFixed(
                                    0,
                                )}${NON_BREAKING_SPACE}%`}
                            </div>
                            <div className="ffe-chart-donut__type ffe-micro-text">
                                {lastLabel}
                            </div>
                        </div>
                    </div>
                )}
                {!firstLabel && !lastLabel && label}
            </div>
        </div>
    );
}

ChartDonut.propTypes = {
    /** Short text labeling left value, like "empty", "said yes" etc */
    firstLabel: string,
    /** Short text labeling right value, like "full", "said no" etc */
    lastLabel: string,
    /** React node to be inserted directly under the chart's name, alternative to first/last label */
    label: node,
    /** Short text labeling the graph in total, like "percentage", "voted this year" etc */
    name: string.isRequired,
    /** The percentage for the right-most value */
    percentage: number.isRequired,
};

export default ChartDonut;
