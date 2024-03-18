"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import ProfileCamera from "./camera";
import { getWindowDimensions } from "@/lib/utils";
import { Bitter } from 'next/font/google';
import { useTheme } from "@/context/theme-context";

const bitter = Bitter({ weight: '400', subsets: ['latin']})

type AboutParagraph = {
  heading: string | null;
  paragraph: string;
}

type AboutProps = {
  aboutBody: AboutParagraph[];
  profileImage?: string | null;
};

export default function About({ aboutBody, profileImage }: AboutProps) {
  const { ref } = useSectionInView("About", 0.1);
  const { theme, toggleTheme } = useTheme();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);
  const [isDesktop, setIsDesktop] = useState(windowDimensions.innerWidth > 550);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
      setIsDesktop(windowDimensions.innerWidth > 550);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const translateY = useTransform(
    scrollYProgress, 
    [0.3, 0.55], 
    [0, 220]
  );
  const profileOpacity = useTransform(
    scrollYProgress,
    isDesktop? [0.45, 0.65] : [0.2, 0.45],
    ["0%", "100%"]
  );
  const translateX = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    [300, 0]
  );
  const cameraOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.20],
    ["0%", "100%"]
  );
  const background = useTransform(
    scrollYProgress,
    [0.10, 0.20],
    theme=='light'?
    ['rgba(0,0,0,0)', 'rgba(210, 224, 180,1)']:
    ['rgba(0,0,0,0)', 'rgba(120, 143, 120,1)']
  )

  return (
    aboutBody && (
      <motion.section id="about" ref={ref} className="snap-center relative mb-20 rounded-3xl" style={{ background }}>
        <div className=" h-[75vh] flex items-center justify-center">
          <h1 className="text-5xl font-bold font-clash text-center"><span className="hidden md:inline-block mr-2">╔════▣</span>Who Am I?<span className="hidden md:inline-block ml-2">▣════╗</span></h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div ref={sectionRef} className="sticky w-full top-0 left-0 pt-0 md:pt-32 px-2 md:px-12 flex flex-col justify-around">
            {aboutBody.map((p, i) => (
              <div className="h-[75vh] flex flex-col px-6">
                {
                  p.heading && 
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, ease: 'easeIn' }}
                    className={`text-4xl md:text-6xl font-clash font-bold leading-10`}>
                      {p.heading}
                  </motion.p>
                }
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, ease: 'easeIn' }}
                  className={`text-xl leading-10 md:text-3xl ${bitter.className}`}>
                    {p.paragraph}
                </motion.p>
              </div>
            ))}
            
          </div>
          <div className="sticky h-screen w-full md:w-1/3 top-0 right-0 overflow-hidden ">
            {profileImage && (
              <motion.div
                className="absolute h-max w-full flex justify-center px-[1.5rem] md:px-[3rem] mt-12 md:mt-[20vh]"
                style={{ opacity: cameraOpacity, translateX, }}>
                  <ProfileCamera
                    motionStyle={{
                      translateY,
                      zIndex: 3,
                      opacity: profileOpacity,
                    }}
                    style={"w-full"}
                    path={profileImage}
                  />
              </motion.div>
            )}
          </div>
        </div>
        {/*}
        <motion.section
          ref={sectionRef}
          style={{}}
          id="about"
        >
          <div className="flex flex-col md:flex-row md:justify-evenly w-screen h-max">
            <div className="relative w-full md:w-3/4 sticky px-10 md:px-5 h-full md:h-auto">
              <motion.div
                className={`text-xl leading-10 md:text-3xl px-4 ${bitter.className}`}
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {aboutBody.map((p, i) => (
                  <p
                    key={i}
                    className={i !== 0 ? "mt-1 inline-block" : "block"}
                  >
                    {p}
                  </p>
                ))}
              </motion.div>
            </div>
            <motion.div className="relative h-screen md:h-screen w-full order-1 md:order-2 md:w-1/4 mt-10 md:mt-0">
              {profileImage && (
                <motion.div
                className="absolute h-max w-full flex justify-center px-[3rem]"
                  style={{ opacity: cameraOpacity, translateX, }}
                >
                  <ProfileCamera
                    motionStyle={{
                      translateY,
                      zIndex: 3,
                      opacity: profileOpacity,
                    }}
                    style={"w-full"}
                    path={profileImage}
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.section>
       {*/}
      </motion.section>
    )
  );
}
