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
