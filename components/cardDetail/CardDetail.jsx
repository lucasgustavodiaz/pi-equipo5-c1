import Image from 'next/image';
import Link from 'next/link';

export const CardDetail = ({
  imageUrl,
  id,
  name,
  description,
  pricePerDay,
  category,
}) => {
  return (
    <Link
      className="group relative flex min-h-full flex-col"
      href={`/detail/${id}`}
    >
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
        <img
          src={imageUrl}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="my-2 flex flex-col">
        <div className="flex items-start justify-between ">
          <h4 className="my-1 text-lg font-extrabold ">
            {name} - {category}
          </h4>
          <h4 className="my-1 text-lg font-light text-gray-500">
            {' '}
            ${pricePerDay}/Day
          </h4>
        </div>
        <p className="text-sm ">{description}</p>
      </div>
      <div className="mb-10 items-end ">
        <button
          type="button"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          ver mas
        </button>
      </div>
    </Link>
  );
};
