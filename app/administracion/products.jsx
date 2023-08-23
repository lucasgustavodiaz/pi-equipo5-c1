import { Row } from './row'
import { useState, useEffect } from 'react'
import { Form } from './registrar/form'
import { Modal } from './registrar/modal'

export function Products() {
    const [data, setData] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
    const apiUrl = `${hostUrl}/api/all`
  
    const urlGetYacht = apiUrl
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
    })

    const handleOpenModal = () => {
        setModalOpen(true)
      }
    
      const handleCloseModal = () => {
        setModalOpen(false)
      }
    
    return(
      <div className='flex-auto'>
        <div className='w-full bg-grey-300 px-12 pt-2 pb-12'>
            <div className='flex justify-end'>
                <button
                    className='px-6 py-3 shadow-md rounded-full  border-2 border-sky-900 font-semibold hover:bg-sky-800 hover:text-white hover:border-sky-800 hover:shadow-lg'
                    onClick={handleOpenModal}
                >
                    Agregar producto
                </button>
            </div>
            <div className='mt-8 overflow-x-auto rounded-lg shadow-md'>
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