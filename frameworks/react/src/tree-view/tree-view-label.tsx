import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { useTreeViewContext } from './use-tree-view-context'

export interface TreeViewLabelProps extends HTMLArkProps<'label'> {}

export const TreeViewLabel = forwardRef<HTMLLabelElement, TreeViewLabelProps>((props, ref) => {
  const treeView = useTreeViewContext()
  const mergedProps = mergeProps(treeView.labelProps, props)

  return <ark.label {...mergedProps} ref={ref} />
})

TreeViewLabel.displayName = 'TreeViewLabel'
