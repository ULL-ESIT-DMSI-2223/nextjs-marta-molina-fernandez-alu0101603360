import Link from 'next/link'
import styles from "./index.module.css";

export default function FourOhFour() {
    return <>
        <main className={styles.main}>
            <h1>404 - Page Not Found</h1>
            <Link href="/">
                <a>
                    Volver al inicio
                </a>
            </Link>
        </main>
    </>
}