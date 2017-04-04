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
