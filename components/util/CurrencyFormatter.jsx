import React from 'react'

export default function CurrencyFormatter({ value }) {
  const formattedValue = value.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  return <span>{formattedValue}</span>
}
