import { RxHamburgerMenu } from 'react-icons/rx'

export default function Hamburguer() {
  return (
    <button className='block rounded-lg border-2 p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 sm:hidden'>
      <RxHamburgerMenu className='h-5 w-5 text-slate-800 dark:text-white' />
    </button>
  )
}
