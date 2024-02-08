import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';

import SystemMessage from './SystemMessage';

export default function SystemSuccessMessage(props) {
    const checkIconSmall =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Im0zOTUtMzcyLjM4NCAyNzAuNTM5LTI2OS41MzhxNy45MjMtNy45MjMgMTcuNjkyLTcuNjE2IDkuNzY5LjMwOCAxOC4wNzYgOC42MTYgOC4zMDggOC4zMDcgOC4zMDggMTcuODg0IDAgOS41NzYtOC4zMDggMTcuODg0bC0yODMgMjgyLjk5OXEtOS44NDYgOS44NDYtMjIuODA3IDkuODQ2LTEyLjk2MSAwLTIyLjgwNy05Ljg0NmwtMTE0LTExMy45OTlxLTcuOTIzLTcuOTIzLTguMzA4LTE3LjY5Mi0uMzg0LTkuNzY5IDcuOTIzLTE4LjA3NiA4LjMwOC04LjMwOCAxNy44ODQtOC4zMDggOS41NzcgMCAxNy44ODQgOC4zMDhMMzk1LTM3Mi4zODRaIi8+PC9zdmc+';
    return (
        <SystemMessage
            modifier="success"
            aria-label="Suksessmelding"
            icon={<Icon ariaLabel="Hake" size="sm" fileUrl={checkIconSmall} />}
            {...props}
        />
    );
}
