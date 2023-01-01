import Link from 'next/link'
import Head from 'next/head'

export default function Error404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <div className='flex justify-center items-center h-screen bg-slate-900 text-white'>
                <div className='justify-center items-center w-20'>
                    <div className='font-bold text-lg'>404</div>
                    <div>The page you are requesting does not exist</div>
                    <Link href={'/'}>Go back home.</Link>
                </div>
            </div>
        </>
    )
}
