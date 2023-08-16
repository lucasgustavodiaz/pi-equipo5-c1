import SectionTitle from '../SectionTitle'
import { CardDetail } from '../cardDetail/CardDetail'

async function getHeader() {
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL

  const response = await fetch(`${hostUrl}/api/all`, {
    cache: 'no-store'
  })
  const data = await response.json()
  return data
}

function getRandomProducts(array, numProducts) {
  const setOfProducts = new Set()
  while (
    setOfProducts.size < numProducts &&
    setOfProducts.size < array.length
  ) {
    const randomIndex = Math.floor(Math.random() * array.length)
    setOfProducts.add(array[randomIndex])
  }

  return Array.from(setOfProducts)
}

export default async function RandomProducts() {
  const results = await getHeader()
  const randomized = getRandomProducts(results, 9)

  return (
    <div className='bg-[#f2f5fa]'>
      <div className='container py-20'>
        <SectionTitle antetitulo='reservá hoy' titulo='Destacados' />
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 items-center justify-center gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8'>
            {randomized &&
              randomized.map(
                ({
                  imageUrl,
                  id,
                  name,
                  description,
                  pricePerDay,
                  category
                }) => (
                  <CardDetail
                    key={id}
                    imageUrl={imageUrl + '1.png'}
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
      </div>
    </div>
  )
}
