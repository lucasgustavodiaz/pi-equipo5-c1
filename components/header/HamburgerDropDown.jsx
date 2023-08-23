import Link from 'next/link'
import { FiUserPlus, FiLogIn } from 'react-icons/fi'

export default function DropdownLogin({ openMenu }) {
  return (
    <div
      className={`absolute right-0 top-11 flex w-[200px] flex-col rounded-xl border bg-white p-2 text-sm drop-shadow-lg sm:hidden ${
        openMenu ? 'block' : 'hidden'
      }`}
    >
      <Link
        href='/register'
        className='rounded-lg px-3 py-2 hover:bg-slate-200'
      >
        <FiUserPlus className='mr-2 inline-block text-base' />
        Crear cuenta
      </Link>
      <Link href='/login' className='rounded-lg px-3 py-2 hover:bg-slate-200'>
        <FiLogIn className='mr-2 inline-block text-base' />
        Iniciar sesión
      </Link>
    </div>
  )
}
