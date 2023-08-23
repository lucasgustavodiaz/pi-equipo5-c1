'use client'
import { useState } from 'react'
import { Products } from './products'
import { Users } from './users'

export default function Page() {

  const [showProducts, setShowProducts] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const renderProducts = () => {
    setShowProducts(true);
    setShowUsers(false);
  }

  const renderUsers = () => {
    setShowProducts(false);
    setShowUsers(true)
  }

  return (
    <div>
      {/* Mostrar en pantallas de 1023 o menos */}
      <div className='container'>
        <div className='flex min-h-screen items-center justify-center lg:hidden'>
          <div
            className='box-border flex items-center justify-center rounded-lg bg-red-300 p-4 text-lg text-red-800 dark:text-red-600'
            role='alert'
          >
          <p>
            <span className='font-medium'>Alerta!</span> El panel de
            administrador no esta disponible en dispositivos móviles
          </p>
          </div>
        </div>
      </div>

      {/* Mostrar en pantallas de 1024 en adelante*/}
      <div className='hidden lg:block'>
        <div className='min-h-screen flex'>
          {/* Sidebar */}
          <div className='flex flex-col left-0 pt-5 border-none text-white bg-sky-900 dark:bg-[#121212]' style={{minWidth: "250px"}}>
            <div className='flex items-center px-5 h-14 mb-4 border-none z-10'>
              <img className='w-10 h-10 mr-4 rounded-md overflow-hidden' src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" alt="foto admin" />
              <span>Administrador</span>
            </div>
            <ul className='flex flex-col py-4 space-y-1'>
              <li className='px-5'>
                <div className='h-8 text-sm font-light tracking-wide text-gray-400 uppercase'>Menu</div>
              </li>
              <li>
                <button onClick={renderProducts} className='relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-sky-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-sky-500 pr-6'>
                  <span className="inline-flex justify-center items-center ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                      <path d="M25.3333 8H22.6667C22.6667 4.26666 19.7333 1.33333 16 1.33333C12.2667 1.33333 9.33333 4.26666 9.33333 8H6.66667C5.2 8 4 9.2 4 10.6667V26.6667C4 28.1333 5.2 29.3333 6.66667 29.3333H25.3333C26.8 29.3333 28 28.1333 28 26.6667V10.6667C28 9.2 26.8 8 25.3333 8ZM16 3.99999C18.2667 3.99999 20 5.73333 20 8H12C12 5.73333 13.7333 3.99999 16 3.99999ZM25.3333 26.6667H6.66667V10.6667H25.3333V26.6667ZM16 16C13.7333 16 12 14.2667 12 12H9.33333C9.33333 15.7333 12.2667 18.6667 16 18.6667C19.7333 18.6667 22.6667 15.7333 22.6667 12H20C20 14.2667 18.2667 16 16 16Z" fill="#FFFFFF"/>
                    </svg>
                  </span>
                  <span className='ml-2 text-sm tracking-wide'>Productos</span>
                </button>
              </li>
              <li>
              <button onClick={renderUsers} className='relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-sky-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-sky-500 pr-6'>
                  <span className="inline-flex justify-center items-center ml-3">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 3C13.6935 3 14.8381 3.47411 15.682 4.31802C16.5259 5.16193 17 6.30653 17 7.5C17 8.69347 16.5259 9.83807 15.682 10.682C14.8381 11.5259 13.6935 12 12.5 12C11.3065 12 10.1619 11.5259 9.31802 10.682C8.47411 9.83807 8 8.69347 8 7.5C8 6.30653 8.47411 5.16193 9.31802 4.31802C10.1619 3.47411 11.3065 3 12.5 3ZM12.5 5.25C11.9033 5.25 11.331 5.48705 10.909 5.90901C10.4871 6.33097 10.25 6.90326 10.25 7.5C10.25 8.09674 10.4871 8.66903 10.909 9.09099C11.331 9.51295 11.9033 9.75 12.5 9.75C13.0967 9.75 13.669 9.51295 14.091 9.09099C14.5129 8.66903 14.75 8.09674 14.75 7.5C14.75 6.90326 14.5129 6.33097 14.091 5.90901C13.669 5.48705 13.0967 5.25 12.5 5.25ZM12.5 13.125C15.5038 13.125 21.5 14.6212 21.5 17.625V21H3.5V17.625C3.5 14.6212 9.49625 13.125 12.5 13.125ZM12.5 15.2625C9.15875 15.2625 5.6375 16.905 5.6375 17.625V18.8625H19.3625V17.625C19.3625 16.905 15.8412 15.2625 12.5 15.2625Z" fill="#ffffff"/>
                    </svg>
                  </span>
                  <span className='ml-2 text-sm tracking-wide'>Usuarios</span>
                  <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-sky-500 bg-indigo-50 rounded-full">New</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contenedor de la tabla de productos */}
          {showProducts && <Products />}

          {/* Contenedor de la tabla de usuarios */}
          {showUsers && <Users />}
        </div>
      </div>  
    </div>
  )
}
