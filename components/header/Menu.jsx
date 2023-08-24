import ThemeButton from '@/components/header/ThemeButton'
import Link from 'next/link'
import Hamburguer from '@/components/header/Hamburguer'
import { useAuth } from '@/context/authContext'
import UserMenu from './UserMenu'

export default function Menu() {
  const { user, loading } = useAuth()

  // console.log(user)

  return (
    <div className='relative flex items-center gap-4'>
      {user ? (
        // Contenido para el usuario autenticado
        <UserMenu />
      ) : (
        !loading && (
          <>
            {/* Contenido para el usuario no autenticado */}
            <Link href='/register' className='hidden sm:inline-block'>
              <button className='rounded border border-sky-500 bg-transparent px-4 py-2 font-semibold text-sky-700 transition ease-in-out hover:border-transparent hover:bg-sky-500 hover:text-white dark:text-white sm:block'>
                Crear cuenta
              </button>
            </Link>
            <Link href='/login' className='hidden sm:inline-block'>
              <button className='rounded border border-sky-500 bg-transparent px-4 py-2 font-semibold text-sky-700 transition ease-in-out hover:border-transparent hover:bg-sky-500 hover:text-white dark:text-white sm:block'>
                Inicio de sesión
              </button>
            </Link>
            <Hamburguer />
          </>
        )
      )}

      {/* <ThemeButton /> */}
    </div>
  )
}
