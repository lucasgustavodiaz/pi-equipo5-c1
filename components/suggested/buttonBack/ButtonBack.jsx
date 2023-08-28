'use client'
import { useRouter } from 'next/navigation'

export const ButtonBack = () => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className='text-xs font-semibold uppercase transition ease-in-out hover:text-sky-500'
    >
      volver
    </button>
  )
}
