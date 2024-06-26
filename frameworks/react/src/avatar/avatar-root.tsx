import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { useAvatar, type UseAvatarProps } from './use-avatar'
import { AvatarProvider } from './use-avatar-context'

export interface AvatarRootProps extends Assign<HTMLArkProps<'div'>, UseAvatarProps> {}

export const AvatarRoot = forwardRef<HTMLDivElement, AvatarRootProps>((props, ref) => {
  const [useAvatarProps, localProps] = createSplitProps<UseAvatarProps>()(props, [
    'dir',
    'getRootNode',
    'id',
    'onLoadingStatusChange',
  ])
  const avatar = useAvatar(useAvatarProps)
  const mergedProps = mergeProps(avatar.rootProps, localProps)

  return (
    <AvatarProvider value={avatar}>
      <ark.div {...mergedProps} ref={ref} />
    </AvatarProvider>
  )
})

AvatarRoot.displayName = 'AvatarRoot'
