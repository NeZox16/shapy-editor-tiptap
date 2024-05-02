'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Doc as YDoc } from 'yjs'

import { BlockEditor } from '@/src/components/BlockEditor'

export interface AiState {
  isAiLoading: boolean
  aiError?: string | null
}

export default function Document() {

  const ydoc = useMemo(() => new YDoc(), [])




  return (
    <>
      <BlockEditor ydoc={ydoc} lang='ru' />
    </>
  )
}
