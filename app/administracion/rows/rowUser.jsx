export function RowUser(props) {
  const { id, name, lastName, dni, password, email, phone, adress, role } =
    props

  async function handleOnEditRole() {
    const hostUrl = process.env.NEXT_PUBLIC_USER_URL
    const urlEditRole = `${hostUrl}/users/` + id

    const opcion = confirm(`Designar como administrador el id: ${id}`)
    if (opcion) {
      try {
        const response = await fetch(urlEditRole, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            lastName: lastName,
            email: email,
            dni: dni,
            password: password,
            phone: phone,
            address: adress,
            role: 'ADMIN'
          })
        })
        if (!response.ok) {
          throw new Error(
            'Error al intentar designar el usuario como administrador:. Response: ' +
              response.status
          )
        } else {
          location.assign()
        }
      } catch (error) {
        console.error(
          'Error al designar como administrador el registro:',
          error
        )
      }
    }
  }

  return (
    <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
      <th
        scope='row'
        className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
      >
        {id}
      </th>
      <td className='px-6 py-4'>{name}</td>
      <td className='px-6 py-4'>{lastName}</td>
      <td className='px-6 py-4'>{dni}</td>
      <td className='px-6 py-4'>{email}</td>
      <td className='px-6 py-4'>{phone}</td>
      <td className='px-6 py-4'>{adress}</td>
      <td className='px-6 py-4'>{role}</td>
      <td className='px-6 py-4 text-right'>
        <button
          value={id}
          onClick={handleOnEditRole}
          className='text-xs text-blue-600 hover:underline dark:text-blue-500'
        >
          Designar como admin.
        </button>
      </td>
    </tr>
  )
}
