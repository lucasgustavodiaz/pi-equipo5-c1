import { useState, useEffect } from 'react'
import Image from 'next/image'
import Dropdown from './UserDropDown'
import { useAuth } from '@/context/authContext'

export default function UserMenu() {
  const { user } = useAuth()
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
    <>
      <div onClick={() => setOpenMenu(!openMenu)} className='cursor-pointer '>
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
            <p className='font-bold uppercase text-white'>{user.email[0]}</p>
          </div>
        )}
      </div>
      <Dropdown openMenu={openMenu} />
    </>
  )
}
