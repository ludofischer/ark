import { createContext } from '../context'
import type { CollectionItem } from '../types'
import type { UseSelectReturn } from './use-select'

export interface SelectContext<T extends CollectionItem> extends UseSelectReturn<T> {}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const [SelectProvider, useSelectContext] = createContext<SelectContext<any>>('SelectContext')
