import Image from 'next/image';
import Link from 'next/link';

export const CardDetail = ({ urls, id }) => {
  const onClick = () => {};
  return (
    <Link
      className="flex flex-wrap justify-center"
      href={`/listado/detail/${id}`}
    >
      <div className="m-4 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white shadow-md sm:w-52">
        <img
          src={urls.regular}
          style={{ height: '150px', width: '260px', margin: '10px' }}

          //   alt=""
          //   width={180}
          //   height={200}
          //   className="h-200 m-6"
        />

        <h2 className="px-2 pb-5 text-center">titulo del detalle</h2>

        <div className="bg-blue-500 p-3 text-center text-white transition-all duration-500 hover:bg-blue-800">
          Aca van los detalles del detalle!!!!
        </div>
      </div>
    </Link>
  );
};
