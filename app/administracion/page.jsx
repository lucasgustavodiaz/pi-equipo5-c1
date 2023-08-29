'use client'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useAuth } from '@/context/authContext'
import { useState, useEffect } from 'react'

import { Row } from './rows/rowProduct'
import { RowCategory } from './rows/rowCategory'
import { RowFeature } from './rows/rowFeature'
import { RowUser } from './rows/rowUser'

import { Form } from './register-edit/formProduct'
import { FormCat } from './register-edit/formCategory'
import { FormFeature } from './register-edit/formFeature'
import { Modal } from './util/modal'

import Link from 'next/link'

import { Spline_Sans } from 'next/font/google'
import Table from './util/table'
import Image from 'next/image'
const spline = Spline_Sans({
  weight: '600',
  subsets: ['latin'],
  display: 'swap'
})

export default function Menu() {
  const { user } = useAuth()
  const [productPageOpen, setProductPageOpen] = useState(null)
  const [categoryPageOpen, setCategoryPageOpen] = useState(false)
  const [featurePageOpen, setFeaturePageOpen] = useState(false)
  const [userPageOpen, setUserPageOpen] = useState(false)

  useEffect(() => {
    // Use sessionStorage here
    const productPageOpen =
      sessionStorage.getItem('product') === 'true' ||
      sessionStorage.getItem('product') === null
    const categoryPageOpen = sessionStorage.getItem('category') === 'true'
    const featurePageOpen = sessionStorage.getItem('feature') === 'true'
    const userPageOpen = sessionStorage.getItem('user') === 'true'

    setProductPageOpen(productPageOpen)
    setCategoryPageOpen(categoryPageOpen)
    setFeaturePageOpen(featurePageOpen)
    setUserPageOpen(userPageOpen)
  }, [])

  return (
    <ProtectedRoute>
      <main className={`${spline.className} h-full w-full`}>
        {/* Mostrar en pantallas de 1023 o menos */}
        <div
          className='flex h-screen flex-col items-center justify-center pt-10 text-center lg:hidden'
          role='alert'
        >
          <div className='z-10'>
            <div className='pb-8 text-[18rem] font-bold text-sky-500'>
              <span>404</span>
            </div>
            <div className='px-10 pb-8 text-2xl text-blue-950'>
              <span>
                Oops! El panel de administración no se encuentra disponible en
                dispositivos móviles.
              </span>
            </div>
            <div className='px-12 pb-9 text-xl text-slate-600'>
              <span>
                Parece que no se encontró nada en esta ubicación o no puede mostrarse.
                Puedes volver a la página anterior o ir a la{' '}
                <span className='text-slate-950'>página de inicio.</span>
              </span>
            </div>
            <div className='py-10'>
              <Link
                href='/'
                className='rounded-md bg-sky-700 px-8 py-4 text-base font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-blue-800'
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>

        {/* Mostrar en pantallas de 1024 en adelante*/}
        <div className='hidden lg:block'>
          <div className='z-5 flex min-h-screen'>
            {/* Sidebar */}
            <div
              className='left-0 flex flex-col border-none bg-sky-900 pt-5 text-white dark:bg-[#121212]'
              style={{ minWidth: '200px' }}
            >
              <div className='flex h-14 items-center justify-center border-none px-5'>
                <Image
                  className={`mr-4 w-11 h-11 ${
                    !user ? 'rounded-none' : 'rounded-full border-2 border-sky-500'
                  }`}
                  width={'50'}
                  height={'50'}
                  src={
                    !user || user.photoURL == null
                      ? 'https://static.vecteezy.com/system/resources/previews/007/633/306/non_2x/ship-captain-icon-captain-sign-navy-officer-figure-illustration-vector.jpg'
                      : user.photoURL
                  }
                  alt='foto admin'
                />
                <span>{!user ? 'Administrador' : user.displayName}</span>
              </div>
              <ul className='flex flex-col space-y-1 py-4 pt-11'>
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
                        width='24'
                        height='24'
                        viewBox='0 0 32 32'
                        fill='FFFFFF'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M13.71 25H27.71V27H13.71V25ZM6.88004 26L4.30004 28.58L5.71004 30L9.71004 26L5.71004 22L4.29004 23.41L6.88004 26ZM13.71 15H27.71V17H13.71V15ZM6.88004 16L4.30004 18.58L5.71004 20L9.71004 16L5.71004 12L4.29004 13.41L6.88004 16ZM13.71 5H27.71V7H13.71V5ZM6.88004 6L4.30004 8.58L5.71004 10L9.71004 6L5.71004 2L4.29004 3.41L6.88004 6Z'
                          fill='#FFFFFF'
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
                        width='24'
                        height='24'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M26.7377 13.996L25.2308 13.4929V7.69253C25.2308 7.2029 25.0363 6.73333 24.69 6.3871C24.3438 6.04088 23.8742 5.84638 23.3846 5.84638H16.9231V4.00023C16.9231 3.75541 16.8258 3.52062 16.6527 3.34751C16.4796 3.1744 16.2448 3.07715 16 3.07715C15.7552 3.07715 15.5204 3.1744 15.3473 3.34751C15.1742 3.52062 15.0769 3.75541 15.0769 4.00023V5.84638H8.61539C8.12576 5.84638 7.65618 6.04088 7.30996 6.3871C6.96374 6.73333 6.76923 7.2029 6.76923 7.69253V13.4929L5.26231 13.996C4.89452 14.1186 4.57466 14.3539 4.34809 14.6685C4.12152 14.9831 3.99973 15.361 4 15.7487V19.7041C3.99975 19.7896 4.0118 19.8747 4.03577 19.9568C5.84962 26.3133 13.9727 28.5021 15.5823 28.876C15.8572 28.939 16.1428 28.939 16.4177 28.876C18.0273 28.5021 26.1504 26.3133 27.9642 19.9568C27.9882 19.8747 28.0002 19.7896 28 19.7041V15.7487C28.0003 15.361 27.8785 14.9831 27.6519 14.6685C27.4253 14.3539 27.1055 14.1186 26.7377 13.996ZM8.61539 7.69253H23.3846V12.8768L16.2919 10.5091C16.1024 10.4459 15.8976 10.4459 15.7081 10.5091L8.61539 12.8768V7.69253ZM26.1538 19.5702C25.4869 21.7625 23.7827 23.6283 21.0827 25.1225C19.4806 25.9923 17.772 26.6493 16 27.0771C14.23 26.6489 12.5233 25.9918 10.9231 25.1225C8.21846 23.6283 6.51308 21.7614 5.84616 19.5702V15.7475L15.0769 12.6668V20.6156C15.0769 20.8604 15.1742 21.0952 15.3473 21.2683C15.5204 21.4414 15.7552 21.5387 16 21.5387C16.2448 21.5387 16.4796 21.4414 16.6527 21.2683C16.8258 21.0952 16.9231 20.8604 16.9231 20.6156V12.6668L26.1538 15.7487V19.5702Z'
                          fill='#FFFFFF'
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
            <div className='w-full h-full'>
              {productPageOpen && <PageProduct />}
              {categoryPageOpen && <PageCategory />}
              {featurePageOpen && <PageFeature />}
              {userPageOpen && <PageUsers />}
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
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
            className='rounded border border-sky-500 bg-transparent px-4 py-2 font-semibold text-sky-700 transition ease-in-out hover:border-transparent hover:bg-sky-500 hover:text-white dark:text-white sm:block'
            onClick={handleOpenModal}
          >
            Registrar Yate
          </button>
        </div>
        <div className='relative mx-auto mt-12  w-full overflow-x-auto rounded-lg shadow-md'>
          <Table>
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
          </Table>
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
      <div className='hidden lg:block'>
        <div className='pt-7'>
          <button
            className='rounded border border-sky-500 bg-transparent px-4 py-2 font-semibold text-sky-700 transition ease-in-out hover:border-transparent hover:bg-sky-500 hover:text-white dark:text-white sm:block'
            onClick={handleOpenModalCat}
          >
            Registrar Categoría
          </button>
        </div>
        <div className='relative mx-auto mt-12  w-full overflow-x-auto rounded-lg shadow-md'>
            <Table>
              {data.map(category => (
                <RowCategory
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  icon={category.image}
                />
              ))}
            </Table>
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
            className='rounded border border-sky-500 bg-transparent px-4 py-2 font-semibold text-sky-700 transition ease-in-out hover:border-transparent hover:bg-sky-500 hover:text-white dark:text-white sm:block'
            onClick={handleOpenModalFeature}
          >
            Registrar Características
          </button>
        </div>
        <div className='relative mx-auto mt-12  w-full overflow-x-auto rounded-lg shadow-md'>
          <Table className='mx-auto w-full text-left text-sm text-gray-500 dark:text-gray-400'>
              {data.map(feature => (
                <RowFeature
                  key={feature.id}
                  id={feature.id}
                  name={feature.name}
                  icon={feature.image}
                />
              ))}
          </Table>
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
  const hostUrl = process.env.NEXT_PUBLIC_USER_URL
  const urlGetUser = `${hostUrl}/users/all`
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
