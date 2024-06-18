import { StippledCard } from '@sb1/ffe-cards-react';
import { Icon } from '@sb1/ffe-icons-react';

() => {
    const monitoringIconLarge =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDAiPjxwYXRoIGQ9Ik0xMzAuMDAxLTE1NS4xMjh2LTM4Ljc0M2w1MC4yNTUtNTAuMjU1djg4Ljk5OHEwIDEwLjY4NS03LjI1OSAxNy45MDYtNy4yNTggNy4yMjEtMTcuOTk5IDcuMjIxdC0xNy44NjktNy4yMjFxLTcuMTI4LTcuMjIxLTcuMTI4LTE3LjkwNlptMTYyLjU2NCAwdi0xOTguNzQzbDUwLjI1NS01MC4yNTV2MjQ4Ljk5OHEwIDEwLjY4NS03LjM4NyAxNy45MDYtNy4zODcgNy4yMjEtMTcuODcxIDcuMjIxLTEwLjc0MSAwLTE3Ljg2OS03LjIyMXQtNy4xMjgtMTcuOTA2Wm0xNjIuMzA4IDB2LTI0OC45OThsNTAuMjU0IDUxLjI1NXYxOTcuNzQzcTAgMTAuNjg1LTcuMjU4IDE3LjkwNi03LjI1OCA3LjIyMS0xNy45OTkgNy4yMjF0LTE3Ljg2OS03LjIyMXEtNy4xMjgtNy4yMjEtNy4xMjgtMTcuOTA2Wm0xNjIuNTY0IDB2LTE5Ny43NDNsNTAuMjU1LTUwLjI1NXYyNDcuOTk4cTAgMTAuNjg1LTcuMzg3IDE3LjkwNi03LjM4NyA3LjIyMS0xNy44NzEgNy4yMjEtMTAuNzQxIDAtMTcuODY5LTcuMjIxdC03LjEyOC0xNy45MDZabTE2Mi4zMDcgMHYtMzU4Ljc0M2w1MC4yNTUtNTAuMjU1djQwOC45OThxMCAxMC42ODUtNy4yNTggMTcuOTA2LTcuMjU5IDcuMjIxLTE4IDcuMjIxdC0xNy44NjktNy4yMjFxLTcuMTI4LTcuMjIxLTcuMTI4LTE3LjkwNlpNMTM3LjQzNi00NDMuNjE1bDIxOC43Ny0yMTcuNjkycTE3LjY0OC0xNy45NzQgNDMuNzU5LTE3Ljk3NCAyNi4xMTIgMCA0NC4wODYgMTcuOTc0bDEwNy4xMDIgMTA3LjEwMnEzLjQ2MiAzLjQ2MiA4Ljg0NyAzLjQ2MnQ4Ljg0Ny0zLjQ2Mkw3ODcuMTgtNzcyLjUzOHE3LjQzNi03LjQzNiAxNy43OTQtNy41MjUgMTAuMzU5LS4wOSAxNy43MDggNy43MyA2LjY1MSA3LjQzNiA2LjgxNyAxNy42NS4xNjcgMTAuMjE1LTYuOTM1IDE3LjM0OUw2MDQuMDUxLTUxOC44MjFxLTE3Ljk0OSAxOC4zODQtNDQuMjQzIDE4LjE3OS0yNi4yOTUtLjIwNS00NC4yNjktMTguMTc5TDQwOC44NDctNjI1LjUxM3EtMy40NjItMy40NjItOC44NDctMy40NjJ0LTguODQ3IDMuNDYyTDE3My4yMy00MDguMjU3cS03LjQ4IDcuNDM2LTE4LjAyMSA3LjMyLTEwLjU0Mi0uMTE1LTE3Ljg5MS03LjkzNS02LjY1MS03LjE4LTYuODE3LTE3LjM5NC0uMTY3LTEwLjIxNCA2LjkzNS0xNy4zNDlaIi8+PC9zdmc+';
    return (
        <StippledCard
            img={{
                type: 'icon',
                element: <Icon fileUrl={monitoringIconLarge} size="lg" />,
            }}
            condensed={true}
        >
            {({ Title, Subtext }) => (
                <>
                    <Title>Sparekonto voksen 25</Title>
                    <Subtext>7 004,00</Subtext>
                </>
            )}
        </StippledCard>
    );
};
