import { BlockEditor } from '@/src/components/BlockEditor'

export interface AiState {
  isAiLoading: boolean
  aiError?: string | null
}

export default function Document() {

  return (
    <>
      <BlockEditor  lang='ru' />
    </>
  )
}
