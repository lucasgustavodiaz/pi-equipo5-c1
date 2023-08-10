import SectionTitle from '@/components/SectionTitle'
import CardEquipo from '@/components/tripulacion/CardEquipo'

export default function Tripulacion() {
  return (
    <div className='bg-[#f2f5fa]'>
      <div className='container py-20'>
        <SectionTitle antetitulo='equipo' titulo='Conocé nuestros capitanes' />
        <div className='flex flex-wrap justify-center gap-10'>
          <CardEquipo
            nombre='Mauro Lucero'
            rol='Scrum Master'
            img='/tripulacion/mauro-lucero.png'
          />
          <CardEquipo
            nombre='Lucas Diaz'
            rol='Frontend'
            img='/tripulacion/lucas-diaz.png'
          />
          <CardEquipo
            nombre='Maxi Canto'
            rol='Backend'
            img='/tripulacion/maximiliano-canto.png'
          />
          <CardEquipo
            nombre='Ezequiel Ochoa'
            rol='Base de Datos'
            img='/tripulacion/ezequiel-ochoa.png'
          />
          <CardEquipo
            nombre='Alex Velazco'
            rol='Infraestructura'
            img='/tripulacion/alex-velazco.png'
          />
          <CardEquipo
            nombre='Fernando Martinez'
            rol='Testing'
            img='/tripulacion/fernando-martinez.png'
          />
          <CardEquipo
            nombre='Georgina Folco'
            rol='UX/UI'
            img='/tripulacion/georgina-folco.png'
          />
          <CardEquipo
            nombre='Fabricio Turrina'
            rol='Fullstack Dev'
            img='/tripulacion/fabricio-turrina.png'
          />
          <CardEquipo
            nombre='Maxi Leiva'
            rol='Fullstack Dev'
            img='/tripulacion/maximiliano-leiva.png'
          />
        </div>
      </div>
    </div>
  )
}
