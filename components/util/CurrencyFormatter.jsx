import React from 'react'

export default function CurrencyFormatter({ value }) {
  const formattedValue = value.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return <span>{formattedValue}</span>
}
