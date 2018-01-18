'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.InfoMessageList = exports.InfoMessageListItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var InfoMessageListItem = (exports.InfoMessageListItem = function InfoMessageListItem(
    props,
) {
    return _react2.default.createElement(
        'li',
        null,
        props.href &&
            _react2.default.createElement(
                'a',
                { href: props.href, className: 'ffe-message-box__link' },
                props.children,
            ),
        !props.href && props.children,
    );
});
InfoMessageListItem.propTypes = {
    href: _propTypes.string,
    children: _propTypes.string.isRequired,
};

var InfoMessageList = (exports.InfoMessageList = function InfoMessageList(
    props,
) {
    return _react2.default.createElement(
        'ul',
        { className: 'ffe-message-box__list' },
        props.children,
    );
});

InfoMessageList.propTypes = {
    children: _propTypes.node.isRequired,
};
