import React, { ReactElement, ReactNode } from 'react'
import * as Popover from '@radix-ui/react-popover'
import { Icon } from '../Icon'

type Props = {}

type TPopoverProps = {
    triggerContent?: React.JSX.Element | ReactNode
    children: ReactNode
    propsOffset?: number
    alingContent?: 'center' | "end"  | "start"
    visibleCloseButton?: boolean
    modal?: boolean 
}

const PopoverMenu = ({triggerContent, alingContent = 'start', children, propsOffset = 4, visibleCloseButton = false, modal = false}: TPopoverProps, props: Props) => {
  return (
    <Popover.Root modal={modal}>
        <Popover.Trigger>
            {triggerContent}
        </Popover.Trigger>
        <Popover.Content
            align={alingContent}
            sideOffset={propsOffset}
            {...props}
        >
            {visibleCloseButton && <Popover.Close>
                    <Icon name='X' />
                </Popover.Close>}
            {children}
        </Popover.Content>
    </Popover.Root>
  )
}

export default PopoverMenu