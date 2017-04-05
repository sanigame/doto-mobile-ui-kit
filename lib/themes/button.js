Object.defineProperty(exports,"__esModule",{value:true});exports.configButtonType=exports.configButtonTheme=exports.buttonSize=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _reactNative=require('react-native');
var _colors=require('./colors');var _colors2=_interopRequireDefault(_colors);
var _fonts=require('../assets/fonts');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var buttonSize=exports.buttonSize={
xs:{
button:{
height:28,
paddingHorizontal:10},

text:{
fontSize:15},

icon:{
width:16,
height:16}},


sm:{
button:{
height:32,
paddingHorizontal:13},

text:{
fontSize:16},

icon:{
width:18,
height:18}},


md:{
button:{
height:36,
paddingHorizontal:16},

text:{
fontSize:18},

icon:{
width:20,
height:20}},


lg:{
button:{
height:44,
paddingHorizontal:16},

text:{
fontSize:18},

icon:{
width:24,
height:24}}};




var baseTextButtonStyle={

paddingTop:_reactNative.Platform.OS==='ios'?3:-5,
textAlign:'center'};


var defaults={
textColor:_colors2.default.BLACK,
textColorActive:_colors2.default.WHITE,
textColorDisabled:_colors2.default.DARK_INDIGO_25,
background:_colors2.default.TRANSPARENT,
backgroundActive:_colors2.default.DARK_INDIGO_10,
backgroundPress:_colors2.default.DARK_INDIGO_10,
backgroundFlatPress:_colors2.default.DARK_INDIGO_10,
borderColor:_colors2.default.BLACK};


var primary={
textColor:_colors2.default.DODGER_BLUE_TWO,
textColorActive:_colors2.default.WHITE,
textColorDisabled:_colors2.default.DARK_INDIGO_25,
background:_colors2.default.DODGER_BLUE,
backgroundActive:_colors2.default.DODGER_BLUE,
backgroundPress:_colors2.default.SKY_BLUE,
backgroundFlatPress:_colors2.default.DODGER_BLUE_20,
borderColor:_colors2.default.DODGER_BLUE};


var secondary={
textColor:_colors2.default.DARK_INDIGO_80,
textColorActive:_colors2.default.WHITE,
textColorDisabled:_colors2.default.DARK_INDIGO_25,
background:_colors2.default.DARK_INDIGO_80,
backgroundActive:_colors2.default.DARK_INDIGO_80,
backgroundPress:_colors2.default.DARK_INDIGO_80,
backgroundFlatPress:_colors2.default.DARK_INDIGO_25,
borderColor:_colors2.default.DARK_INDIGO_80};


var secondary2={
textColor:_colors2.default.DARK_INDIGO_98,
textColorActive:_colors2.default.WHITE,
textColorDisabled:_colors2.default.DARK_INDIGO_25,
background:_colors2.default.DARK_INDIGO_2,
backgroundActive:_colors2.default.DARK_INDIGO_80,
backgroundPress:_colors2.default.DARK_INDIGO_2,
backgroundFlatPress:_colors2.default.DARK_INDIGO_2,
borderColor:_colors2.default.DARK_INDIGO_2};


var success={
textColor:_colors2.default.JADE_GREEN_THREE,
textColorActive:_colors2.default.WHITE,
textColorDisabled:_colors2.default.DARK_INDIGO_25,
background:_colors2.default.JADE_GREEN_THREE,
backgroundActive:_colors2.default.JADE_GREEN_THREE,
backgroundPress:_colors2.default.JADE_GREEN_THREE,
backgroundFlatPress:_colors2.default.JADE_GREEN,
borderColor:_colors2.default.JADE_GREEN_THREE};


var danger={
textColor:_colors2.default.SCARLET_TWO,
textColorActive:_colors2.default.WHITE,
textColorDisabled:_colors2.default.DARK_INDIGO_25,
background:_colors2.default.SCARLET_TWO,
backgroundActive:_colors2.default.SCARLET_TWO,
backgroundPress:_colors2.default.SCARLET_TWO,
backgroundFlatPress:_colors2.default.SCARLET_20,
borderColor:_colors2.default.SCARLET_20};


var linearGradient={
textColor:_colors2.default.CERISE_TWO,
textColorActive:_colors2.default.PINKISH_RED,
textColorDisabled:_colors2.default.DARK_INDIGO_45,
background:_colors2.default.CERISE,
backgroundActive:_colors2.default.CERISE,
backgroundPress:_colors2.default.CERISE,
backgroundFlatPress:_colors2.default.CERISE,
borderColor:_colors2.default.WHITE};


var facebook={
textColor:_colors2.default.DENIM_BLUE,
textColorActive:_colors2.default.WHITE,
textColorDisabled:_colors2.default.DARK_INDIGO_45,
background:_colors2.default.DENIM_BLUE,
backgroundActive:_colors2.default.DENIM_BLUE,
backgroundPress:_colors2.default.FRENCH_BLUE,
backgroundFlatPress:_colors2.default.FRENCH_BLUE,
borderColor:_colors2.default.DENIM_BLUE};


var typeDefault=function typeDefault(theme,size){return{
button:{
baseStyle:buttonSize[size].button,
backgroundNormal:theme.background,
backgroundPress:theme.backgroundPress,
backgroundActive:theme.backgroundActive,
backgroundDisabled:_colors2.default.DARK_INDIGO_10},

text:{
baseStyle:_extends({},
buttonSize[size].text,
baseTextButtonStyle),

colorNormal:_colors2.default.WHITE,
colorPress:_colors2.default.WHITE,
colorActive:theme.textColorActive,
colorDisabled:theme.textColorDisabled},

icon:buttonSize[size].icon};};


var typeOutLine=function typeOutLine(theme,size){return{
button:{
baseStyle:buttonSize[size].button,
backgroundNormal:_colors2.default.WHITE,
backgroundPress:theme.borderColor,
backgroundActive:theme.backgroundActive,
backgroundDisabled:_colors2.default.DARK_INDIGO_10,
borderColorNormal:theme.borderColor,
borderColorPress:theme.borderColor,
borderColorActive:theme.borderColor,
borderColorDisabled:theme.textColorDisabled},

text:{
baseStyle:_extends({},
buttonSize[size].text,
baseTextButtonStyle),

colorNormal:theme.textColor,
colorPress:_colors2.default.WHITE,
colorActive:theme.textColorActive,
colorDisabled:theme.textColorDisabled},

icon:buttonSize[size].icon};};


var typeFlat=function typeFlat(theme,size){return{
button:{
baseStyle:_extends({},
buttonSize[size].button,{
paddingHorizontal:buttonSize[size].button.paddingHorizontal/2}),

backgroundNormal:_colors2.default.TRANSPARENT,
backgroundPress:theme.backgroundFlatPress,
backgroundActive:theme.backgroundFlatPress,
backgroundDisabled:_colors2.default.TRANSPARENT},

text:{
baseStyle:_extends({},
buttonSize[size].text,
baseTextButtonStyle),

colorNormal:theme.textColor,
colorPress:theme.textColor,
colorActive:theme.textColor,
colorDisabled:_colors2.default.DARK_INDIGO_25},

icon:buttonSize[size].icon};};


var typeDefaultTransparent=function typeDefaultTransparent(theme,size){return{
button:{
baseStyle:buttonSize[size].button,
backgroundNormal:_colors2.default.WHITE,
backgroundPress:_colors2.default.WHITE_75,
backgroundActive:_colors2.default.WHITE,
backgroundDisabled:_colors2.default.TRANSPARENT,
borderColorDisabled:_colors2.default.WHITE_35},

text:{
baseStyle:_extends({},
buttonSize[size].text,
baseTextButtonStyle),

colorNormal:theme.textColor,
colorPress:theme.textColor,
colorActive:theme.textColor,
colorDisabled:_colors2.default.WHITE_45},

icon:buttonSize[size].icon};};


var typeOutLineTransparent=function typeOutLineTransparent(theme,size){return{
button:{
baseStyle:buttonSize[size].button,
backgroundNormal:_colors2.default.TRANSPARENT,
backgroundPress:_colors2.default.WHITE,
backgroundActive:_colors2.default.WHITE_75,
backgroundDisabled:_colors2.default.TRANSPARENT,
borderColorNormal:_colors2.default.WHITE,
borderColorPress:_colors2.default.WHITE,
borderColorActive:_colors2.default.WHITE,
borderColorDisabled:_colors2.default.WHITE_35},

text:{
baseStyle:_extends({},
buttonSize[size].text,
baseTextButtonStyle),

colorNormal:_colors2.default.WHITE,
colorPress:theme.textColor,
colorActive:_colors2.default.WHITE,
colorDisabled:_colors2.default.WHITE_45},

icon:buttonSize[size].icon};};


var typeFlatTransparent=function typeFlatTransparent(theme,size){return{
button:{
baseStyle:buttonSize[size].button,
backgroundNormal:_colors2.default.TRANSPARENT,
backgroundPress:_colors2.default.WHITE,
backgroundActive:_colors2.default.WHITE_75,
backgroundDisabled:_colors2.default.TRANSPARENT,
borderColorDisabled:_colors2.default.WHITE_75},

text:{
baseStyle:_extends({},
buttonSize[size].text,
baseTextButtonStyle),

colorNormal:_colors2.default.WHITE,
colorPress:theme.textColor,
colorActive:_colors2.default.WHITE,
colorDisabled:_colors2.default.WHITE_45},

icon:buttonSize[size].icon};};


var configButtonTheme=exports.configButtonTheme={
defaults:defaults,
primary:primary,
secondary:secondary,
success:success,
danger:danger,
linearGradient:linearGradient,
facebook:facebook,
secondary2:secondary2};


var configButtonType=exports.configButtonType={
default:typeDefault,
outLine:typeOutLine,
flat:typeFlat,
transparent:typeDefaultTransparent,
outLineTransparent:typeOutLineTransparent,
flatTransparent:typeFlatTransparent};


var getTheme=function getTheme(){var theme=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'defaults';var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'default';var size=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'lg';return configButtonType[type](configButtonTheme[theme],size);};exports.default=
getTheme;
//# sourceMappingURL=button.js.map
