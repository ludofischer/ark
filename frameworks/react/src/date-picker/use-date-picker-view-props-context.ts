import type { ViewProps } from '@zag-js/date-picker'
import { createContext } from '../create-context'

export interface UseDatePickerViewContext extends Required<ViewProps> {}

export const [DatePickerViewPropsProvider, useDatePickerViewPropsContext] =
  createContext<UseDatePickerViewContext>({
    name: 'DatePickerViewContext',
    hookName: 'useDatePickerViewContext',
    providerName: '<DatePickerViewProvider />',
  })
