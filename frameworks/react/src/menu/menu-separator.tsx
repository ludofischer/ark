import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { useMenuContext } from './use-menu-context'

export interface MenuSeparatorProps extends HTMLArkProps<'hr'> {}

export const MenuSeparator = forwardRef<HTMLHRElement, MenuSeparatorProps>((props, ref) => {
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.separatorProps, props)

  return <ark.hr {...mergedProps} ref={ref} />
})

MenuSeparator.displayName = 'MenuSeparator'
