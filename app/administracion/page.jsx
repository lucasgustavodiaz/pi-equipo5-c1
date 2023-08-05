"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Row } from "./row";
import { Form } from "./registrar/form";
import { Modal } from "./registrar/modalRegister";
export default function Page() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const urlGetYacht = "http://localhost:8081/api/all";
  async function fetchData() {
    try {
      const response = await fetch(urlGetYacht);
      if (!response.ok) {
        throw new Error(
          "La respuesta no fue correcta. Response: " + response.status
        );
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

  
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container p-0 mt-5 flex justify-between items-center">
        <h1>Hola, Administrador!</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleOpenModal}
        >
          Registrar Yate
        </button>
      </div>
      <div className="relative mx-auto w-10/12 mt-12 overflow-x-auto shadow-md rounded-lg">
        <table className="w-full mx-auto text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Imagen</span>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Eliminar</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((yacht) => (
              <Row key={yacht.id} id={yacht.id} name={yacht.name} urlImage={yacht.imageUrl} />
            ))}
          </tbody>
        </table>
      </div>
      
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <Form />
      </Modal>
    </>
  );
}
