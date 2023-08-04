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
  const { id, description, urls } = results[index - 1];

  return (
    <div>
      <img src={urls.regular} />
      <h4>{id}</h4>
      <p style={{ color: 'red' }}>{description}</p>
    </div>
  );
}
