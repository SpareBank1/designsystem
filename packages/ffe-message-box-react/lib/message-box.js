'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});

var _extends =
    Object.assign ||
    function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}

var MessageBox = function MessageBox(props) {
    var type = props.type,
        title = props.title,
        icon = props.icon,
        content = props.content,
        children = props.children,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        rest = _objectWithoutProperties(props, [
            'type',
            'title',
            'icon',
            'content',
            'children',
            'className',
        ]);

    return _react2.default.createElement(
        'div',
        _extends(
            {
                className: (0, _classnames2.default)(
                    'ffe-message-box',
                    className,
                ),
            },
            rest,
        ),
        _react2.default.createElement(
            'span',
            {
                className: (0, _classnames2.default)(
                    'ffe-message-box__icon',
                    'ffe-message-box__icon--' + type,
                ),
            },
            icon,
        ),
        _react2.default.createElement(
            'div',
            {
                className: (0, _classnames2.default)(
                    'ffe-message-box__box',
                    'ffe-message-box__box--' + type,
                ),
            },
            title &&
                _react2.default.createElement(
                    'div',
                    {
                        className: (0, _classnames2.default)(
                            'ffe-h4',
                            'ffe-message-box__title--' + type,
                        ),
                    },
                    title,
                ),
            content &&
                _react2.default.createElement(
                    'p',
                    { className: 'ffe-body-text' },
                    content,
                ),
            !content && children,
        ),
    );
};

MessageBox.propTypes = {
    /** The content of the message box */
    children: _propTypes2.default.node,
    /** Any extra class names to the wrapping DOM node */
    className: _propTypes2.default.string,
    /**
     * Deprecated. Use `children` instead.
     * @deprecated
     */
    content: _propTypes2.default.node,
    /** The icon to show. Has a default value for each message box type, but can be overridden */
    icon: _propTypes2.default.node.isRequired,
    title: _propTypes2.default.string,
    /**
     * Internal type enum for specifying the style of message box. Should not be used directly
     * @ignore
     */
    type: _propTypes2.default.oneOf(['success', 'error', 'tips', 'info'])
        .isRequired,
};

exports.default = MessageBox;
