export const getNewHighlightedIndexUp = (currentIndex, numberOfElements) => {
    if (currentIndex === 0) {
        return numberOfElements - 1;
    }
    return currentIndex - 1;
};

export const getNewHighlightedIndexDown = (currentIndex, numberOfElements) => {
    if (currentIndex === numberOfElements - 1) {
        return 0;
    }
    return currentIndex + 1;
};
