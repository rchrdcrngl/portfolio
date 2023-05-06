import { useState } from "react"

export default function NavBar() {
    const [showHiddenDiv, setHiddenDiv] = useState(false)
    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight cursor-default">RCHRD CRNGL</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={()=>setHiddenDiv((s)=>!s)} className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-900 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto" style={{'display':showHiddenDiv?'block':'hidden'}}>
                <div className="text-sm lg:flex-grow">
                    <a href="/portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="/portfolio/#projects" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                        Projects
                    </a>
                </div>
            </div>
        </nav>
    )
}