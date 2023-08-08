import Image from 'next/image';
import Galeria from '@/components/galeriaImagenes/Galeria';
import Link from 'next/link';

async function getItem(id) {
  const response = await fetch(`http://localhost:8081/api/${id}`, {
    cache: 'no-store',
    // next: { revalidate: 10 },
  });
  const data = await response.json();
  return data;
}

async function getGallery(id) {
  const response = await fetch(`http://localhost:8081/api/urlImage/${id}`, {
    cache: 'no-store',
    // next: { revalidate: 10 },
  });
  const data = await response.json();
  return data;
}

export default async function Detalle({ params }) {
  const index = parseInt(params.id);
  const results = await getItem(index);
  console.log('RESULTS', results);
  const imagesGallery = await getGallery(index);

  return (
    <div className="mx-auto flex max-w-5xl flex-col " href={`/detail/${index}`}>
      <div className="mr-5 mt-6 flex justify-end">
        <Link
          href="/"
          className="block w-14 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          &lt;
        </Link>
      </div>
      <div className="ml-5">
        <h1 className=" mt-2 text-left font-autography text-9xl lowercase tracking-[-0.02em] text-blue-950 drop-shadow-md md:text-8xl xl:text-9xl">
          {results.name}
        </h1>
        <p className="mt-1 text-base text-gray-500">{results.description}</p>
        <p className="text-base font-medium text-gray-400"> u$ 20.000</p>
      </div>
      <Galeria imagesGallery={imagesGallery} />

      <div className="mx-5 mt-10">
        <button
          type="button"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          RESERVAR AHORA!
        </button>
      </div>
    </div>
  );
}

// return (
//   <div>
//     <img src={urls.regular} />
//     <h4>{id}</h4>
//     <p style={{ color: 'red' }}>{description}</p>
//   </div>
// );
