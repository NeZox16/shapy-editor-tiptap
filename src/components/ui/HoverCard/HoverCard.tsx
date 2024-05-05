import React, { ReactNode } from 'react'
import * as HoverCardRadix from '@radix-ui/react-hover-card';

type THoverCard = {
    triggerContent?: ReactNode
    children?: ReactNode
}

type Props = {
  trigger?: ReactNode
  children?: ReactNode
}

const HoverCard = (props: Props) => {
  const { trigger, children } = props
  return (
    <HoverCardRadix.Root>
      <HoverCardRadix.Trigger>
        {trigger}
      </HoverCardRadix.Trigger>
      <HoverCardRadix.Portal>
        <HoverCardRadix.Content className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
            sideOffset={5}>
                {children}
        </HoverCardRadix.Content>
      </HoverCardRadix.Portal>
    </HoverCardRadix.Root>
  )
}

export default HoverCard

