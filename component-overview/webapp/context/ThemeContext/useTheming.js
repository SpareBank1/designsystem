import { useReducer, useEffect } from 'react';
import reducer from './reducer';
import initInitialState from './initInitialState';
import {
    getInitialPreference,
    storePreference,
} from './darkmodePreferenceStorage';
import { turnOnDarkMode, turnOffDarkMode } from './changeMediaQueryCondition';

export default function useTheming() {
    const prefersDarkMode = getInitialPreference();

    const [state, dispatch] = useReducer(
        reducer,
        prefersDarkMode,
        initInitialState,
    );

    useEffect(() => {
        if (state.colorScheme === 'light') {
            turnOffDarkMode();
        } else {
            turnOnDarkMode();
        }
        storePreference(state.colorScheme);
    }, [state.colorScheme]);

    const setTheme = bgcolor =>
        dispatch({ type: 'setTheme', payload: bgcolor });

    const toggleDarkMode = () => dispatch({ type: 'toggleDarkMode' });

    return {
        ...state,
        setTheme,
        toggleDarkMode,
    };
}
