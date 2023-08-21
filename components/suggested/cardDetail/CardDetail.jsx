import Image from 'next/image'
import Link from 'next/link'
import { BsStarFill } from 'react-icons/bs'

export const CardDetail = ({
  imageUrl,
  id,
  name,
  description,
  pricePerDay,
  category
}) => {
  return (
    <Link
      className='group relative flex max-w-[450px] flex-col overflow-hidden rounded-lg border shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02] sm:max-w-full'
      href={`/detail/${id}`}
    >
      <div className='relative h-52 w-full overflow-hidden lg:h-60'>
        <Image
          src={imageUrl}
          alt='Picture of the author'
          loading='eager'
          blurDataURL='data:...'
          placeholder='blur'
          fill
          sizes='(max-width: 768px) 100vw'
          style={{ objectFit: 'cover' }}
          className='rounded-t-lg transition duration-150 ease-in-out group-hover:brightness-105'
        />
      </div>
      <div className='transition duration-300 ease-in-out group-hover:bg-white'>
        <div className='flex flex-col px-5 py-6 text-xs sm:px-7'>
          <div className='flex justify-between'>
            <h5 className='font-semibold text-sky-500'>{category}</h5>
            <div className='flex'>
              <BsStarFill className='mr-2 inline-block h-[14px] w-[14px] text-sky-500' />
              <span className='font-medium text-gray-500'>4.6/5</span>
            </div>
          </div>
          <h4 className='my-1 truncate text-lg font-bold text-sky-900'>
            {name}
          </h4>
          <div className='h-[2.5em] text-gray-500'>
            <p className='line-clamp-2 text-sm leading-[1.5em]'>
              {description}
            </p>
          </div>
        </div>
        <div className=' flex items-center justify-between border-t px-7 py-4'>
          <h3 className='mr-2 text-lg font-extrabold leading-none text-sky-500'>
            <span className='text-[0.65rem] uppercase text-gray-500'>
              Por noche
            </span>{' '}
            ${pricePerDay}
          </h3>
          <button
            type='button'
            className='w-full max-w-[136px] rounded-md border-sky-500 bg-sky-500 px-4 py-2 font-semibold text-white transition ease-in-out hover:bg-sky-900'
          >
            Alquilar
          </button>
        </div>
      </div>
    </Link>
  )
}
