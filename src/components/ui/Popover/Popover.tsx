import React, { ReactElement, ReactNode } from 'react'
import * as PopoverRadix from '@radix-ui/react-popover'
import { Icon } from '../Icon'
import { cn } from '@/src/lib/utils'

type Props = {}

type TPopoverProps = {
    triggerContent?: React.JSX.Element | ReactNode
    children: ReactNode
    propsOffset?: number
    alingContent?: 'center' | "end"  | "start"
    visibleCloseButton?: boolean
    modal?: boolean 
    className?: string
}

export const Popover = ({triggerContent, alingContent = 'start', children, propsOffset = 4, visibleCloseButton = false, modal = false, className}: TPopoverProps, props: Props) => {
  return (
    <PopoverRadix.Root modal={modal} >
        <PopoverRadix.Trigger asChild>
            {triggerContent}
        </PopoverRadix.Trigger>
        <PopoverRadix.Content
            align={alingContent}
            sideOffset={propsOffset}
            className={className}
            {...props}
        >
            {visibleCloseButton && <PopoverRadix.Close>
                    <Icon name='X' />
                </PopoverRadix.Close>}
            {children}
        </PopoverRadix.Content>
    </PopoverRadix.Root>
  )
}
