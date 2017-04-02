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
