import Link from 'next/link'
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <div className='flex justify-center items-center h-screen'>
                <div className='font-bold text-lg bg-slate-900'>404</div>
                <div>The page you are requesting does not exist</div>
                <Link href={'/'}>Go back home.</Link>
            </div>
        </>
    )
}
