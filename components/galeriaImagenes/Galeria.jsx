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
    <>
      <SmallGallery imagesGallery={imagesGallery} />
      {!button && <FullGalery imagesGallery={imagesGallery} />}
      <div className='flex justify-center pt-4 sm:flex sm:justify-end'>
        <button
          className='cursor-pointer rounded bg-sky-500 px-4 py-2 font-bold text-white transition ease-in-out hover:bg-sky-900'
          onClick={handleShowMore}
        >
          {button ? 'Ver más' : 'Ver menos'}
        </button>
      </div>
    </>
  )
}

export default Galeria
