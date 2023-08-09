import Image from 'next/image'
import Social from '@/components/footer/Social'

export default function CardEquipo() {
  return (
    <card>
      <div className='flex flex-col items-center rounded-md border pt-16'>
        <Image
          src='/avatar-luk.png'
          alt='Picture of the author'
          width={150}
          height={150}
          className='rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'
        />
        <h2 className='px-20 pt-5  text-xl font-bold tracking-tight text-sky-950'>
          Lucas Diaz
        </h2>
        <h3 className='pb-6 text-sm font-semibold uppercase tracking-tight text-slate-400'>
          frontend
        </h3>
        <div className='w-full border py-4'>
          <Social color='text-slate-500' />
        </div>
      </div>
    </card>
  )
}
