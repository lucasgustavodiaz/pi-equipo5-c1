import Social from './Social'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='container flex flex-col items-center justify-center gap-6 p-6 sm:flex-row sm:justify-between sm:gap-0'>
      <div className='flex flex-col items-center sm:flex-row'>
        <span className=''>Copyright © {currentYear}. </span>
        <span className='font-bold underline decoration-sky-500'>
          Todos los derechos reservados.
        </span>
      </div>
      <Social color='text-sky-600' />
    </footer>
  )
}
