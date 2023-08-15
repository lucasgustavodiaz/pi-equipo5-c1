'use client'

import { RiArrowUpSLine } from 'react-icons/ri'
import React, { useState, useEffect } from 'react'

const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function ScrollToTopPage() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0.5) {
      setShowScrollButton(true)
    } else {
      setShowScrollButton(false)
    }
  }

  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 inline-block transform rounded-full bg-sky-500 p-3 drop-shadow-md transition duration-300 ease-in-out ${
        showScrollButton ? 'scale-100' : 'scale-0'
      } hover:bg-sky-700`}
    >
      <RiArrowUpSLine className='h-5 w-5 text-white' />
    </button>
  )
}
