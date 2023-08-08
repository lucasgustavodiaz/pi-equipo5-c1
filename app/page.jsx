import FormSearch from '@/components/form/FormSearch'
import Embarcaciones from '@/components/pages/home/Embarcaciones'
import Hero from '@/components/pages/home/Hero'
import Tripulacion from '@/components/pages/home/Tripulacion'

export default function Home() {
  return (
    <section>
      <Hero />
      <FormSearch />
      <div className='container py-10'>
        <h1 className='pb-7 text-3xl font-semibold underline decoration-sky-500 decoration-4 underline-offset-4'>
          Alquiler de barcos en Argentina
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum
          officiis quibusdam laboriosam vel! Dolor nostrum voluptate porro
          facere? Quaerat praesentium nihil voluptatibus dolores ad nobis
          distinctio, quisquam modi ea!
        </p>
      </div>
      <Embarcaciones />
      <Tripulacion />
    </section>
  )
}
