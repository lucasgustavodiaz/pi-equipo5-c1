import './globals.css'

import { Inter } from 'next/font/google'

import Providers from './providers'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Proyecto integrador - Digital House',
  description: 'Grupo 5 - Camada 1'
}

export default function RootLayout({ children }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
