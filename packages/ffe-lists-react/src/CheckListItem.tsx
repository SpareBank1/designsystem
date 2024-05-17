import React from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';

export interface CheckListItemProps
    extends React.ComponentPropsWithoutRef<'li'> {
    /** If true, render a red cross instead of a green checkmark */
    isCross?: boolean;
}

export const CheckListItem: React.FC<CheckListItemProps> = ({
    className,
    isCross = false,
    ...rest
}) => {
    const closeIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNDM3Ljg0NyAyNzcuMDc2LTIzNC45MjRxLTguMzA3IDguMzA4LTIwLjg4NCA4LjUtMTIuNTc2LjE5My0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NnQ4LjY5My0yMS4wNzZMNDM3Ljg0Ny00ODAgMjM0LjkyNC02ODIuOTI0cS04LjMwOC04LjMwNy04LjUtMjAuODg0LS4xOTMtMTIuNTc2IDguNS0yMS4yNjggOC42OTItOC42OTMgMjEuMDc2LTguNjkzdDIxLjA3NiA4LjY5M0w0ODAtNTIyLjE1M2wyMDIuOTI0LTIwMi45MjNxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDUyMi4xNTMtNDgwbDIwMi45MjMgMjAyLjkyNHE4LjMwOCA4LjMwNyA4LjUgMjAuODg0LjE5MyAxMi41NzYtOC41IDIxLjI2OC04LjY5MiA4LjY5My0yMS4wNzYgOC42OTN0LTIxLjA3Ni04LjY5M0w0ODAtNDM3Ljg0N1oiLz48L3N2Zz4=';

    const checkIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im0zODItMzM5LjM4NCAzNDUuNTM5LTM0NS41MzhxOC45MjMtOC45MjMgMjEuMTkyLTkuMTE2IDEyLjI2OS0uMTkyIDIxLjU3NiA5LjExNiA5LjMwOCA5LjMwNyA5LjMwOCAyMS4zODQgMCAxMi4wNzYtOS4zMDggMjEuMzg0bC0zNjMgMzYyLjk5OVEzOTYuNDYxLTI2OC4zMDkgMzgyLTI2OC4zMDlxLTE0LjQ2MSAwLTI1LjMwNy0xMC44NDZsLTE2Ny0xNjYuOTk5cS04LjkyMy04LjkyMy04LjgwOC0yMS4xOTIuMTE2LTEyLjI2OSA5LjQyMy0yMS41NzYgOS4zMDgtOS4zMDggMjEuMzg0LTkuMzA4IDEyLjA3NyAwIDIxLjM4NCA5LjMwOEwzODItMzM5LjM4NFoiLz48L3N2Zz4=';

    return (
        <li className={classNames('ffe-check-list__item', className)} {...rest}>
            {isCross ? (
                <Icon
                    className="ffe-check-list__icon ffe-check-list__icon--cross"
                    fileUrl={closeIcon}
                    ariaLabel="kryss"
                    size="md"
                />
            ) : (
                <Icon
                    className="ffe-check-list__icon ffe-check-list__icon--check"
                    fileUrl={checkIcon}
                    size="md"
                    ariaLabel="hake"
                />
            )}
            <div className="ffe-check-list__item-content">{rest.children}</div>
        </li>
    );
};
