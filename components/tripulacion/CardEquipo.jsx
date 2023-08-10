import Image from 'next/image'
import Social from '@/components/footer/Social'

export default function CardEquipo({ nombre, rol, img }) {
  return (
    <>
      <div className='flex flex-col items-center rounded-md border pt-16'>
        <div className='px-14'>
          <Image
            src={img}
            alt='Picture of the author'
            width={150}
            height={150}
            className='rounded-full'
          />
        </div>
        <h2 className='pt-5  text-xl font-bold tracking-tight text-sky-900'>
          {nombre}
        </h2>
        <h3 className='pb-6 text-sm font-semibold uppercase tracking-tight text-slate-400'>
          {rol}
        </h3>
        <div className='w-full border py-4'>
          <Social color='text-slate-500' />
        </div>
      </div>
    </>
  )
}
