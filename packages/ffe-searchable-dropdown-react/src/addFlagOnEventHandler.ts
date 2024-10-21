import React from 'react';

/**
 * Adds a flag on the event so that handleContainerFocus()
 * can determine whether this event originated from this
 * component
 */
export const addFlagOnEventHandler =
    (id: string) => (event: React.SyntheticEvent) => {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        event.nativeEvent.__eventFromFFESearchableDropdownId = id;
    };
