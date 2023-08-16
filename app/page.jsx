import ScrollToTopPage from '@/components/ScrollToTopPage'
import FormSearch from '@/components/form/FormSearch'
import Descubre from '@/components/screens/home/Descubre'
import Embarcaciones from '@/components/screens/home/Embarcaciones'
import Hero from '@/components/screens/home/Hero'
import Tripulacion from '@/components/screens/home/Tripulacion'
import RandomProducts from '@/components/suggested/RandomProducts'

export default function Home() {
  return (
    <section>
      <ScrollToTopPage />
      <Hero />
      <FormSearch />
      <Descubre />
      <RandomProducts />
      <Embarcaciones />
      <Tripulacion />
    </section>
  )
}
