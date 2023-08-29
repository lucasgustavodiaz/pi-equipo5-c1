export default function Table(props) {
  const { children } = props
  return (
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
      <tbody>{children}</tbody>
    </table>
  )
}
