import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
 
export const metadata = {
  title: "Page Not Found | Richard Maru Caringal",
};

export default function NotFound() {
  return (
    <main>
      <section className='h-screen w-screen flex justify-center items-center'>
        <div>
          <h1 className='text-5xl md:text-9xl font-clash font-bold'>Not Found</h1>
          <p>Could not find requested resource</p>
          <Link href="/">Return Home <FaHome className='inline-block align-middle'/></Link>
        </div>
      </section>
    </main>
  )
}