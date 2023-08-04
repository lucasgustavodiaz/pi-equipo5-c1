"use client";
import useGetList from "@/hook/useGetList";

export default function ListProduct () {
  const { yates, isLoading, randomProducts} = useGetList();

  if (isLoading) {
    return <div>Cargando...</div>;
  }
    
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">NUESTRA FLOTA</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {randomProducts.map(({id,urls,alt_description,user}) => (
            <div key={id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <a href="#!">
                  <img src={urls.small} alt={alt_description} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </a>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h2 className="text-sm text-gray-700">{alt_description}</h2>
                  <p className="mt-1 text-sm text-gray-500">Por: {user.name}</p>
                  
                </div>
                <p className="text-sm font-medium text-gray-900"> u$ 20.000</p>              
              </div>
              <div className="mt-10">
                <button type="button" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  RESERVAR AHORA!
                </button>
              </div>
              {/* <Link href={`/detalle/${yate.id}`}>
                <a>
                  <img src={yate.urls.small} alt={yate.alt_description} />
                </a>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};