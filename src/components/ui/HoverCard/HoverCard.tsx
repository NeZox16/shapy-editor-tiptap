import React, { ReactNode } from 'react'
import * as HoverCardRadix from '@radix-ui/react-hover-card';
import { cn } from '@/src/lib/utils';
import { Style } from 'util';

type Props = {
  trigger?: ReactNode
  children?: ReactNode
  className?: string
  label?: ReactNode
  href?: string
}

const HoverCard = (props: Props) => {
  const { trigger, children, className, label = '', href = '' } = props
  return (
    <HoverCardRadix.Root>
      <HoverCardRadix.Trigger href={href}>
        {label}{trigger}
      </HoverCardRadix.Trigger>
      <HoverCardRadix.Portal>
        <HoverCardRadix.Content className={cn("data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[250px] rounded-md bg-gs-default-ghost border border-gs-white/10 px-3 py-2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all data-[state=close]:transition-all", className)}
            sideOffset={5}>
                {children}
        </HoverCardRadix.Content>
      </HoverCardRadix.Portal>
    </HoverCardRadix.Root>
  )
}

export default HoverCard

