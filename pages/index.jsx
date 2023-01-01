import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>RCHRD CRNGL</title>
      </Head>
      <NavBar/>
      <main className={styles.main}>
        Hello, I'm Richard Maru Caringal
      </main>
    </>
  )
}
