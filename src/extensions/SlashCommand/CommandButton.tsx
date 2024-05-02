import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import { icons } from 'lucide-react'
import { Icon } from '@/src/components/ui/Icon'

export type CommandButtonProps = {
  active?: boolean
  description: string
  icon: keyof typeof icons
  onClick: () => void
  title: string
}

export const CommandButton = forwardRef<HTMLButtonElement, CommandButtonProps>(
  ({ active, icon, onClick, title }, ref) => {
    const wrapperClass = cn(
      'flex text-neutral-500 items-center text-xs font-semibold justify-start p-1.5 gap-2 rounded',
      !active && 'bg-transparent hover:bg-gs-default-ghost hover:text-black',
      active && 'bg-gs-default-ghost text-black hover:bg-gs-default-ghost/40',
    )

    return (
      <button ref={ref} onClick={onClick} className={wrapperClass}>
        <Icon name={icon} className="w-3 h-3" />
        <div className="flex flex-col items-start justify-start">
          <div className="text-sm font-medium">{title}</div>
        </div>
      </button>
    )
  },
)

CommandButton.displayName = 'CommandButton'
