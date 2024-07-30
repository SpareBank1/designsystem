import React, { ChangeEvent, useId } from 'react';
import classnames from 'classnames';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { txt } from './texts';
import { Locale } from './types';
import { Label } from '@sb1/ffe-form-react';
import type { PaginationControls } from './types';
import { DOTS, usePaginationRange } from './usePaginationRange';

export interface PaginationProps {
    className?: string;
    locale?: Locale;
    dropdownId?: string;
    showRowsPerPageDropdown?: boolean;
    showRowsPerPageText?: boolean;
    paginationControls: PaginationControls;
    rowsPerPageOptions?: number[];
    navigationButtonText?: boolean;
}

const chevronLeftIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==';
const chevronRightIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik01MTcuODQ3LTQ4MCAzNTQuOTI0LTY0Mi45MjRxLTguMzA4LTguMzA3LTguNS0yMC44ODQtLjE5My0xMi41NzYgOC41LTIxLjI2OCA4LjY5Mi04LjY5MyAyMS4wNzYtOC42OTN0MjEuMDc2IDguNjkzbDE3OS43NjkgMTc5Ljc2OXE1LjYxNiA1LjYxNSA3LjkyMyAxMS44NDYgMi4zMDggNi4yMyAyLjMwOCAxMy40NjF0LTIuMzA4IDEzLjQ2MXEtMi4zMDcgNi4yMzEtNy45MjMgMTEuODQ2TDM5Ny4wNzYtMjc0LjkyNHEtOC4zMDcgOC4zMDgtMjAuODg0IDguNS0xMi41NzYuMTkzLTIxLjI2OC04LjUtOC42OTMtOC42OTItOC42OTMtMjEuMDc2dDguNjkzLTIxLjA3Nkw1MTcuODQ3LTQ4MFoiLz48L3N2Zz4=';
const dotsIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
    >
        <path d="M249.231-420.001q-24.749 0-42.374-17.625-17.624-17.625-17.624-42.374 0-24.749 17.624-42.374 17.625-17.625 42.374-17.625 24.75 0 42.374 17.625Q309.23-504.749 309.23-480q0 24.749-17.625 42.374-17.624 17.625-42.374 17.625Zm230.769 0q-24.749 0-42.374-17.625-17.625-17.625-17.625-42.374 0-24.749 17.625-42.374 17.625-17.625 42.374-17.625 24.749 0 42.374 17.625 17.625 17.625 17.625 42.374 0 24.749-17.625 42.374-17.625 17.625-42.374 17.625Zm230.769 0q-24.75 0-42.374-17.625Q650.77-455.251 650.77-480q0-24.749 17.625-42.374 17.624-17.625 42.374-17.625 24.749 0 42.374 17.625 17.624 17.625 17.624 42.374 0 24.749-17.624 42.374-17.625 17.625-42.374 17.625Z" />
    </svg>
);

export const Pagination = ({
    className,
    locale = 'nb',
    dropdownId,
    showRowsPerPageDropdown = true,
    showRowsPerPageText = true,
    paginationControls,
    rowsPerPageOptions = [10, 20, 50, 100],
    navigationButtonText = true,
}: PaginationProps) => {
    const pageNumberList = usePaginationRange(
        paginationControls.totalElements,
        paginationControls.currentPageSize,
        paginationControls.currentPage,
    );

    const generatedInputId = useId();
    const dropDownId = dropdownId ?? generatedInputId;

    return (
        <nav
            role="navigation"
            aria-label={txt[locale].paginationNavigation}
            className={classnames('ffe-pagination', className)}
        >
            <div className="ffe-pagination__rows">
                {showRowsPerPageText && (
                    <div className="ffe-pagination__info">
                        {txt[locale].showing(
                            (paginationControls.pageStart + 1).toString(),
                            paginationControls.pageEnd.toString(),
                            paginationControls.totalElements.toString(),
                        )}
                    </div>
                )}
                {showRowsPerPageDropdown && (
                    <div className="ffe-pagination__rows-per-page">
                        <Label
                            className={'ffe-pagination__rows-per-page--label'}
                            htmlFor={dropDownId}
                            aria-label={txt[locale].showRows}
                        >
                            <span aria-hidden={true}>{txt[locale].show}</span>
                        </Label>
                        <Dropdown
                            defaultValue={paginationControls.currentPageSize}
                            onChange={(
                                event: ChangeEvent<HTMLSelectElement>,
                            ) => {
                                const pageSize = Number(event.target.value);
                                paginationControls.setPageSize(pageSize);
                            }}
                            className="ffe-pagination__rows-per-page--dropdown"
                            id={dropDownId}
                        >
                            {rowsPerPageOptions.map(
                                (count: number, index: number) => {
                                    return (
                                        <option
                                            key={`${dropDownId}-${index}`}
                                            value={count}
                                        >
                                            {count}
                                        </option>
                                    );
                                },
                            )}
                        </Dropdown>
                        <span
                            aria-hidden={true}
                            className="ffe-pagination__rows-per-page--text"
                        >
                            {txt[locale].rowsPerPage}
                        </span>
                    </div>
                )}
            </div>
            <div className="ffe-pagination__controls">
                {paginationControls.hasPreviousPage && (
                    <SecondaryButton
                        type="button"
                        className={classnames(
                            'ffe-pagination__controls-navigation',
                            {
                                'ffe-pagination__controls-navigation--icon-only':
                                    !navigationButtonText,
                            },
                        )}
                        leftIcon={<Icon fileUrl={chevronLeftIcon} size="md" />}
                        onClick={() => {
                            paginationControls.setCurrentPage(
                                paginationControls.currentPage - 1,
                            );
                        }}
                    >
                        <span
                            className={classnames(
                                'ffe-pagination__controls-navigation-text',
                            )}
                        >
                            {txt[locale].previous}
                        </span>
                        <span className="ffe-screenreader-only">
                            {txt[locale].page}
                        </span>
                    </SecondaryButton>
                )}
                {pageNumberList.length > 1 &&
                    pageNumberList.map((pageNumber, index) => {
                        const key = `${'page-number-item'}-${index}`;

                        return pageNumber === DOTS ? (
                            <div
                                key={key}
                                className="ffe-pagination__controls-dots"
                            >
                                {dotsIcon}
                            </div>
                        ) : (
                            <SecondaryButton
                                key={key}
                                type="button"
                                aria-label={
                                    paginationControls.currentPage ===
                                    pageNumber
                                        ? txt[locale].currentPage(
                                              pageNumber.toString(),
                                          )
                                        : txt[locale].goToPage(
                                              pageNumber.toString(),
                                          )
                                }
                                aria-current={
                                    paginationControls.currentPage ===
                                    pageNumber
                                        ? true
                                        : false
                                }
                                className={classnames(
                                    'ffe-pagination__controls-link',
                                    {
                                        'ffe-pagination__controls-link--active':
                                            paginationControls.currentPage ===
                                            pageNumber,
                                    },
                                )}
                                onClick={() => {
                                    paginationControls.setCurrentPage(
                                        pageNumber,
                                    );
                                }}
                            >
                                {pageNumber}
                            </SecondaryButton>
                        );
                    })}
                {paginationControls.hasNextPage && (
                    <SecondaryButton
                        className={classnames(
                            'ffe-pagination__controls-navigation',
                            {
                                'ffe-pagination__controls-navigation--icon-only':
                                    !navigationButtonText,
                            },
                        )}
                        type="button"
                        rightIcon={
                            <Icon fileUrl={chevronRightIcon} size="md" />
                        }
                        onClick={() => {
                            paginationControls.setCurrentPage(
                                paginationControls.currentPage + 1,
                            );
                        }}
                    >
                        <span
                            className={classnames(
                                'ffe-pagination__controls-navigation-text',
                            )}
                        >
                            {txt[locale].next}
                        </span>
                        <span className="ffe-screenreader-only">
                            {txt[locale].page}
                        </span>
                    </SecondaryButton>
                )}
            </div>
        </nav>
    );
};
