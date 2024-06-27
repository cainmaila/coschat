import { persisted } from 'svelte-persisted-store'

export const ollamaHost$ = persisted('ollamaHost', '')
export const model$ = persisted('model', 'llama3')