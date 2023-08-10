'use client'

import Image from 'next/image'

const FullGalery = ({ imagesGallery }) => {
  return (
    <>
      <div className='flex w-full flex-col gap-3 p-3 pb-0 md:flex-row'>
        <div className='w-full sm:w-full md:w-1/4'>
          <img
            alt='gallery'
            className='mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0'
            src={imagesGallery[5].url}
            fill
          />
        </div>
        <div className='w-full sm:w-full md:w-1/4 '>
          <img
            alt='gallery'
            className='mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0'
            src={imagesGallery[6].url}
            fill
          />
        </div>
        <div className='w-full sm:w-full md:w-1/4 '>
          <img
            alt='gallery'
            className='mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0'
            src={imagesGallery[7].url}
            fill
          />
        </div>
        <div className='w-full sm:w-full md:w-1/4 '>
          <img
            alt='gallery'
            className='mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0'
            src={imagesGallery[8].url}
            fill
          />
        </div>
      </div>
    </>
  )
}

export default FullGalery
