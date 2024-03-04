import React from 'react';
import { number, node, string, bool, oneOf, func, object } from 'prop-types';
import acceptedLocales from './locale/accepted-locales';
import texts from './locale/texts';
import ContextMessage from './ContextMessage';
import { ContextMessageIcon } from './ContextMessageIcon';

const ContextErrorMessage = props => {
    const { alert, locale, ...rest } = props;

    const priorityHighIconSmall =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00NzkuNzg4LTE4Ny4wOHEtMjEuNTM3IDAtMzYuNjYyLTE1LjMzN3QtMTUuMTI1LTM2Ljg3NHEwLTIxLjUzNyAxNS4zMzctMzYuNjYyIDE1LjMzNy0xNS4xMjQgMzYuODc0LTE1LjEyNCAyMS41MzcgMCAzNi42NjIgMTUuMzM3dDE1LjEyNSAzNi44NzRxMCAyMS41MzctMTUuMzM3IDM2LjY2MS0xNS4zMzcgMTUuMTI1LTM2Ljg3NCAxNS4xMjVabS0uMDYyLTE5Ni4xNTFxLTE5LjM0MSAwLTMyLjg0LTEzLjcwOS0xMy41LTEzLjcwOS0xMy41LTMyLjk2di0zMTYuNjg1cTAtMTkuMjUxIDEzLjc3NC0zMi43OTQgMTMuNzczLTEzLjU0MiAzMy4xMTQtMTMuNTQyIDE5LjM0MSAwIDMyLjg0IDEzLjcwOSAxMy41IDEzLjcwOSAxMy41IDMyLjk2djMxNi42ODVxMCAxOS4yNTEtMTMuNzc0IDMyLjc5NC0xMy43NzMgMTMuNTQyLTMzLjExNCAxMy41NDJaIi8+PC9zdmc+';

    const priorityHighIconLarge =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDAiPjxwYXRoIGQ9Ik00NzkuOTIxLTE2My4wOHEtMjIuNzczIDAtMzguOTEtMTYuMjE3LTE2LjEzOC0xNi4yMTctMTYuMTM4LTM4Ljk4OSAwLTIyLjc3MyAxNi4yMTctMzguOTEgMTYuMjE3LTE2LjEzOCAzOC45ODktMTYuMTM4IDIyLjc3MyAwIDM4LjkxIDE2LjIxNyAxNi4xMzggMTYuMjE3IDE2LjEzOCAzOC45OSAwIDIyLjc3Mi0xNi4yMTcgMzguOTEtMTYuMjE3IDE2LjEzNy0zOC45ODkgMTYuMTM3Wm0tLjA2Mi0xOTYuMTUxcS0yMC41NzYgMC0zNS4wODgtMTQuNjExLTE0LjUxMy0xNC42MTItMTQuNTEzLTM1LjEzVi03NjcuMThxMC0yMC41MTggMTQuNjUzLTM1LjEzIDE0LjY1My0xNC42MTEgMzUuMjMtMTQuNjExIDIwLjU3NiAwIDM1LjA4OCAxNC42MTEgMTQuNTEzIDE0LjYxMiAxNC41MTMgMzUuMTN2MzU4LjIwOHEwIDIwLjUxOC0xNC42NTMgMzUuMTMtMTQuNjUzIDE0LjYxMS0zNS4yMyAxNC42MTFaIi8+PC9zdmc+';

    return (
        <ContextMessage
            {...rest}
            locale={locale}
            messageType="error"
            role={alert ? 'alert' : 'group'}
            aria-label={texts[locale].error.ariaLabel}
            icon={
                <ContextMessageIcon
                    smallIconUrl={priorityHighIconSmall}
                    largeIconUrl={priorityHighIconLarge}
                />
            }
        />
    );
};

ContextErrorMessage.propTypes = {
    animationLengthMs: number,
    /** The content shown in the context box */
    children: node.isRequired,
    /** Classes are added in addition to the relevant context message classes */
    className: string,
    /** Renders a more compact version of the context message */
    compact: bool,
    /** ID for the children container */
    contentElementId: string,
    header: string,
    /** ID for the header container */
    headerElementId: string,
    /** Decides the language */
    locale: oneOf(acceptedLocales),
    /** Callback for when the context message has been closed (after the animation) */
    onClose: func,
    showCloseButton: bool,
    /** Styles applied to the outermost element. `height` will be overridden */
    style: object,
    /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
    alert: bool,
};

ContextErrorMessage.defaultProps = {
    animationLengthMs: 300,
    compact: false,
    locale: 'nb',
    onClose: () => {},
    showCloseButton: false,
    style: {},
    alert: true,
};

export default ContextErrorMessage;
