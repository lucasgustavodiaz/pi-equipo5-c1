async function getItem() {
  const response = await fetch('http://localhost:3001/results', {
    cache: 'no-store',
    // next: { revalidate: 10 },
  });
  const data = await response.json();
  return data;
}

export default async function Detalle({ params }) {
  const index = parseInt(params.id);
  const results = await getItem();
  const { id, tags, urls, user } = results[index - 1];

  return (
    <div className="group relative mx-6" href={`/detail/${id}`}>
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-96">
        <img
          src={urls.regular}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <p className="mt-1 text-sm text-gray-500">{user.bio}</p>
        </div>
        <p className="text-sm font-medium text-gray-400"> u$ 20.000</p>
      </div>
      <div className="mt-10">
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
