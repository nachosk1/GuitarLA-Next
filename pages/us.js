import Layout from "@/components/layout"
import Image from "next/image"
import styles from '../styles/us.module.css'

const Us = () => {
    return (
        <div>
            <Layout
                title={'Nosotros'}
                description={'Sobre nosotros. GuitarLa, tienda de música'}
            >
                <main className="container">
                    <h2 className="heading">Nosotros</h2>
                    <div className={styles.content}>
                        <Image src="/img/nosotros.jpg"  width={1000} height={400} alt="Imagen sobre nosotros"/>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum ornare augue sit amet facilisis. Donec vulputate augue vel sem rutrum, nec lacinia arcu tincidunt. Sed volutpat mauris feugiat, volutpat nibh aliquam, iaculis metus. Nulla vestibulum lorem at nisl tristique, in ultrices odio blandit. Maecenas pharetra lectus vel felis varius commodo. Curabitur rhoncus, nisl ac vehicula mattis, mi magna viverra risus, a vehicula augue libero id enim. Cras quis feugiat eros.
                                Nam consequat orci a est egestas, placerat hendrerit risus venenatis. Duis at dignissim massa, aliquet viverra purus. Pellentesque eget felis dui. In commodo turpis a pharetra consectetur. 
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum ornare augue sit amet facilisis. Donec vulputate augue vel sem rutrum, nec lacinia arcu tincidunt. Sed volutpat mauris feugiat, volutpat nibh aliquam, iaculis metus. Nulla vestibulum lorem at nisl tristique, in ultrices odio blandit. Maecenas pharetra lectus vel felis varius commodo. Curabitur rhoncus, nisl ac vehicula mattis, mi magna viverra risus, a vehicula augue libero id enim. Cras quis feugiat eros.
                                Nam consequat orci a est egestas, placerat hendrerit risus venenatis. Duis at dignissim massa, aliquet viverra purus. Pellentesque eget felis dui. In commodo turpis a pharetra consectetur. Maecenas sit amet pulvinar libero. 
                            </p>
                        </div>
                    </div>
                </main>
            </Layout>

        </div>
    )
}

export default Us
