'use client'

import FormSearch from '@/components/form/FormSearch'
import Descubre from '@/components/screens/home/Descubre'
import Embarcaciones from '@/components/screens/home/Embarcaciones'
import Hero from '@/components/screens/home/Hero'
import Tripulacion from '@/components/screens/home/Tripulacion'
import RandomProducts from '@/components/suggested/RandomProducts'
import PaginationControls from '@/components/suggested/paginationControls/PaginationControls'
import { useState, useEffect } from 'react'

export default function Home({ searchParams }) {
  const [totalYachts, setTotalYachts] = useState([])

  useEffect(() => {
    const getYachts = async () => {
      const response = await fetch('/api/yachts')
      const yachts = await response.json()
      setTotalYachts(yachts)
    }
    getYachts()
  }, [])

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '9'
  const start = (page - 1) * per_page
  const end = start + parseInt(per_page)
  const totalPage = Math.ceil(totalYachts?.length / per_page)
  const entries = totalYachts.slice(start, end)

  return (
    <section>
      <Hero />
      <FormSearch />
      <Descubre />
      <RandomProducts entries={entries} />
      <PaginationControls
        hasNextPage={end < totalYachts?.length ?? ''}
        hasPrevPage={start > 0}
        totalPage={totalPage}
      />
      <Embarcaciones />
      <Tripulacion />
    </section>
  )
}
