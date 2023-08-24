'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const PaginationControls = ({ hasNextPage, hasPrevPage, totalPage }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '9'

  return (
    <div className='bg-[#f2f5fa]'>
      <div className=' container mx-auto flex content-baseline items-baseline justify-center gap-6 rounded-lg p-8 drop-shadow-md lg:flex-row lg:gap-2 lg:py-10 xl:gap-6'>
        <button
          className={`rounded-full border-sky-500 p-3 font-semibold text-white transition ease-in-out ${
            !hasPrevPage ? 'cursor-not-allowed bg-gray-400' : 'bg-sky-500'
          }`}
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`, {
              scroll: false
            })
          }}
        >
          <AiOutlineLeft />
        </button>
        <div>
          {page} / {totalPage}
        </div>
        <button
          className={`rounded-full border-sky-500 p-3 font-semibold text-white transition ease-in-out ${
            !hasNextPage ? 'cursor-not-allowed bg-gray-400' : 'bg-sky-500'
          }`}
          disabled={!hasNextPage}
          onClick={() => {
            router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`, {
              scroll: false
            })
          }}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  )
}

export default PaginationControls
