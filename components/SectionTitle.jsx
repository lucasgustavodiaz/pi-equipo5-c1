import React from 'react'
import { GiShipWheel } from 'react-icons/gi'

export default function SectionTitle({ antetitulo, titulo }) {
  return (
    <div className='pb-5 text-center'>
      <GiShipWheel className='m-auto mb-4 text-4xl text-[#dbdfe4]' />
      <h3 className='font-autography text-5xl text-sky-500  '>{antetitulo}</h3>
      <h2 className='mb-7 text-3xl font-bold text-sky-950 sm:text-5xl'>
        {titulo}
      </h2>
    </div>
  )
}
