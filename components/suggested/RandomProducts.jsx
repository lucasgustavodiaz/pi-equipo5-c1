import SectionTitle from '../SectionTitle'
import { CardDetail } from './cardDetail/CardDetail'

export default function RandomProducts({ entries, placeHolders }) {
  return (
    <div className='bg-[#f2f5fa]'>
      <div className='container pt-20'>
        <SectionTitle antetitulo='reservá hoy' titulo='Destacados' />
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 items-center justify-center gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8'>
            {entries &&
              entries.map(
                (
                  { imageUrl, id, name, description, pricePerDay, category },
                  index
                ) =>
                  imageUrl !== null ? (
                    <CardDetail
                      key={id}
                      imageUrl={imageUrl + '1.png'}
                      id={id}
                      name={name}
                      description={description}
                      pricePerDay={pricePerDay}
                      category={category}
                      placeHolder={placeHolders[index]}
                    />
                  ) : null
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
