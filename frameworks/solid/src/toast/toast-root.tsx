import { mergeProps } from '@zag-js/solid'
import { ark, type HTMLArkProps } from '../factory'
import { useToastContext } from './use-toast-context'

export interface ToastRootProps extends HTMLArkProps<'li'> {}

export const ToastRoot = (props: ToastRootProps) => {
  const api = useToastContext()
  const mergedProps = mergeProps(() => api().rootProps, props)

  return <ark.li {...mergedProps} />
}
