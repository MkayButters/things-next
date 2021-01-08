import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Layout>
          <div className={styles.container}>
            <Head>
    
              <title>Daily XKCD</title>
              <link rel="icon" href="/favicon.ico" />
    
            </Head>
            <main className={styles.main}>
              <p>Daily XKCD</p>
            </main>
          </div>
        </Layout>
    )
}

