import { computed, defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { usePresenceContext } from '../presence'
import { usePopoverContext } from './popover-context'

export interface PopoverTriggerProps extends HTMLArkProps<'button'> {}

export const PopoverTrigger = defineComponent<PopoverTriggerProps>(
  (_, { slots, attrs }) => {
    const api = usePopoverContext()
    const presenceApi = usePresenceContext()

    const triggerProps = computed(() => ({
      ...api.value.triggerProps,
      'aria-controls': presenceApi.value.isUnmounted
        ? undefined
        : api.value.triggerProps['aria-controls'],
    }))

    return () => (
      <ark.button {...triggerProps.value} {...attrs}>
        {slots.default?.()}
      </ark.button>
    )
  },
  {
    name: 'PopoverTrigger',
  },
)
