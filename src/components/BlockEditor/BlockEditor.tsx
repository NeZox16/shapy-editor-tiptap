'use client'

import { EditorContent, PureEditorContent } from '@tiptap/react'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { LinkMenu } from '@/src/components/menus'

import { useBlockEditor } from '@/src/hooks/useBlockEditor'
import 'katex/dist/katex.min.css'
import '@/src/styles/index.scss'

import ImageBlockMenu from '@/src/extensions/ImageBlock/components/ImageBlockMenu'
import { ColumnsMenu } from '@/src/extensions/MultiColumn/menus'
import { TableColumnMenu, TableRowMenu } from '@/src/extensions/Table/menus'
import { TextMenu } from '../menus/TextMenu'
import { ContentItemMenu } from '../menus/ContentItemMenu'
import { translate } from '@/src/lib/utils/i18n'
import { Sidebar } from '../Sidebar'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'


export const BlockEditor = ({lang }: { lang?: "en" | "ru"}) => {
  const menuContainerRef = useRef(null)
  const [open, setOpen] = useState(false);
  const editorRef: any = useRef<PureEditorContent | null>(null)
  
  const { editor } = useBlockEditor({editable: true})
  const tLang = lang !== undefined ? translate[lang] : translate["en"]
  
  
  if (!editor) {
    return null
  }

  const handlerClick = () => {
    setOpen(prev => !prev)
  }

  return (
      <div className="flex h-full" ref={menuContainerRef}>
        <Sidebar editor={editor} isOpen={open} handlerClick={handlerClick} />
        <div className="relative flex flex-col flex-1 h-full overflow-hidden">
          <EditorContent editor={editor} ref={editorRef} className="flex-1 overflow-y-auto" />
          <ContentItemMenu lang={tLang} editor={editor} />
          <LinkMenu lang={tLang} editor={editor} appendTo={menuContainerRef} />
          <TextMenu lang={tLang} editor={editor} />
          <ColumnsMenu lang={tLang} editor={editor} appendTo={menuContainerRef} />
          <TableRowMenu lang={tLang} editor={editor} appendTo={menuContainerRef} />
          <TableColumnMenu lang={tLang} editor={editor} appendTo={menuContainerRef} />
          <ImageBlockMenu lang={tLang} editor={editor} appendTo={menuContainerRef} />
        </div>
      </div>
  )
}

export default BlockEditor
