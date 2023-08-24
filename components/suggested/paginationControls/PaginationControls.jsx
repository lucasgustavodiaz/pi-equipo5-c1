'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const PaginationControls = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '9'

  return (
    <div className=' container mx-auto flex content-baseline items-baseline justify-between gap-6 rounded-lg p-8 drop-shadow-md lg:flex-row lg:gap-2 lg:py-8 xl:gap-6'>
      <button
        className='w-full max-w-[136px] rounded-md border-sky-500 bg-sky-500 px-4 py-2 font-semibold text-white transition ease-in-out hover:bg-sky-900'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`, {
            scroll: false
          })
        }}
      >
        prev page
      </button>

      <div>
        <p className='text-white '>
          {page} / {Math.ceil(9 / Number(per_page))}
        </p>
      </div>

      <button
        className='w-full max-w-[136px] rounded-md border-sky-500 bg-sky-500 px-4 py-2 font-semibold text-white transition ease-in-out hover:bg-sky-900'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`, {
            scroll: false
          })
        }}
      >
        next page
      </button>
    </div>
  )
}

export default PaginationControls
