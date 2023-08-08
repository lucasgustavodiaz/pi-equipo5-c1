'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'

export default function ThemeButton() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return null
  }

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='hidden items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 sm:flex'
      onClick={toggleTheme}
    >
      {resolvedTheme === 'dark' ? (
        <BsSunFill className='h-5 w-5 text-orange-300' />
      ) : (
        <BsMoonStarsFill className='h-5 w-5 text-sky-600' />
      )}
    </button>
  )
}
