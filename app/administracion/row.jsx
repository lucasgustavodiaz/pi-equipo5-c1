import { headers } from 'next/dist/client/components/headers'
import { useState, useEffect } from 'react'
import { Modal } from './registrar/modal'
import { FormEdit } from './registrar/formEdit'

export function Row(props) {
  const { id, name, urlImage } = props
  const [modalEditOpen, setModalEditOpen] = useState(false)

  async function handleOnDelete() {
    const urlDelete = 'http://localhost:8081/api/delete/' + id
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
      <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
        <td className='px-6 py-4'>
          <img
            className='h-10 w-10 rounded-full'
            src={`${urlImage}1.png`}
            alt='imagen de la embarcacion'
          />
        </td>
        <th
          scope='row'
          className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
        >
          {id}
        </th>
        <td className='px-6 py-4'>{name}</td>
        <td className='px-6 py-4 text-right'>
        <button
            value={id}
            onClick={handleOpenModalEdit}
            className='font-medium text-blue-600 hover:underline dark:text-blue-500'
          >
            Editar
          </button>
          <label>/</label>
          <button
            value={id}
            onClick={handleOnDelete}
            className='font-medium text-blue-600 hover:underline dark:text-blue-500'
          >
            Eliminar
          </button>
        </td>
      </tr>
      <Modal isOpen={modalEditOpen} onClose={handleCloseModalEdit}>
        <FormEdit id={id}/>
      </Modal>
    </>
  )
}
