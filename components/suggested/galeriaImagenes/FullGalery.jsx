'use client'

import { staticBlurDataUrl } from '@/components/util/staticBlurDataUrl'
import Image from 'next/image'

const FullGalery = ({ imagesGallery, placeHolders }) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-3 pt-3 md:grid-cols-4'>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[5].url}
            alt='gallery'
            loading='eager'
            fill
            blurDataURL={placeHolders[5] || staticBlurDataUrl()}
            placeholder='blur'
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[6].url}
            alt='gallery'
            loading='eager'
            fill
            blurDataURL={placeHolders[6] || staticBlurDataUrl()}
            placeholder='blur'
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[7].url}
            alt='gallery'
            loading='eager'
            fill
            blurDataURL={placeHolders[7] || staticBlurDataUrl()}
            placeholder='blur'
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
        <div className='relative aspect-[4/2.8]'>
          <Image
            src={imagesGallery[8].url}
            alt='gallery'
            loading='eager'
            fill
            blurDataURL={placeHolders[8] || staticBlurDataUrl()}
            placeholder='blur'
            style={{ objectFit: 'cover' }}
            className='h-full rounded-lg'
          />
        </div>
      </div>
    </>
  )
}

export default FullGalery
