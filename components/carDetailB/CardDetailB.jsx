import Image from 'next/image';
import Link from 'next/link';

export const CardDetailB = ({ urls, id, user, alt_description }) => {
  return (
    <Link className="group relative" href={`/detail/${id}`}>
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
        <img
          src={urls.regular}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h2 className="text-sm text-gray-700">{alt_description}</h2>
          <p className="mt-1 text-sm text-gray-500">Por: {user.name}</p>
        </div>
        <p className="text-sm font-medium text-gray-900"> u$ 20.000</p>
      </div>
      <div className="mt-10">
        <button
          type="button"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          RESERVAR AHORA!
        </button>
      </div>
    </Link>
  );
};
