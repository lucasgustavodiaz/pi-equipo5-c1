import Social from './Social'
import Image from 'next/image'
import Link from 'next/link'
import logoLight from '/public/logo-light.svg'
import logoDark from '/public/logo-dark.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='container flex flex-col items-center justify-center gap-6 p-6 sm:flex-row sm:justify-between sm:gap-0'>
      <div className='flex flex-col items-center sm:flex-row'>
        <Link href='/'>
          <Image
            src={logoLight}
            alt='Picture of the author'
            className='dark:hidden'
            width={51}
            height={25}
          />
          <Image
            src={logoDark}
            alt='Picture of the author'
            className='hidden dark:block'
            width={51}
            height={25}
          />
        </Link>
        <span className='ml-1'>Copyright © {currentYear}</span>
      </div>
      <Social color='text-sky-600' />
    </footer>
  )
}
