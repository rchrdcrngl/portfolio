import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import fs from "fs/promises"
import path from "path"
import randomColor from "randomcolor"
import { SocialIcon } from 'react-social-icons'

export default function Home({ profile, projects }) {
  return (
    <>
      <Head>
        <title>RCHRD CRNGL</title>
      </Head>
      <NavBar />
      <main className="bg-white  dark:bg-gray-900">
        <section className="px-10 md:px-20 lg:px-40 bg-gradient-to-b dark:from-purple-900 dark:to-gray-900 from-cyan-200 to-white">
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-300 md:text-6xl">
              {profile.name}
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              {profile.subheader}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              {profile.description}
            </p>
          </div>
        </section>
        <section className='px-10 md:px-20 lg:px-40'>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Skills and Technologies I Use</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a Computer Science student, I have learned different
              <span className="text-teal-500"> skills and technologies </span>
              to create different kinds of <span className="text-teal-500"> systems and apps. </span>
              The following below are my skills and the technologies I use in my projects.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div>
              {
                profile.skills.map((d) => (
                  <div key={d} className='inline-block mx-3 my-2 px-2 py-1 rounded-md font-bold font text-white cursor-default' style={{ 'backgroundColor': randomColor({ luminosity: 'dark' }) }}>
                    {d}
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        <section className="py-10 px-10 md:px-20 lg:px-40" id={'projects'}>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {profile.projects_description}
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 xl:flex-row xl:flex-wrap">
            {
              projects.map((p) => (
                <Link href={`/${p.slug}`} key={p.slug}>
                  <div className="group basis-1/3 flex-1 relative transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className='absolute transition ease-in-out duration-300 w-full h-96 bg-gradient-to-b from-transparent to-teal-700 hidden group-hover:block rounded-lg'></div>
                    <div className='absolute transition ease-in-out duration-300 bottom-0 left-0 pl-5 pb-5 pr-2 font-bold text-xl text-slate-200 hidden group-hover:block'>{p.title}</div>
                    <img
                      className="rounded-lg object-cover object-left-top w-full h-96"
                      title={p.name}
                      src={p.images[0].url}
                    />
                  </div>
                </Link>
              ))
            }
          </div>
        </section>
        <section className='px-10 md:px-20 lg:px-40 flex justify-center items-center bg-cyan-100 dark:bg-cyan-300 py-5 md:py-12'>
          <div className='items-center justify-center md:items-start w-full'>
            <h3 className="text-2xl text-center text-black block md:float-left pb-5 md:pb-0">You can know more about me through</h3>
            <div className='md:float-right items-center flex justify-between w-full px-3 md:px-0 md:w-1/2'>
              {
                profile.contacts.map((c) => (<SocialIcon url={c.url} fgColor={'white'}/>))
              }
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const proj_data = await fs.readFile(path.join(process.cwd(), "./data.json"), { encoding: "utf-8" })
  const parsed = await JSON.parse(proj_data)
  const partialData = parsed.map(({ title, slug, images }) => ({ title, slug, images }))
  const profile_data = await fs.readFile(path.join(process.cwd(), "./profile.json"), { encoding: "utf-8" })
  return { props: { profile: JSON.parse(profile_data), projects: partialData } };
}