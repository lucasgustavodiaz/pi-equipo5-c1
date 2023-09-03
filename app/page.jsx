'use client'

import SectionTitle from '@/components/SectionTitle'
import FormSearch from '@/components/form/FormSearch'
import Descubre from '@/components/screens/home/Descubre'
import Embarcaciones from '@/components/screens/home/Embarcaciones'
import Hero from '@/components/screens/home/Hero'
import Tripulacion from '@/components/screens/home/Tripulacion'
import RandomProducts from '@/components/suggested/RandomProducts'
import PaginationControls from '@/components/suggested/paginationControls/PaginationControls'
import { dynamicBlurDataUrl } from '@/components/util/dynamicBlurDataUrl'
import { useState, useEffect } from 'react'

export default function Home({ searchParams }) {
  const [totalProducts, setTotalProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [placeHolders, setPlaceHolders] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const products = await response.json()
        return products
      } catch (error) {
        console.error('Error fetching products:', error)
        throw error
      }
    }

    const generatePlaceholders = async products => {
      const placeholderData = await Promise.all(
        products.map(async product => {
          return await dynamicBlurDataUrl(`${product.imageUrl}1.png`)
        })
      )
      return placeholderData
    }

    const initializeData = async () => {
      try {
        const products = await fetchProducts()
        const placeholderData = await generatePlaceholders(products)
        setTotalProducts(products)
        setPlaceHolders(placeholderData)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }

    initializeData()
  }, [])

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '9'
  const start = (page - 1) * per_page
  const end = start + parseInt(per_page)
  const totalPage = Math.ceil(totalProducts?.length / per_page)
  const entries = totalProducts.slice(start, end)
  const placeholders = placeHolders.slice(start, end)

  const skeletonCards = Array.from({ length: 9 }).map((_, index) => (
    <div
      key={index}
      className='group flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02] sm:max-w-full md:w-[434.8px] lg:w-[469.13px] xl:w-[469.13px]'
    >
      <div className=' h-52 w-full animate-pulse bg-gray-300 lg:h-60'></div>
      <div className='w-full transition duration-300 ease-in-out group-hover:bg-white'>
        <div className='flex flex-col px-5 py-6 text-xs sm:px-7'>
          <div className='flex justify-between'>
            <div className='skeleton-category w-10 animate-pulse bg-gray-300'></div>
            <div className='flex'>
              <div className='skeleton-star h-4 w-5 animate-pulse bg-gray-300'></div>
              <div className='skeleton-rating h-4 w-16 animate-pulse bg-gray-300'></div>
            </div>
          </div>
          <div className='skeleton-name mt-2 h-5 animate-pulse bg-gray-300'></div>
          <div className='skeleton-description mt-2 h-10 animate-pulse bg-gray-300'></div>
        </div>
        <div className='flex items-center justify-between border-t px-7 py-3'>
          <div className='skeleton-price h-6 w-24 animate-pulse bg-gray-300'></div>
          <div className='skeleton-button h-9 w-32 animate-pulse rounded-lg bg-gray-300'></div>
        </div>
      </div>
    </div>
  ))

  return (
    <section>
      <Hero />
      <FormSearch />
      <Descubre />
      {loading ? (
        <>
          <div className='bg-[#f2f5fa]'>
            <div className='container pb-28 pt-20'>
              <SectionTitle antetitulo='reservá hoy' titulo='Destacados' />
              <div className='flex justify-center'>
                <div className='grid w-full max-w-[450px] grid-cols-1 gap-x-6 gap-y-10 sm:max-w-full sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8'>
                  <>{skeletonCards}</>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <RandomProducts entries={entries} placeHolders={placeholders} />
          <PaginationControls
            hasNextPage={end < totalProducts?.length ?? ''}
            hasPrevPage={start > 0}
            totalPage={totalPage}
          />
        </>
      )}

      <Embarcaciones />
      <Tripulacion />
    </section>
  )
}
