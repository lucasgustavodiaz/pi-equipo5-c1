import { CardDetailB } from '@/components/carDetailB/CardDetailB';

async function getHeader() {
  // const myUrl = `https://api.unsplash.com/search/photos/?client_id=Oqz6xcqH_uiRhQGDrd-76c0n6ITxvnKfPdTtnBUibT4&query=yachts`;
  const response = await fetch('http://localhost:3001/results', {
    cache: 'no-store',
    // next: { revalidate: 10 },
  });
  const data = await response.json();
  return data;
}

export default async function Home() {
  const results = await getHeader();

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          NUESTRA FLOTA
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {results &&
            results.map(({ id, urls, user, alt_description }) => (
              <CardDetailB
                key={id}
                urls={urls}
                id={id}
                user={user}
                alt_description={alt_description}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

// return (
//   <div className="grid grid-cols-5">
//     {results &&
//       results.map(({ id, urls }) => (
//         <CardDetail key={id} urls={urls} id={id} />
//       ))}
//   </div>
// );
