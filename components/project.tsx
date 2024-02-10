"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectData } from "@/lib/types";
import Link from "next/link";

export type ProjectProps = {
  project: ProjectData;
};

export default function Project({ project }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgess,
      }}
      className="group mb-16 md:mb-10 last:mb-0"
    >
      <div className="w-full rounded-lg sm:pr-8 relative transition sm:group-even:pl-8">
        <div
          className="relative block ml-6 md:ml-0 mb-1
            w-full max-h-[20rem]
            border md:border-0
            glow
            overflow-hidden
          "
        >
          <Image
            src={project.images[0].url}
            alt={project.images[0].description ?? "Project I worked on"}
            quality={95}
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover object-left-top
            transition duration-300 ease-in-out 
            group-hover:scale-[1.2]
            "
          />
        </div>

        <div className="relative px-6 md:px-0 md:pt-10 w-full flex flex-col h-full">
          <Link
            className="relative text-2xl md:text-5xl font-clash font-bold uppercase hover:underline"
            href={project.slug}
          >
            {project.title}
          </Link>
          <p className="relative hidden md:block mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {project.description}
          </p>
          <ul className="relative flex flex-wrap mt-2 md:mt-4 gap-2">
            {project.technology.map((tag, index) => (
              <li
                className={`border-2 px-3 py-1 text-[0.7rem] 
                              uppercase tracking-wider rounded-full 
                              ${index > 6 ? "hidden md:block" : ""}`}
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
