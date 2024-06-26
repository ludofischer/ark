import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { ClipboardProvider } from './clipboard-context'
import { emits, props } from './clipboard.props'
import { useClipboard, type UseClipboardProps } from './use-clipboard'

export interface ClipboardRootProps extends Assign<HTMLArkProps<'div'>, UseClipboardProps> {}

export const ClipboardRoot = defineComponent<ClipboardRootProps>(
  (props, { slots, attrs, emit }) => {
    const api = useClipboard(props, emit)
    ClipboardProvider(api)

    return () => (
      <ark.div {...api.value.rootProps} {...attrs}>
        {slots.default?.(api.value)}
      </ark.div>
    )
  },
  {
    name: 'ClipboardRoot',
    props,
    emits,
  },
)
