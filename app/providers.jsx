'use client'

import { AuthProvider } from '@/context/authContext'
import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
  return (
    // <ThemeProvider attribute='class'>
    <AuthProvider>{children}</AuthProvider>
    // </ThemeProvider>
  )
}
