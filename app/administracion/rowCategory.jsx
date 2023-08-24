import { headers } from 'next/dist/client/components/headers'
import { useState, useEffect } from 'react'
import { Modal } from './modal'
import { FormCat } from './registrar/formCategory'

export function RowCategory(props) {
  const { id, name, icon } = props
  const [category, setCategory] = useState({})
  const [modalEditOpen, setModalEditOpen] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
    const urlGetCategory = `${hostUrl}/api/categoryById/${id}`
    try {
      const response = await fetch(urlGetCategory)
      if (!response.ok) {
        throw new Error(
          'Error al intentar cargar los datos del registro: ' + response.status
        )
      }
      const jsonData = await response.json()
      setCategory(jsonData)
    } catch (error) {
      console.error('Error al intentar cargar los datos del registro: ', error)
    }
  }

  async function handleOnDelete() {
    const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
    const urlDelete = `${hostUrl}/api/category/delete/${id}`
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
        className='border-b bg-white hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
        onClick={handleOpenModalEdit}
      >
        <td className='px-6 py-4'>
          <i className={`${icon} text-2xl text-sky-500`}></i>
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
              Eliminar
            </button>
          </div>
        </td>
      </tr>
      <Modal isOpen={modalEditOpen} onClose={handleCloseModalEdit}>
        <FormCat formEditData={category} />
      </Modal>
    </>
  )
}