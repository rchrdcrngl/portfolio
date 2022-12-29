import Head from 'next/head'
import Image from 'next/image'
import fs from "fs/promises";
import path from "path";

export default function ProjectPage({ projectData }) {
    return (
        <>
            <Head>
                <title>{projectData.title} - RCHRD CRNGL</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='bg-slate-50'>
                {
                    JSON.stringify(projectData)
                }
                {
                    projectData.images.map((i)=>
                    <div>
                        <Image src={i.url} alt={i.description}/>
                        {i.description}
                    </div>)
                }
            </main>
        </>
    )
}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();});
}

export async function getStaticProps({ params }) {
    const raw = await fs.readFile(path.join(process.cwd(), "./data.json"), { encoding: "utf-8" });
    const parsed = await JSON.parse(raw)
    const data = parsed.filter((p)=>p.slug===params.slug)
    return { props: { projectData: data[0] } };
}

/** @type {import('next').GetStaticPaths} */
export async function getStaticPaths() {
    const raw = await fs.readFile(path.join(process.cwd(), "./data.json"), { encoding: "utf-8" });
    const parsed = await JSON.parse(raw)
    const paths = parsed.map((c) => ({ params: { slug: c.slug } }));
    return { paths, fallback: false };
}