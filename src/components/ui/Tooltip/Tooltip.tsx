import React, { FC, PropsWithChildren, ReactNode } from 'react';
import * as TooltipRadix from '@radix-ui/react-tooltip';
import { Icon } from '../Icon';
import { cn } from '@/src/lib/utils';

interface ITooltip extends PropsWithChildren {
    targetChildren: ReactNode
    targetClassName?: string
    contentClassName?: string
    dataHint?: string
    onClick?: () => void
    arrowFill?: string
}

export const Tooltip: FC<ITooltip> = ({children, targetChildren, targetClassName, contentClassName, dataHint, onClick, arrowFill}) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <button onClick={onClick} data-hint={dataHint} className={cn("inline-flex h-[36px] w-[36px] items-center justify-center rounded outline-none focus:shadow-[0_0_0_2px] focus:shadow-black", targetClassName)}>
            {targetChildren}
          </button>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className={cn("data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-[4px] p-2 text-sm leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]", contentClassName )}
            sideOffset={5}
          >
            {children}
            <TooltipRadix.Arrow fill={`#${arrowFill}`} className={`fill-[#${arrowFill}/50]`} />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};
