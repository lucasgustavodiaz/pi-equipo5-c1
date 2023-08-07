import Image from 'next/image'
import Link from 'next/link'
import { GiShipWheel } from 'react-icons/gi'

export default function Embarcaciones() {
  return (
    <div className='relative flex min-h-[92vh] items-center px-4 py-14 md:px-8 md:py-20 '>
      <Image
        src='/h1_images_bg-min.jpg'
        alt='Embarcaciones'
        priority={true}
        loading='eager'
        blurDataURL='data:...'
        placeholder='blur'
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
      />
      <div className='container z-10 max-w-7xl text-center'>
        <GiShipWheel className='m-auto mb-4 text-4xl text-slate-50 drop-shadow-md' />
        <h3 className='font-autography text-5xl text-sky-500 drop-shadow-md '>
          explorá
        </h3>
        <h2 className='mb-7 text-3xl font-bold text-slate-50 drop-shadow-md sm:text-5xl'>
          Tipos de embarcaciones
        </h2>
        <p className='m-auto max-w-[620px] text-xl text-gray-400'>
          ¿Sabes lo que estas buscando? Explore nuestra amplia selección de
          embarcaciones de alquiler para todo el país.
        </p>
        <div className='mt-20 grid grid-cols-1 gap-y-12 text-8xl text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          <Link href='/' className='hover:text-sky-500'>
            <i className='font-floaty'></i>
            <h3 className='text-xl font-bold'>Velero</h3>
          </Link>
          <Link href='/' className='hover:text-sky-500'>
            <i className='font-floaty'></i>
            <h3 className='text-xl font-bold'>A motor</h3>
          </Link>
          <Link href='/' className='hover:text-sky-500'>
            <i className='font-floaty'></i>
            <h3 className='text-xl font-bold'>Catamarán</h3>
          </Link>
          <Link href='/' className='hover:text-sky-500'>
            <i className='font-floaty'></i>
            <h3 className='text-xl font-bold'>Yate</h3>
          </Link>
          <Link href='/' className='hover:text-sky-500'>
            <i className='font-floaty'></i>
            <h3 className='text-xl font-bold'>Jet Ski</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
