import { cn } from '@/src/lib/utils'
import { ChangeEvent, memo, useCallback, useRef } from 'react'
import { Editor } from '@tiptap/react'
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { useDropZone, useFileUpload, useUploader } from '@/src/extensions/ImageUpload/view/hooks';
import Image from 'next/image';
import { formatBytes } from '@/src/lib/utils/formatBytes';


export const Sidebar = memo(
  ({ editor, isOpen, handlerClick, position = 'right' }: { editor: Editor; isOpen?: boolean; handlerClick: () => void; position?: 'left' | 'right' }) => {
    const onUpload = useCallback(
      (url: string) => {
        if (url) {
          editor.chain().setImageBlock({ src: url }).focus().run()
        }
      },
      [editor],
    )

    const onUploadFile = useCallback(
      (nameFile: string, sizeFile: string, typeFile: string) => {
        if (nameFile && sizeFile && typeFile) {
          editor.chain().setFileBlock(nameFile, typeFile, sizeFile).run()
        }
      },
      [ editor],
    )

    const regexp = new RegExp(/\.(doc|docx|log|odt|pages|rtf|txt|csv|key|pps|ppt|pptx|tar|xml|json|pdf|xls|xlsx|db|sql|rar|gz|zip)/i)

    const { loading, uploadFile, files } = useUploader({ onUpload })
    const { handleUploadClick, ref } = useFileUpload()
    const { draggedInside, onDrop, onDragEnter, onDragLeave } = useDropZone({ uploader: uploadFile })

    const onFileChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => (e.target.files ? uploadFile(e.target.files[0]) : null),
      [uploadFile],
    )

    const windowClassName = cn(
      'mt-8 rounded bg-gs-default-ghost lg:bg-gs-default-ghost/30 lg:backdrop-blur-xl min-h-[calc(100%-67px)] z-[999] overflow-hidden overflow-y-auto w-14 duration-300 p-3 transition-all',
      !isOpen && 'border-r-transparent',
      isOpen && 'w-80 border-r border-r-black/40',
      position === 'left' && 'order-first',
      position === 'right' && 'order-last'
    )

    return (
      <div className={windowClassName}>
        <button onClick={handlerClick} className='w-8 h-8 rounded bg-black/50 flex items-center justify-center transition-all hover:bg-black/20'>
          {position === 'left' && (isOpen ? <Icon name='PanelRightOpen' /> : <Icon name='PanelRightClose' />)}
          {position === 'right' && (isOpen ? <Icon name='PanelRightClose' /> : <Icon name='PanelRightOpen' />)}
        </button>
        <div className={cn("min-h-[calc(100dvh-122px)] mt-3")}>
            <div className={cn('w-full h-16 border border-dashed border-[3px] border-black/50 flex flex-col items-center justify-center rounded cursor-pointer', 
              'transition-opacity hover:opacity-70',
              isOpen && 'w-full',
              !isOpen && 'w-0 border-none'
            )}
            onDrop={onDrop}
            onDragOver={onDragEnter}
            onDragLeave={onDragLeave}
            onClick={handleUploadClick}
            >
              <button className={cn('text-sm cursor-pointer inline-flex justify-center items-center gap-3 ', isOpen && 'w-full opacity-100 visible', !isOpen && 'w-0 opacity-0 invisible')} disabled={draggedInside} onClick={handleUploadClick}>
                <Icon name='Upload' />
                Drag and drop
              </button>
              <input className="w-0 h-0 overflow-hidden opacity-0"
                ref={ref}
                type="file"
                style={{height: 0}}
                onChange={onFileChange}/>
            </div>
          <ul className='flex flex-col divide-y divide-gs-default-ghost mt-3'>
            {files.length !== 0 && files.map((file, index) => (
              file.name.match(regexp) ? (
                <li key={index} className='p-4 transition-all hover:bg-black/50 flex items-center gap-3 cursor-pointer' onClick={() => onUploadFile(file.name, formatBytes(file.size), file.type)}>
                  <div className='w-8 h-8 block rounded bg-black/50'>
                    <Image src={file.url} width={0} height={0} className='w-full h-full object-contain' alt={`Image ${file.name}`} />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-xs'>
                      {file.name}
                    </span>
                    <span className='text-[12px] text-white/50'>
                      {formatBytes(file.size)} ★ {file.type.toUpperCase()} 
                    </span>
                  </div>
                </li>
              ) : (
                <li key={index} className='p-4 transition-all hover:bg-black/50 flex items-center gap-3 cursor-pointer' onClick={() => onUpload(file.url)}>
                  <div className='w-8 h-8 block rounded bg-black/50'>
                    <Image src={file.url} width={0} height={0} className='w-full h-full object-contain' alt={`Image ${file.name}`} />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-xs'>
                      {file.name}
                    </span>
                    <span className='text-[12px] text-white/50'>
                      {formatBytes(file.size)} ★ {file.type.toUpperCase()} 
                    </span>
                  </div>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    )
  },
)

Sidebar.displayName = 'TableOfContentSidepanel'
