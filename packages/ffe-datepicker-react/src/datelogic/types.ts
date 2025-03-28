export type CalendarButtonState = {
    dayInMonth: number;
    timestamp: number;
    isNonClickableDate: boolean;
    isToday: boolean;
    isFocus: boolean;
    isSelected: boolean;
    isEnabled: boolean;
};

export type Locale = 'nb' | 'nn' | 'en';
