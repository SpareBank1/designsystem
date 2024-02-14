import React from 'react';
import { func, number, object, string } from 'prop-types';
import { Icon } from '@sb1/ffe-icons-react';

export default function Header(props) {
    const {
        datepickerId,
        month,
        nextMonthHandler,
        nextMonthLabel,
        previousMonthHandler,
        previousMonthLabel,
        year,
        prevMonthButtonElement,
        nextMonthButtonElement,
    } = props;

    const arrowBackIosIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im0xMjcuMzg0LTQ4MCAzMDEuMzA4IDMwMS4zMDhxMTEuOTIzIDExLjkyMyAxMS42MTUgMjguMDc3LS4zMDggMTYuMTUzLTEyLjIzMSAyOC4wNzYtMTEuOTIyIDExLjkyMy0yOC4wNzYgMTEuOTIzdC0yOC4wNzYtMTEuOTIzTDY1LjA3OC00MjguNzdRNTQuMjMtNDM5LjYxNiA0OS00NTMuMDc3IDQzLjc3LTQ2Ni41MzkgNDMuNzctNDgwcTAtMTMuNDYxIDUuMjMtMjYuOTIzIDUuMjMxLTEzLjQ2MSAxNi4wNzgtMjQuMzA3bDMwNi44NDYtMzA2Ljg0NnExMS45MjItMTEuOTIzIDI4LjM4NC0xMS42MTYgMTYuNDYxLjMwOCAyOC4zODQgMTIuMjMxIDExLjkyMyAxMS45MjMgMTEuOTIzIDI4LjA3NiAwIDE2LjE1NC0xMS45MjMgMjguMDc3TDEyNy4zODQtNDgwWiIvPjwvc3ZnPg==';

    const arrowForwardIosIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik01OTMuMjMyLTQ4MCAyOTEuOTI0LTc4MS4zMDhxLTExLjkyMy0xMS45MjMtMTEuNjE2LTI4LjM4NC4zMDgtMTYuNDYyIDEyLjIzMS0yOC4zODQgMTEuOTIzLTExLjkyMyAyOC4zODQtMTEuOTIzdDI4LjM4NCAxMS45MjNMNjU1LjUzOC01MzEuMjNxMTAuODQ2IDEwLjg0NiAxNi4wNzcgMjQuMzA3IDUuMjMgMTMuNDYyIDUuMjMgMjYuOTIzIDAgMTMuNDYxLTUuMjMgMjYuOTIzLTUuMjMxIDEzLjQ2MS0xNi4wNzcgMjQuMzA3TDM0OC42OTItMTIxLjkyNHEtMTEuOTIzIDExLjkyMy0yOC4wNzcgMTEuNjE2LTE2LjE1My0uMzA4LTI4LjA3Ni0xMi4yMzEtMTEuOTIzLTExLjkyMy0xMS45MjMtMjguMzg0dDExLjkyMy0yOC4zODRMNTkzLjIzMi00ODBaIi8+PC9zdmc+';

    return (
        <div className="ffe-calendar__header">
            <div className="ffe-calendar__header-inner-wrapper">
                <button
                    className="ffe-calendar__month-nav ffe-calendar__previous"
                    onClick={previousMonthHandler}
                    aria-label={previousMonthLabel}
                    type="button"
                    ref={prevMonthButtonElement}
                    tabIndex={-1}
                >
                    <Icon
                        fileUrl={arrowBackIosIcon}
                        size="md"
                        className="ffe-calendar__icon-prev"
                    />
                </button>
                <header
                    aria-live="polite"
                    className="ffe-calendar__title"
                    id={`${datepickerId}-title`}
                >
                    <div id={`${datepickerId}__month-label`}>
                        <span className="ffe-calendar__month">{month}</span>
                        <span className="ffe-calendar__year">{year}</span>
                    </div>
                </header>
                <button
                    className="ffe-calendar__month-nav ffe-calendar__next"
                    onClick={nextMonthHandler}
                    aria-label={nextMonthLabel}
                    type="button"
                    ref={nextMonthButtonElement}
                    tabIndex={-1}
                >
                    <Icon
                        fileUrl={arrowForwardIosIcon}
                        size="md"
                        className="ffe-calendar__icon-next"
                    />
                </button>
            </div>
        </div>
    );
}

Header.propTypes = {
    datepickerId: string.isRequired,
    month: string.isRequired,
    nextMonthHandler: func.isRequired,
    nextMonthLabel: string.isRequired,
    previousMonthHandler: func.isRequired,
    previousMonthLabel: string.isRequired,
    year: number.isRequired,
    prevMonthButtonElement: object.isRequired,
    nextMonthButtonElement: object.isRequired,
};
