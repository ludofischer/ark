import type { SwatchProps } from '@zag-js/color-picker'
import { createContext } from '../context'

export interface ColorPickerSwatchContext extends SwatchProps {}

export const [ColorPickerSwatchProvider, useColorPickerSwatchContext] =
  createContext<ColorPickerSwatchContext>('ColorPickerSwatchContext')
