'use client'

import { useState } from 'react'

export function FormFeature(props) {
  const { formEditData } = props
  const [feature, setFeature] = useState(formEditData)
  const [name, setName] = useState(feature == undefined ? '' : feature.name)
  const [image, setImage] = useState(feature == undefined ? '' : feature.image == null ? '' : feature.image)

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }

  function handleChangeImage(e) {
    setImage(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
    const url =
      feature == undefined
        ? `${hostUrl}/api/feature/create`
        : `${hostUrl}/api/feature/update/${feature.id}`

    const msg =
      feature == undefined
        ? `Seguro que desea crear un registro para la caracteristica: ${name}`
        : `Seguro que desea modificar el registro para la caracteristica: ${name}`

    const opcion = confirm(msg)

    const featureSubmit = {
      name: name,
      image: image
    }
    console.log(JSON.stringify(featureSubmit))

    if (opcion) {
      try {
        const response = await fetch(url, {
          method: feature == undefined ? 'POST' : 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(featureSubmit)
        })

        if (!response.ok) {
          throw new Error(
            'Error al cargar los datos en el registro. Response: ' +
              response.status
          )
        } else {
          window.location.reload()
        }

        const data = await response.json()
        console.log('Respuesta del servidor:', data)
      } catch (error) {
        console.error('Error al realizar la solicitud POST:', error)
      }
    }
  }

  function handleReset(e) {
    e.preventDefault()
    setName(feature == undefined ? '' : feature.name)
    setImage(feature == undefined ? '' : feature.image)
  }

  return (
    <form
      className='relative rounded-lg bg-white shadow dark:bg-gray-700'
      onSubmit={handleSubmit}
    >
      <div className='space-y-6 p-6'>
        <div className='grid grid-cols-6 gap-6'>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='name'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Nombre de caracteristica
            </label>
            <input
              type='text'
              value={name}
              onChange={handleChangeName}
              placeholder='Ingrese nombre de la caracteristica'
              id='name'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              required
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='image'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Imagen de la caracteristica
            </label>
            <input
              type='text'
              value={image}
              onChange={handleChangeImage}
              placeholder='Ingrese la imagen de la caracteristica'
              id='image'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            />
          </div>
          <div className='col-span-6 flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600'>
            <div className='mx-auto'>
              <button
                type='reset'
                className='mr-5 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                onClick={handleReset}
              >
                Reiniciar
              </button>
              <button
                type='submit'
                className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
