import Link from "next/link"
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.navegation}>
          <Link legacyBehavior href='/'>
            Inicio
          </Link>
          <Link legacyBehavior href='/us'>
            Nosotros
          </Link>
          <Link legacyBehavior href='/store'>
            Tienda
          </Link>
          <Link legacyBehavior href='/blog'>
            Blog
          </Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos reservados { new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}

export default Footer
