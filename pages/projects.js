import Head from 'next/head'
import Image from 'next/image'
import fs from "fs/promises";
import path from "path";
import NavBar from '../components/NavBar';

export default function ProjectPage({ projects }) {
    return (
        <>
            <Head>
                <title>Projects - RCHRD CRNGL</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <NavBar/>
            <main className='bg-slate-50'>
                {
                    JSON.stringify(projects)
                }
            </main>
        </>
    )
}

export async function getStaticProps() {
    const raw = await fs.readFile(path.join(process.cwd(), "./data.json"), { encoding: "utf-8" });
    const parsed = await JSON.parse(raw)
    const partialData = parsed.map(({title, slug, images})=>({title, slug, images}))
    return { props: { projects: partialData } };
}