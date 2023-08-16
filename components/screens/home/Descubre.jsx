import Image from 'next/image'
import { GiShipWheel } from 'react-icons/gi'

export default function Descubre() {
  return (
    <div className='relative'>
      <div className='container flex pb-40 pt-[35rem] sm:pt-[29rem] lg:pb-44 lg:pt-40 xl:pb-44'>
        <div className='flex flex-col items-center lg:w-[45%] lg:items-start'>
          <GiShipWheel className='mb-4 text-4xl text-[#dbdfe4]' />
          <h3 className='font-autography text-5xl text-sky-500'>
            sobre nosotros
          </h3>
          <h2 className='mb-7 text-center text-3xl font-bold text-sky-950 sm:text-5xl lg:text-left'>
            Descubrí tu próxima aventura
          </h2>
          <blockquote className='border-l-4 border-sky-500 pl-6 text-lg text-gray-500 sm:text-xl'>
            Sentí la emoción de embarcarte en nuestra variada flota y explorar
            las cautivadoras aguas de nuestro país. Desde lujosos yates y
            elegantes veleros hasta cómodas lanchas.
          </blockquote>
        </div>
      </div>
      <div className='absolute right-0 top-0 -z-10 hidden w-[55%] lg:block'>
        <Image
          src='/h1_images_bg1-min.png'
          alt='h1 bg'
          loading='eager'
          blurDataURL='data:...'
          placeholder='blur'
          width={790}
          height={723}
          style={{ objectFit: 'cover' }}
          quality={100}
          className='ml-auto'
        />
      </div>
      <div className='absolute bottom-0 -z-20 h-[101px]'>
        <Image
          src='/About-bg.png'
          alt='h1 bg'
          loading='eager'
          blurDataURL='data:...'
          placeholder='blur'
          width={1920}
          height={101}
          style={{ objectFit: 'cover' }}
          quality={100}
          className='h-full'
        />
      </div>
    </div>
  )
}
