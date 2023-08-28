'use client'

import Image from 'next/image'
import Link from 'next/link'
import logoLight from '/public/logo-light.svg'
import logoDark from '/public/logo-dark.svg'
import Menu from './Menu'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white bg-opacity-50 py-3 backdrop-blur-lg backdrop-filter dark:bg-[#121212]'>
      <nav className='container flex items-center justify-between '>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>
              <Image
                src={logoLight}
                alt='Picture of the author'
                className='dark:hidden'
                width={101}
                height={50}
                priority={true}
              />
              <Image
                src={logoDark}
                alt='Picture of the author'
                className='hidden dark:block'
                width={101}
                height={50}
                priority={true}
              />
            </Link>
          </li>
        </ul>
        <Menu />
      </nav>
    </header>
  )
}
