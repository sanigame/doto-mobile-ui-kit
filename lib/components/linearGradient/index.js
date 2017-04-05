Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/linearGradient/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeLinearGradient=require('react-native-linear-gradient');var _reactNativeLinearGradient2=_interopRequireDefault(_reactNativeLinearGradient);
var _themes=require('../../themes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return function(WrapComponent){var _config$start=









config.start,start=_config$start===undefined?{x:0.0,y:1.0}:_config$start,_config$end=config.end,end=_config$end===undefined?{x:1.0,y:1.0}:_config$end,_config$locations=config.locations,locations=_config$locations===undefined?[0,1]:_config$locations,_config$colors=config.colors,colors=_config$colors===undefined?[_themes.Colors.CERISE,_themes.Colors.TOMATO]:_config$colors,_config$style=config.style,style=_config$style===undefined?{paddingHorizontal:3,borderRadius:3}:_config$style;
var withLinearGradient=
_react2.default.createElement(_reactNativeLinearGradient2.default,{
start:start,
end:end,
locations:locations,
colors:colors,
style:style,__source:{fileName:_jsxFileName,lineNumber:18}},

_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:25}},
_react2.default.createElement(WrapComponent,{__source:{fileName:_jsxFileName,lineNumber:26}})));



return withLinearGradient;
};};
//# sourceMappingURL=index.js.map
