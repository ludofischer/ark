import { mergeProps } from '@zag-js/solid'
import type { ResizeTriggerProps } from '@zag-js/splitter'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { useSplitterContext } from './use-splitter-context'

export interface SplitterResizeTriggerProps
  extends Assign<HTMLArkProps<'button'>, ResizeTriggerProps> {}

export const SplitterResizeTrigger = (props: SplitterResizeTriggerProps) => {
  const [resizeTriggerProps, restProps] = createSplitProps<ResizeTriggerProps>()(props, [
    'disabled',
    'id',
    'step',
  ])
  const api = useSplitterContext()
  const mergedProps = mergeProps(() => api().getResizeTriggerProps(resizeTriggerProps), restProps)

  return <ark.button {...mergedProps} />
}
