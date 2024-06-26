import { cn } from '@/src/lib/utils'
import { HTMLProps, forwardRef } from 'react'

export type SurfaceProps = HTMLProps<HTMLDivElement> & {
  withShadow?: boolean
  withBorder?: boolean
}

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ children, className, withShadow = true, withBorder = true, ...props }, ref) => {
    const surfaceClass = cn(
      className,
      'bg-gs-default rounded-lg',
      withShadow ? 'shadow-sm' : '',
      withBorder ? 'border border-gs-default-ghost' : '',
    )

    return (
      <div className={surfaceClass} {...props} ref={ref}>
        {children}
      </div>
    )
  },
)

Surface.displayName = 'Surface'
