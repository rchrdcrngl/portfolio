
type ChipsProps = {
    chips: string[]
}

export default function Chips({ chips }: ChipsProps){
    return (chips && 
        <div className="mt-2 mb-2 opacity-50 hidden md:block">
          {chips.map((c:string,i) => (<div key={i} className="inline-block text-sm w-fit px-4 py-1 mr-2 bg-primary-900 text-primary-100">{c.toUpperCase()}</div>))}
        </div>
    );
}