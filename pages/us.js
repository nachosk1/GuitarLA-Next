import Layout from "@/components/layout"
import Link from "next/link"

const Us = () => {
    return (
        <div>
            <Layout
            title={'Nosotros'}
            description={'Sobre nosotros. GuitarLa, tienda de música'}
            >
                <Link href="/">Ir a inicio</Link>
            </Layout>

        </div>
    )
}

export default Us
