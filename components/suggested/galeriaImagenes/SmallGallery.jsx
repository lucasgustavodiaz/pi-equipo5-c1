'use client'

import Image from 'next/image'

const SmallGallery = ({ imagesGallery }) => {
  return (
    <div>
      <div className='relative grid h-full w-full grid-cols-2 gap-3 pt-4 md:grid-cols-4'>
        <div className='relative col-span-2 row-span-2'>
          <Image
            src={imagesGallery[0].url}
            alt='gallery'
            loading='eager'
            blurDataURL='data:...'
            placeholder='blur'
            width={730}
            height={530}
            style={{ objectFit: 'cover' }}
            quality={100}
            className='h-full rounded-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[1].url}
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
            src={imagesGallery[2].url}
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
            src={imagesGallery[3].url}
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
            src={imagesGallery[4].url}
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
    </div>
  )
}

export default SmallGallery
