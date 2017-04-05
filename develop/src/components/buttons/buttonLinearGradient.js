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
