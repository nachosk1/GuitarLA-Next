import Image from "next/image"
import Link from 'next/link'
import { useRouter } from "next/router"
import styles from '../styles/header.module.css'


const Header = () => {
    const router = useRouter()
    return (
        <header className={styles.header}>
            <div className={`container ${styles.bar}`}>
                <Link legacyBehavior href='/'>
                    <a>
                        <Image src="/img/logo.svg" width={300} height={40} alt="imagen logotipo" />
                    </a>
                </Link>
                <nav className={styles.navegation}>
                    <Link legacyBehavior href='/'>
                        <a className={router.pathname === '/' ? styles.active : ''}>
                            Inicio
                        </a>
                    </Link>
                    <Link legacyBehavior href='/us'>
                        <a className={router.pathname === '/us' ? styles.active : ''}>
                            Nosotros
                        </a>
                    </Link>
                    <Link legacyBehavior href='/store'>
                        <a className={router.pathname === '/store' ? styles.active : ''}>
                            Tienda
                        </a>
                    </Link>
                    <Link legacyBehavior href='/blog'>
                        <a className={router.pathname === '/blog' ? styles.active : ''}>
                            Blog
                        </a>
                    </Link>
                    
                </nav>
            </div>
        </header>
    )
}

export default Header
