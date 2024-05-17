export const getNewHighlightedIndexUp = (
    currentIndex: number,
    numberOfElements: number,
) => {
    /**
     * When nothing is highlighted currentIndex is -1.
     * When pressing arrow key up and either the first item is selected or no item is selected we wrap around to the last item.
     */
    if (currentIndex <= 0) {
        return numberOfElements - 1;
    }
    return currentIndex - 1;
};

export const getNewHighlightedIndexDown = (
    currentIndex: number,
    numberOfElements: number,
) => {
    /**
     * When pressing arrow key down and the last item is selected we wrap around to the first item.
     */
    if (currentIndex === numberOfElements - 1) {
        return 0;
    }
    return currentIndex + 1;
};
