import Link from "next/link"
import { Form } from "./form"

export default function Page() {
    return (
        <>
            <h1>Acá registramos los productos</h1>
            <Link href={'/administracion'}>
                    Volver
            </Link>
            <Form />
        </>
        )
}