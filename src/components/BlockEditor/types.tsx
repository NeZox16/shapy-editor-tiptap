import type { Doc as YDoc } from 'yjs'

export interface TiptapProps {

  ydoc: YDoc
}

export type EditorUser = {
  clientId: string
  name: string
  color: string
  initials?: string
}
