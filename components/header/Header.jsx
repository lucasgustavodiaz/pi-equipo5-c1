'use client'

import Image from 'next/image'
import Link from 'next/link'
import logoLight from '/public/logo-light.svg'
import logoDark from '/public/logo-dark.svg'
import ThemeButton from '@/components/header/ThemeButton'
import Hamburguer from '@/components/header/Hamburguer'
import { useAuth } from '@/context/authContext'
import Dropdown from './Dropdown'
import { useState, useEffect } from 'react'

export default function Header() {
  const { user, loading } = useAuth()

  // console.log(user)

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const closeMenu = () => {
      setOpenMenu(false)
    }

    if (openMenu) {
      document.addEventListener('click', closeMenu)

      return () => {
        document.removeEventListener('click', closeMenu)
      }
    }
  }, [openMenu])

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
        <div className='relative flex items-center gap-4'>
          {user ? (
            <>
              {/* Contenido para el usuario autenticado */}
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className='cursor-pointer '
              >
                {user.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt='Picture of the user'
                    width={44}
                    height={44}
                    className='rounded-full border-2 border-sky-500'
                  />
                ) : (
                  <div className='flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border-2 border-sky-500 bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <p className='font-bold uppercase text-white'>
                      {user.email[0]}
                    </p>
                  </div>
                )}
              </div>
              <Dropdown user={user} openMenu={openMenu} />
            </>
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
              </>
            )
          )}

          {/* <ThemeButton /> */}
          {/* <Hamburguer /> */}
        </div>
      </nav>
    </header>
  )
}
