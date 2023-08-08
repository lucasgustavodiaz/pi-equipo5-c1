import { headers } from "next/dist/client/components/headers";

export function Row(props){
    const {id, name, urlImage} = props;
    
    async function handleOnDelete(){
        const urlDelete = 'http://localhost:8081/api/delete/' + id;
        try {
              const response = await fetch(urlDelete, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                },
              });
            if (!response.ok) {
              throw new Error("Error al intentar eliminar el registro:. Response: " + response.status);
            } else {
              window.location.reload();
            }
          } catch (error) {
            console.error("Error al eliminar el registro:", error);
          }
    }

    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className='px-6 py-4'>
                <img className="w-10 h-10 rounded-full" src={`${urlImage}1.png`} alt="imagen de la embarcacion" />
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {id}
            </th>
            <td className='px-6 py-4'>
                {name}
            </td>
            <td className='px-6 py-4 text-right'>
                <button value={id} onClick={handleOnDelete} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eliminar</button>
            </td>
        </tr>
    )
}