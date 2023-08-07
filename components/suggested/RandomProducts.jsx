import { CardDetail } from "../cardDetail/CardDetail";

async function getHeader() {
  // const myUrl = `https://api.unsplash.com/search/photos/?client_id=Oqz6xcqH_uiRhQGDrd-76c0n6ITxvnKfPdTtnBUibT4&query=yachts`;
  const response = await fetch("http://localhost:8081/api/all", {
    cache: "no-store",
    // next: { revalidate: 10 },
  });
  const data = await response.json();
  return data;
}

function getRandomProducts(array, numProducts) {
  // Creamos un nuevo conjunto (Set) llamado setOfProducts para almacenar los productos seleccionados.
  //Un Set en JavaScript es una estructura de datos que te permite almacenar elementos únicos, es decir,
  //cada elemento puede aparecer solo una vez en el conjunto, sin importar cuántas veces se intente agregar.
  //Por lo tanto, si intentas agregar un elemento duplicado al conjunto, este no se añadirá nuevamente.
  const setOfProducts = new Set();
  // El bucle while se ejecutará hasta que el tamaño del conjunto (Set) alcance el número deseado de productos (numProducts)
  // o hasta que hayamos recorrido todos los elementos del array de entrada (array), lo que ocurra primero.
  while (
    setOfProducts.size < numProducts &&
    setOfProducts.size < array.length
  ) {
    // Generamos un índice aleatorio entre 0 y la longitud del array (exclusivo).
    const randomIndex = Math.floor(Math.random() * array.length);

    // Agregamos el elemento del array en el índice aleatorio al conjunto (Set) setOfProducts.
    // El Set se asegura de que no haya duplicados, por lo que si el elemento ya está en el conjunto, no se agregará nuevamente.
    setOfProducts.add(array[randomIndex]);
  }

  // Finalmente, convertimos el conjunto (Set) a un array usando Array.from() y lo devolvemos.
  // El resultado es un array de hasta numProducts elementos seleccionados aleatoriamente del array original.
  return Array.from(setOfProducts);
}

export default async function randomProducts() {
  const results = await getHeader();
  const randomized = getRandomProducts(results, 10);

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Sugeridos
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {randomized &&
            randomized.map(
              ({ imageUrl, id, name, description, pricePerDay, category }) => (
                <CardDetail
                  key={id}
                  imageUrl={imageUrl + "1.png"}
                  id={id}
                  name={name}
                  description={description}
                  pricePerDay={pricePerDay}
                  category={category}
                />
              )
            )}
        </div>
      </div>
    </main>
  );
}
