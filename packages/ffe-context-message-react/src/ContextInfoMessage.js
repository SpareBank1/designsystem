import React from 'react';
import ContextMessage from './ContextMessage';
import { ContextMessageIcon } from './ContextMessageIcon';

const ContextInfoMessage = props => {
    const infoIconSmall =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDAiPjxwYXRoIGQ9Ik00NzkuOTIxLTY4OS43NDRxLTI3LjE3NyAwLTQ2LjExMy0xOS4wMTUtMTguOTM1LTE5LjAxNS0xOC45MzUtNDYuMTkyIDAtMjcuMTc2IDE5LjAxNS00Ni4xMTIgMTkuMDE1LTE4LjkzNiA0Ni4xOTEtMTguOTM2IDI3LjE3NyAwIDQ2LjExMyAxOS4wMTYgMTguOTM1IDE5LjAxNSAxOC45MzUgNDYuMTkxIDAgMjcuMTc3LTE5LjAxNSA0Ni4xMTMtMTkuMDE1IDE4LjkzNS00Ni4xOTEgMTguOTM1Wm0uMDMxIDU0OS43NDNxLTE4LjgyMyAwLTMxLjk1MS0xMy4xNjMtMTMuMTI4LTEzLjE2Mi0xMy4xMjgtMzEuOTY1di0zNTQuMzU4cTAtMTguODAzIDEzLjE3Ni0zMS45NjUgMTMuMTc2LTEzLjE2MiAzMS45OTktMTMuMTYydDMxLjk1MSAxMy4xNjJxMTMuMTI4IDEzLjE2MiAxMy4xMjggMzEuOTY1djM1NC4zNThxMCAxOC44MDMtMTMuMTc2IDMxLjk2NS0xMy4xNzYgMTMuMTYzLTMxLjk5OSAxMy4xNjNaIi8+PC9zdmc+';

    const infoIconLarge =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDAiPjxwYXRoIGQ9Ik00NzkuOTIxLTY4OS43NDRxLTI3LjE3NyAwLTQ2LjExMy0xOS4wMTUtMTguOTM1LTE5LjAxNS0xOC45MzUtNDYuMTkyIDAtMjcuMTc2IDE5LjAxNS00Ni4xMTIgMTkuMDE1LTE4LjkzNiA0Ni4xOTEtMTguOTM2IDI3LjE3NyAwIDQ2LjExMyAxOS4wMTYgMTguOTM1IDE5LjAxNSAxOC45MzUgNDYuMTkxIDAgMjcuMTc3LTE5LjAxNSA0Ni4xMTMtMTkuMDE1IDE4LjkzNS00Ni4xOTEgMTguOTM1Wm0uMDMxIDU0OS43NDNxLTE4LjgyMyAwLTMxLjk1MS0xMy4xNjMtMTMuMTI4LTEzLjE2Mi0xMy4xMjgtMzEuOTY1di0zNTQuMzU4cTAtMTguODAzIDEzLjE3Ni0zMS45NjUgMTMuMTc2LTEzLjE2MiAzMS45OTktMTMuMTYydDMxLjk1MSAxMy4xNjJxMTMuMTI4IDEzLjE2MiAxMy4xMjggMzEuOTY1djM1NC4zNThxMCAxOC44MDMtMTMuMTc2IDMxLjk2NS0xMy4xNzYgMTMuMTYzLTMxLjk5OSAxMy4xNjNaIi8+PC9zdmc+';

    return (
        <ContextMessage
            {...props}
            messageType="info"
            aria-label="Infomelding"
            role="group"
            icon={
                <ContextMessageIcon
                    smallIconUrl={infoIconSmall}
                    largeIconUrl={infoIconLarge}
                    ariaLabel="Infotegn"
                />
            }
        />
    );
};

export default ContextInfoMessage;
