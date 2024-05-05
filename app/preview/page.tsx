"use client"
import { EditorContent } from '@tiptap/react'
import { FC } from 'react'
import { useBlockEditor } from '@/src/hooks/useBlockEditor'

import 'katex/dist/katex.min.css'
import '@/src/styles/index.scss'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
    const { editor } = useBlockEditor({ editable: false})

  return <EditorContent editor={editor} />
}

export default page;