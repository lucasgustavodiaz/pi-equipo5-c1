"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Row } from "./row";
import { Form } from "./registrar/form";
import { Modal } from "./registrar/modal";

export default function Page() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const urlGetYacht = "http://localhost:8081/api/all";
  async function fetchData() {
    try {
      const response = await fetch(urlGetYacht);
      if (!response.ok) {
        throw new Error(
          "Error al intentar cargar todos los registros: . Response: " +
            response.status
        );
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error cargando los registros: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   // Función para actualizar el estado del ancho de la ventana
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   // Agregar el listener para el evento de cambio de tamaño
  //   window.addEventListener('resize', handleResize);

  //   // Limpieza: remover el listener cuando el componente se desmonta
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <p className="lg:hidden">
        El panel de adminitrador no esta disponible en dispositivos moviles.
      </p>
      <div className="hidden lg:block">
        <div className="container mt-5 block flex items-center justify-between p-0">
          <h1>Hola, Administrador!</h1>
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
            onClick={handleOpenModal}
          >
            Registrar Yate
          </button>
        </div>
        <div className="relative mx-auto mt-12 w-10/12 overflow-x-auto rounded-lg shadow-md">
          <table className="mx-auto w-full text-left text-sm text-gray-500 dark:text-gray-400">
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
    </>
  );
}
