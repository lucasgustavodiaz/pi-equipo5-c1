import Image from 'next/image'
import Link from 'next/link'
import ThemeButton from '@/components/header/ThemeButton'
import Hamburguer from '@/components/header/Hamburguer'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white py-3 dark:bg-[#121212]'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>
              <Image src='/logo-1.svg' alt='logo' width={101} height={50} />
            </Link>
          </li>
        </ul>
        <div className='flex gap-4'>
          <button className='hidden rounded border border-sky-500 bg-transparent px-4 py-2 font-semibold text-sky-700 hover:border-transparent hover:bg-sky-500 hover:text-white dark:text-white sm:block'>
            Crear cuenta
          </button>
          <button className='hidden rounded border border-sky-500 bg-transparent px-4 py-2 font-semibold text-sky-700 hover:border-transparent hover:bg-sky-500 hover:text-white dark:text-white sm:block'>
            Inicio de sesión
          </button>
          <ThemeButton />
          <Hamburguer />
        </div>
      </nav>
    </header>
  )
}
