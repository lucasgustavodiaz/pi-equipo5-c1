'use client'
import { useState, useEffect } from 'react'
import { Row } from './rowProduct'
import { Form } from './registrar/form'
import { FormCat } from './registrar/formCategory'
import { Modal } from './modal'
import { RowCategory } from './rowCategory'
import { RowFeature } from './rowFeature'
import { FormFeature } from './registrar/formFeature'
import { RowUser } from './rowUser'

export default function Menu() {
  const [productPageOpen, setProductPageOpen] = useState(
    sessionStorage.getItem('product') === 'true' ||
      sessionStorage.getItem('product') === null
  )
  const [categoryPageOpen, setCategoryPageOpen] = useState(
    sessionStorage.getItem('category') === 'true'
  )
  const [featurePageOpen, setFeaturePageOpen] = useState(
    sessionStorage.getItem('feature') === 'true'
  )
  const [userPageOpen, setUserPageOpen] = useState(
    sessionStorage.getItem('user') === 'true'
  )

  return (
    <>
      <div>
        {/* Mostrar en pantallas de 1023 o menos */}
        <div className='container'>
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
        </div>

        {/* Mostrar en pantallas de 1024 en adelante*/}
        <div className='hidden lg:block'>
          <div className='flex min-h-screen'>
            {/* Sidebar */}
            <div
              className='left-0 flex flex-col border-none bg-sky-900 pt-5 text-white dark:bg-[#121212]'
              style={{ minWidth: '200px' }}
            >
              <div className='mb-4 flex h-14 items-center border-none px-5'>
                <img
                  className='mr-4 h-10 w-10 overflow-hidden rounded-md'
                  src='https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg'
                  alt='foto admin'
                />
                <span>Administrador</span>
              </div>
              <ul className='flex flex-col space-y-1 py-4'>
                <li className='px-5'>
                  <div className='h-8 text-sm font-light uppercase tracking-wide text-gray-400'>
                    Menu
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCategoryPageOpen(false)
                      setFeaturePageOpen(false)
                      setUserPageOpen(false)
                      setProductPageOpen(true)
                      sessionStorage.setItem('category', 'false')
                      sessionStorage.setItem('feature', 'false')
                      sessionStorage.setItem('user', 'false')
                      sessionStorage.setItem('product', 'true')
                    }}
                    className='text-white-600 hover:text-white-800 relative flex h-11 w-full flex-row items-center border-l-4 border-transparent pr-6 hover:border-sky-500 hover:bg-sky-800 focus:outline-none'
                  >
                    <span className='ml-3 inline-flex items-center justify-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 32 32'
                        fill='none'
                      >
                        <path
                          d='M25.3333 8H22.6667C22.6667 4.26666 19.7333 1.33333 16 1.33333C12.2667 1.33333 9.33333 4.26666 9.33333 8H6.66667C5.2 8 4 9.2 4 10.6667V26.6667C4 28.1333 5.2 29.3333 6.66667 29.3333H25.3333C26.8 29.3333 28 28.1333 28 26.6667V10.6667C28 9.2 26.8 8 25.3333 8ZM16 3.99999C18.2667 3.99999 20 5.73333 20 8H12C12 5.73333 13.7333 3.99999 16 3.99999ZM25.3333 26.6667H6.66667V10.6667H25.3333V26.6667ZM16 16C13.7333 16 12 14.2667 12 12H9.33333C9.33333 15.7333 12.2667 18.6667 16 18.6667C19.7333 18.6667 22.6667 15.7333 22.6667 12H20C20 14.2667 18.2667 16 16 16Z'
                          fill='#FFFFFF'
                        />
                      </svg>
                    </span>
                    <span className='ml-2 text-sm tracking-wide'>
                      Productos
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setProductPageOpen(false)
                      setFeaturePageOpen(false)
                      setUserPageOpen(false)
                      setCategoryPageOpen(true)
                      sessionStorage.setItem('product', 'false')
                      sessionStorage.setItem('feature', 'false')
                      sessionStorage.setItem('user', 'false')
                      sessionStorage.setItem('category', 'true')
                    }}
                    className='text-white-600 hover:text-white-800 relative flex h-11 w-full flex-row items-center border-l-4 border-transparent pr-6 hover:border-sky-500 hover:bg-sky-800 focus:outline-none'
                  >
                    <span className='ml-3 inline-flex items-center justify-center'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12.5 3C13.6935 3 14.8381 3.47411 15.682 4.31802C16.5259 5.16193 17 6.30653 17 7.5C17 8.69347 16.5259 9.83807 15.682 10.682C14.8381 11.5259 13.6935 12 12.5 12C11.3065 12 10.1619 11.5259 9.31802 10.682C8.47411 9.83807 8 8.69347 8 7.5C8 6.30653 8.47411 5.16193 9.31802 4.31802C10.1619 3.47411 11.3065 3 12.5 3ZM12.5 5.25C11.9033 5.25 11.331 5.48705 10.909 5.90901C10.4871 6.33097 10.25 6.90326 10.25 7.5C10.25 8.09674 10.4871 8.66903 10.909 9.09099C11.331 9.51295 11.9033 9.75 12.5 9.75C13.0967 9.75 13.669 9.51295 14.091 9.09099C14.5129 8.66903 14.75 8.09674 14.75 7.5C14.75 6.90326 14.5129 6.33097 14.091 5.90901C13.669 5.48705 13.0967 5.25 12.5 5.25ZM12.5 13.125C15.5038 13.125 21.5 14.6212 21.5 17.625V21H3.5V17.625C3.5 14.6212 9.49625 13.125 12.5 13.125ZM12.5 15.2625C9.15875 15.2625 5.6375 16.905 5.6375 17.625V18.8625H19.3625V17.625C19.3625 16.905 15.8412 15.2625 12.5 15.2625Z'
                          fill='#ffffff'
                        />
                      </svg>
                    </span>
                    <span className='ml-2 text-sm tracking-wide'>
                      Categorias
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setProductPageOpen(false)
                      setCategoryPageOpen(false)
                      setUserPageOpen(false)
                      setFeaturePageOpen(true)
                      sessionStorage.setItem('product', 'false')
                      sessionStorage.setItem('category', 'false')
                      sessionStorage.setItem('user', 'false')
                      sessionStorage.setItem('feature', 'true')
                    }}
                    className='text-white-600 hover:text-white-800 relative flex h-11 w-full flex-row items-center border-l-4 border-transparent pr-6 hover:border-sky-500 hover:bg-sky-800 focus:outline-none'
                  >
                    <span className='ml-3 inline-flex items-center justify-center'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12.5 3C13.6935 3 14.8381 3.47411 15.682 4.31802C16.5259 5.16193 17 6.30653 17 7.5C17 8.69347 16.5259 9.83807 15.682 10.682C14.8381 11.5259 13.6935 12 12.5 12C11.3065 12 10.1619 11.5259 9.31802 10.682C8.47411 9.83807 8 8.69347 8 7.5C8 6.30653 8.47411 5.16193 9.31802 4.31802C10.1619 3.47411 11.3065 3 12.5 3ZM12.5 5.25C11.9033 5.25 11.331 5.48705 10.909 5.90901C10.4871 6.33097 10.25 6.90326 10.25 7.5C10.25 8.09674 10.4871 8.66903 10.909 9.09099C11.331 9.51295 11.9033 9.75 12.5 9.75C13.0967 9.75 13.669 9.51295 14.091 9.09099C14.5129 8.66903 14.75 8.09674 14.75 7.5C14.75 6.90326 14.5129 6.33097 14.091 5.90901C13.669 5.48705 13.0967 5.25 12.5 5.25ZM12.5 13.125C15.5038 13.125 21.5 14.6212 21.5 17.625V21H3.5V17.625C3.5 14.6212 9.49625 13.125 12.5 13.125ZM12.5 15.2625C9.15875 15.2625 5.6375 16.905 5.6375 17.625V18.8625H19.3625V17.625C19.3625 16.905 15.8412 15.2625 12.5 15.2625Z'
                          fill='#ffffff'
                        />
                      </svg>
                    </span>
                    <span className='ml-2 text-sm tracking-wide'>
                      Caracteristicas
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setProductPageOpen(false)
                      setFeaturePageOpen(false)
                      setCategoryPageOpen(false)
                      setUserPageOpen(true)
                      sessionStorage.setItem('product', 'false')
                      sessionStorage.setItem('feature', 'false')
                      sessionStorage.setItem('category', 'false')
                      sessionStorage.setItem('user', 'true')
                    }}
                    className='text-white-600 hover:text-white-800 relative flex h-11 w-full flex-row items-center border-l-4 border-transparent pr-6 hover:border-sky-500 hover:bg-sky-800 focus:outline-none'
                  >
                    <span className='ml-3 inline-flex items-center justify-center'>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12.5 3C13.6935 3 14.8381 3.47411 15.682 4.31802C16.5259 5.16193 17 6.30653 17 7.5C17 8.69347 16.5259 9.83807 15.682 10.682C14.8381 11.5259 13.6935 12 12.5 12C11.3065 12 10.1619 11.5259 9.31802 10.682C8.47411 9.83807 8 8.69347 8 7.5C8 6.30653 8.47411 5.16193 9.31802 4.31802C10.1619 3.47411 11.3065 3 12.5 3ZM12.5 5.25C11.9033 5.25 11.331 5.48705 10.909 5.90901C10.4871 6.33097 10.25 6.90326 10.25 7.5C10.25 8.09674 10.4871 8.66903 10.909 9.09099C11.331 9.51295 11.9033 9.75 12.5 9.75C13.0967 9.75 13.669 9.51295 14.091 9.09099C14.5129 8.66903 14.75 8.09674 14.75 7.5C14.75 6.90326 14.5129 6.33097 14.091 5.90901C13.669 5.48705 13.0967 5.25 12.5 5.25ZM12.5 13.125C15.5038 13.125 21.5 14.6212 21.5 17.625V21H3.5V17.625C3.5 14.6212 9.49625 13.125 12.5 13.125ZM12.5 15.2625C9.15875 15.2625 5.6375 16.905 5.6375 17.625V18.8625H19.3625V17.625C19.3625 16.905 15.8412 15.2625 12.5 15.2625Z'
                          fill='#ffffff'
                        />
                      </svg>
                    </span>
                    <span className='ml-2 text-sm tracking-wide'>Usuarios</span>
                    <span className='ml-auto hidden rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium tracking-wide text-sky-500 md:block'>
                      New
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className='w-full'>
              {productPageOpen && <PageProduct />}
              {categoryPageOpen && <PageCategory />}
              {featurePageOpen && <PageFeature />}
              {userPageOpen && <PageUsers />}
            </div>
          </div>
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
        <div className='pt-7'>
          <button
            className='rounded bg-blue-500 px-4 py-2 text-white'
            onClick={handleOpenModal}
          >
            Registrar Yate
          </button>
        </div>
        <div className='relative mx-auto w-full overflow-x-auto rounded-lg shadow-md'>
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
    <div className='container min-h-screen w-full'>
      <div className='hidden min-h-screen lg:block'>
        <div className='pt-7'>
          <button
            className='rounded bg-blue-500 px-4 py-2 text-white'
            onClick={handleOpenModalCat}
          >
            Registrar Categoría
          </button>
        </div>
        <div className='relative mx-auto w-full overflow-x-auto rounded-lg shadow-md'>
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
    <div className='container min-h-screen w-full'>
      <div className='hidden lg:block'>
        <div className='pt-7'>
          <button
            className='rounded bg-blue-500 px-4 py-2 text-white'
            onClick={handleOpenModalFeature}
          >
            Registrar Características
          </button>
        </div>
        <div className='relative mx-auto mt-12 w-full overflow-x-auto rounded-lg shadow-md'>
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

function PageUsers() {
  const [data, setData] = useState([])
  const urlGetUser = process.env.NEXT_PUBLIC_USER_URL

  async function fetchData() {
    try {
      const response = await fetch(urlGetUser)
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
  })

  return (
    <div className='bg-grey-300 w-full flex-auto px-12 pb-12 pt-2'>
      <div className='mt-8 overflow-x-auto rounded-lg shadow-md'>
        <table className='mx-auto w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Nombre
              </th>
              <th scope='col' className='px-6 py-3'>
                Apellido
              </th>
              <th scope='col' className='px-6 py-3'>
                Dni
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Tel
              </th>
              <th scope='col' className='px-6 py-3'>
                Domicilio
              </th>
              <th scope='col' className='px-6 py-3'>
                Rol
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Designar como admin.</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <RowUser
                key={user.id}
                id={user.id}
                name={user.name}
                lastName={user.lastName}
                dni={user.dni}
                password={user.password}
                email={user.email}
                phone={user.phone}
                adress={user.adress}
                role={user.role}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}