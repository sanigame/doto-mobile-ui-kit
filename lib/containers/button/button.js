Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp,_jsxFileName='src/containers/button/button.js';
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');








var _lodash=require('lodash.isequal');var _lodash2=_interopRequireDefault(_lodash);
var _button=require('../../themes/button');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Button=(_temp=_class=function(_Component){_inherits(Button,_Component);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'_renderChildren',value:function _renderChildren()
































{var _this2=this;
var childElements=[];
_react2.default.Children.forEach(this.props.children,function(item){
if(typeof item==='string'||typeof item==='number'){
var element=
_react2.default.createElement(_reactNative.Text,{
style:[styles.textButton,_this2.props.textStyle,_button.buttonSize[_this2.props.size].text,_this2.props.theme.text],
allowFontScaling:_this2.props.allowFontScaling,
key:item,__source:{fileName:_jsxFileName,lineNumber:53}},
item);


childElements.push(element);
}else if(_react2.default.isValidElement(item)){
childElements.push(item);
}
});
return childElements;
}},{key:'_renderInnerText',value:function _renderInnerText()

{
if(this.props.isLoading){
return(
_react2.default.createElement(_reactNative.ActivityIndicator,{
animating:true,
size:'small',
style:styles.spinner,
color:this.props.activityIndicatorColor||'black',__source:{fileName:_jsxFileName,lineNumber:71}}));


}
return this._renderChildren();
}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(

nextProps,nextState){
if(!(0,_lodash2.default)(nextProps,this.props)){
return true;
}
return false;
}},{key:'render',value:function render()

{
if(this.props.isDisabled===true||this.props.isLoading===true){
return(
_react2.default.createElement(_reactNative.View,{style:[styles.button,this.props.style,this.props.disabledStyle||styles.opacity],__source:{fileName:_jsxFileName,lineNumber:92}},
this._renderInnerText()));


}


var touchableProps={
accessibilityLabel:this.props.accessibilityLabel,
onPress:this.props.onPress,
onPressIn:this.props.onPressIn,
onPressOut:this.props.onPressOut,
onLongPress:this.props.onLongPress,
activeOpacity:this.props.activeOpacity,
delayLongPress:this.props.delayLongPress,
delayPressIn:this.props.delayPressIn,
delayPressOut:this.props.delayPressOut};


if(Button.isAndroid){
touchableProps=_extends(touchableProps,{
background:this.props.background||_reactNative.TouchableNativeFeedback.SelectableBackground()});

return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({},touchableProps,{__source:{fileName:_jsxFileName,lineNumber:116}}),
_react2.default.createElement(_reactNative.View,{style:[styles.button,this.props.style,_button.buttonSize[this.props.size].button,this.props.theme.color],__source:{fileName:_jsxFileName,lineNumber:117}},
this._renderInnerText())));



}else{
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({},touchableProps,{
style:[styles.button,this.props.style,_button.buttonSize[this.props.size].button,this.props.theme.color],__source:{fileName:_jsxFileName,lineNumber:124}}),
this._renderInnerText()));


}
}}]);return Button;}(_react.Component),_class.isAndroid=_reactNative.Platform.OS==='android',_class.propTypes={textStyle:_reactNative.Text.propTypes.style,disabledStyle:_reactNative.Text.propTypes.style,children:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.node,_react.PropTypes.element]),accessibilityLabel:_react.PropTypes.string,activeOpacity:_react.PropTypes.number,allowFontScaling:_react.PropTypes.bool,isLoading:_react.PropTypes.bool,isDisabled:_react.PropTypes.bool,activityIndicatorColor:_react.PropTypes.string,delayLongPress:_react.PropTypes.number,delayPressIn:_react.PropTypes.number,delayPressOut:_react.PropTypes.number,onPress:_react.PropTypes.func,onLongPress:_react.PropTypes.func,onPressIn:_react.PropTypes.func,onPressOut:_react.PropTypes.func,background:_reactNative.TouchableNativeFeedback.propTypes?_reactNative.TouchableNativeFeedback.propTypes.background:_react.PropTypes.any},_class.defaultProps={theme:{},size:'lg'},_temp);




var styles=_reactNative.StyleSheet.create({
button:{
height:44,
flexDirection:'row',
alignItems:'center',
borderWidth:1,
borderRadius:8,
marginBottom:10,
alignSelf:'stretch',
justifyContent:'center'},

textButton:{
flex:1,
fontSize:18,
textAlign:'center',
backgroundColor:'transparent'},

spinner:{
alignSelf:'center'},

opacity:{
opacity:0.5}});exports.default=




Button;
//# sourceMappingURL=button.js.map
