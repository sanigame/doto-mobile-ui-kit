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
