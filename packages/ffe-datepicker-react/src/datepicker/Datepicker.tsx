import React, { useEffect } from 'react';
import { Locale } from '../datelogic/types';
import { DatepickerComp, DatepickerCompProps } from './DatepickerComp';
import { DatepickerProvider } from './DatepickerContext';

export interface DatepickerProps extends DatepickerCompProps {
    value: string;
    locale: Locale;
    /** Hack that changes InputGroups label to a span to be wcag complient  */
    setInputGroupLabelAsSpan?: () => void;
}

export const Datepicker: React.FC<DatepickerProps> = ({
    locale = 'nb' as const,
    value,
    setInputGroupLabelAsSpan,
    ...props
}: DatepickerProps) => {
    useEffect(() => {
        setInputGroupLabelAsSpan?.();
    }, [setInputGroupLabelAsSpan]);
    return (
        <DatepickerProvider locale={locale} value={value}>
            <DatepickerComp {...props} />
        </DatepickerProvider>
    );
};
