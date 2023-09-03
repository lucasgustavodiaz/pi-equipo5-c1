import FormSearch from '@/components/form/FormSearch'
import HeroSearch from '@/components/screens/search/HeroSearch'
import { AiOutlineSortAscending } from 'react-icons/ai'
import React from 'react'
import { CardDetailSearch } from '@/components/screens/search/CardDetailSearch'
import Filters from '@/components/screens/search/Filters'
import { dynamicBlurDataUrl } from '@/components/util/dynamicBlurDataUrl'

async function getHeader(params) {
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL

  const response = await fetch(
    `${hostUrl}/api/productByCategoryName/?categoryName=${params.id}`,
    {
      cache: 'no-store'
    }
  )
  const data = await response.json()
  return data
}

export default async function SearchID({ params }) {
  const results = await getHeader(params)
  const placeHolders = await Promise.all(
    results.map(product => dynamicBlurDataUrl(`${product.imageUrl}1.png`))
  )

  return (
    <>
      <HeroSearch />
      <FormSearch />
      <div className='bg-[#f2f5fa]'>
        <div className='container pb-20 pt-[32rem] sm:pt-[26rem] lg:pt-32'>
          {/* Container */}
          <div className='flex flex-col gap-8 pt-6 lg:flex-row lg:items-start'>
            {/* Detalles */}
            <div className='1 w-full pt-2'>
              <div className='flex flex-wrap  justify-between text-gray-600'>
                <h1 className='flex flex-wrap items-center text-lg'>
                  <div className='pr-2 font-bold'>{results.length} </div>
                  <div>Resultados</div>
                </h1>
                <div className='flex items-center'>
                  <div className='hidden text-sm tracking-tight sm:inline-block'>
                    Ordenar por
                  </div>
                  <AiOutlineSortAscending className='mx-2 text-2xl' />
                  <select
                    name=''
                    id=''
                    className='w-32 rounded-md border p-2 outline-none'
                  >
                    <option value=''>Nombre</option>
                    <option value=''>Precio</option>
                    <option value=''>Rating</option>
                  </select>
                </div>
              </div>
              <div className='grid grid-cols-1 justify-items-center gap-x-6 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-1'>
                {results &&
                  results.map(
                    (
                      {
                        imageUrl,
                        id,
                        name,
                        description,
                        pricePerDay,
                        category
                      },
                      index
                    ) =>
                      imageUrl !== null ? (
                        <CardDetailSearch
                          key={id}
                          imageUrl={imageUrl + '1.png'}
                          id={id}
                          name={name}
                          description={description}
                          pricePerDay={pricePerDay}
                          category={category}
                          placeHolder={placeHolders[index]}
                        />
                      ) : null
                  )}
              </div>
            </div>
            {/* Filtros */}
            <div className='w-full lg:max-w-[292.14px] xl:max-w-[426.89px] 2xl:max-w-[438px]'>
              <Filters />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
