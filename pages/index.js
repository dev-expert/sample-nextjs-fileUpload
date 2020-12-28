import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/shared-components/layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ul>
          <li>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a href="/jobs/apply-job">
              Apply Jobs
              </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
