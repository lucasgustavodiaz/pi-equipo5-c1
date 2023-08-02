import Link from "next/link"

export default function Page() {


  return (
    <>
      <h1>Hola, Administrador!</h1>
      <Link href={'administracion/registrar'}>
        Registrar
      </Link>
      <h2>Acá va ir el listado con la posibilidad de editar y eliminar</h2>
    </>
  )
}