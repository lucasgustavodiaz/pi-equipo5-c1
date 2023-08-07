"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Row } from "./row";
export default function Page() {
  const [data, setData] = useState([]);
  const urlGetYacht = 'http://localhost:8081/api/all'
  async function fetchData() {
    try {
      const response = await fetch(urlGetYacht);
      if (!response.ok) {
        throw new Error("La respuesta no fue correcta. Response: " + response.status);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error trayendo los registros: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Hola, Administrador!</h1>
      <Link href={"administracion/registrar"}>Registrar</Link>
      <h2>Acá va ir el listado con la posibilidad de editar y eliminar</h2>
      {
        <table>
          <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Nombre
                </th>
                <th>
                    Eliminar
                </th>
                <th>
                    Editar
                </th>
            </tr>
          </thead>
          <tbody>
            {data.map(yacht => (
             <Row key={yacht.id} id={yacht.id} name={yacht.name}/>          
            ))}
          </tbody>
        </table>
      }
    </>
  );
}
