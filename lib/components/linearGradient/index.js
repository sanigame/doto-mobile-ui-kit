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
