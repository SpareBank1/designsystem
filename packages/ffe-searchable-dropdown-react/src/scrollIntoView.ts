import { compute } from 'compute-scroll-into-view';

export const scrollIntoView = (
    node: Element | null,
    menuNode: Element | null,
) => {
    if (!node) {
        return;
    }

    const actions = compute(node, {
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
