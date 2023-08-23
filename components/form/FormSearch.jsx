'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  BiCurrentLocation,
  BiAnchor,
  BiCalendar,
  BiSearch
} from 'react-icons/bi'

export default function FormSearch() {
  // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState('')

  // Función para manejar el cambio de opción seleccionada
  const handleSelectChange = event => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className='container'>
      <div className='relative'>
        <div className='absolute -top-20 left-0 z-10 flex w-full flex-col items-center gap-4 rounded-lg bg-white px-5 py-5 drop-shadow-md lg:flex-row lg:gap-2 lg:px-10 lg:py-9 xl:gap-6 xl:px-16'>
          <div className='mb-6 w-full lg:mb-0'>
            <div className='mb-2 flex items-center'>
              <BiCurrentLocation className='mr-3 h-6 w-6 text-sky-500' />
              <h2 className='text-sm font-medium uppercase dark:text-black'>
                Ubicación
              </h2>
            </div>
            <input
              type='text'
              className='w-full rounded-lg border-2 bg-white p-3'
              placeholder='Elija su lugar de inicio'
            />
          </div>
          <div className='flex w-full flex-col sm:flex-row sm:gap-4'>
            <div className='mb-6 flex-grow lg:mb-0'>
              <div className='mb-2 flex items-center'>
                <BiCalendar className='mr-3 h-6 w-6 text-sky-500' />
                <h2 className='text-sm font-medium uppercase dark:text-black'>
                  Fecha de inicio
                </h2>
              </div>
              <input
                type='date'
                className='w-full rounded-lg border-2 p-3 text-gray-400 dark:[color-scheme:light]'
              />
            </div>
            <div className='mb-6 flex-grow lg:mb-0'>
              <div className='mb-2 flex items-center'>
                <BiCalendar className='mr-3 h-6 w-6 text-sky-500' />
                <h2 className='text-sm font-medium uppercase dark:text-black'>
                  Fecha de fin
                </h2>
              </div>
              <input
                type='date'
                className='w-full rounded-lg border-2 p-3 text-gray-400 dark:[color-scheme:light]'
              />
            </div>
          </div>
          <div className='mb-6 w-full lg:mb-0'>
            <div className='mb-2 flex items-center'>
              <BiAnchor className='mr-3 h-6 w-6 text-sky-500' />
              <h2 className='text-sm font-medium uppercase dark:text-black'>
                Tipo de embarcación
              </h2>
            </div>
            <select
              name=''
              id=''
              onChange={handleSelectChange} // Manejar el cambio de opción seleccionada
              value={selectedOption} // Establecer el valor seleccionado en el estado
              className='w-full min-w-[210px] rounded-lg border-2 bg-white p-3 text-gray-400'
            >
              <option value='' hidden defaultValue>
                Elija el tipo de barco
              </option>
              <option value='/Velero'>Velero</option>
              <option value='/A motor'>A motor</option>
              <option value='/Catamaran'>Catamarán</option>
              <option value='/Yate'>Yate</option>
              <option value='/Jet Ski'>Jet Sky</option>
            </select>
          </div>
          <Link href={`/search/${selectedOption}`}>
            <button className='trasition h-12 w-full rounded border border-sky-500 bg-sky-500 px-4 py-2 font-semibold text-white transition ease-in-out hover:bg-sky-900 lg:mt-8 lg:min-w-[125px] lg:max-w-[176px]'>
              Buscar <BiSearch className='ml-2 inline-block h-6 w-6' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
