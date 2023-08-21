import { useAuth } from '@/context/authContext'
import Link from 'next/link'
import { BsGear } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { useRouter } from 'next/navigation'

export default function Dropdown({ openMenu }) {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout()
      router.push('/')
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div
      className={`absolute right-0 top-12 flex w-[200px] flex-col rounded-xl border bg-white p-2 text-sm drop-shadow-lg ${
        openMenu ? 'block' : 'hidden'
      }`}
    >
      <div className='cursor-pointer rounded-lg p-3 font-semibold hover:bg-slate-200'>
        <div>Signed in as</div>
        <div className='truncate'>{user.email}</div>
      </div>
      <Link href='/' className='rounded-lg px-3 py-2 hover:bg-slate-200'>
        <AiOutlineHome className='mr-2 inline-block text-base' />
        Inicio
      </Link>
      <Link href='/' className='rounded-lg px-3 py-2 hover:bg-slate-200'>
        <BsGear className='mr-2 inline-block text-base' />
        Configuración
      </Link>
      <Link
        href='/administracion'
        className='rounded-lg px-3 py-2 hover:bg-slate-200'
      >
        <MdOutlineAdminPanelSettings className='mr-2 inline-block text-base' />
        Administración
      </Link>
      <button
        onClick={handleLogout}
        className='rounded-lg px-3 py-2 text-left hover:bg-rose-200 hover:text-pink-600 '
      >
        <BiLogOut className='mr-2 inline-block text-base' />
        Cerrar sesión
      </button>
    </div>
  )
}
