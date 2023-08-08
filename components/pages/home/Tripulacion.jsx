import Social from '@/components/footer/Social'
import Image from 'next/image'
import { GiShipWheel } from 'react-icons/gi'

export default function Tripulacion() {
  return (
    <div className='bg-[#f2f5fa]'>
      <div className='container py-20 text-center'>
        <GiShipWheel className='m-auto mb-4 text-4xl text-[#dbdfe4]' />
        <h3 className='font-autography text-5xl text-sky-500  '>explorá</h3>
        <h2 className='mb-7 text-3xl font-bold text-sky-950 sm:text-5xl'>
          Conocé nuestros capitanes
        </h2>
        <div className='flex flex-col items-center rounded-md border pt-16'>
          <Image
            src='/avatar-luk.png'
            alt='Picture of the author'
            width={150}
            height={150}
            className='rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'
          />
          <h2 className='pt-5 text-xl font-bold tracking-tight text-sky-950'>
            Lucas Diaz
          </h2>
          <h3 className='pb-6 text-sm font-semibold uppercase tracking-tight text-slate-400'>
            frontend
          </h3>
          <div className='w-full border py-4'>
            <Social />
          </div>
        </div>
      </div>
    </div>
  )
}
