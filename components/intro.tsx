"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { useActiveSectionContext } from "@/context/active-section-context";
import MouseAstronaut from "./astronaut";

type IntroProps = {
  name: string;
  description: string;
  linkedIn: string;
  github: string;
  chips?: string[] | null;
};

export default function Intro({ name, description, linkedIn, github, chips }: IntroProps) {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  
  return (
    <section
      ref={ref}
      id="home"
      className="w-full h-screen"
    >
      
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      

      <MouseAstronaut style={"h-40 md:h-80 right-0 bottom-0 z-[-1]"} />

      <div className="h-full z-[5] flex items-center">
        <div className="h-full flex items-center pl-10 z-10">
          <div>
            <h3 className="font-archivo text-lg md:text5xl">Hi👋, I'm </h3>
            <h1 className="font-clash text-bold text-5xl md:text-9xl">
              {name}
            </h1>
            <p>{description}</p>
            
            <motion.div
              className="mt-4 flex flex-row items-center gap-2 font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <Link
                href="#contact"
                className="group hidden md:inline-flex bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me here{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="https://github.com/rchrdcrngl/portfolio/blob/master/public/CV.pdf?raw=true"
                download
              >
                Download CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>

              <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href={linkedIn}
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href={github}
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
