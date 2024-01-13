"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { motion } from "framer-motion";

type SkillsProps = {
  skills: string[];
}

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

export default function Skills( { skills }: SkillsProps ) {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-28 h-full scroll-mt-28 sm:mb-40"
    >
      <div className="flex flex-row md:justify-evenly w-full h-max">
        <div className="relative w-1/5 h-full flex justify-center">
          <h1 
            className="font-clash font-bold text-5xl md:text-9xl text-outline scale-[-1]" 
            style={{ writingMode: 'vertical-lr' }}>
            Skills
          </h1>
        </div>
        <div className="relative w-4/5 h-auto flex justify-center items-center">
          <ul className="flex flex-wrap justify-start gap-1 text-2xl font-clash">
            {skills.map((skill, index) => (
              <motion.li
                className="px-5 py-1 md:py-3 skill-item"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
