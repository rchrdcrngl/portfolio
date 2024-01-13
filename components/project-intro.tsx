import { ProjectImage } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectInfoProps = {
  title: string;
  description?: string | null;
  image?: ProjectImage | null;
  sourceCode?: string | null;
  latestOutput?: string | null;
};

export default function ProjectInfo({ title, description, image, sourceCode, latestOutput }: ProjectInfoProps) {
  return (
    <section id="info" className="w-full h-screen">
      { image && <FadeInBackground image={image} /> }
      <div className="opacity-60 bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="opacity-60 bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <div className="h-full z-[5] flex items-center justify-center">
        <div className="text-center w-3/5 md:w-1/2">
          <h1 className="font-clash text-3xl md:text-5xl">{title}</h1>
          { description && <p className="mt-2">{description}</p> }
          <div className='flex flex-col md:flex-row md:justify-evenly py-5'>
            { sourceCode && <Link href={sourceCode} target="_blank" className="mt-2 md:mt-0 group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 justify-around">GitHub Repository<FaGithubSquare /></Link>}
            { latestOutput && <Link href={latestOutput} target="_blank" className="mt-2 md:mt-0 group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 justify-around">{ latestOutput.includes("github")? "Download latest build" : "View latest output"}<FiArrowUpRight/></Link>}
          </div>
        </div>
      </div>
    </section>
  );
}

function FadeInBackground({ image }: { image:ProjectImage }){
    return(
        <div className="absolute w-full h-1/2 overflow-hidden z-[-15] fade-img">
            <Image
                src={image.url}
                alt={image.description || "Image"}
                quality={95}
                width={0}
                height={0}
                sizes="100%"
                className="h-full w-full object-cover object-left-top opacity-50 dark:opacity-80 scale-150 md:scale-100"
            />
        </div>
    );
}

