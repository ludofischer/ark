import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useProgressContext } from './progress-context'

export interface ProgressTrackProps extends HTMLArkProps<'div'> {}

export const ProgressTrack = defineComponent<ProgressTrackProps>(
  (_, { slots, attrs }) => {
    const api = useProgressContext()

    return () => (
      <ark.div {...api.value.trackProps} {...attrs}>
        {slots.default?.()}
      </ark.div>
    )
  },
  {
    name: 'ProgressTrack',
  },
)
