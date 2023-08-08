'use client';
import { useState } from 'react';
import SmallGallery from './SmallGallery';
import Image from 'next/image';

import FullGalery from './FullGalery';

const Galeria = ({ imagesGallery }) => {
  const [button, setButton] = useState(true);

  const handleShowMore = () => {
    setButton(!button);
  };

  return (
    <>
      <SmallGallery imagesGallery={imagesGallery} />
      {!button && <FullGalery imagesGallery={imagesGallery} />}
      <div className="m-5 flex  justify-center sm:flex sm:justify-end">
        <button
          className="cursor-pointer rounded bg-blue-500 px-4 py-2  font-bold text-white hover:bg-blue-600"
          onClick={handleShowMore}
        >
          {button ? 'Ver más' : 'Ver menos'}
        </button>
      </div>
    </>
  );
};

export default Galeria;
