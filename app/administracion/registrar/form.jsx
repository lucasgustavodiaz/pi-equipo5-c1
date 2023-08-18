'use client'

import { useEffect, useState } from 'react'

export function Form(props) {
  const {id} = props
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [sku, setSku] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [pricePerDay, setPricePerDay] = useState('')
  const [pricePerWeek, setPricePerWeek] = useState('')
  const [pricePerHour, setPricePerHour] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState([]);
  const [available, setAvailable] = useState(true)
  
  const urlGetYacht = `http://localhost:8081/api/update/${id}`
    async function fetchData() {
      try {
        const response = await fetch(urlGetYacht)
        if (!response.ok) {
          throw new Error(
            'Error al intentar cargar los datos del registros: . Response: ' +
              response.status
          )
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Error cargando los registros: ', error)
      }
    }

  if(id != null){
    fetchData()
    setName(data.name)
    setSku(data.sku)
  }

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeSku(e) {
    setSku(e.target.value)
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }

  function handleChangeImage(e) {
    setImage(e.target.value)
  }

  function handleChangePricePerDay(e) {
    setPricePerDay(e.target.value.trim())
  }

  function handleChangePricePerWeek(e) {
    setPricePerWeek(e.target.value.trim())
  }

  function handleChangePricePerHour(e) {
    setPricePerHour(e.target.value.trim())
  }

  function handleChangeCategory(e) {
    setCategoryId(e.target.value.trim())
  }

  function handleChangeAvailable() {
    setAvailable(!available)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const yacht = {
      name: name,
      sku: sku,
      description: description,
      imageUrl: image,
      pricePerDay: pricePerDay,
      pricePerWeek: pricePerWeek,
      pricePerHour: pricePerHour,
      categoryId: categoryId,
      available: available
    }
    console.log(JSON.stringify(yacht))
    const url = id == null ? `http://localhost:8081/api/create`:`http://localhost:8081/api/update/${id}`
    const msg = id == null ? `Seguro que desea crear un registro para el yate: ${name} con el sku: ${sku}`:`Seguro que desea modificar el registro para el yate: ${name} con el sku: ${sku}` 
    
    const opcion = confirm(
      msg
    )
    if (opcion) {
      try {
        const response = await fetch(url, {
          method: id==null ? 'POST' : 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(yacht)
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
    setName('')
    setSku('')
    setDescription('')
    setImage('')
    setPricePerDay('')
    setPricePerWeek('')
    setPricePerHour('')
    setCategoryId(categoryId)
    setAvailable(true)
  }

  async function fetchCategories() {
    const urlGetCategories = 'http://localhost:8081/api/category/all' 
    try {
      const response = await fetch(urlGetCategories)
      if (!response.ok) {
        throw new Error(
          'Error al intentar cargar todas las categorias: . Response: ' +
            response.status
        )
      }
      const jsonData = await response.json()
      setCategories(jsonData)
    } catch (error) {
      console.error('Error cargando las categorias: ', error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

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
              Nombre del yate
            </label>
            <input
              type='text'
              value={name}
              onChange={handleChangeName}
              placeholder='Ingrese nombre del yate'
              id='name'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              required
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='sku'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              SKU del yate
            </label>
            <input
              type='text'
              value={sku}
              onChange={handleChangeSku}
              placeholder='Ingrese sku del yate'
              id='sku'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              required
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='description'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Descripcion del yate
            </label>
            <textarea
              type='text'
              value={description}
              onChange={handleChangeDescription}
              placeholder='Ingrese una breve descripcion del yate'
              id='description'
              rows={1}
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='image'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Imagen del yate
            </label>
            <input
              type='text'
              value={image}
              onChange={handleChangeImage}
              placeholder='Ingrese la imagen del yate'
              id='image'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='pricePerDay'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Precio por dia
            </label>
            <input
              type='text'
              value={pricePerDay}
              onChange={handleChangePricePerDay}
              placeholder='Ingrese precio de alquiler por dia'
              id='pricePerDay'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='pricePerWeek'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Precio por semana
            </label>
            <input
              type='text'
              value={pricePerWeek}
              onChange={handleChangePricePerWeek}
              placeholder='Ingrese precio de alquiler por semana'
              id='pricePerWeek'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='pricePerHour'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Precio por hora
            </label>
            <input
              type='text'
              value={pricePerHour}
              onChange={handleChangePricePerHour}
              placeholder='Ingrese precio de alquiler por hora'
              id='pricePerHour'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='category'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Categoria
            </label>
            <select
              onChange={handleChangeCategory}
              id='category'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            >
              <optgroup label='Categoria'>
                {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
              </optgroup>
            </select>
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='available'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Disponibilidad
            </label>
            <label className='relative inline-flex cursor-pointer items-center'>
              <input
                type='checkbox'
                value={available}
                onChange={handleChangeAvailable}
                id='available'
                checked={available}
                className='peer sr-only'
              />
              <div className="h-6 w-11 cursor-default rounded-full border bg-gray-500 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:border-gray-600"></div>
              <span className='ml-3 cursor-default text-sm font-medium text-gray-900 dark:text-gray-300'>
                {available ? 'Disponible' : 'No disponible'}
              </span>
            </label>
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
