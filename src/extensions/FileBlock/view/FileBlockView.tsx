import { FC, useCallback } from 'react'
import { cn } from '@/src/lib/utils'
import { Node } from '@tiptap/pm/model'
import { Editor, NodeViewWrapper } from '@tiptap/react'
import { FileBlock } from '../components'

interface FileBlockViewProps {
  editor: Editor
  node: {
    attrs: {
      name: string
      size: string
      type: string
    }
  }
}

export const FileBlockView: FC<FileBlockViewProps> = (props) => {
  const { editor, node} = props
  const { name, type, size } = node.attrs;
  
  return <NodeViewWrapper>
    <FileBlock name={name} type={type} size={size} />
  </NodeViewWrapper>
}
