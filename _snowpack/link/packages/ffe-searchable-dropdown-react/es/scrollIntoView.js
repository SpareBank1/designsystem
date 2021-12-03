import computeScrollIntoView from '../../../../pkg/compute-scroll-into-view.js';
export var scrollIntoView = function scrollIntoView(node, menuNode) {
  if (!node) {
    return;
  }

  var actions = computeScrollIntoView(node, {
    boundary: menuNode,
    block: 'nearest',
    scrollMode: 'if-needed'
  });
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;
    // eslint-disable-next-line no-param-reassign
    el.scrollTop = top; // eslint-disable-next-line no-param-reassign

    el.scrollLeft = left;
  });
};