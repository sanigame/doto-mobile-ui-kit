Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/buttons/buttonLinearGradient.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _button=require('./button');var _button2=_interopRequireDefault(_button);
var _linearGradient=require('../linearGradient');var _linearGradient2=_interopRequireDefault(_linearGradient);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(props){
var configStyle={
style:{
borderRadius:3,
alignSelf:props.block?'auto':'flex-start'}};


var setDefaultTheme={
flatTransparent:true,
theme:'linearGradient'};

return(0,_linearGradient2.default)(configStyle)(function(){return _react2.default.createElement(_button2.default,_extends({},setDefaultTheme,props,{__source:{fileName:_jsxFileName,lineNumber:16}}));});
};
//# sourceMappingURL=buttonLinearGradient.js.map
