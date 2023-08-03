import Image from 'next/image';

export const CardDetail = ({ urls }) => {
  const onClick = () => {};
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md w-full m-4 overflow-hidden sm:w-52">
        <img
          src={urls.regular}
          style={{ height: '150px', width: '260px', margin: '10px' }}

          //   alt=""
          //   width={180}
          //   height={200}
          //   className="h-200 m-6"
        />

        <h2 className="text-center px-2 pb-5">titulo del detalle</h2>

        <a
          href="#"
          className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
        >
          Aca van los detalles del detalle!!!!
        </a>
      </div>
    </div>
  );
};
