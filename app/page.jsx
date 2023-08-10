import FormSearch from '@/components/form/FormSearch'
import Embarcaciones from '@/components/pages/home/Embarcaciones'
import Hero from '@/components/pages/home/Hero'
import Tripulacion from '@/components/pages/home/Tripulacion'
import RandomProducts from '@/components/suggested/RandomProducts'

export default function Home() {
  return (
    <section>
      <Hero />
      <FormSearch />
      <RandomProducts />
      <Embarcaciones />
      <Tripulacion />
    </section>
  )
}
