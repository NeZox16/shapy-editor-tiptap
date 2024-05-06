import { FC } from 'react'
import { Editor, NodeViewWrapper } from '@tiptap/react'
import HoverCard from '@/src/components/ui/HoverCard/HoverCard'
import { Avatar } from '@/src/components/ui/Avatar/Avatar'

interface MentionViewProps {
    editor: Editor
    node: Node & {
        attrs: {
            id: string
        }
    }
    updateAttributes: (attrs: Record<string, string>) => void
    
}

export const MentionView: FC<MentionViewProps> = (props) => {
    const { editor, node } = props
  return <NodeViewWrapper className='inline-block bg-gs-default-ghost/50 rounded px-1'>
    <HoverCard trigger={`${node.attrs.id}`} label="@" href={node.attrs.id}>
    <div className='flex gap-3 items-center'>
        <Avatar alt={`${node.attrs.id}`} src={``} fallbaclLabel={node.attrs.id}/>
        {node.attrs.id}
    </div>
    <p>Sth text</p>
    </HoverCard>
  </NodeViewWrapper>
}
