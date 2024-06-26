import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { usePresenceContext } from '../presence'
import { useDialogContext } from './use-dialog-context'

export interface DialogTriggerProps extends HTMLArkProps<'button'> {}

export const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>((props, ref) => {
  const dialog = useDialogContext()
  const presence = usePresenceContext()

  const mergedProps = mergeProps(
    {
      ...dialog.triggerProps,
      'aria-controls': presence.isUnmounted ? undefined : dialog.triggerProps['aria-controls'],
    },
    props,
  )

  return <ark.button {...mergedProps} ref={ref} />
})

DialogTrigger.displayName = 'DialogTrigger'
