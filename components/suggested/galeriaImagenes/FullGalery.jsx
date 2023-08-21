'use client'

import Image from 'next/image'

const FullGalery = ({ imagesGallery }) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-3 pt-3 md:grid-cols-4'>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[5].url}
            alt='gallery'
            loading='eager'
            blurDataURL='data:...'
            placeholder='blur'
            width={730}
            height={530}
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[6].url}
            alt='gallery'
            loading='eager'
            blurDataURL='data:...'
            placeholder='blur'
            width={730}
            height={530}
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[7].url}
            alt='gallery'
            loading='eager'
            blurDataURL='data:...'
            placeholder='blur'
            width={730}
            height={530}
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[8].url}
            alt='gallery'
            loading='eager'
            blurDataURL='data:...'
            placeholder='blur'
            width={730}
            height={530}
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
      </div>
    </>
  )
}

export default FullGalery
