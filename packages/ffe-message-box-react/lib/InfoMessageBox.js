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

var _MessageBox = require('./MessageBox');

var _MessageBox2 = _interopRequireDefault(_MessageBox);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var iconStyles = {
    width: '40px',
    height: '40px',
};
var InfoMessage = function InfoMessage(props) {
    return _react2.default.createElement(
        _MessageBox2.default,
        _extends(
            {
                type: 'info',
                icon: _react2.default.createElement(
                    _ffeIconsReact.InfoSirkelIkon,
                    { style: iconStyles },
                ),
            },
            props,
        ),
    );
};

exports.default = InfoMessage;
