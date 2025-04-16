import React from 'react';
import { txt } from './i18n/texts';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';

export type Thumb = 'THUMB_UP' | 'THUMB_DOWN';

interface FeedbackThumbsProps {
    locale: 'nb' | 'nn' | 'en';
    onClick: (thumb: Thumb) => void;
    headingId: string;
}

const thumbUpIconLg =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik04MzUuMTMtNjE2LjJxMjQuNjQgMCA0My42IDE4Ljk2dDE4Ljk2IDQzLjZ2NjUuNnEwIDYuMzktLjA1IDEzLjM4LS4wNSA2Ljk5LTIuNDYgMTMuMjJMNzc3LjgzLTE4Ny4xM3EtOC42MSAxOS44LTI4Ljg2IDMzLjQ2UTcyOC43MS0xNDAgNzA3LjE5LTE0MEgyODQuNjd2LTQ3Ni4ybDIyNS4yNS0yMzAuN3ExMC45OS0xMS4yNSAyNS45Mi0xMy41NiAxNC45My0yLjMxIDI4LjM5IDUuMjYgMTMuMzEgNy41NiAxOS43OSAyMS41MSA2LjQ5IDEzLjk1IDIuOTggMjkuMUw1NDYuOTctNjE2LjJoMjg4LjE2Wm0tNTAwLjIxIDIxLjMzdjQwNC42MWgzNzguNzdxMy45OCAwIDguNTMtMi4zIDQuNTUtMi4zMSA2Ljg2LTcuN2wxMTguMzYtMjc5LjMzdi03NC4wNXEwLTUuMTMtMy41OS04LjcyLTMuNTktMy41OS04LjcyLTMuNTlINDg0LjkybDQ5LjQ5LTIzMy4xOC0xOTkuNDkgMjA0LjI2Wk0xNjIuMTUtMTQwcS0yNS44IDAtNDQuMTgtMTguNDh0LTE4LjM4LTQ0LjA5di0zNTEuMDdxMC0yNS42MSAxOC4zOC00NC4wOSAxOC4zOC0xOC40NyA0NC4xOC0xOC40N2gxMjIuNTJ2NTAuMjVIMTYyLjE1cS01LjM4IDAtOC44NCAzLjU5dC0zLjQ2IDguNzJ2MzUxLjA3cTAgNS4zOSAzLjQ2IDguODV0OC44NCAzLjQ2aDEyMi41MlYtMTQwSDE2Mi4xNVptMTcyLjc3LTUwLjI2di00MDQuNjEgNDA0LjYxWiIvPjwvc3ZnPg==';

const thumbDownIconLg =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik0xMjUuMTMtMzQzLjhxLTI1IDAtNDMuNzgtMTguOTZ0LTE4Ljc4LTQzLjZ2LTY1LjZxMC02LjM5LS4wOC0xMy4zOC0uMDgtNi45OSAyLjMzLTEzLjIybDExNy42MS0yNzQuMzFxOC4yNi0xOS43NiAyOC41Ni0zMy40NFEyMzEuMjktODIwIDI1Mi44MS04MjBoNDIyLjUydjQ3Ni4yTDQ1MC4wOC0xMTMuMXEtMTAuOTkgMTEuMjUtMjUuOTIgMTMuNTYtMTQuOTMgMi4zMS0yOC4zOS01LjI2LTEzLjMxLTcuNTYtMTkuNzktMjEuNTEtNi40OS0xMy45NS0yLjk4LTI5LjFsNDAuMDMtMTg4LjM5aC0yODcuOVptNDk5Ljk1LTIxLjMzdi00MDQuNjFIMjQ2LjMxcS0zLjk4IDAtOC41MyAyLjMtNC41NSAyLjMxLTYuODYgNy43bC0xMTguMSAyNzkuMzN2NzQuMDVxMCA1LjEzIDMuNDYgOC43MiAzLjQ2IDMuNTkgOC44NSAzLjU5aDM0OS45NWwtNDkuNDkgMjMzLjE4IDE5OS40OS0yMDQuMjZaTTc5Ny44NS04MjBxMjUuOCAwIDQ0LjE4IDE4LjQ4dDE4LjM4IDQ0LjA5djM1MS4wN3EwIDI1LjYxLTE4LjM4IDQ0LjA5LTE4LjM4IDE4LjQ3LTQ0LjE4IDE4LjQ3SDY3NS4zM3YtNTAuMjVoMTIyLjUycTUuMzggMCA4Ljg0LTMuNTl0My40Ni04Ljcydi0zNTEuMDdxMC01LjM5LTMuNDYtOC44NXQtOC44NC0zLjQ2SDY3NS4zM1YtODIwaDEyMi41MlptLTE3Mi43NyA1MC4yNnY0MDQuNjEtNDA0LjYxWiIvPjwvc3ZnPg==';

export const FeedbackThumbs: React.FC<FeedbackThumbsProps> = ({
    locale,
    onClick,
    headingId,
}) => {
    return (
        <div className="ffe-feedback__thumbs">
            <SecondaryButton
                aria-label={txt[locale].ARIA_LABEL_THUMB_UP}
                aria-describedby={headingId}
                onClick={() => onClick('THUMB_UP')}
                iconOnly={true}
                size={'lg'}
            >
                <Icon size="lg" fileUrl={thumbUpIconLg} />
            </SecondaryButton>
            <SecondaryButton
                aria-label={txt[locale].ARIA_LABEL_THUMB_DOWN}
                aria-describedby={headingId}
                onClick={() => onClick('THUMB_DOWN')}
                iconOnly={true}
                size={'lg'}
            >
                <Icon size="lg" fileUrl={thumbDownIconLg} />
            </SecondaryButton>
        </div>
    );
};
