import { cn } from '@/src/lib/utils'
import { icons } from 'lucide-react'
import { memo } from 'react'

export type IconProps = {
  name: keyof typeof icons
  className?: string
  strokeWidth?: number
}

export type CustomIconProps = {
  name: string
  className?: string
  strokeWidth?: number
  fill?: string
  stroke?: string
}

export const Icon = memo(({ name, className, strokeWidth }: IconProps) => {
  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={cn('w-4 h-4', className)} strokeWidth={strokeWidth || 2.5} />
})

export const CustomIcon = memo(({name, className, strokeWidth = 2.5, fill = '', stroke = 'black' }: CustomIconProps) => {

  switch(name) {
    case 'Alt': {
      return (
        <>  
          <svg width="24" height="24" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8C6.53043 8 7.03914 8.21071 7.41421 8.58579C7.78929 8.96086 8 9.46957 8 10V16M4 13H8M11 8V16H15M16 8H20M18 8V16" stroke={stroke} strokeWidth={strokeWidth} fill={fill} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </>
      )
      break;
    }
  }
})

CustomIcon.displayName = 'CustomIcon'

Icon.displayName = 'Icon'
