import CurrencyFormatter from '@/components/util/CurrencyFormatter'
import Image from 'next/image'
import Link from 'next/link'
import { BsStarFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'

export const CardDetailSearch = ({
  imageUrl,
  id,
  name,
  description,
  pricePerDay,
  category
}) => {
  return (
    <>
      <Link
        className='group relative flex flex-col overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 ease-in-out hover:scale-[1.01] lg:flex-row'
        href={`/detail/${id}`}
      >
        <div className='h-53 relative h-[250px] overflow-hidden lg:h-[215px] lg:min-w-[250px] xl:h-[239px] xl:min-w-[371px]'>
          <Image
            src={imageUrl}
            alt='Picture of the author'
            loading='eager'
            blurDataURL='data:...'
            placeholder='blur'
            fill
            sizes='(max-width: 768px) 100vw'
            style={{ objectFit: 'cover' }}
            className='transition duration-150 ease-in-out group-hover:brightness-105'
          />
        </div>
        <div className='flex w-full flex-col justify-center px-[15px] py-[30px] transition duration-300 ease-in-out group-hover:bg-white sm:px-[30px] lg:px-[30px] lg:py-0'>
          <div className='flex justify-between pb-[5px]'>
            <div className='flex items-center'>
              <HiLocationMarker className='mr-1 h-4 w-4 text-gray-400' />
              <p className='mr-3 line-clamp-1 w-full text-xs text-gray-500'>
                1 WHARF RD, BIRCHGROVE NSW 2041, AUSTRALIA
              </p>
            </div>
            <div className='flex items-center'>
              <BsStarFill className='mr-2 inline-block h-[14px] w-[14px] text-sky-500' />
              <span className='font-medium text-gray-500'>4.6/5</span>
            </div>
          </div>
          <h3 className='truncate pb-[5px] text-xl font-bold text-sky-900'>
            {name}
          </h3>
          <span className='text-sm font-medium text-gray-500 sm:pb-6'>
            8 Guests 9 Beds 2 Baths 5 Cabins
          </span>
          <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center lg:pt-2 xl:pt-4'>
            <h3 className='mr-2 py-4 text-xl font-extrabold leading-none text-sky-500'>
              <span className='text-[0.75rem] font-semibold uppercase text-gray-500'>
                Por noche
              </span>{' '}
              <CurrencyFormatter value={pricePerDay} />
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
    </>
  )
}
