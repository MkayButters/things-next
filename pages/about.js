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
    
              <h1 className={styles.title}>Daily XKCD</h1>
              <h2>{props.comic.safe_title}</h2>
              <img src={props.comic.img} alt={props.comic.alt} />
    
            </main>
          </div>
        </Layout>
    )
}

