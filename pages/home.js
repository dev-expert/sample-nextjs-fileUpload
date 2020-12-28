import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/shared-components/Layout';
export default function Home() {
    return (
        <Layout>
            <Link href="/">
                <a>Back</a>
            </Link>
            <h1 className={styles.title}>
                Welcome to Home Page!
            </h1>
        </Layout>
    )
}
