import Link from 'next/link'
import { FC } from 'react'

interface HeaderProps {
  
}

export const Header: FC<HeaderProps> = ({}) => {
  return <header className='sticky top-0 w-full flex items-center'>
    <nav className='flex items-center gap-3 justify-center w-full h-9'>
        <Link className='transition-all hover:text-gs-green' href={'/'}>Edit</Link>
        <Link className='transition-all hover:text-gs-green' href={'/preview'}>Preview</Link>
    </nav>
  </header>
}
