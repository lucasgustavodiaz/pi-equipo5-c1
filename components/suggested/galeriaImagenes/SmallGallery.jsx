'use client'

import { staticBlurDataUrl } from '@/components/util/staticBlurDataUrl'
import Image from 'next/image'

const SmallGallery = ({ imagesGallery, placeHolders }) => {
  return (
    <>
      <div className='relative grid h-full w-full grid-cols-2 gap-3 pt-4 md:grid-cols-4'>
        <div className='relative col-span-2 row-span-2 aspect-[4/2.8]'>
          <Image
            src={imagesGallery[0].url}
            alt='gallery'
            loading='eager'
            fill
            blurDataURL={placeHolders[0] || staticBlurDataUrl()}
            placeholder='blur'
            style={{ objectFit: 'cover' }}
            quality={100}
            className='h-full rounded-lg rounded-t-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[1].url}
            alt='gallery'
            loading='eager'
            fill
            blurDataURL={placeHolders[1] || staticBlurDataUrl()}
            placeholder='blur'
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[2].url}
            alt='gallery'
            loading='eager'
            fill
            blurDataURL={placeHolders[2] || staticBlurDataUrl()}
            placeholder='blur'
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[3].url}
            alt='gallery'
            loading='eager'
            fill
            blurDataURL={placeHolders[3] || staticBlurDataUrl()}
            placeholder='blur'
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg '
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[4].url}
            alt='gallery'
            loading='eager'
            fill
            blurDataURL={placeHolders[4] || staticBlurDataUrl()}
            placeholder='blur'
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
      </div>
    </>
  )
}

export default SmallGallery
