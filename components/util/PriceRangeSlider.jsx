'use client'

import { useState } from 'react'

export default function PriceRangeSlider() {
  const [priceRange, setPriceRange] = useState(0)

  const handleSliderChange = event => {
    setPriceRange(event.target.value)
  }
  return (
    <div className='w-full'>
      <input
        type='range'
        min='0'
        max='30000' // Ajusta estos valores según tu rango de precios
        value={priceRange}
        onChange={handleSliderChange}
        className='slider h-3 w-full cursor-pointer appearance-none rounded-full bg-sky-500'
      />
      <div className='flex justify-between'>
        <span className='text-gray-500'>Desde: $0</span>
        <span className='text-gray-500'>Hasta: ${priceRange}</span>
      </div>
    </div>
  )
}
