import Image from 'next/image'
import Galeria from '@/components/galeriaImagenes/Galeria'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

async function getItem(id) {
  const response = await fetch(`http://localhost:8081/api/${id}`, {
    cache: 'no-store'
    // next: { revalidate: 10 },
  })
  const data = await response.json()
  return data
}

async function getGallery(id) {
  const response = await fetch(`http://localhost:8081/api/urlImage/${id}`, {
    cache: 'no-store'
    // next: { revalidate: 10 },
  })
  const data = await response.json()
  return data
}

export default async function Detalle({ params }) {
  const index = parseInt(params.id)
  const results = await getItem(index)
  console.log('RESULTS', results)
  const imagesGallery = await getGallery(index)

  return (
    <div className='bg-[#f2f5fa] p-4 sm:p-10'>
      <div
        className='container rounded-lg bg-white py-10'
        href={`/detail/${index}`}
      >
        <div className='flex items-center justify-between border-b pb-4'>
          <h1 className='text-4xl font-bold text-blue-950 drop-shadow-md'>
            {results.name}
          </h1>
          <Link
            href='/'
            className='w-14 rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white transition ease-in-out hover:bg-sky-900'
          >
            <BsArrowLeft className='h-6 w-6' />
          </Link>
        </div>
        <div>
          <p className='mt-5 text-base text-gray-500'>{results.description}</p>
          <p className='mt-2 text-xl font-extrabold text-sky-500'> u$ 20.000</p>
        </div>
        <Galeria imagesGallery={imagesGallery} />
        <div className='mt-4 sm:mt-10'>
          <button
            type='button'
            className='w-full rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white transition ease-in-out hover:bg-sky-900'
          >
            RESERVAR AHORA!
          </button>
        </div>
      </div>
    </div>
  )
}

// return (
//   <div>
//     <img src={urls.regular} />
//     <h4>{id}</h4>
//     <p style={{ color: 'red' }}>{description}</p>
//   </div>
// );
