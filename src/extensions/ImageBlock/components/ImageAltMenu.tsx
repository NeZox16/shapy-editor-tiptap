import { Button } from '@/src/components/ui/Button'
import { DialogComponent, DialogDescription, DialogTitle } from '@/src/components/ui/Dialog/Dialog'
import { CustomIcon } from '@/src/components/ui/Icon'
import Input from '@/src/components/ui/Input/Input'
import { Lable } from '@/src/components/ui/Lable/Lable'
import { Toolbar } from '@/src/components/ui/Toolbar'
import { cn } from '@/src/lib/utils'
import React, { memo, useCallback, useEffect, useState } from 'react'

type TImageAlt = {
  onChange: (value: string) => void
  value: string
}

export const ImageAltMenu = memo(({onChange, value}: TImageAlt) => {
  const [currentAlt, setCurrentAlt] = useState(value);
  
  const handlerSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 1000));
    onChange(currentAlt)
  }


  return (
    <DialogComponent visibleCloseButton={true} triggerContent={
            <CustomIcon name='Alt' className='stroke-[#4A4E4E] hover:stroke-[#4A4E4E]/50 transition-all' stroke='' />
        }>
          <form onSubmit={handlerSubmit}>
            <DialogTitle className={cn('text-gs-white font-semibold mb-2')}>
                Изменить альтернативний текст для зображення
            </DialogTitle>
            <DialogDescription className={cn('text-gs-white text-sm mb-2')}>
              <span className={cn('font-bold')}>Альтренативный текст</span> -  предназначен для тех случаев, когда изображение не было загружено на сайте. Этим самым вы показываете пользователю, что за изображение вы вставили.
            </DialogDescription>
            <div className='mb-8'>
              <Lable htmlFor='alt' className={cn('flex flex-col gap-1 text-gs-white/60 font-semibold')}>
                Альтернативний текст:
                <Input onChange={(e) => setCurrentAlt(e.target.value)} value={currentAlt}  id='alt' className={cn('px-3 py-1 bg-transparent transition-all border-0 border-b-2 text-gs-white border-gs-default-ghost outline-none', 'focus:border-gs-green', 'hover:border-gs-green/50')} />
              </Lable>
            </div>
            <div className='flex items-center justify-end'>
              <Button disabled={value === currentAlt || currentAlt.length === 0 ? true : false} type='submit' className='' variant="gs">
                Сохранить
              </Button>
            </div>
          </form>
    </DialogComponent>
  )
})
