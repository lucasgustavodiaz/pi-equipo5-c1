import PriceRangeSlider from '@/components/util/PriceRangeSlider'

export default function Filters() {
  return (
    <>
      {/* Tipo de bote */}
      <div className=' rounded-lg border border-gray-100 bg-white shadow-lg shadow-gray-200'>
        <div className='mb-8 flex items-center border-b px-12 py-6'>
          <i className='floaty-icon-helm text-4xl text-sky-500'></i>
          <span className='pl-2 text-xl font-bold text-sky-950'>
            Tipo de Bote
          </span>
          <span className='text-lg font-bold tracking-tight text-sky-500'></span>
        </div>
        <div className='px-14 pb-10'>
          <div className='flex flex-col gap-4 text-lg font-medium text-gray-500'>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='velero'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='velero'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Velero
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='motor'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='motor'
                className='pl-2 transition group-hover:text-sky-500'
              >
                A motor
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='catamaran'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='catamaran'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Catamarán
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='yate'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='yate'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Yate
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='sky'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='sky'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Jet Ski
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Rango de precio */}
      <div className='mt-10 rounded-lg border border-gray-100 bg-white shadow-lg shadow-gray-200'>
        <div className='mb-8 flex items-center border-b px-12 py-6'>
          <i className='floaty-icon-helm text-4xl text-sky-500'></i>
          <span className='pl-2 text-xl font-bold text-sky-950'>
            Rango de Precios
          </span>
          <span className='text-lg font-bold tracking-tight text-sky-500'></span>
        </div>
        <div className='px-14 pb-10'>
          <div className='flex flex-col gap-4 text-lg font-medium text-gray-500'>
            <PriceRangeSlider />
          </div>
        </div>
      </div>
      {/* Características */}
      <div className='mt-10 rounded-lg border border-gray-100 bg-white shadow-lg shadow-gray-200'>
        <div className='mb-8 flex items-center border-b px-12 py-6'>
          <i className='floaty-icon-helm text-4xl text-sky-500'></i>
          <span className='pl-2 text-xl font-bold text-sky-950'>
            Características
          </span>
          <span className='text-lg font-bold tracking-tight text-sky-500'></span>
        </div>
        <div className='px-14 pb-10'>
          <div className='flex flex-col gap-4 text-lg font-medium text-gray-500'>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='acondicionado'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='acondicionado'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Aire acondicionado
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='parrilla'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='parrilla'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Parrilla
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='television'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='television'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Televisión
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='cubiertos'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='cubierto'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Cubiertos
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='toallas'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='toallas'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Toallas
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='audio'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='audio'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Sistema de audio
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='cafetera'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='cafetera'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Cafetera
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='heladera'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='heladera'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Heladera
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='ducha'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='ducha'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Ducha exterior
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='generador'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='generador'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Generador
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='piloto'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='piloto'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Piloto automático
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='horno'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='horno'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Horno
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='calefaccion'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='calefaccion'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Calefacción
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='radar'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='radar'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Radar
              </label>
            </div>
            <div className='group flex items-center'>
              <input
                type='checkbox'
                name=''
                id='altavoces'
                className='h-5 w-5 appearance-none rounded-sm border border-gray-300 transition checked:border-transparent checked:bg-sky-500 checked:text-white hover:border-sky-500'
              />
              <label
                htmlFor='altavoces'
                className='pl-2 transition group-hover:text-sky-500'
              >
                Altavoces interiores
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
