import { cn } from '@/src/lib/utils'

export const DropdownCategoryTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-[.65rem] font-semibold mb-1 uppercase text-neutral-500 0 px-1.5">
      {children}
    </div>
  )
}

export const DropdownButton = ({
  children,
  isActive,
  onClick,
  disabled,
  className,
}: {
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  disabled?: boolean
  className?: string
}) => {
  const buttonClass = cn(
    'flex items-center gap-2 p-1.5 text-sm font-medium text-neutral-500  text-left bg-transparent w-full rounded',
    !isActive && !disabled,
    'hover:bg-gs-default-ghost/30 hover:text-gs-white/70',
    isActive && !disabled && 'bg-gs-default-ghost/10 text-gs-white/50',
    disabled && 'text-gs=white/50 cursor-not-allowed',
    className,
  )

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
