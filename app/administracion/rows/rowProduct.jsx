import { useState, useEffect } from 'react'
import { Modal } from '../util/modal'
import { Form } from '../register-edit/formProduct'
import Image from 'next/image'

export function Row(props) {
  const { id, name, urlImage, category, features } = props
  const [yacht, setYatcht] = useState({})
  const [modalEditOpen, setModalEditOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
    const urlGetYacht = `${hostUrl}/api/${id}`
    try {
      const response = await fetch(urlGetYacht)
      if (!response.ok) {
        throw new Error(
          'Error al intentar cargar los datos del registro: ' + response.status
        )
      }
      const jsonData = await response.json()
      setYatcht(jsonData)
    } catch (error) {
      console.error('Error al intentar cargar los datos del registro: ', error)
    }
  }

  async function handleOnDelete(e) {
    e.preventDefault()
    e.stopPropagation()
    const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
    const urlDelete = `${hostUrl}/api/delete/${id}`
    const opcion = confirm(`Desea eliminar el registro con el id: ${id}`)
    if (opcion) {
      try {
        const response = await fetch(urlDelete, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          throw new Error(
            'Error al intentar eliminar el registro:. Response: ' +
              response.status
          )
        } else {
          window.location.reload()
        }
      } catch (error) {
        console.error('Error al eliminar el registro:', error)
      }
    }
  }

  const handleOpenModalEdit = () => {
    setModalEditOpen(true)
  }

  const handleCloseModalEdit = () => {
    setModalEditOpen(false)
  }

  return (
    <>
      <tr
        className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModalEdit}
      >
        <td className='px-8 py-4'>
          <div>
            <Image
              className='h-11 w-11 rounded-full border-2 border-sky-500'
              width='50'
              height='50'
              src={`${urlImage}1.png`}
              alt='imagen de la embarcacion'
            />
          </div>
        </td>
        <th
          scope='row'
          className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
        >
          {id}
        </th>
        <td className='px-6 py-4'>{name}</td>
        <td className='px-6 py-4 text-right'>
          <div>
            <button
              value={id}
              onClick={handleOnDelete}
              className='font-medium text-blue-600 hover:underline dark:text-blue-500'
            >
              <svg
                className='h-6 w-6 text-red-500'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                {' '}
                <path stroke='none' d='M0 0h24v24H0z' />{' '}
                <line x1='18' y1='6' x2='6' y2='18' />{' '}
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </button>
          </div>
        </td>
      </tr>
      <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
        {isHovered && (
          <>
            <td colSpan='2' className='p-2'>
              <div>
                {category == null
                  ? 'Sin categorizar'
                  : `Categoría: ${category.name}`}
              </div>
            </td>
            <td colSpan='2' className='p-2'>
              <div>
                {features.length === 0
                  ? 'Sin características'
                  : `Características: ${features.map(
                      feature => ` ${feature.name}`
                    )}`}
              </div>
            </td>
          </>
        )}
      </tr>
      <Modal isOpen={modalEditOpen} onClose={handleCloseModalEdit}>
        <Form formEditData={yacht} />
      </Modal>
    </>
  )
}
