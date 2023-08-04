import Image from 'next/image'

export default function Hero() {
  return (
    <div className='relative flex h-[60vh] items-center justify-center'>
      <Image
        src='/bg1-2.jpg'
        alt='hero'
        priority={true}
        loading='eager'
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
      />
      <h2 className='font-caveat absolute text-center text-6xl text-slate-50 drop-shadow-md sm:text-6xl md:text-7xl xl:text-8xl'>
        Life is better on the water
      </h2>
    </div>
  )
}
