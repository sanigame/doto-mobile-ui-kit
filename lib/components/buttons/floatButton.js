Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/buttons/floatButton.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _withButton=require('./withButton');var _withButton2=_interopRequireDefault(_withButton);
var _icon=require('../../components/icon');var _icon2=_interopRequireDefault(_icon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FloatButton=function FloatButton(_ref){var icon=_ref.icon,iconStyle=_ref.iconStyle;return(
_react2.default.createElement(_icon2.default,_extends({},iconStyle,{name:icon,__source:{fileName:_jsxFileName,lineNumber:6}})));};


FloatButton.propTypes={
icon:_react2.default.PropTypes.string,
iconStyle:_react2.default.PropTypes.object};


var customTheme=function customTheme(oldStyle){return _extends({},
oldStyle,{
button:_extends({},
oldStyle.button,{
baseStyle:{
alignItems:'center',
width:oldStyle.button.baseStyle.height,
height:oldStyle.button.baseStyle.height,
borderRadius:oldStyle.button.baseStyle.height/2,
borderBottomRightRadius:3}})});};exports.default=




(0,_withButton2.default)(undefined,customTheme)(FloatButton);
//# sourceMappingURL=floatButton.js.map
