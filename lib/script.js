export { 
  Button,
  IconButton,
  FloatButtonIcon,
  withButton,
  Icon 
} from './components'

export { Color } from './themes/colors'
//import liraries
import React, { Component, PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import isEqual from 'lodash.isequal';
import { buttonSize } from '../../themes/button';

class Button extends Component {

  static isAndroid = Platform.OS === 'android'

  static propTypes = {
    textStyle: Text.propTypes.style,
    disabledStyle: Text.propTypes.style,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.element
    ]),
    accessibilityLabel: PropTypes.string,
    activeOpacity: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    activityIndicatorColor: PropTypes.string,
    delayLongPress: PropTypes.number,
    delayPressIn: PropTypes.number,
    delayPressOut: PropTypes.number,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    background: (TouchableNativeFeedback.propTypes) ? TouchableNativeFeedback.propTypes.background : PropTypes.any,
  }

  static defaultProps = {
    theme: {},
    size: 'lg'
  }

  _renderChildren() {
    let childElements = [];
    React.Children.forEach(this.props.children, (item) => {
      if (typeof item === 'string' || typeof item === 'number') {
        const element = (
          <Text
            style={[styles.textButton, this.props.textStyle, buttonSize[this.props.size].text, this.props.theme.text]}
            allowFontScaling={this.props.allowFontScaling}
            key={item}>
            {item}
          </Text>
        );
        childElements.push(element);
      } else if (React.isValidElement(item)) {
        childElements.push(item);
      }
    });
    return (childElements);
  }

  _renderInnerText() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          size='small'
          style={styles.spinner}
          color={this.props.activityIndicatorColor || 'black'}
        />
      );
    }
    return this._renderChildren();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!isEqual(nextProps, this.props)) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.isDisabled === true || this.props.isLoading === true) {
      return (
        <View style={[styles.button, this.props.style, (this.props.disabledStyle || styles.opacity)]}>
          {this._renderInnerText()}
        </View>
      );
    }

    // Extract Touchable props
    let touchableProps = {
      accessibilityLabel: this.props.accessibilityLabel,
      onPress: this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress,
      activeOpacity: this.props.activeOpacity,
      delayLongPress: this.props.delayLongPress,
      delayPressIn: this.props.delayPressIn,
      delayPressOut: this.props.delayPressOut,
    };
    
    if (Button.isAndroid) {
      touchableProps = Object.assign(touchableProps, {
        background: this.props.background || TouchableNativeFeedback.SelectableBackground()
      });
      return (
        <TouchableNativeFeedback {...touchableProps}>
          <View style={[styles.button, this.props.style, buttonSize[this.props.size].button, this.props.theme.color]}>
            {this._renderInnerText()}
          </View>
        </TouchableNativeFeedback>
      )
    } else {
      return (
        <TouchableOpacity {...touchableProps}
          style={[styles.button, this.props.style, buttonSize[this.props.size].button, this.props.theme.color]}>
          {this._renderInnerText()}
        </TouchableOpacity>
      );
    }
  }

}

// define your styles
const styles = StyleSheet.create({
  button: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textButton: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  spinner: {
    alignSelf: 'center',
  },
  opacity: {
    opacity: 0.5,
  },
});

//make this component available to the app
export default Button;

//import liraries
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { Button, View, Text, StyleSheet } from 'react-native';

// create a component
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          onPress={()=>Actions.colors()}
          title="Colors"
          color="red"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;

export { default as Home } from './home'

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import withButton from './withButton';
import Icon from '../icon'

const styles = StyleSheet.create({
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
    height: 24,
  },
  line: {
    alignItems: 'center',
    width: 1,
  }
})

export const button = (props) => {
  const {
    title = '',
    size = '',
    icon = '',
    iconRight = '',
    block = false,
    lineColor = false,
    lineColorRight = false,
    iconStyle = {},
    getTheme = {},
    textStyle = [],
  } = props
  const renderIcon = (iconName, lineIconColor, isIconRight) => {
    const line = getTheme.text.color
    const spacer = {
      xs: 5,
      sm: 12,
      md: 12,
      lg: 12,
    }
    const styleOnIconRight = isIconRight ? { flexDirection: 'row-reverse' } : {}
    const styleOfLine = {
      height: getTheme.text.fontSize,
      marginHorizontal: spacer[size],
      backgroundColor: line
    }
    const styleBlock = {
      position: 'absolute',
      zIndex: 999,
      [isIconRight ? 'right' : 'left']: 0,
    }
    return (
      <View style={[
        styles.wrapperIcon,
        styleOnIconRight,
        block ? styleBlock : { marginRight: spacer[size] },
      ]}>
        <Icon {...getTheme.icon} {...iconStyle} name={iconName} />
        {lineIconColor ? <View style={[styles.line, styleOfLine]} /> : null}
      </View>
    )
  }

  return (
    <View style={styles.wrapperContent}>
      {icon ? renderIcon(icon, lineColor, false) : null}
      <Text style={textStyle}>{title}</Text>
      {iconRight ? renderIcon(iconRight, lineColorRight, true) : null}
    </View>
  )
}

button.propTypes = {
  title: React.PropTypes.string,
  theme: React.PropTypes.string,
  buttonState: React.PropTypes.string,
  size: React.PropTypes.string,
  icon: React.PropTypes.string,
  iconRight: React.PropTypes.string,
  block: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  lineColor: React.PropTypes.bool,
  lineColorRight: React.PropTypes.bool,
  iconStyle: React.PropTypes.object,
  getTheme: React.PropTypes.object,
  buttonThemes: React.PropTypes.func,
  textStyle: React.PropTypes.array,
}

export default withButton()(button)

import React from 'react'
import Button from './button'
import withLinearGradient from '../linearGradient'

export default (props) => {
  const configStyle = {
    style: {
      borderRadius: 3,
      alignSelf: props.block ? 'auto' : 'flex-start'
    }
  }
  const setDefaultTheme = {
    flatTransparent: true,
    theme: 'linearGradient',
  }
  return withLinearGradient(configStyle)(() => <Button {...setDefaultTheme} {...props} />)
}

import React from 'react'
import withButton from './withButton'
import Icon from '../icon'

const FloatButton = ({ icon, iconStyle }) => (
  <Icon {...iconStyle} name={icon} />
)

FloatButton.propTypes = {
  icon: React.PropTypes.string,
  iconStyle: React.PropTypes.object,
}

const customTheme = oldStyle => ({
  ...oldStyle,
  button: {
    ...oldStyle.button,
    baseStyle: {
      alignItems: 'center',
      width: oldStyle.button.baseStyle.height,
      height: oldStyle.button.baseStyle.height,
      borderRadius: oldStyle.button.baseStyle.height / 2,
      borderBottomRightRadius: 3,
    }
  }
})

export default withButton(undefined, customTheme)(FloatButton)

import React from 'react'
import withButton from './withButton'
import Icon from '../icon'

const IconButton = (props) => {
  const { icon, iconStyle, getTheme } = props
  return (
    <Icon {...getTheme.icon} {...iconStyle} name={icon} />
  )
}

IconButton.propTypes = {
  icon: React.PropTypes.string,
  iconStyle: React.PropTypes.object,
  getTheme: React.PropTypes.object,
}

const customTheme = oldStyle => ({
  ...oldStyle,
  button: {
    ...oldStyle.button,
    baseStyle: {
      alignItems: 'center',
      width: oldStyle.button.baseStyle.height,
      height: oldStyle.button.baseStyle.height,
      borderRadius: oldStyle.button.baseStyle.height / 2
    }
  }
})

export default withButton({ flat: true, theme: 'defaults' }, customTheme)(IconButton)

import Button from './button'
import IconButton from './iconButton'
import FloatButtonIcon from './floatButton'
//import ButtonLinearGradient from './buttonLinearGradient'
import withButton from './withButton'

export {
  Button,
  IconButton,
  FloatButtonIcon,
  withButton,
}
export default Button

import React, { Component } from 'react'
import { TouchableHighlight, View, StyleSheet } from 'react-native'
import { getButtonTheme, configButtonType } from '../../themes'

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderRadius: 3,
  },
  text: {
    color: '#ffffff'
  }
})

export default (preProps = {}, customTheme = false) => (WrapComponent) => {
  class WithButton extends Component {
    constructor(props) {
      super(props)
      this.state = {
        butonState: 'normal'
      }
    }

    static defaultProps = {
      activeOpacity: 1,
      size: 'lg',
      theme: 'primary',
      flat: false,
      block: false,
      active: false,
      outLine: false,
      disabled: false,
      transparent: false,
      outLineTransparent: false,
      flatTransparent: false,
      iconCycle: false,
      style: {},
      onPress: () => {},
      width: null,
    }

    static propTypes = {
      width: React.PropTypes.number,
      activeOpacity: React.PropTypes.number,
      size: React.PropTypes.string,
      theme: React.PropTypes.string,
      flat: React.PropTypes.bool,
      block: React.PropTypes.bool,
      active: React.PropTypes.bool,
      outLine: React.PropTypes.bool,
      disabled: React.PropTypes.bool,
      transparent: React.PropTypes.bool,
      outLineTransparent: React.PropTypes.bool,
      flatTransparent: React.PropTypes.bool,
      iconCycle: React.PropTypes.bool,
      style: React.PropTypes.object,
      onPress: React.PropTypes.func,
    }

    getThemeStyle() {
      const { size, theme } = this.props
      const type = Object.keys(configButtonType).find(value => this.props[value] === true) || 'default'
      if (customTheme) {
        return customTheme(getButtonTheme(theme, type, size))
      }
      return getButtonTheme(theme, type, size)
    }

    getInitialThemeStyle() {
      const { active, disabled, block, activeOpacity } = this.props
      const { buttonState } = this.state
      const press = buttonState === 'press'
      const themeStyle = this.getThemeStyle()
      const borderColorNormal = themeStyle.button.borderColorNormal ? { borderWidth: 1, borderColor: themeStyle.button.borderColorNormal } : { borderWidth: 0 }
      const borderColorActive = themeStyle.button.borderColorActive ? { borderWidth: 1, borderColor: themeStyle.button.borderColorActive } : { borderWidth: 0 }
      const borderColorPress = themeStyle.button.borderColorPress ? { borderWidth: 1, borderColor: themeStyle.button.borderColorPress } : { borderWidth: 0 }
      const borderColorDisabled = themeStyle.button.borderColorDisabled ? { borderWidth: 1, borderColor: themeStyle.button.borderColorDisabled } : { borderWidth: 0 }

      return {
        button: {
          ...themeStyle.button.baseStyle,
          ...{ backgroundColor: themeStyle.button.backgroundNormal },
          ...borderColorNormal,
          ...active ? { ...borderColorActive, backgroundColor: themeStyle.button.backgroundActive } : {},
          ...press ? borderColorPress : {},
          ...disabled ? { ...borderColorDisabled, backgroundColor: themeStyle.button.backgroundDisabled } : {},
          ...{ alignSelf: block ? 'auto' : 'flex-start' },
        },
        text: {
          ...themeStyle.text.baseStyle,
          ...{ color: themeStyle.text.colorNormal },
          ...active ? { color: themeStyle.text.colorActive } : {},
          ...press && (activeOpacity === 1) ? { color: themeStyle.text.colorPress } : {},
          ...disabled ? { color: themeStyle.text.colorDisabled } : {},
        },
        icon: themeStyle.icon
      }
    }

    render() {
      const { disabled, activeOpacity, onPress, width, style } = this.props
      const prepareButtonStyle = {
        ...this.getInitialThemeStyle().button,
        ...width ? { width } : {}
      }
      const prepareTextStyle = this.getInitialThemeStyle().text
      return (
        <TouchableHighlight
          style={[styles.button, prepareButtonStyle, style]}
          underlayColor={(activeOpacity !== 1) ? this.getThemeStyle().button.backgroundNormal : this.getThemeStyle().button.backgroundPress}
          activeOpacity={activeOpacity}
          onPress={onPress}
          disabled={disabled}
          onHideUnderlay={() => this.setState(Object.assign({}, this.state, { buttonState: 'normal' }))}
          onShowUnderlay={() => this.setState(Object.assign({}, this.state, { buttonState: 'press' }))}
          >
          <View>
            <WrapComponent
              {...this.props}
              {...this.state}
              textStyle={[styles.text, prepareTextStyle]}
              getTheme={this.getInitialThemeStyle()}
              />
          </View>
        </TouchableHighlight>
      )
    }
  }

  const withButton = props => (<WithButton {...preProps} {...props} />)
  return withButton
}

import React, { Component } from 'react'
import { Image } from 'react-native'
import { Icons } from '../../themes'

export default class Icon extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }
  static defaultProps = {
    width: 24,
    height: 24,
  }
  render() {
    const { name, width, height } = this.props
    return (
      <Image
        resizeMode='contain'
        style={{ width, height }}
        source={Icons[name]} />
    )
  }
}

export { 
  Button,
  IconButton,
  FloatButton,
  ButtonLinearGradient,
  withButton
} from './buttons'
export { default as Icon } from './icon'
import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../themes'

export default (config = {}) => (WrapComponent) => {
  const {
    start = { x: 0.0, y: 1.0 },
    end = { x: 1.0, y: 1.0 },
    locations = [0, 1],
    colors = [Colors.CERISE, Colors.TOMATO],
    style = {
      paddingHorizontal: 3,
      borderRadius: 3,
    }
  } = config
  const withLinearGradient = (
    <LinearGradient
      start={start}
      end={end}
      locations={locations}
      colors={colors}
      style={style}
      >
      <View>
        <WrapComponent />
      </View>
    </LinearGradient>
  )
  return withLinearGradient
}

import { Platform } from 'react-native'
import Colors from './colors'
import { FONT_FAMILY_STYLE } from '../assets/fonts'

export const buttonSize = {
  xs: {
    button: {
      height: 28,
      paddingHorizontal: 10,
    },
    text: {
      fontSize: 15
    },
    icon: {
      width: 16,
      height: 16
    }
  },
  sm: {
    button: {
      height: 32,
      paddingHorizontal: 13,
    },
    text: {
      fontSize: 16
    },
    icon: {
      width: 18,
      height: 18
    }
  },
  md: {
    button: {
      height: 36,
      paddingHorizontal: 16,
    },
    text: {
      fontSize: 18
    },
    icon: {
      width: 20,
      height: 20
    }
  },
  lg: {
    button: {
      height: 44,
      paddingHorizontal: 16,
    },
    text: {
      fontSize: 18
    },
    icon: {
      width: 24,
      height: 24
    }
  },
}

const baseTextButtonStyle = {
  //fontFamily: FONT_FAMILY_STYLE.medium,
  paddingTop: Platform.OS === 'ios' ? 3 : -5,
  textAlign: 'center',
}

const defaults = {
  textColor: Colors.BLACK,
  textColorActive: Colors.WHITE,
  textColorDisabled: Colors.DARK_INDIGO_25,
  background: Colors.TRANSPARENT,
  backgroundActive: Colors.DARK_INDIGO_10,
  backgroundPress: Colors.DARK_INDIGO_10,
  backgroundFlatPress: Colors.DARK_INDIGO_10,
  borderColor: Colors.BLACK,
}

const primary = {
  textColor: Colors.DODGER_BLUE_TWO,
  textColorActive: Colors.WHITE,
  textColorDisabled: Colors.DARK_INDIGO_25,
  background: Colors.DODGER_BLUE,
  backgroundActive: Colors.DODGER_BLUE,
  backgroundPress: Colors.SKY_BLUE,
  backgroundFlatPress: Colors.DODGER_BLUE_20,
  borderColor: Colors.DODGER_BLUE,
}

const secondary = {
  textColor: Colors.DARK_INDIGO_80,
  textColorActive: Colors.WHITE,
  textColorDisabled: Colors.DARK_INDIGO_25,
  background: Colors.DARK_INDIGO_80,
  backgroundActive: Colors.DARK_INDIGO_80,
  backgroundPress: Colors.DARK_INDIGO_80,
  backgroundFlatPress: Colors.DARK_INDIGO_25,
  borderColor: Colors.DARK_INDIGO_80,
}

const secondary2 = {
  textColor: Colors.DARK_INDIGO_98,
  textColorActive: Colors.WHITE,
  textColorDisabled: Colors.DARK_INDIGO_25,
  background: Colors.DARK_INDIGO_2,
  backgroundActive: Colors.DARK_INDIGO_80,
  backgroundPress: Colors.DARK_INDIGO_2,
  backgroundFlatPress: Colors.DARK_INDIGO_2,
  borderColor: Colors.DARK_INDIGO_2,
}

const success = {
  textColor: Colors.JADE_GREEN_THREE,
  textColorActive: Colors.WHITE,
  textColorDisabled: Colors.DARK_INDIGO_25,
  background: Colors.JADE_GREEN_THREE,
  backgroundActive: Colors.JADE_GREEN_THREE,
  backgroundPress: Colors.JADE_GREEN_THREE,
  backgroundFlatPress: Colors.JADE_GREEN,
  borderColor: Colors.JADE_GREEN_THREE,
}

const danger = {
  textColor: Colors.SCARLET_TWO,
  textColorActive: Colors.WHITE,
  textColorDisabled: Colors.DARK_INDIGO_25,
  background: Colors.SCARLET_TWO,
  backgroundActive: Colors.SCARLET_TWO,
  backgroundPress: Colors.SCARLET_TWO,
  backgroundFlatPress: Colors.SCARLET_20,
  borderColor: Colors.SCARLET_20,
}

const linearGradient = {
  textColor: Colors.CERISE_TWO,
  textColorActive: Colors.PINKISH_RED,
  textColorDisabled: Colors.DARK_INDIGO_45,
  background: Colors.CERISE,
  backgroundActive: Colors.CERISE,
  backgroundPress: Colors.CERISE,
  backgroundFlatPress: Colors.CERISE,
  borderColor: Colors.WHITE,
}

const facebook = {
  textColor: Colors.DENIM_BLUE,
  textColorActive: Colors.WHITE,
  textColorDisabled: Colors.DARK_INDIGO_45,
  background: Colors.DENIM_BLUE,
  backgroundActive: Colors.DENIM_BLUE,
  backgroundPress: Colors.FRENCH_BLUE,
  backgroundFlatPress: Colors.FRENCH_BLUE,
  borderColor: Colors.DENIM_BLUE,
}

const typeDefault = (theme, size) => ({
  button: {
    baseStyle: buttonSize[size].button,
    backgroundNormal: theme.background,
    backgroundPress: theme.backgroundPress,
    backgroundActive: theme.backgroundActive,
    backgroundDisabled: Colors.DARK_INDIGO_10,
  },
  text: {
    baseStyle: {
      ...buttonSize[size].text,
      ...baseTextButtonStyle,
    },
    colorNormal: Colors.WHITE,
    colorPress: Colors.WHITE,
    colorActive: theme.textColorActive,
    colorDisabled: theme.textColorDisabled,
  },
  icon: buttonSize[size].icon
})

const typeOutLine = (theme, size) => ({
  button: {
    baseStyle: buttonSize[size].button,
    backgroundNormal: Colors.WHITE,
    backgroundPress: theme.borderColor,
    backgroundActive: theme.backgroundActive,
    backgroundDisabled: Colors.DARK_INDIGO_10,
    borderColorNormal: theme.borderColor,
    borderColorPress: theme.borderColor,
    borderColorActive: theme.borderColor,
    borderColorDisabled: theme.textColorDisabled,
  },
  text: {
    baseStyle: {
      ...buttonSize[size].text,
      ...baseTextButtonStyle,
    },
    colorNormal: theme.textColor,
    colorPress: Colors.WHITE,
    colorActive: theme.textColorActive,
    colorDisabled: theme.textColorDisabled,
  },
  icon: buttonSize[size].icon
})

const typeFlat = (theme, size) => ({
  button: {
    baseStyle: {
      ...buttonSize[size].button,
      paddingHorizontal: buttonSize[size].button.paddingHorizontal / 2
    },
    backgroundNormal: Colors.TRANSPARENT,
    backgroundPress: theme.backgroundFlatPress,
    backgroundActive: theme.backgroundFlatPress,
    backgroundDisabled: Colors.TRANSPARENT,
  },
  text: {
    baseStyle: {
      ...buttonSize[size].text,
      ...baseTextButtonStyle,
    },
    colorNormal: theme.textColor,
    colorPress: theme.textColor,
    colorActive: theme.textColor,
    colorDisabled: Colors.DARK_INDIGO_25,
  },
  icon: buttonSize[size].icon
})

const typeDefaultTransparent = (theme, size) => ({
  button: {
    baseStyle: buttonSize[size].button,
    backgroundNormal: Colors.WHITE,
    backgroundPress: Colors.WHITE_75,
    backgroundActive: Colors.WHITE,
    backgroundDisabled: Colors.TRANSPARENT,
    borderColorDisabled: Colors.WHITE_35,
  },
  text: {
    baseStyle: {
      ...buttonSize[size].text,
      ...baseTextButtonStyle,
    },
    colorNormal: theme.textColor,
    colorPress: theme.textColor,
    colorActive: theme.textColor,
    colorDisabled: Colors.WHITE_45,
  },
  icon: buttonSize[size].icon
})

const typeOutLineTransparent = (theme, size) => ({
  button: {
    baseStyle: buttonSize[size].button,
    backgroundNormal: Colors.TRANSPARENT,
    backgroundPress: Colors.WHITE,
    backgroundActive: Colors.WHITE_75,
    backgroundDisabled: Colors.TRANSPARENT,
    borderColorNormal: Colors.WHITE,
    borderColorPress: Colors.WHITE,
    borderColorActive: Colors.WHITE,
    borderColorDisabled: Colors.WHITE_35,
  },
  text: {
    baseStyle: {
      ...buttonSize[size].text,
      ...baseTextButtonStyle,
    },
    colorNormal: Colors.WHITE,
    colorPress: theme.textColor,
    colorActive: Colors.WHITE,
    colorDisabled: Colors.WHITE_45,
  },
  icon: buttonSize[size].icon
})

const typeFlatTransparent = (theme, size) => ({
  button: {
    baseStyle: buttonSize[size].button,
    backgroundNormal: Colors.TRANSPARENT,
    backgroundPress: Colors.WHITE,
    backgroundActive: Colors.WHITE_75,
    backgroundDisabled: Colors.TRANSPARENT,
    borderColorDisabled: Colors.WHITE_75,
  },
  text: {
    baseStyle: {
      ...buttonSize[size].text,
      ...baseTextButtonStyle,
    },
    colorNormal: Colors.WHITE,
    colorPress: theme.textColor,
    colorActive: Colors.WHITE,
    colorDisabled: Colors.WHITE_45,
  },
  icon: buttonSize[size].icon
})

export const configButtonTheme = {
  defaults,
  primary,
  secondary,
  success,
  danger,
  linearGradient,
  facebook,
  secondary2
}

export const configButtonType = {
  default: typeDefault,
  outLine: typeOutLine,
  flat: typeFlat,
  transparent: typeDefaultTransparent,
  outLineTransparent: typeOutLineTransparent,
  flatTransparent: typeFlatTransparent,
}

const getTheme = (theme = 'defaults', type = 'default', size = 'lg') => (configButtonType[type](configButtonTheme[theme], size))
export default getTheme

export default {
  TRANSPARENT: 'transparent',
  BLACK: '#000000',
  BLACK_38: 'rgba(0, 0, 0, 0.38)',
  WHITE: '#ffffff',
  WHITE_35: 'rgba(255, 255, 255, 0.35)',
  WHITE_45: 'rgba(255, 255, 255, 0.45)',
  WHITE_75: 'rgba(255, 255, 255, 0.75)',
  DARK_INDIGO: '#0e2b4d',
  DARK_INDIGO_3: 'rgba(14, 43, 77, 0.03)',
  DARK_INDIGO_TWO_2: 'rgba(14, 43, 76, 0.2)',
  DARK_INDIGO_TWO_3: 'rgba(14, 43, 76, 0.03)',
  DARK_INDIGO_TWO_10: 'rgba(14, 43, 76, 0.1)',
  DARK_INDIGO_10: 'rgba(14, 43, 77, 0.1)',
  DARK_INDIGO_2: 'rgba(14, 43, 77, 0.2)',
  DARK_INDIGO_25: 'rgba(14, 43, 77, 0.25)',
  DARK_INDIGO_38: 'rgba(14, 43, 77, 0.38)',
  DARK_INDIGO_40: 'rgba(14, 43, 77, 0.4)',
  DARK_INDIGO_65: 'rgba(14, 43, 77, 0.65)',
  DARK_INDIGO_80: 'rgba(14, 43, 77, 0.80)',
  DARK_INDIGO_98: 'rgba(14, 43, 77, 0.98)',
  DODGER_BLUE_10: 'rgba(81, 161, 255, 0.1)',
  PALE_GREY: '#ebf1f6',
  SCARLET_20: 'rgba(208, 1, 26, 0.20)',
  SCARLET_TWO: 'rgb(208, 2, 27)',
  PEACHY_PINK: '#ff8989',
  CORAL_PINK: '#ff5557',
  TOMATO: '#e43a2c',
  RED: '#ff0000',
  PINKISH_RED: '#ec0a57',
  CERISE: '#d70d52',
  CERISE_80: 'rgba(236, 11, 88, 0.8)',
  CERISE_TWO: '#ec0b58',
  ROUGE: '#ae122c',
  TANGERINE: '#ff9d00',
  TANGERINE_TWO: '#ff8700',
  SKY_BLUE: '#67b4ff',
  DODGER_BLUE: '#51a1ff',
  DODGER_BLUE_20: 'rgba(81, 161, 255, 0.2)',
  DODGER_BLUE_TWO: '#308fff',
  JADE_GREEN: '#29bf68',
  JADE_GREEN_TWO: '#27ad5f',
  JADE_GREEN_THREE: '#26ab5e',
  SHAMROCK_GREEN: '#00c53e',
  FRESH_GREEN: '#8ed259',
  DENIM_BLUE: '#3b5998',
  FRENCH_BLUE: '#4b6fb8',
}

export default {
  facebook: require('../assets/icons/facebook.png'),
  personBlack: require('../assets/icons/personBlack.png'),
  personWhite: require('../assets/icons/personWhite.png'),
  fingerPrint: require('../assets/icons/fingerPrint.png'),
  plus: require('../assets/icons/plus.png'),
  check: require('../assets/icons/check.png'),
}

import Colors from './colors'
import getButtonTheme, { configButtonType } from './button'
import Icons from './icons'

export {
  Colors,
  Icons,
  getButtonTheme,
  configButtonType
}
import { Platform } from 'react-native'
import Colors from './colors'
import { FONT_FAMILY_STYLE } from '../assets/fonts'

const primary = {
  color: {
    borderColor: Colors.DODGER_BLUE,
    backgroundColor: Colors.DODGER_BLUE,
  },
  text: {
    color: Colors.WHITE,
  }
}

export const theme = {
  primary,
}
//# sourceMappingURL=script.js.map