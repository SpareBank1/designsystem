import { useState } from 'react';
import { Tab, TabGroup } from '@sb1/ffe-tabs-react';
import { Icon } from '@sb1/ffe-icons-react';
import { IconCard } from '@sb1/ffe-cards-react';

() => {
    const displayNone = {
        display: 'none',
    };

    const spacing = {
        marginTop: '8px',
    };

    const loan = { house: 'house', car: 'car' };
    const [activeTabId, setActiveTabId] = useState(loan.house);
    const bilIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik0yMjQuNjE0LTIzNi4wMDF2NDEuNjkzcTAgMTIuNjI4LTguODUyIDIxLjQ2Ny04Ljg1MyA4Ljg0LTIxLjQ5OSA4Ljg0LTEyLjY0NyAwLTIxLjQ1NC04Ljg0LTguODA4LTguODM5LTguODA4LTIxLjQ2N3YtMjcwLjA0M3EwLTUuOTM0IDEuMzA4LTExLjg2OCAxLjMwOC01LjkzNSAzLjIxOC0xMi42MzlsNjkuODIxLTE3MS4wN3E2Ljk5Ny0xOC4wNjIgMjMuMzcyLTI5LjA2NiAxNi4zNzQtMTEuMDA1IDM1Ljc0Mi0xMS4wMDVoMzY1LjA3NnExOS4zNjggMCAzNS43NDIgMTEuMDA1IDE2LjM3NSAxMS4wMDQgMjMuMzcyIDI5LjA2Nmw2OS44MjEgMTcxLjA3cTEuOTEgNi43MDQgMy4yMTggMTIuNjM5IDEuMzA4IDUuOTM0IDEuMzA4IDExLjg2OHYyNzAuMDQzcTAgMTIuNjI4LTguODUzIDIxLjQ2Ny04Ljg1MyA4Ljg0LTIxLjQ5OSA4Ljg0LTEyLjY0NyAwLTIxLjQ1NC04Ljg0LTguODA3LTguODM5LTguODA3LTIxLjQ2N3YtNDEuNjkzSDIyNC42MTRabTguNjkzLTI2OC45Mmg0OTMuMzg2bC01My4zODUtMTM1LjAwMXEtMS41MzktMy44NDctNC42MTYtNS45NjItMy4wNzctMi4xMTYtNy4zMDgtMi4xMTZIMjk4LjYxNnEtNC4yMzEgMC03LjMwOCAyLjExNi0zLjA3NyAyLjExNS00LjYxNiA1Ljk2MmwtNTMuMzg1IDEzNS4wMDFaTTIxNi00NTIuOTIzVi0yODh2LTE2NC45MjNabTk0LjU1MiAxMjIuNzY5cTE2LjgzMiAwIDI4LjUyNC0xMS43ODMgMTEuNjkzLTExLjc4MyAxMS42OTMtMjguNjE1dC0xMS43ODMtMjguNTI0cS0xMS43ODMtMTEuNjkzLTI4LjYxNS0xMS42OTN0LTI4LjUyNSAxMS43ODNxLTExLjY5MiAxMS43ODMtMTEuNjkyIDI4LjYxNXQxMS43ODMgMjguNTI1cTExLjc4MyAxMS42OTIgMjguNjE1IDExLjY5MlptMzM5LjA3NyAwcTE2LjgzMiAwIDI4LjUyNS0xMS43ODMgMTEuNjkyLTExLjc4MyAxMS42OTItMjguNjE1dC0xMS43ODMtMjguNTI0cS0xMS43ODMtMTEuNjkzLTI4LjYxNS0xMS42OTN0LTI4LjUyNCAxMS43ODNxLTExLjY5MyAxMS43ODMtMTEuNjkzIDI4LjYxNXQxMS43ODMgMjguNTI1cTExLjc4MyAxMS42OTIgMjguNjE1IDExLjY5MlpNMjE2LTI4OGg1Mjh2LTE2NC45MjNIMjE2Vi0yODhaIi8+PC9zdmc+';
    const husIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00MzUuMzg0LTE4MC4wMDFIMjU2LjE1NXEtMTUuMzY1IDAtMjUuNzU5LTEwLjM5NS0xMC4zOTUtMTAuMzk0LTEwLjM5NS0yNS43NTl2LTI4My44NDZoLTQxLjg0NHEtMTIuNDYxIDAtMTYuNjkyLTExLjQ2Mi00LjIzMS0xMS40NjEgNS4yODUtMTkuMjU1bDI4OC45NDMtMjYwLjY2NXE5LjkxNy05Ljg0NiAyNC4zNDMtOS44NDYgMTQuNDI1IDAgMjQuMjcxIDkuODQ2bDEzMi42MTYgMTIwdi03OS43NjlxMC03LjIzIDUuNDIzLTEyLjY1MyA1LjQyMy01LjQyNCAxMi42NTQtNS40MjRoNTYuMTUycTcuMjMgMCAxMi42NTMgNS40MjQgNS40MjQgNS40MjMgNS40MjQgMTIuNjUzdjE2Mi4zODNsNjQuMDc1IDU3Ljk5OXE5LjQ2MiA4LjIzIDUuMjMxIDE5LjQ5OS00LjIzMSAxMS4yNy0xNi42OTIgMTEuMjdoLTQxLjg0NHYyODMuODQ2cTAgMTUuMzY1LTEwLjM5NSAyNS43NTktMTAuMzk0IDEwLjM5NS0yNS43NTkgMTAuMzk1SDUyNC42MTZ2LTIyNC42MTVoLTg5LjIzMnYyMjQuNjE1Wk0yODAtMjQwaDk1LjM4NnYtMjI0LjYxNGgyMDkuMjI4Vi0yNDBINjgwdi0zMTJMNDgwLTczMiAyODAtNTUydjMxMlptOTUuMzg2LTIyNC42MTRoMjA5LjIyOC0yMDkuMjI4Wm0yOC40Ni05NC43NzFoMTUyLjMwOHEwLTMwLjA3Ni0yMi44NDctNDkuNDIyLTIyLjg0Ni0xOS4zNDctNTMuMzA3LTE5LjM0Ny0zMC40NjEgMC01My4zMDcgMTkuMzEyLTIyLjg0NyAxOS4zMTItMjIuODQ3IDQ5LjQ1N1oiLz48L3N2Zz4=';

    return (
        <>
            <TabGroup>
                <Tab
                    selected={activeTabId === loan.house}
                    onClick={() => setActiveTabId(loan.house)}
                    aria-controls={loan.house}
                >
                    Huslån
                </Tab>

                <Tab
                    selected={activeTabId === loan.car}
                    onClick={() => setActiveTabId(loan.car)}
                    aria-controls={loan.car}
                >
                    Billån
                </Tab>
            </TabGroup>

            <IconCard
                icon={<Icon ariaLabel="hus" fileUrl={husIcon} size="md" />}
                id={loan.house}
                style={activeTabId === loan.house ? spacing : displayNone}
            >
                {({ Title, Subtext }) => (
                    <>
                        <Title>Huslån</Title>
                        <Subtext>Ta opp huslån</Subtext>
                    </>
                )}
            </IconCard>

            <IconCard
                icon={<Icon ariaLabel="bil" fileUrl={bilIcon} size="md" />}
                id={loan.car}
                style={activeTabId === loan.car ? spacing : displayNone}
            >
                {({ Title, Subtext }) => (
                    <>
                        <Title>Billån</Title>
                        <Subtext>Ta opp billån</Subtext>
                    </>
                )}
            </IconCard>
        </>
    );
};
