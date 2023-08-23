'use client'
import { useState, useEffect } from 'react'
import { Row } from './rowProduct'
import { Form } from './registrar/form'
import { FormCat } from './registrar/formCategory'
import { Modal } from './modal'
import { RowCategory } from './rowCategory'
import { RowFeature } from './rowFeature'
import { FormFeature } from './registrar/formFeature'

export default function Menu() {
  const [productPageOpen, setProductPageOpen] = useState(
    sessionStorage.getItem('product') === 'true' || sessionStorage.getItem('product') === null
  );
  const [categoryPageOpen, setCategoryPageOpen] = useState(
    sessionStorage.getItem('category') === 'true'
  );
  const [featurePageOpen, setFeaturePageOpen] = useState(
    sessionStorage.getItem('feature') === 'true'
  );
  
  return (
    <>
      <div className='flex min-h-screen items-center justify-center lg:hidden'>
        <div
          className='box-border flex items-center justify-center rounded-lg bg-red-300 p-4 text-lg text-red-800 dark:text-red-600'
          role='alert'
        >
          <p>
            <span className='font-medium'>Alerta!</span> El panel de
            administrador no esta disponible en dispositivos móviles
          </p>
        </div>
      </div>

      <div className='hidden lg:block'>
        <div className='flex flex-col items-center justify-center p-3'>
          <div className='inline-flex rounded-md shadow-sm'>
            <button
              onClick={() => {setCategoryPageOpen(false); setFeaturePageOpen(false); setProductPageOpen(true); sessionStorage.setItem('category', 'false'); sessionStorage.setItem('feature', 'false'); sessionStorage.setItem('product', 'true')}}
              className='rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'
            >
              Productos
            </button>
            <button onClick={() => {setProductPageOpen(false); setFeaturePageOpen(false); setCategoryPageOpen(true); sessionStorage.setItem('product', 'false'); sessionStorage.setItem('feature', 'false'); sessionStorage.setItem('category', 'true')}} className='border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'>
              Categorias
            </button>
            <button onClick={() => {setProductPageOpen(false); setCategoryPageOpen(false); setFeaturePageOpen(true); sessionStorage.setItem('product', 'false'); sessionStorage.setItem('category', 'false'); sessionStorage.setItem('feature', 'true')}} className='rounded-r-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500'>
              Caracteristicas
            </button>
          </div>
          {productPageOpen && <PageProduct />}
          {categoryPageOpen && <PageCategory />}
          {featurePageOpen && <PageFeature />}
        </div>
      </div>
    </>
  )
}

function PageProduct() {
  const [data, setData] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
  const urlGetYacht = `${hostUrl}/api/all`
  async function fetchData() {
    try {
      const response = await fetch(urlGetYacht)
      if (!response.ok) {
        throw new Error(
          'Error al intentar cargar todos los registros: . Response: ' +
            response.status
        )
      }
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.error('Error cargando los registros: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className='container'>
      <div className='hidden min-h-screen lg:block'>
        <div className='mt-5 flex items-center justify-between p-0'>
          <h1>Hola 👋, Administrador! Bienvenido al panel de productos</h1>
          <button
            className='rounded bg-blue-500 px-4 py-2 text-white'
            onClick={handleOpenModal}
          >
            Registrar Yate
          </button>
        </div>
        <div className='relative mx-auto mt-12 w-10/12 overflow-x-auto rounded-lg shadow-md'>
          <table className='mx-auto w-full text-left text-sm text-gray-500 dark:text-gray-400'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Imagen</span>
                </th>
                <th scope='col' className='px-6 py-3'>
                  ID
                </th>
                <th scope='col' className='px-6 py-3'>
                  Nombre
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Eliminar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(yacht => (
                <Row
                  key={yacht.id}
                  id={yacht.id}
                  name={yacht.name}
                  urlImage={yacht.imageUrl}
                  category={yacht.category}
                  features={yacht.feature}
                />
              ))}
            </tbody>
          </table>
        </div>

        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <Form />
        </Modal>
      </div>
    </div>
  )
}

function PageCategory() {
  const [data, setData] = useState([])
  const [modalCatOpen, setModalCatOpen] = useState(false)
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
  const urlGetCategory = `${hostUrl}/api/category/all`
  async function fetchData() {
    try {
      const response = await fetch(urlGetCategory)
      if (!response.ok) {
        throw new Error(
          'Error al intentar cargar todos los registros: . Response: ' +
            response.status
        )
      }
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.error('Error cargando los registros: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleOpenModalCat = () => {
    setModalCatOpen(true)
  }

  const handleCloseModalCat = () => {
    setModalCatOpen(false)
  }

  return (
    <div className='container'>
      <div className='hidden min-h-screen lg:block'>
        <div className='mt-5 flex items-center justify-between p-0'>
          <h1>Hola 👋, Administrador! Bienvenido al panel de categorías</h1>
          <button
            className='rounded bg-blue-500 px-4 py-2 text-white'
            onClick={handleOpenModalCat}
          >
            Registrar Categoría 
          </button>
        </div>
        <div className='relative mx-auto mt-12 w-10/12 overflow-x-auto rounded-lg shadow-md'>
          <table className='mx-auto w-full text-left text-sm text-gray-500 dark:text-gray-400'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Imagen</span>
                </th>
                <th scope='col' className='px-6 py-3'>
                  ID
                </th>
                <th scope='col' className='px-6 py-3'>
                  Nombre
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Eliminar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(category => (
                <RowCategory
                  key={category.id}
                  id={category.id}
                  name={category.name}
                />
              ))}
            </tbody>
          </table>
        </div>
        <Modal isOpen={modalCatOpen} onClose={handleCloseModalCat}>
          <FormCat />
        </Modal>
      </div>
    </div>
  )
}

function PageFeature() {
  const [data, setData] = useState([])
  const [modalFeatureOpen, setModalFeatureOpen] = useState(false)
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
  const urlGetFeature = `${hostUrl}/api/feature/all`
  async function fetchData() {
    try {
      const response = await fetch(urlGetFeature)
      if (!response.ok) {
        throw new Error(
          'Error al intentar cargar todos los registros: . Response: ' +
            response.status
        )
      }
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.error('Error cargando los registros: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleOpenModalFeature = () => {
    setModalFeatureOpen(true)
  }

  const handleCloseModalFeature = () => {
    setModalFeatureOpen(false)
  }

  return (
    <div className='container'>
      <div className='hidden min-h-screen lg:block'>
        <div className='mt-5 flex items-center justify-between p-0'>
          <h1>Hola 👋, Administrador! Bienvenido al panel de características</h1>
          <button
            className='rounded bg-blue-500 px-4 py-2 text-white'
            onClick={handleOpenModalFeature}
          >
            Registrar Características
          </button>
        </div>
        <div className='relative mx-auto mt-12 w-10/12 overflow-x-auto rounded-lg shadow-md'>
          <table className='mx-auto w-full text-left text-sm text-gray-500 dark:text-gray-400'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Imagen</span>
                </th>
                <th scope='col' className='px-6 py-3'>
                  ID
                </th>
                <th scope='col' className='px-6 py-3'>
                  Nombre
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Eliminar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(feature => (
                <RowFeature
                  key={feature.id}
                  id={feature.id}
                  name={feature.name}
                />
              ))}
            </tbody>
          </table>
        </div>
        <Modal isOpen={modalFeatureOpen} onClose={handleCloseModalFeature}>
          <FormFeature />
        </Modal>
      </div>
    </div>
  )
}