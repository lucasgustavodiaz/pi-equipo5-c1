import Image from 'next/image'
import Link from 'next/link'
import logoLight from '/public/logo-light1.svg'
import logoDark from '/public/logo-dark1.svg'
import ThemeButton from '@/components/header/ThemeButton'
import Hamburguer from '@/components/header/Hamburguer'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white py-3 dark:bg-[#121212]'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>
              <Image
                src={logoLight}
                alt='Picture of the author'
                className='dark:hidden'
                width={240}
                height={120}
              />
              <Image
                src={logoDark}
                alt='Picture of the author'
                className='hidden dark:block'
                width={240}
                height={120}
              />
            </Link>
          </li>
        </ul>
        <div className='flex gap-4'>
          <button className='hidden rounded border border-sky-500 bg-transparent px-4 py-2 font-semibold text-sky-700 transition ease-in-out hover:border-transparent hover:bg-sky-500 hover:text-white dark:text-white sm:block'>
            Crear cuenta
          </button>
          <Link href='/administracion'>
            <button className='hidden rounded border border-sky-500 bg-transparent px-4 py-2 font-semibold text-sky-700 transition ease-in-out hover:border-transparent hover:bg-sky-500 hover:text-white dark:text-white sm:block'>
              Inicio de sesión
            </button>
          </Link>
          <ThemeButton />
          <Hamburguer />
        </div>
      </nav>
    </header>
  )
}
