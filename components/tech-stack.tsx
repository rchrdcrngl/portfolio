"use client";

import { motion } from "framer-motion";

type TechStackProps = {
  technologies: string[];
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <section
      id="technologies"
      className="relative my-28 h-full scroll-mt-28 sm:my-40"
    >
      <div className="flex flex-col md:flex-row w-full h-max">
        <div className="relative w-full px-0 md:px-12 md:w-2/5 h-full flex items-center justify-center mb-4 md:mb-0">
          <h1
            className="font-clash font-bold text-3xl md:text-5xl">
            Technologies Used
          </h1>
        </div>
        <div className="relative w-full md:w-3/5 h-auto flex justify-center items-center">
          <ul className="flex flex-wrap justify-start gap-2 text-lg md:text-2xl px-4">
            {technologies.map((tech, index) => (
              <motion.li
                className="px-5 py-1 md:py-3 bg-white borderBlack rounded-full dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
