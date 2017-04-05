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
