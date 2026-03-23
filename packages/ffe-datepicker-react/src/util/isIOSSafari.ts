/**
 * Detects iOS/iPadOS Safari to work around a VoiceOver bug that blocks
 * interaction with date-related inputs.
 * @see https://dev.to/mfranzke/voiceover-bug-on-ios-safari-blocks-date-time-related-inputs-especially-in-react-4f61
 *
 * Known limitations:
 * - iOS WebViews (in-app browsers like Instagram, Facebook) use WebKit and may
 *   be affected by the same bug, but are not detected here since they don't
 *   include "Safari" in the user agent string.
 */
export const isIOSSafari = (): boolean => {
    if (typeof navigator === 'undefined') {
        return false;
    }
    const ua = navigator.userAgent;
    // iPadOS 13+ in desktop mode reports as Macintosh, but can be identified
    // by having touch points (real Macs have maxTouchPoints === 0).
    const isIOS =
        /iP(ad|hone|od)/.test(ua) ||
        (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    const isSafari =
        !!ua.match(/Safari/) && !ua.match(/CriOS|FxiOS|OPiOS|EdgiOS/);
    return isIOS && isSafari;
};
