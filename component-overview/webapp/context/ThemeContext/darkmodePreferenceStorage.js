const storageKey = 'sb1ex.prefered-color-scheme';

const probeMediaQueryPreference = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

const getStoredPreference = () => localStorage.getItem(storageKey);

export const storePreference = pref =>
    localStorage && localStorage.setItem(storageKey, pref);

export const getInitialPreference = () => {
    if (typeof window === 'undefined') {
        // Must be server side rendering, so localStorage and window.matchMedia
        // are not available and it is better to bail out with a sensible
        // default of `false`.
        return false;
    }

    let pref = getStoredPreference();

    if (!pref) {
        pref = probeMediaQueryPreference() ? 'dark' : 'light';
        storePreference(pref);
    }

    return pref === 'dark';
};
