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
