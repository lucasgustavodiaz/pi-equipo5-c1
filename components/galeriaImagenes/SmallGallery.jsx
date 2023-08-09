'use client';

import Image from 'next/image';

const SmallGallery = ({ imagesGallery }) => {
  return (
    <div className="m-0 w-full p-0">
      <div className="flex w-full flex-col p-5 pb-0 md:flex-row">
        <div className="w-full sm:w-full md:w-1/2 ">
          {/* Imagen principal en la mitad izquierda */}
          <img
            alt="gallery"
            className="mb-0 mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0"
            src={imagesGallery[0]}
            fill
          />
        </div>
        <div className="w-full sm:ml-3  sm:grid sm:w-1/2 sm:grid-flow-row sm:grid-cols-2 sm:grid-rows-2 sm:gap-3 sm:max-md:mx-0 sm:max-md:my-3 sm:max-md:w-full md:w-1/2 ">
          {/* Grilla de imágenes en la mitad derecha */}
          <div className="">
            <img
              alt="gallery"
              className="mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0"
              src={imagesGallery[1]}
              fill
            />
          </div>
          <div className="">
            <img
              alt="gallery"
              className="mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0"
              src={imagesGallery[2]}
              fill
            />
          </div>
          <div className="">
            <img
              alt="gallery"
              className="mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0"
              src={imagesGallery[4]}
              fill
            />
          </div>
          <div className="">
            <img
              alt="gallery"
              className="mt-3 h-auto w-full rounded object-cover shadow-md sm:mt-0"
              src={imagesGallery[4]}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallGallery;
