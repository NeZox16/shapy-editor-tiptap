import HoverCard from '@/src/components/ui/HoverCard/HoverCard'
import { CustomIcon, Icon } from '@/src/components/ui/Icon'
import { Popover } from '@/src/components/ui/Popover/Popover'
import { cn } from '@/src/lib/utils'
import { FC } from 'react'

interface FileBlockProps {
  name: string
  size: string
  type: string
}

  const FILE_TEST = ''

export const FileBlock: FC<FileBlockProps> = ({name, type, size}) => {

  
  const downloadFileAtURL = (url: any) => {
    const fileName = url.split("/").pop()
    const linkTag = document.createElement("a");
    linkTag.href = url;
    linkTag.setAttribute("download", fileName)
    document.body.appendChild(linkTag);
    linkTag.click()
    linkTag.remove()
  }

  return <div contentEditable={false} className="h-auto relative w-full bg-gs-default-ghost rounded flex items-center p-4 gap-3 relative shadow-md cursor-pointer">
  <div className="w-9 h-9">
    <CustomIcon className='size-9' fill='white' name={type} />
  </div>
  <div className="flex flex-col">
    <span className="truncate max-w-96 text-base">{name}</span>
    <span className="text-sm text-white/50">{size} ★ {type}</span>
  </div>
  <div className='absolute right-3 top-3'>
    <Popover className='bg-gs-default-ghost border border-white/20 rounded p-1 w-36' alingContent='center' triggerContent={
       <button type='button' className='rounded-full transition-all hover:bg-black/50'>
       <Icon className='size-6 p-1' name='EllipsisVertical' />
     </button>
    } children={
      <div className='w-full'>
        <button type="button" onClick={() => downloadFileAtURL(FILE_TEST)} className='transition-all px-2 py-1 w-full flex items-center gap-1.5 rounded text-left hover:bg-black/50'> <Icon name='FileDown' /> Установить</button>
      </div>
    } />
  </div>

  {/* 
  
  <div className='w-full'>
        <button type="button" className='transition-all px-1 py-1 rounded text-left hover:bg-black/50'>Установить</button>
      </div>
       <button type='button' className='rounded-full transition-all hover:bg-black/50'>
        <Icon className='size-6 p-1' name='EllipsisVertical' />
      </button>
  
  */}
</div>
}
