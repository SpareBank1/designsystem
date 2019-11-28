import React from 'react';
import { func, number, string } from 'prop-types';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import Dropdown from '@sb1/ffe-dropdown-react';
import MonthPicker from './MonthPicker';
import i18n from '../i18n/i18n';

export default function Header(props) {
    const {
        datepickerId,
        month,
        year,
        language,
        nextMonthHandler,
        previousMonthHandler,
        todayHandler,
        selectYearHandler,
    } = props;

    function renderYearOptions() {
        const distribution = 5;
        const minYear = year - distribution;
        const maxYear = year + distribution;
        const options = [];
        let currentYear = minYear;
        let option;

        while (currentYear <= maxYear) {
            option = (
                <option key={currentYear} value={currentYear}>
                    {currentYear}
                </option>
            );
            options.push(option);
            currentYear += 1;
        }

        return options;
    }

    const todayLabel = i18n[language].TODAY;

    return (
        <div id={`${datepickerId}-header`} className="ffe-calendar__header">
            <div
                id={`${datepickerId}-settings`}
                className="ffe-calendar__header-container"
            >
                <div className="ffe-calendar__header-wrapper">
                    <div className="ffe-calendar__header-define" />
                    <div className="ffe-calendar__header-break ffe-calendar__header-break-1" />
                    <div className="ffe-calendar__header-block" />
                    <div className="ffe-calendar__header-define" />
                    <div className="ffe-calendar__header-break ffe-calendar__header-break-2" />
                    <div className="ffe-calendar__header-block" />

                    <div
                        id={`${datepickerId}-view1`}
                        className="ffe-calendar__header-content"
                    >
                        <div className="ffe-calendar__header-inner-1">
                            <div>
                                <Dropdown
                                    value={year}
                                    tabIndex="-1"
                                    onChange={selectYearHandler}
                                >
                                    {renderYearOptions()}
                                </Dropdown>
                            </div>
                            <div>
                                <MonthPicker
                                    previousMonthHandler={previousMonthHandler}
                                    nextMonthHandler={nextMonthHandler}
                                    month={month}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        id={`${datepickerId}-view2`}
                        className="ffe-calendar__header-content"
                    >
                        <div className="ffe-calendar__header-inner-2">
                            <div>
                                <Dropdown
                                    value={year}
                                    tabIndex="-1"
                                    onChange={selectYearHandler}
                                >
                                    {renderYearOptions()}
                                </Dropdown>
                            </div>
                            <div>
                                <MonthPicker
                                    previousMonthHandler={previousMonthHandler}
                                    nextMonthHandler={nextMonthHandler}
                                    month={month}
                                />
                            </div>
                            <div>
                                <SecondaryButton onClick={todayHandler}>
                                    {todayLabel}
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                    <div
                        id={`${datepickerId}-view3`}
                        className="ffe-calendar__header-content"
                    >
                        <div className="ffe-calendar__header-inner-3">
                            <div>
                                <Dropdown
                                    value={year}
                                    tabIndex="-1"
                                    onChange={selectYearHandler}
                                >
                                    {renderYearOptions()}
                                </Dropdown>
                            </div>
                            <div>
                                <MonthPicker
                                    previousMonthHandler={previousMonthHandler}
                                    nextMonthHandler={nextMonthHandler}
                                    month={month}
                                />
                            </div>
                            <div>
                                <SecondaryButton onClick={todayHandler}>
                                    {todayLabel}
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    datepickerId: string.isRequired,
    month: string.isRequired,
    year: number.isRequired,
    language: string.isRequired,
    nextMonthHandler: func.isRequired,
    previousMonthHandler: func.isRequired,
    todayHandler: func.isRequired,
    selectYearHandler: func.isRequired,
};
