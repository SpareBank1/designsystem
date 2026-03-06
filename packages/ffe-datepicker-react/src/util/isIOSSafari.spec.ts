import { isIOSSafari } from './isIOSSafari';

const mockNavigator = (userAgent: string, maxTouchPoints = 0) => {
    Object.defineProperty(window, 'navigator', {
        value: { userAgent, maxTouchPoints },
        writable: true,
        configurable: true,
    });
};

describe('isIOSSafari', () => {
    const originalNavigator = window.navigator;

    afterEach(() => {
        Object.defineProperty(window, 'navigator', {
            value: originalNavigator,
            writable: true,
            configurable: true,
        });
    });

    it('should return true for Safari on iPhone', () => {
        mockNavigator(
            'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
        );
        expect(isIOSSafari()).toBe(true);
    });

    it('should return true for Safari on iPadOS 13+ in desktop mode', () => {
        mockNavigator(
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/604.1',
            5,
        );
        expect(isIOSSafari()).toBe(true);
    });

    it('should return false for Safari on macOS (no touch points)', () => {
        mockNavigator(
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/604.1',
            0,
        );
        expect(isIOSSafari()).toBe(false);
    });

    it('should return false for Chrome on iPhone', () => {
        mockNavigator(
            'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/118.0.5993.69 Mobile/15E148 Safari/604.1',
        );
        expect(isIOSSafari()).toBe(false);
    });

    it('should return false for Chrome on desktop', () => {
        mockNavigator(
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        );
        expect(isIOSSafari()).toBe(false);
    });
});
