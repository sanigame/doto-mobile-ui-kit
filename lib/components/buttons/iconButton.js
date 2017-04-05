Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/buttons/iconButton.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _withButton=require('./withButton');var _withButton2=_interopRequireDefault(_withButton);
var _icon=require('../icon');var _icon2=_interopRequireDefault(_icon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var IconButton=function IconButton(props){var
icon=props.icon,iconStyle=props.iconStyle,getTheme=props.getTheme;
return(
_react2.default.createElement(_icon2.default,_extends({},getTheme.icon,iconStyle,{name:icon,__source:{fileName:_jsxFileName,lineNumber:8}})));

};

IconButton.propTypes={
icon:_react2.default.PropTypes.string,
iconStyle:_react2.default.PropTypes.object,
getTheme:_react2.default.PropTypes.object};


var customTheme=function customTheme(oldStyle){return _extends({},
oldStyle,{
button:_extends({},
oldStyle.button,{
baseStyle:{
alignItems:'center',
width:oldStyle.button.baseStyle.height,
height:oldStyle.button.baseStyle.height,
borderRadius:oldStyle.button.baseStyle.height/2}})});};exports.default=




(0,_withButton2.default)({flat:true,theme:'defaults'},customTheme)(IconButton);
//# sourceMappingURL=iconButton.js.map
