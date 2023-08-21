import Link from 'next/link'
import { BsGear } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'

export default function DropdownLogin({ openMenu }) {
  return (
    <div
      className={`absolute right-0 top-12 flex w-[200px] flex-col rounded-xl bg-slate-50 p-2 text-sm drop-shadow-lg ${
        openMenu ? 'block' : 'hidden'
      }`}
    >
      <Link
        href='/register'
        className='rounded-lg px-3 py-2 hover:bg-slate-200'
      >
        <AiOutlineHome className='mr-2 inline-block text-base' />
        Crear cuenta
      </Link>
      <Link href='/login' className='rounded-lg px-3 py-2 hover:bg-slate-200'>
        <BsGear className='mr-2 inline-block text-base' />
        Iniciar sesión
      </Link>
    </div>
  )
}
