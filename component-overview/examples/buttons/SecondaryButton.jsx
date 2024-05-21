import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';

() => {
    const checkIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im0zODItMzM5LjM4NCAzNDUuNTM5LTM0NS41MzhxOC45MjMtOC45MjMgMjEuMTkyLTkuMTE2IDEyLjI2OS0uMTkyIDIxLjU3NiA5LjExNiA5LjMwOCA5LjMwNyA5LjMwOCAyMS4zODQgMCAxMi4wNzYtOS4zMDggMjEuMzg0bC0zNjMgMzYyLjk5OVEzOTYuNDYxLTI2OC4zMDkgMzgyLTI2OC4zMDlxLTE0LjQ2MSAwLTI1LjMwNy0xMC44NDZsLTE2Ny0xNjYuOTk5cS04LjkyMy04LjkyMy04LjgwOC0yMS4xOTIuMTE2LTEyLjI2OSA5LjQyMy0yMS41NzYgOS4zMDgtOS4zMDggMjEuMzg0LTkuMzA4IDEyLjA3NyAwIDIxLjM4NCA5LjMwOEwzODItMzM5LjM4NFoiLz48L3N2Zz4="
    return (
        <ButtonGroup thin={true} ariaLabel="Knappegruppe">
            <SecondaryButton onClick={f => f}>Secondary knapp</SecondaryButton>
            <SecondaryButton leftIcon={<Icon fileUrl={checkIcon} />} onClick={f => f}>
                Secondary m/ ikon
            </SecondaryButton>
            <SecondaryButton
                isLoading={true}
                onClick={f => f}
                ariaLoadingMessage="Vennligst vent..."
            >
                Secondary knapp
            </SecondaryButton>
        </ButtonGroup>
    );
}
