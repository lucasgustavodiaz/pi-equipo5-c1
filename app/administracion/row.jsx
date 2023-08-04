import { headers } from "next/dist/client/components/headers";

export function Row(props){
    const {id, name} = props;
    
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
              throw new Error("La respuesta no fue correcta. Response: " + response.status);
            } else {
              window.location.reload();
            }
          } catch (error) {
            console.error("Error al eliminar el registro:", error);
          }
    }

    return(
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                <button value={id} onClick={handleOnDelete}>eliminar</button>
            </td>
        </tr>
    )
}