'use client'

import Image from 'next/image'

const SmallGallery = ({ imagesGallery }) => {
  return (
    <div>
      <div className='flex w-full flex-col pt-4 md:flex-row'>
        <div className='relative w-full sm:w-full md:w-1/2 '>
          {/* Imagen principal en la mitad izquierda */}
          <Image
            src={imagesGallery[0].url}
            alt='gallery'
            loading='eager'
            blurDataURL='data:...'
            placeholder='blur'
            fill
            sizes='(max-width: 768px) 100vw'
            style={{ objectFit: 'cover' }}
            className='mb-0 mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0'
          />
        </div>
        <div className='w-full sm:ml-3  sm:grid sm:w-1/2 sm:grid-flow-row sm:grid-cols-2 sm:grid-rows-2 sm:gap-3 sm:max-md:mx-0 sm:max-md:my-3 sm:max-md:w-full md:w-1/2 '>
          {/* Grilla de imágenes en la mitad derecha */}
          <div className='relative'>
            <Image
              src={imagesGallery[1].url}
              alt='gallery'
              loading='eager'
              blurDataURL='data:...'
              placeholder='blur'
              fill
              sizes='(max-width: 768px) 100vw'
              style={{ objectFit: 'cover' }}
              className='mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0'
            />
          </div>
          <div className='relative'>
            <Image
              src={imagesGallery[2].url}
              alt='gallery'
              loading='eager'
              blurDataURL='data:...'
              placeholder='blur'
              fill
              sizes='(max-width: 768px) 100vw'
              style={{ objectFit: 'cover' }}
              className='mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0'
            />
          </div>
          <div className='relative'>
            <Image
              src={imagesGallery[3].url}
              alt='gallery'
              loading='eager'
              blurDataURL='data:...'
              placeholder='blur'
              fill
              sizes='(max-width: 768px) 100vw'
              style={{ objectFit: 'cover' }}
              className='mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0'
            />
          </div>
          <div className='relative'>
            <img
              alt='gallery'
              className='mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0'
              src={imagesGallery[4].url}
              fill='true'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallGallery
