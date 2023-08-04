import { CardDetail } from '@/components/cardDetail/CardDetail';

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
    <div className="grid grid-cols-5">
      {results &&
        results.map(({ id, urls }) => (
          <CardDetail key={id} urls={urls} id={id} />
        ))}
    </div>
  );
}
