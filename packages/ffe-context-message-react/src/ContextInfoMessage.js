import React from 'react';
import ContextMessage from './ContextMessage';
import { ContextMessageIcon } from './ContextMessageIcon';
import texts from './locale/texts';
import { oneOf } from 'prop-types';
import acceptedLocales from './locale/accepted-locales';

const ContextInfoMessage = ({ locale = 'nb', ...rest }) => {
    const infoIconSmall =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00NzkuNzg4LTY3MnEtMjUuOTQyIDAtNDMuODY0LTE4LjEzNS0xNy45MjMtMTguMTM2LTE3LjkyMy00NC4wNzd0MTguMTM1LTQzLjg2NHExOC4xMzUtMTcuOTIzIDQ0LjA3Ni0xNy45MjMgMjUuOTQyIDAgNDMuODY0IDE4LjEzNiAxNy45MjMgMTguMTM1IDE3LjkyMyA0NC4wNzZ0LTE4LjEzNSA0My44NjRRNTA1LjcyOS02NzIgNDc5Ljc4OC02NzJabS4yNTcgNTA3Ljk5OXEtMjAuODE0IDAtMzUuNDI5LTE0LjU4NC0xNC42MTUtMTQuNTgzLTE0LjYxNS0zNS40MTZ2LTI5Ni42MTRxMC0yMC44MzMgMTQuNTctMzUuNDE2IDE0LjU3LTE0LjU4MyAzNS4zODQtMTQuNTgzdDM1LjQyOSAxNC41ODNxMTQuNjE1IDE0LjU4MyAxNC42MTUgMzUuNDE2djI5Ni42MTRxMCAyMC44MzMtMTQuNTcgMzUuNDE2LTE0LjU3IDE0LjU4NC0zNS4zODQgMTQuNTg0WiIvPjwvc3ZnPg==';

    const infoIconLarge =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDAiPjxwYXRoIGQ9Ik00NzkuOTIxLTY4OS43NDRxLTI3LjE3NyAwLTQ2LjExMy0xOS4wMTUtMTguOTM1LTE5LjAxNS0xOC45MzUtNDYuMTkyIDAtMjcuMTc2IDE5LjAxNS00Ni4xMTIgMTkuMDE1LTE4LjkzNiA0Ni4xOTEtMTguOTM2IDI3LjE3NyAwIDQ2LjExMyAxOS4wMTYgMTguOTM1IDE5LjAxNSAxOC45MzUgNDYuMTkxIDAgMjcuMTc3LTE5LjAxNSA0Ni4xMTMtMTkuMDE1IDE4LjkzNS00Ni4xOTEgMTguOTM1Wm0uMDMxIDU0OS43NDNxLTE4LjgyMyAwLTMxLjk1MS0xMy4xNjMtMTMuMTI4LTEzLjE2Mi0xMy4xMjgtMzEuOTY1di0zNTQuMzU4cTAtMTguODAzIDEzLjE3Ni0zMS45NjUgMTMuMTc2LTEzLjE2MiAzMS45OTktMTMuMTYydDMxLjk1MSAxMy4xNjJxMTMuMTI4IDEzLjE2MiAxMy4xMjggMzEuOTY1djM1NC4zNThxMCAxOC44MDMtMTMuMTc2IDMxLjk2NS0xMy4xNzYgMTMuMTYzLTMxLjk5OSAxMy4xNjNaIi8+PC9zdmc+';

    return (
        <ContextMessage
            {...rest}
            locale={locale}
            messageType="info"
            role="group"
            aria-label={texts[locale].info.ariaLabel}
            icon={
                <ContextMessageIcon
                    smallIconUrl={infoIconSmall}
                    largeIconUrl={infoIconLarge}
                />
            }
        />
    );
};

ContextInfoMessage.propTypes = {
    /** Decides the language */
    locale: oneOf(acceptedLocales),
};

export default ContextInfoMessage;
