import CardEquipo from '@/components/tripulacion/CardEquipo'
import { GiShipWheel } from 'react-icons/gi'

export default function Tripulacion() {
  return (
    <div className='bg-[#f2f5fa]'>
      <div className='container py-20 text-center'>
        <GiShipWheel className='m-auto mb-4 text-4xl text-[#dbdfe4]' />
        <h3 className='font-autography text-5xl text-sky-500  '>equipo</h3>
        <h2 className='mb-7 text-3xl font-bold text-sky-950 sm:text-5xl'>
          Conocé nuestros capitanes
        </h2>
        <div className='flex flex-wrap justify-center gap-10'>
          <CardEquipo />
          <CardEquipo />
          <CardEquipo />
          <CardEquipo />
          <CardEquipo />
          <CardEquipo />
          <CardEquipo />
          <CardEquipo />
        </div>
      </div>
    </div>
  )
}
