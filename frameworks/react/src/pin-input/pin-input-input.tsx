import type { InputProps } from '@zag-js/pin-input'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { usePinInputContext } from './use-pin-input-context'

export interface PinInputInputProps extends Assign<HTMLArkProps<'input'>, InputProps> {}

export const PinInputInput = forwardRef<HTMLInputElement, PinInputInputProps>((props, ref) => {
  const [inputProps, localProps] = createSplitProps<InputProps>()(props, ['index'])
  const pinInput = usePinInputContext()
  const mergedProps = mergeProps(pinInput.getInputProps(inputProps), localProps)

  return <ark.input {...mergedProps} ref={ref} />
})

PinInputInput.displayName = 'PinInputInput'
