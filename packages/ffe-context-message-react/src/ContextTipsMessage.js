import React from 'react';
import ContextMessage from './ContextMessage';
import { ContextMessageIcon } from './ContextMessageIcon';
import texts from './locale/texts';
import { oneOf } from 'prop-types';
import acceptedLocales from './locale/accepted-locales';

const ContextTipsMessage = ({ locale = 'nb', ...rest }) => {
    const lightbulbIconSmall =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00NzkuNzg4LTExMi45MjRxLTI3LjA5NSAwLTQ2LjU1Ny0xOC42NS0xOS40NjEtMTguNjUtMjEuMzg1LTQ1LjY1N2gxMzYuMzA4cS0xLjkyNCAyNy4zMDctMjEuNTk3IDQ1LjgwNy0xOS42NzQgMTguNS00Ni43NjkgMTguNVpNMzcyLjI4My0yNDAuNjE3cS0xMS4wNTIgMC0xOC42NjctNy40MDUtNy42MTUtNy40MDQtNy42MTUtMTguMzg0IDAtMTAuOTc5IDcuNDUzLTE4LjU5NSA3LjQ1NC03LjYxNSAxOC41MDYtNy42MTVoMjE1Ljc1N3ExMS4wNTIgMCAxOC42NjcgNy40MDUgNy42MTUgNy40MDUgNy42MTUgMTguMzg0dC03LjQ1MyAxOC41OTVxLTcuNDU0IDcuNjE1LTE4LjUwNiA3LjYxNUgzNzIuMjgzWm0tNDUuMTI5LTExNS4zODRxLTU1Ljg0NS0zNi4wNzctODUuNDk5LTk0LjYxNVEyMTIuMDAxLTUwOS4xNTQgMjEyLjAwMS01NzZxMC0xMTEuOTIyIDc4LjAzOC0xODkuOTYxUTM2OC4wNzgtODQzLjk5OSA0ODAtODQzLjk5OXExMTEuOTIyIDAgMTg5Ljk2MSA3OC4wMzhRNzQ3Ljk5OS02ODcuOTIyIDc0Ny45OTktNTc2cTAgNjYuODQ2LTI5LjY1NCAxMjUuMzg0dC04NS40OTkgOTQuNjE1SDMyNy4xNTRaTTM0NC00MDhoMjcycTM4LTMxIDU5LTc1dDIxLTkzcTAtOTAuMzI3LTYyLjc2OS0xNTMuMTY0UTU3MC40NjItNzkyIDQ4MC4yMzEtNzkyVDMyNy03MjkuMTY0UTI2NC02NjYuMzI3IDI2NC01NzZxMCA0OSAyMSA5M3Q1OSA3NVptMTM2IDBaIi8+PC9zdmc+';

    const lightbulbIconLarge =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDAiPjxwYXRoIGQ9Ik00ODAtOTYuOTI0cS0zMC43MTggMC01Mi44MDctMjEtMjIuMDktMjEtMjMuNzU3LTUxLjcxOGgxNTMuMTI4cS0xLjY2NyAzMC43MTgtMjMuNzU3IDUxLjcxOC0yMi4wODkgMjEtNTIuODA3IDIxWk0zNTQuMDUxLTIzNS44NDhxLTEwLjY5OCAwLTE3LjkxMy03LjI0OS03LjIxNC03LjI1LTcuMjE0LTE4dDcuMjE0LTE3Ljg3OHE3LjIxNS03LjEyOCAxNy45MTMtNy4xMjhoMjUxLjg5OHExMC42OTggMCAxNy45MTMgNy4yNSA3LjIxNCA3LjI0OSA3LjIxNCAxNy45OTl0LTcuMjE0IDE3Ljg3OHEtNy4yMTUgNy4xMjgtMTcuOTEzIDcuMTI4SDM1NC4wNTFaTTMzMi43Ny0zNTEuNjQzcS02MS4zNTktNDAuMTUzLTk3LjA2NC0xMDAuOTYtMzUuNzA1LTYwLjgwOC0zNS43MDUtMTM1LjY1MyAwLTExNS40MzYgODIuMjgyLTE5Ny43MTdRMzY0LjU2NS04NjguMjU1IDQ4MC04NjguMjU1cTExNS40MzUgMCAxOTcuNzE3IDgyLjI4MiA4Mi4yODIgODIuMjgxIDgyLjI4MiAxOTcuNzE3IDAgNzQuODQ1LTM1LjUgMTM1LjY1My0zNS41IDYwLjgwNy05Ny4yNjkgMTAwLjk2SDMzMi43N1ptMTYuNzY4LTUwLjI1NEg2MTAuNzJxNDYuNjM5LTMyIDcyLjgzMS04MS4wMiAyNi4xOTMtNDkuMDE5IDI2LjE5My0xMDUuMzM5IDAtOTUuMzg1LTY3LjE4LTE2Mi41NjVRNTc1LjM4NS04MTggNDgwLTgxOHEtOTUuMzg1IDAtMTYyLjU2NCA2Ny4xNzktNjcuMTggNjcuMTgtNjcuMTggMTYyLjU1NCAwIDU2LjQwMyAyNi4xOTMgMTA1LjM4NyAyNi4xOTIgNDguOTgzIDczLjA4OSA4MC45ODNabTEzMC40NjIgMFoiLz48L3N2Zz4=';

    return (
        <ContextMessage
            {...rest}
            locale={locale}
            messageType="tips"
            role="group"
            aria-label={texts[locale].tip.ariaLabel}
            icon={
                <ContextMessageIcon
                    smallIconUrl={lightbulbIconSmall}
                    largeIconUrl={lightbulbIconLarge}
                />
            }
        />
    );
};

ContextTipsMessage.propTypes = {
    /** Decides the language */
    locale: oneOf(acceptedLocales),
};

export default ContextTipsMessage;
