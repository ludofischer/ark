import { createSignal } from 'solid-js'
import { Portal } from 'solid-js/web'
import type { Meta } from 'storybook-solidjs'
import { Dialog } from '../'
import './dialog.css'

const meta: Meta = {
  title: 'Components / Dialog',
}

export default meta

export const Basic = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export const Controlled = () => {
  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>
      <Dialog.Root open={isOpen()} onOpenChange={() => setIsOpen(false)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
              <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}

export const LazyMount = () => {
  return (
    <Dialog.Root lazyMount unmountOnExit>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
          <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export const RenderFn = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
      <Dialog.Context>
        {(context) => <p>Dialog is {context().isOpen ? 'open' : 'closed'}</p>}
      </Dialog.Context>
    </Dialog.Root>
  )
}
