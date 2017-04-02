Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/containers/button/buttonContainer.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _themes=require('../../themes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
button:{
alignSelf:'flex-start',
justifyContent:'center',
borderRadius:3},

text:{
color:'#ffffff'}});exports.default=



function(){var preProps=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var customTheme=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return function(WrapComponent){var _class,_temp;var
ButtonContainer=(_temp=_class=function(_Component){_inherits(ButtonContainer,_Component);
function ButtonContainer(props){_classCallCheck(this,ButtonContainer);var _this=_possibleConstructorReturn(this,(ButtonContainer.__proto__||Object.getPrototypeOf(ButtonContainer)).call(this,
props));
_this.state={
butonState:'normal'};return _this;

}_createClass(ButtonContainer,[{key:'getThemeStyle',value:function getThemeStyle()





































{var _this2=this;var _props=
this.props,size=_props.size,theme=_props.theme;
var type=Object.keys(_themes.configButtonType).find(function(value){return _this2.props[value]===true;})||'default';
if(customTheme){
return customTheme((0,_themes.getButtonTheme)(theme,type,size));
}
return(0,_themes.getButtonTheme)(theme,type,size);
}},{key:'getInitialThemeStyle',value:function getInitialThemeStyle()

{var _props2=
this.props,active=_props2.active,disabled=_props2.disabled,block=_props2.block,activeOpacity=_props2.activeOpacity;var
buttonState=this.state.buttonState;
var press=buttonState==='press';
var themeStyle=this.getThemeStyle();
var borderColorNormal=themeStyle.button.borderColorNormal?{borderWidth:1,borderColor:themeStyle.button.borderColorNormal}:{borderWidth:0};
var borderColorActive=themeStyle.button.borderColorActive?{borderWidth:1,borderColor:themeStyle.button.borderColorActive}:{borderWidth:0};
var borderColorPress=themeStyle.button.borderColorPress?{borderWidth:1,borderColor:themeStyle.button.borderColorPress}:{borderWidth:0};
var borderColorDisabled=themeStyle.button.borderColorDisabled?{borderWidth:1,borderColor:themeStyle.button.borderColorDisabled}:{borderWidth:0};

return{
button:_extends({},
themeStyle.button.baseStyle,
{backgroundColor:themeStyle.button.backgroundNormal},
borderColorNormal,
active?_extends({},borderColorActive,{backgroundColor:themeStyle.button.backgroundActive}):{},
press?borderColorPress:{},
disabled?_extends({},borderColorDisabled,{backgroundColor:themeStyle.button.backgroundDisabled}):{},
{alignSelf:block?'auto':'flex-start'}),

text:_extends({},
themeStyle.text.baseStyle,
{color:themeStyle.text.colorNormal},
active?{color:themeStyle.text.colorActive}:{},
press&&activeOpacity===1?{color:themeStyle.text.colorPress}:{},
disabled?{color:themeStyle.text.colorDisabled}:{}),

icon:themeStyle.icon};

}},{key:'render',value:function render()

{var _this3=this;var _props3=
this.props,disabled=_props3.disabled,activeOpacity=_props3.activeOpacity,onPress=_props3.onPress,width=_props3.width,style=_props3.style;
var prepareButtonStyle=_extends({},
this.getInitialThemeStyle().button,
width?{width:width}:{});

var prepareTextStyle=this.getInitialThemeStyle().text;
return(
_react2.default.createElement(_reactNative.TouchableHighlight,{
style:[styles.button,prepareButtonStyle,style],
underlayColor:activeOpacity!==1?this.getThemeStyle().button.backgroundNormal:this.getThemeStyle().button.backgroundPress,
activeOpacity:activeOpacity,
onPress:onPress,
disabled:disabled,
onHideUnderlay:function onHideUnderlay(){return _this3.setState(_extends({},_this3.state,{buttonState:'normal'}));},
onShowUnderlay:function onShowUnderlay(){return _this3.setState(_extends({},_this3.state,{buttonState:'press'}));},__source:{fileName:_jsxFileName,lineNumber:109}},

_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:118}},
_react2.default.createElement(WrapComponent,_extends({},
this.props,
this.state,{
textStyle:[styles.text,prepareTextStyle],
getTheme:this.getInitialThemeStyle(),__source:{fileName:_jsxFileName,lineNumber:119}})))));




}}]);return ButtonContainer;}(_react.Component),_class.defaultProps={activeOpacity:1,size:'lg',theme:'primary',flat:false,block:false,active:false,outLine:false,disabled:false,transparent:false,outLineTransparent:false,flatTransparent:false,iconCycle:false,style:{},onPress:function onPress(){},width:null},_class.propTypes={width:_react2.default.PropTypes.number,activeOpacity:_react2.default.PropTypes.number,size:_react2.default.PropTypes.string,theme:_react2.default.PropTypes.string,flat:_react2.default.PropTypes.bool,block:_react2.default.PropTypes.bool,active:_react2.default.PropTypes.bool,outLine:_react2.default.PropTypes.bool,disabled:_react2.default.PropTypes.bool,transparent:_react2.default.PropTypes.bool,outLineTransparent:_react2.default.PropTypes.bool,flatTransparent:_react2.default.PropTypes.bool,iconCycle:_react2.default.PropTypes.bool,style:_react2.default.PropTypes.object,onPress:_react2.default.PropTypes.func},_temp);


var buttonContainer=function buttonContainer(props){return _react2.default.createElement(ButtonContainer,_extends({},preProps,props,{__source:{fileName:_jsxFileName,lineNumber:131}}));};
return buttonContainer;
};};
//# sourceMappingURL=buttonContainer.js.map
