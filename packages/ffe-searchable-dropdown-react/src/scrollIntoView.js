import computeScrollIntoView from 'compute-scroll-into-view';

export const scrollIntoView = (node, menuNode) => {
    if (!node) {
        return;
    }

    const actions = computeScrollIntoView(node, {
        boundary: menuNode,
        block: 'nearest',
        scrollMode: 'if-needed',
    });
    actions.forEach(({ el, top, left }) => {
        // eslint-disable-next-line no-param-reassign
        el.scrollTop = top;
        // eslint-disable-next-line no-param-reassign
        el.scrollLeft = left;
    });
};
