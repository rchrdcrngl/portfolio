import Head from 'next/head'
import Link from 'next/link'
import randomColor from "randomcolor"
import fs from "fs/promises";
import path from "path";
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react'

export default function ProjectPage({ projectData }) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isWideImage, setIsWideImage] = useState(false);

    useEffect(() => {
        const images = document.querySelectorAll("img");
        console.log(images)
        images.forEach((img) => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            console.log(aspectRatio)
            setIsWideImage((aspectRatio >= 1.4) || isWideImage);
        });
    }, []);

    return (
        <>
            <Head>
                <title>{projectData.title} - Richard Maru Caringal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <NavBar />
            <main className="bg-white  dark:bg-gray-900 dark:text-white">
                <section className="px-10 md:px-20 lg:px-40 min-h-full bg-gradient-to-r dark:from-cyan-900 dark:to-purple-900 from-cyan-200 to-purple-200">
                    <div className="text-center p-10 py-10">
                        <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-300 md:text-6xl">
                            {projectData.title}
                        </h2>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                            {projectData.description}
                        </p>
                        <div className='flex flex-col md:flex-row md:justify-evenly py-5'>
                            {projectData.source_code && projectData.source_code != '' ? <InfoButtons url={projectData.source_code} label={'Go to GitHub Repository'} /> : <></>}
                            {projectData.latest_output && projectData.latest_output != '' ? <InfoButtons url={projectData.latest_output} label={projectData.latest_output.includes('github') ? 'Download latest build' : 'View latest output'} /> : <></>}
                        </div>
                    </div>
                </section>
                <section className="min-h-screen px-10 py-10 md:px-20 lg:px-40">
                    <h3 className="text-3xl py-1 dark:text-white mb-3">Project Preview</h3>
                    <div className={`grid grid-cols-1 content-center justify-stretch gap-4 sm:grid-cols-2 ${isWideImage ? 'md:grid-cols-2' : 'md:grid-cols-3'} ${isWideImage ? 'lg:grid-cols-2' : 'lg:grid-cols-4'}`}>
                        {
                            projectData.images.map((i) =>
                                <div className='flex flex-col items-center mb-3'>
                                    <img src={i.url} alt={i.description} className='rounded-md'></img>
                                    <div className='text-md md:text-lg'>{i.description}</div>
                                </div>)
                        }
                    </div>
                </section>
                <section className="px-10 py-10 md:px-20 lg:px-40 bg-purple-600">
                    <div className="flex justify-center items-center">
                        <div className='text-center items-center'>
                            <h2 className="text-5xl py-2 text-teal-300 font-medium md:text-5xl mb-2">
                                Technologies Used
                            </h2>
                            {projectData.technology.map((t) =>
                                <div key={t} className='inline-block mx-3 my-2 px-2 py-1 rounded-md font-bold text-slate-100 cursor-pointer' style={{ 'backgroundColor': randomColor({ luminosity: 'dark' }) }}>
                                    {t}
                                </div>)
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

function InfoButtons({ label, url }) {
    return (
        <Link href={url} className='border border-black dark:border-white px-5 py-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300'>
            {label}
        </Link>
    )
}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase(); });
}

export async function getStaticProps({ params }) {
    const raw = await fs.readFile(path.join(process.cwd(), "./data.json"), { encoding: "utf-8" });
    const parsed = await JSON.parse(raw)
    const data = parsed.filter((p) => p.slug === params.slug)
    return { props: { projectData: data[0] } };
}

/** @type {import('next').GetStaticPaths} */
export async function getStaticPaths() {
    const raw = await fs.readFile(path.join(process.cwd(), "./data.json"), { encoding: "utf-8" });
    const parsed = await JSON.parse(raw)
    const paths = parsed.map((c) => ({ params: { slug: c.slug } }));
    return { paths, fallback: false };
}