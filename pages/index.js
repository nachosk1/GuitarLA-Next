import Layout from "@/components/layout"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarras y más'}
      >
        <h1>Hola mundo</h1>
        <Link href="/us">Nosotros</Link>
      </Layout>
    </>
  )
}
