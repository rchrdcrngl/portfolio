import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>RCHRD CRNGL</title>
      </Head>
      <NavBar />
      <main className={styles.main}>
        Hello, I'm Richard Maru Caringal
      </main>
      <section id='projects'>
        {JSON.stringify(projects)}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const raw = await fs.readFile(path.join(process.cwd(), "./data.json"), { encoding: "utf-8" });
  const parsed = await JSON.parse(raw)
  const partialData = parsed.map(({ title, slug, images }) => ({ title, slug, images }))
  return { props: { projects: partialData } };
}