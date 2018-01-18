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

var _ffeIconsReact = require('ffe-icons-react');

var _messageBox = require('./message-box');

var _messageBox2 = _interopRequireDefault(_messageBox);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var iconStyles = {
    width: '40px',
    height: '40px',
};

var SuccessMessage = function SuccessMessage(props) {
    return _react2.default.createElement(
        _messageBox2.default,
        _extends(
            {
                type: 'success',
                icon: _react2.default.createElement(_ffeIconsReact.HakeIkon, {
                    style: iconStyles,
                }),
            },
            props,
        ),
    );
};

exports.default = SuccessMessage;
