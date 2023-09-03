import Galeria from '@/components/suggested/galeriaImagenes/Galeria'
import CurrencyFormatter from '@/components/util/CurrencyFormatter'
import Link from 'next/link'
import { HiLocationMarker } from 'react-icons/hi'
import { BsStarFill, BsStar } from 'react-icons/bs'
import { ButtonBack } from '@/components/suggested/buttonBack/ButtonBack'
import Image from 'next/image'
import { dynamicBlurDataUrl } from '@/components/util/dynamicBlurDataUrl'

const hostUrl = process.env.NEXT_PUBLIC_HOST_URL
const itemsUrl = `${hostUrl}/api/`
const imageUrl = `${hostUrl}/api/urlImage/`

async function getItem(id) {
  const response = await fetch(itemsUrl + id, {
    cache: 'no-store'
  })
  const data = await response.json()
  return data
}

async function getGallery(id) {
  const response = await fetch(imageUrl + id, {
    cache: 'no-store'
  })
  const data = await response.json()
  return data
}

export default async function Detalle({ params }) {
  const index = parseInt(params.id)
  const results = await getItem(index)
  // console.log('RESULTS', results)
  const imagesGallery = await getGallery(index)
  // Create placeholders for images
  const imgUrls = imagesGallery.map(image => image.url)
  const placeHolders = await Promise.all(
    imgUrls.map(url => dynamicBlurDataUrl(url))
  )

  return (
    <div className='bg-[#f2f5fa] p-4 pt-0 sm:p-10 sm:pt-0'>
      <div className='container py-3 text-xs font-medium uppercase text-gray-500 sm:py-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center tracking-tight'>
            <Link
              href='/'
              className='transition ease-in-out hover:text-sky-500'
            >
              Inicio
            </Link>
            <span className='px-2'>{'>'}</span>
            <Link
              href='/search'
              className='transition ease-in-out hover:text-sky-500'
            >
              Barcos
            </Link>
            <span className='px-2'>{'>'}</span>
            {results.name}
          </div>
          <ButtonBack />
        </div>
      </div>
      <div
        className='container rounded-lg bg-[#fcfcfc] pb-10 pt-5'
        href={`/detail/${index}`}
      >
        <Galeria imagesGallery={imagesGallery} placeHolders={placeHolders} />

        {/* Container */}
        <div className='flex flex-col items-start gap-8 pt-6 lg:flex-row'>
          {/* Detalles */}
          <div className='1 w-full pt-2'>
            {/* Product info */}
            <h1 className='pb-5 text-4xl font-bold uppercase text-blue-950'>
              {results.name}
            </h1>
            <div className='flex items-center text-gray-400'>
              <HiLocationMarker className='mr-1 h-4 w-4' />
              <span className='text-sm font-semibold uppercase'>
                SANTA ROSA, LA PAMPA, ARGENTINA
              </span>
            </div>
            <div className='mt-4 flex items-center border-b border-t py-4 font-medium text-sky-950'>
              <span className='pr-3'>
                8 Huéspedes 9 Habitaciones 2 Baños 5 Cabinas
              </span>
              <BsStarFill className='mr-2 inline-block h-[14px] w-[14px] text-sky-500' />
              <span className='font-bold'>4.6/5</span>
            </div>

            {/* Descripcion */}
            <div className='mt-8 border-b pb-8'>
              <h2 className='pb-4 text-2xl font-bold text-sky-950'>
                Descripción
              </h2>
              <p className='text-base text-gray-500'>{results.description}</p>
            </div>

            {/* Caracteristicas */}
            <div className='mt-8 border-b pb-8'>
              <h2 className='pb-4 text-2xl font-bold text-sky-950'>
                Características
              </h2>
              <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3'>
                <div className='flex items-center'>
                  <i className='floaty-icon-air-conditioning mr-4 text-2xl'></i>
                  <span>Aire acondicionado</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-bbq mr-4 text-2xl'></i>
                  <span>Parrilla</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-tv mr-4 text-2xl'></i>
                  <span>Televisión</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-kitchen-utensils mr-4 text-2xl'></i>
                  <span>Cubiertos</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-towels mr-4 text-2xl'></i>
                  <span>Toallas</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-audio-system mr-4 text-2xl'></i>
                  <span>Sistema de audio</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-coffee-machine mr-4 text-2xl'></i>
                  <span>Cafetera</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-fridge mr-4 text-2xl'></i>
                  <span>Heladera</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-outsite-shower mr-4 text-2xl'></i>
                  <span>Ducha exterior</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-generator mr-4 text-2xl'></i>
                  <span>Generador</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-autopilot mr-4 text-2xl'></i>
                  <span>Piloto automático</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-cooker mr-4 text-2xl'></i>
                  <span>Horno</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-heating mr-4 text-2xl'></i>
                  <span>Calefacción</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-radar mr-4 text-2xl'></i>
                  <span>Radar</span>
                </div>
                <div className='flex items-center'>
                  <i className='floaty-icon-inside-speakers mr-4 text-2xl'></i>
                  <span>Altavoces interiores</span>
                </div>
              </div>
            </div>

            {/* Politicas */}
            <div className='mt-8 border-b pb-8'>
              <h2 className='pb-6 text-2xl font-bold text-sky-950'>
                Políticas del producto
              </h2>
              <div className='mb-8 flex flex-wrap gap-3 bg-slate-200 px-5 py-5 sm:gap-14 sm:px-12'>
                <div>
                  <span className='font-semibold'>Ingreso:</span> 2:00PM
                </div>
                <div>
                  <span className='font-semibold'>Salida:</span> 12:00AM{' '}
                </div>
              </div>
              <div className='wrapper mb-6'>
                <div className='title mb-1 flex items-center'>
                  <i className='floaty-icon-life-buoy pr-3 text-2xl text-sky-600 sm:pr-6'></i>
                  <div className='font-semibold text-gray-950'>
                    Con o sin capitán
                  </div>
                </div>
                <div className='content'>
                  <p className='pl-9 text-gray-500 sm:pl-12'>
                    Puedes navegar el barco tú mismo (se requiere licencia) o
                    contratar un Capitán durante la reserva.
                  </p>
                </div>
              </div>
              <div className='wrapper mb-6'>
                <div className='title mb-1 flex items-center'>
                  <i className='floaty-icon-bank-note pr-3 text-2xl text-sky-600 sm:pr-6'></i>
                  <div className='font-semibold text-gray-950'>
                    Sin cargos adicionales
                  </div>
                </div>
                <div className='content'>
                  <p className='pl-9 text-gray-500 sm:pl-12'>
                    El precio total incluye las tasas a pagar en el momento del
                    check-in (combustible no incluido a menos que se especifique
                    lo contrario).
                  </p>
                </div>
              </div>
              <div className='wrapper mb-6'>
                <div className='title mb-1 flex items-center'>
                  <i className='floaty-icon-card-check-o pr-3 text-2xl text-sky-600 sm:pr-6'></i>
                  <div className='font-semibold text-gray-950'>
                    Pago por adelantado
                  </div>
                </div>
                <div className='content'>
                  <p className='pl-9 text-gray-500 sm:pl-12'>
                    Se requiere un prepago del 50% para confirmar su reserva.
                  </p>
                </div>
              </div>
              <div className='wrapper'>
                <div className='title mb-1 flex items-center'>
                  <i className='floaty-icon-calendar-minus pr-3 text-2xl text-sky-600 sm:pr-6'></i>
                  <div className='font-semibold text-gray-950'>
                    Política de cancelación
                  </div>
                </div>
                <div className='content'>
                  <p className='pl-9 text-gray-500 sm:pl-12'>
                    Flexible: Reembolso total hasta 1 día antes de la llegada,
                    excluyendo gastos de servicio y comisión de Ocean Winds.
                  </p>
                </div>
              </div>
            </div>

            {/* Comentarios */}
            <div className='mt-8 border-b pb-8'>
              <h2 className='text-2xl font-bold text-sky-950'>Comentarios</h2>
              <div className='comment-body flex border-b pb-5 pt-6'>
                <Image
                  src='/avatar.png'
                  alt='avatar'
                  width={60}
                  height={60}
                  className='mr-5 hidden h-[60px] w-[60px] rounded-full sm:block'
                />
                <div>
                  <div>
                    <BsStarFill className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                    <BsStarFill className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                    <BsStarFill className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                    <BsStarFill className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                    <BsStarFill className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                  </div>
                  <div className='font-semibold'>
                    Nombre{' '}
                    <span className='text-sm font-normal text-gray-500'>
                      - Fechas
                    </span>
                  </div>
                  <div>Quedé muy satisfecho con la atencion del vendedor</div>
                </div>
              </div>
              <div className='comment-body flex border-b pb-5 pt-6'>
                <Image
                  src='/avatar.png'
                  alt='avatar'
                  width={60}
                  height={60}
                  className='mr-5 hidden h-[60px] w-[60px] rounded-full sm:block'
                />
                <div>
                  <div>
                    <BsStarFill className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                    <BsStarFill className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                    <BsStarFill className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                    <BsStarFill className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                    <BsStar className='mr-1 inline-block h-[14px] w-[14px] text-sky-500' />
                  </div>
                  <div className='font-semibold'>
                    Nombre{' '}
                    <span className='text-sm font-normal text-gray-500'>
                      - Fechas
                    </span>
                  </div>
                  <div>Quedé muy satisfecho con la atencion del vendedor</div>
                </div>
              </div>
              <div className='pt-6'>
                <h2 className='pb-2 text-xl font-bold text-sky-950'>
                  Agregar un comentario
                </h2>
                <p>
                  Debes{' '}
                  <Link
                    href='/login'
                    className='font-semibold transition ease-in-out hover:text-sky-500'
                  >
                    iniciar sesión
                  </Link>{' '}
                  para publicar un comentario.
                </p>
              </div>
            </div>
          </div>
          {/* Reserva */}
          <div className='sticky top-[94px] w-full rounded-lg border border-gray-100 bg-white shadow-lg shadow-gray-200 lg:max-w-[438px]'>
            <div className='px-12 pb-10 pt-5 text-gray-500'>
              <div className='mb-8 flex items-center border-b pb-2'>
                <span className='pr-2 text-xs font-semibold uppercase'>
                  desde:
                </span>
                <span className='text-lg font-bold tracking-tight text-sky-500'>
                  <CurrencyFormatter value={results.pricePerDay} />/ Día
                </span>
              </div>
              <div>
                <div className='flex items-center pb-2 text-sky-950'>
                  <span className='floaty-icon-calendar pr-3 text-xl'></span>
                  <h2 className='text-sm font-semibold uppercase'>Ingreso</h2>
                </div>
                <input
                  type='date'
                  className='mb-5 w-full rounded-lg border-2 p-3 text-gray-400 dark:[color-scheme:light]'
                />
                <div className='flex items-center pb-2 text-sky-950'>
                  <span className='floaty-icon-calendar pr-3 text-xl'></span>
                  <h2 className='text-sm font-semibold uppercase'>Salida</h2>
                </div>
                <input
                  type='date'
                  className='mb-5 w-full rounded-lg border-2 p-3 text-gray-400 dark:[color-scheme:light]'
                />
                <div className='flex items-center pb-2 text-sky-950'>
                  <span className='floaty-icon-guestes pr-3 text-xl'></span>
                  <h2 className='text-sm font-semibold uppercase'>Pasajeros</h2>
                </div>
                <input
                  type='number'
                  placeholder='Cantidad de personas'
                  className='mb-10 w-full rounded-lg border-2 p-3 text-gray-400 dark:[color-scheme:light]'
                />
              </div>
              <div className=''>
                <button
                  type='button'
                  className='mb-5 w-full rounded-md bg-sky-500 py-3.5 text-center text-sm font-semibold text-white transition ease-in-out hover:bg-sky-900'
                >
                  Reservar ahora
                </button>
              </div>
              <p className='px-0 text-center text-sm xl:px-5'>
                Ponte en contacto con el propietario para planificar tu viaje o
                consultar cualquier duda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
