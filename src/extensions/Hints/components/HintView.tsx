import React, { useRef } from 'react'
import { Editor, NodeViewWrapper } from '@tiptap/react'
import { HintComp } from './HintComp'
type Props = {
  editor: Editor
  node: Node & {
    attrs: {
      hint: string
    }
  }
  updateAttributes: (attrs: Record<string, string>) => void
}

export const HintView = (props: Props) => {
    const { editor, node } = props
    
    return (
        <NodeViewWrapper>
            <HintComp editor={editor}  />
        </NodeViewWrapper>
    )
}