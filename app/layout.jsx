import './globals.css'

import { Inter, Caveat } from 'next/font/google'
import localFont from 'next/font/local'

import ThemeProviderWrapper from '@/context/themeContext'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { AuthProvider } from '@/context/authContext'
import ScrollToTopPage from '@/components/ScrollToTopPage'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })

const floaty = localFont({
  src: '../fonts/floaty-icon.ttf',
  variable: '--font-floaty'
})

const autography = localFont({
  src: '../fonts/autography.ttf',
  variable: '--font-autography'
})

export const metadata = {
  title: 'Proyecto integrador - Digital House',
  description: 'Grupo 5 - Camada 1'
}

export default function RootLayout({ children }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${caveat.variable} ${autography.variable} ${floaty.variable} font-sans`}
      >
        <AuthProvider>
          <ThemeProviderWrapper>
            <ScrollToTopPage />
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}
