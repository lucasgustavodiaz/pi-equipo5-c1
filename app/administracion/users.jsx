import { useState, useEffect } from 'react'
import { RowUser } from './rowUser'

export function Users() {
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

    return(
        <div className='flex-auto w-full bg-grey-300 px-12 pt-2 pb-12'>
          <div className='mt-8 overflow-x-auto rounded-lg shadow-md'>
            <table className='mx-auto w-full text-left text-sm text-gray-500 dark:text-gray-400'>
                <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                <th scope='col' className='px-6 py-3'>ID</th>
                    <th scope='col' className='px-6 py-3'>Nombre</th>
                    <th scope='col' className='px-6 py-3'>Apellido</th>
                    <th scope='col' className='px-6 py-3'>Dni</th>
                    <th scope='col' className='px-6 py-3'>Email</th>
                    <th scope='col' className='px-6 py-3'>Tel</th>
                    <th scope='col' className='px-6 py-3'>Domicilio</th>
                    <th scope='col' className='px-6 py-3'>Rol</th>
                    <th scope='col' className='px-6 py-3'>
                    < span className='sr-only'>Designar como admin.</span>
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