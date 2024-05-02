import { Spinner } from '@/src/components/ui/Spinner'
import { useDropZone, useFileUpload, useUploader } from './hooks'
import { Button } from '@/src/components/ui/Button'
import { Icon } from '@/src/components/ui/Icon'
import { cn } from '@/src/lib/utils'
import { ChangeEvent, useCallback } from 'react'

export const ImageUploader = ({ onUpload }: { onUpload: (url: string) => void }) => {
  const { loading, uploadFile } = useUploader({ onUpload })
  const { handleUploadClick, ref } = useFileUpload()
  const { draggedInside, onDrop, onDragEnter, onDragLeave } = useDropZone({ uploader: uploadFile })

  const onFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => (e.target.files ? uploadFile(e.target.files[0]) : null),
    [uploadFile],
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 rounded-lg min-h-[12rem] bg-opacity-80">
        <Spinner className="text-neutral-500" size={1.5} />
      </div>
    )
  }

  const wrapperClass = cn(
    'flex flex-col items-center justify-center rounded-lg bg-opacity-80',
    draggedInside && 'bg-gs-default-ghost',
  )

  return (
    <div
      className={wrapperClass}
      onDrop={onDrop}
      onDragOver={onDragEnter}
      onDragLeave={onDragLeave}
      contentEditable={false}
    >
      <Icon name="Image" className="w-12 h-12 mb-4 text-gs-white opacity-20" />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-sm font-medium text-center text-neutral-400 dark:text-neutral-500">
          {draggedInside ? 'Drop image here' : 'Drag and drop or'}
        </div>
        <div>
          <Button disabled={draggedInside} onClick={handleUploadClick} variant="primary" buttonSize="small">
            <Icon name="Upload" />
            Upload an image
          </Button>
        </div>
      </div>
      <input
        className="w-0 h-0 overflow-hidden opacity-0"
        ref={ref}
        type="file"
        style={{height: 0}}
        accept=".jpg,.jpeg,.png,.webp,.gif"
        onChange={onFileChange}
      />
    </div>
  )
}

export default ImageUploader
