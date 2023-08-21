import { RxHamburgerMenu } from 'react-icons/rx'
import DropdownLogin from './HamburgerDropDown'
import { useEffect, useState } from 'react'

export default function Hamburguer() {
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
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className='block rounded-lg border-2 p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 sm:hidden'
      >
        <RxHamburgerMenu className='h-5 w-5 text-slate-800 dark:text-white' />
      </button>
      <DropdownLogin openMenu={openMenu} />
    </>
  )
}
