import * as Dialog  from '@radix-ui/react-dialog'
import React, { memo, ReactNode } from 'react'
import { Icon } from '../Icon'
import { cn } from '@/src/lib/utils'

type Props = {
    props?: HTMLDivElement 
}

type TDialogProps = {
    triggerContent?: ReactNode
    children: ReactNode
    visibleCloseButton?: boolean
    className?: string
}

export const DialogDescription = ({children, className}: TDialogProps) => {
    return <Dialog.Description className={className}>
        {children}
    </Dialog.Description>
}

export const DialogTitle = ({children, className}: TDialogProps) => {
    return <Dialog.Title className={className}>
        {children}
    </Dialog.Title>
}

export const DialogComponent = memo(({children, triggerContent, visibleCloseButton = false}: TDialogProps, props: Dialog.DialogProps) => {
  return (
    <Dialog.Root>
        <Dialog.Trigger className='w-8 h-8 p-1'>
            {triggerContent}
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[10000]"  />
            <Dialog.Content className="fixed left-1/2 top-1/2 w-full z-[10010] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-gs-default p-8 text-gray-900 shadow" {...props}>
                {visibleCloseButton && <div className='relative'>
                    <Dialog.Close className={cn('absolute -right-6 -top-6 transition-all rounded hover:bg-gs-default-ghost p-1')}>
                        <Icon name='X' className='size-5 text-gs-white'/>
                    </Dialog.Close>
                    </div>}
                {children}
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
})

DialogComponent.displayName = "DialogComponent"