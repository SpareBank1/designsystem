import React from 'react';
import ContextMessage from './ContextMessage';
import { ContextMessageIcon } from './ContextMessageIcon';

const ContextSuccessMessage = props => {
    const checkIconSmall =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Im0zOTUtMzcyLjM4NCAyNzAuNTM5LTI2OS41MzhxNy45MjMtNy45MjMgMTcuNjkyLTcuNjE2IDkuNzY5LjMwOCAxOC4wNzYgOC42MTYgOC4zMDggOC4zMDcgOC4zMDggMTcuODg0IDAgOS41NzYtOC4zMDggMTcuODg0bC0yODMgMjgyLjk5OXEtOS44NDYgOS44NDYtMjIuODA3IDkuODQ2LTEyLjk2MSAwLTIyLjgwNy05Ljg0NmwtMTE0LTExMy45OTlxLTcuOTIzLTcuOTIzLTguMzA4LTE3LjY5Mi0uMzg0LTkuNzY5IDcuOTIzLTE4LjA3NiA4LjMwOC04LjMwOCAxNy44ODQtOC4zMDggOS41NzcgMCAxNy44ODQgOC4zMDhMMzk1LTM3Mi4zODRaIi8+PC9zdmc+';

    const checkIconLarge =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDAiPjxwYXRoIGQ9Im0zODAuMTAzLTMyOC41NjMgMzU3LjE4LTM1Ny40MzZxNy40OC03LjE4IDE3LjgyOS03LjM3MiAxMC4zNDktLjE5MiAxOC4xNjkgNy40MDcgNy41NjQgNy44NTUgNy41NjQgMTguMTI3IDAgMTAuMjczLTcuNTY0IDE3LjgzN0w0MDIuMDI1LTI3OC43NDRxLTkuMzU4IDkuMzU4LTIxLjkyMiA5LjM1OHQtMjEuOTIzLTkuMzU4TDE4Ni4zMDgtNDUwLjYxNnEtNy40MzUtNy40OC03LjMyLTE3LjgyOS4xMTUtMTAuMzQ5IDcuOTcxLTE4LjE3IDcuODU1LTcuNTY0IDE3Ljk5OS03LjU2NCAxMC4xNDQgMCAxNy45NjUgNy41NjRsMTU3LjE4IDE1OC4wNTJaIi8+PC9zdmc+';

    return (
        <ContextMessage
            {...props}
            messageType="success"
            aria-label="Suksessmelding"
            role="group"
            icon={
                <ContextMessageIcon
                    smallIconUrl={checkIconSmall}
                    largeIconUrl={checkIconLarge}
                    ariaLabel="hake"
                />
            }
        />
    );
};

export default ContextSuccessMessage;
