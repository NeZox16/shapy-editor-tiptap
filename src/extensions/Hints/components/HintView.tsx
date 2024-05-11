import React, { useRef } from 'react'
import { Editor, NodeViewWrapper } from '@tiptap/react'
import { HintComp } from './HintComp'
type Props = {
  editor: Editor
  node: Node & {
    attrs: {
      hint: | "info"
      | "warning"
      | "danger"
      | "success"
      | "notice"
      | "important"
      | "note"
      | "tip"
      | "question"
    }
  }
  updateAttributes: (attrs: Record<string, string>) => void
}

export const HintView = (props: Props) => {
    const { editor, node } = props
    
    return (
        <NodeViewWrapper>
            <HintComp editor={editor} attrs={node.attrs.hint}  />
        </NodeViewWrapper>
    )
}