import FormSearch from '@/components/form/FormSearch'
import HeroSearch from '@/components/screens/search/HeroSearch'
import { AiOutlineSortAscending } from 'react-icons/ai'
import React from 'react'
import { CardDetailSearch } from '@/components/screens/search/CardDetailSearch'
import PriceRangeSlider from '@/components/util/PriceRangeSlider'

async function getHeader(params) {
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL

  const response = await fetch(
    `${hostUrl}/api/yachtByCategoryName/%7BcategoryName%7D?categoryName=${params.id}`,
    {
      cache: 'no-store'
    }
  )
  const data = await response.json()
  return data
}

export default async function SearchID({ params }) {
  const results = await getHeader(params)

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
              <div className='flex flex-col gap-10 pt-10'>
                {results &&
                  results.map(
                    ({
                      imageUrl,
                      id,
                      name,
                      description,
                      pricePerDay,
                      category
                    }) =>
                      imageUrl !== null ? (
                        <CardDetailSearch
                          key={id}
                          imageUrl={imageUrl + '1.png'}
                          id={id}
                          name={name}
                          description={description}
                          pricePerDay={pricePerDay}
                          category={category}
                        />
                      ) : null
                  )}
              </div>
            </div>
            {/* Filtros */}
            <div className='w-full lg:max-w-[300px] xl:max-w-[438px]'>
              {/* Tipo de bote */}
              <div className=' rounded-lg border border-gray-100 bg-white shadow-lg shadow-gray-200'>
                <div className='mb-8 flex items-center border-b px-12 py-6'>
                  <i className='floaty-icon-helm text-4xl text-sky-500'></i>
                  <span className='pl-2 text-xl font-bold text-sky-950'>
                    Tipo de Bote
                  </span>
                  <span className='text-lg font-bold tracking-tight text-sky-500'></span>
                </div>
                <div className='px-14 pb-10'>
                  <div className='flex flex-col gap-4 text-lg font-medium text-gray-500'>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='velero'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='Velero'
                        className='transition hover:text-sky-500'
                      >
                        Velero
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='motor'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='motor'
                        className='transition hover:text-sky-500'
                      >
                        A motor
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='catamaran'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='catamaran'
                        className='transition hover:text-sky-500'
                      >
                        Catamarán
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='yate'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='yate'
                        className='transition hover:text-sky-500'
                      >
                        Yate
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='sky'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='sky'
                        className='transition hover:text-sky-500'
                      >
                        Jet Ski
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rango de precio */}
              <div className='mt-10 rounded-lg border border-gray-100 bg-white shadow-lg shadow-gray-200'>
                <div className='mb-8 flex items-center border-b px-12 py-6'>
                  <i className='floaty-icon-helm text-4xl text-sky-500'></i>
                  <span className='pl-2 text-xl font-bold text-sky-950'>
                    Rango de Precios
                  </span>
                  <span className='text-lg font-bold tracking-tight text-sky-500'></span>
                </div>
                <div className='px-14 pb-10'>
                  <div className='flex flex-col gap-4 text-lg font-medium text-gray-500'>
                    <PriceRangeSlider />
                  </div>
                </div>
              </div>
              {/* Características */}
              <div className='mt-10 rounded-lg border border-gray-100 bg-white shadow-lg shadow-gray-200'>
                <div className='mb-8 flex items-center border-b px-12 py-6'>
                  <i className='floaty-icon-helm text-4xl text-sky-500'></i>
                  <span className='pl-2 text-xl font-bold text-sky-950'>
                    Características
                  </span>
                  <span className='text-lg font-bold tracking-tight text-sky-500'></span>
                </div>
                <div className='px-14 pb-10'>
                  <div className='flex flex-col gap-4 text-lg font-medium text-gray-500'>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='acondicionado'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='acondicionado'
                        className='transition hover:text-sky-500'
                      >
                        Aire acondicionado
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='parrilla'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='parrilla'
                        className='transition hover:text-sky-500'
                      >
                        Parrilla
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='television'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='television'
                        className='transition hover:text-sky-500'
                      >
                        Televisión
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='cubiertos'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='cubierto'
                        className='transition hover:text-sky-500'
                      >
                        Cubiertos
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='toallas'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='toallas'
                        className='transition hover:text-sky-500'
                      >
                        Toallas
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='audio'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='audio'
                        className='transition hover:text-sky-500'
                      >
                        Sistema de audio
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='cafetera'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='cafetera'
                        className='transition hover:text-sky-500'
                      >
                        Cafetera
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='heladera'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='heladera'
                        className='transition hover:text-sky-500'
                      >
                        Heladera
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='ducha'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='ducha'
                        className='transition hover:text-sky-500'
                      >
                        Ducha exterior
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='generador'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='generador'
                        className='transition hover:text-sky-500'
                      >
                        Generador
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='piloto'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='piloto'
                        className='transition hover:text-sky-500'
                      >
                        Piloto automático
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='horno'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='horno'
                        className='transition hover:text-sky-500'
                      >
                        Horno
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='calefaccion'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='calefaccion'
                        className='transition hover:text-sky-500'
                      >
                        Calefacción
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='radar'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='radar'
                        className='transition hover:text-sky-500'
                      >
                        Radar
                      </label>
                    </div>
                    <div className='flex items-center '>
                      <input
                        type='checkbox'
                        name=''
                        id='altavoces'
                        className='mr-2 h-5 w-5 appearance-none rounded-sm border border-gray-300 checked:border-transparent checked:bg-sky-500 checked:text-white focus:outline-none'
                      />
                      <label
                        htmlFor='altavoces'
                        className='transition hover:text-sky-500'
                      >
                        Altavoces interiores
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
