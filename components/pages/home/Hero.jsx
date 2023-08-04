import Image from 'next/image'

export default function Hero() {
  return (
    <div className='relative flex h-screen items-center justify-center'>
      <Image
        src='/bg1-2.jpg'
        alt='hero'
        priority={true}
        loading='eager'
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
      />
      <h2 className='font-caveat absolute text-center text-5xl text-slate-50 drop-shadow-md sm:text-6xl lg:text-7xl xl:text-8xl'>
        Life is better on the water
      </h2>
    </div>
  )
}
