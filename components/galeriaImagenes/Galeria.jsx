'use client'
import { useState } from 'react'
import SmallGallery from './SmallGallery'

import FullGalery from './FullGalery'

const Galeria = ({ imagesGallery }) => {
  const [button, setButton] = useState(true)

  const handleShowMore = () => {
    setButton(!button)
  }

  return (
    <div className='relative'>
      <SmallGallery imagesGallery={imagesGallery} />
      {!button && <FullGalery imagesGallery={imagesGallery} />}

      <button
        className='absolute bottom-3 right-5 rounded-lg bg-white px-4 py-2 text-sky-900 transition ease-in-out hover:bg-sky-500 hover:text-white'
        onClick={handleShowMore}
      >
        {button ? (
          <div className='flex items-center'>
            <i className='floaty-icon-image-plus-1 pr-2 text-xl'></i>
            <h2 className='text-sm font-semibold'>Ver más</h2>
          </div>
        ) : (
          <>
            <i className='floaty-icon-caret-up'></i>
          </>
        )}
      </button>
      {/* <div className='flex justify-center pt-4 sm:flex sm:justify-end'>
        <button
          className='cursor-pointer rounded bg-sky-500 px-4 py-2 font-bold text-white transition ease-in-out hover:bg-sky-900'
          onClick={handleShowMore}
        >
          {button ? 'Ver más' : 'Ver menos'}
        </button>
      </div> */}
    </div>
  )
}

export default Galeria
