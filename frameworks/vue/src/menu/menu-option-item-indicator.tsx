import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useMenuContext } from './menu-context'
import { useMenuOptionItemPropsContext } from './use-menu-option-item-context'

export interface MenuOptionItemIndicatorProps extends HTMLArkProps<'div'> {}

export const MenuOptionItemIndicator = defineComponent<MenuOptionItemIndicatorProps>(
  (_, { slots, attrs }) => {
    const api = useMenuContext()
    const optionItemProps = useMenuOptionItemPropsContext()

    return () => (
      <ark.div {...api.value.getItemIndicatorProps(optionItemProps)} {...attrs}>
        {slots.default?.()}
      </ark.div>
    )
  },
  {
    name: 'MenuOptionItemIndicator',
  },
)
