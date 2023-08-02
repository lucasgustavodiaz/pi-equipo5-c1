import Link from 'next/link'
import ThemeButton from '@/components/ThemeButton'
import Hamburguer from './Hamburguer'

export default function Header() {
  return (
    <header className='sticky top-0 z-10 bg-white py-6 dark:bg-[#121212]'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>Logo</Link>
          </li>
        </ul>
        <div className='flex gap-4'>
          <button className='hidden rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white dark:text-white sm:block'>
            Crear cuenta
          </button>
          <button className='hidden rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white dark:text-white sm:block'>
            Inicio de sesión
          </button>
          <ThemeButton />
          <Hamburguer />
        </div>
      </nav>
    </header>
  )
}
