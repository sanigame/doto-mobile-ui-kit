Object.defineProperty(exports, "__esModule", { value: true });
exports.button = undefined;
var _extends = Object.assign || function (target) {
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

var _jsxFileName = 'src/components/buttons/button.js';
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _reactNative = require('react-native');
var _containers = require('../../containers');
var _icon = require('../icon');
var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value, enumerable: true, configurable: true, writable: true
        });
    } else {
        obj[key] = value;
    }

    return obj;
}

var styles = _reactNative.StyleSheet.create({
    wrapperContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    wrapperIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    icon: {
        width: 24,
        height: 24
    },

    line: {
        alignItems: 'center',
        width: 1
    }
});



var button = exports.button = function button(props) {
    var _props$title = props.title, title = _props$title === undefined ? '' : _props$title, _props$size = props.size, size = _props$size === undefined ? '' : _props$size, _props$icon = props.icon, icon = _props$icon === undefined ? '' : _props$icon, _props$iconRight = props.iconRight, iconRight = _props$iconRight === undefined ? '' : _props$iconRight, _props$block = props.block, block = _props$block === undefined ? false : _props$block, _props$lineColor = props.lineColor, lineColor = _props$lineColor === undefined ? false : _props$lineColor, _props$lineColorRight = props.lineColorRight, lineColorRight = _props$lineColorRight === undefined ? false : _props$lineColorRight, _props$iconStyle = props.iconStyle, iconStyle = _props$iconStyle === undefined ? {} : _props$iconStyle, _props$getTheme = props.getTheme, getTheme = _props$getTheme === undefined ? {} : _props$getTheme, _props$textStyle = props.textStyle, textStyle = _props$textStyle === undefined ? [] : _props$textStyle;
    var renderIcon = function renderIcon(iconName, lineIconColor, isIconRight) {
        var line = getTheme.text.color;
        var spacer = {
            xs: 5,
            sm: 12,
            md: 12,
            lg: 12
        };

        var styleOnIconRight = isIconRight ? { flexDirection: 'row-reverse' } : {};
        var styleOfLine = {
            height: getTheme.text.fontSize,
            marginHorizontal: spacer[size],
            backgroundColor: line
        };

        var styleBlock = _defineProperty({
            position: 'absolute',
            zIndex: 999
        },
            isIconRight ? 'right' : 'left', 0);

        return (
            _react2.default.createElement(_reactNative.View, {
                style: [
                    styles.wrapperIcon,
                    styleOnIconRight,
                    block ? styleBlock : { marginRight: spacer[size] }], __source: { fileName: _jsxFileName, lineNumber: 60 }
            },

                _react2.default.createElement(_icon2.default, _extends({}, getTheme.icon, iconStyle, { name: iconName, __source: { fileName: _jsxFileName, lineNumber: 65 } })),
                lineIconColor ? _react2.default.createElement(_reactNative.View, { style: [styles.line, styleOfLine], __source: { fileName: _jsxFileName, lineNumber: 66 } }) : null));


    };

    return (
        _react2.default.createElement(_reactNative.View, { style: styles.wrapperContent, __source: { fileName: _jsxFileName, lineNumber: 72 } },
            icon ? renderIcon(icon, lineColor, false) : null,
            _react2.default.createElement(_reactNative.Text, { style: textStyle, __source: { fileName: _jsxFileName, lineNumber: 74 } }, title),
            iconRight ? renderIcon(iconRight, lineColorRight, true) : null));


};

button.propTypes = {
    title: _react2.default.PropTypes.string,
    theme: _react2.default.PropTypes.string,
    buttonState: _react2.default.PropTypes.string,
    size: _react2.default.PropTypes.string,
    icon: _react2.default.PropTypes.string,
    iconRight: _react2.default.PropTypes.string,
    block: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool,
    lineColor: _react2.default.PropTypes.bool,
    lineColorRight: _react2.default.PropTypes.bool,
    iconStyle: _react2.default.PropTypes.object,
    getTheme: _react2.default.PropTypes.object,
    buttonThemes: _react2.default.PropTypes.func,
    textStyle: _react2.default.PropTypes.array
}; exports.default = (0, _containers.ButtonContainer)()(button);
//# sourceMappingURL=button.js.map
