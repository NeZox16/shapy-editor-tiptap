import { FC } from 'react'
import * as AvatarRadix from '@radix-ui/react-avatar';
import { cn } from '@/src/lib/utils';

interface AvatarProps {
  src: string
  alt: string
  fallbaclLabel: string
  className?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {src, alt, fallbaclLabel, className } = props
  return <AvatarRadix.Root className={cn('bg-gs-default inline-flex h-[36px] w-[36px] select-none items-center justify-center overflow-hidden border border-black/20 rounded align-middle', className)}>
  <AvatarRadix.Image src={src} alt={`Icon: ${alt}`} className='h-full w-full rounded-[inherit] object-cover' />
  <AvatarRadix.Fallback className='text-gs-white leading-1 flex h-full w-full items-center justify-center bg-gs-default-ghost text-[15px] font-medium' >
    {fallbaclLabel.slice(0, 1)}
  </AvatarRadix.Fallback>
</AvatarRadix.Root>
}
