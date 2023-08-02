import Link from "next/link"

export default function Page() {


    return (
        <>
            <h1>Acá registramos los productos</h1>
            <Link href={'/administracion'}>
                Volver
            </Link>
        </>
        )
}