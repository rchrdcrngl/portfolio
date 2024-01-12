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

type AboutProps = {
  aboutBody: string;
  profileImage?: string | null;
};

export default function About({ aboutBody, profileImage }: AboutProps) {
  const { ref } = useSectionInView("About", 0.1);
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
    isDesktop? [0.5, 0.75] : [0.75, 0.90], 
    [0, 220]
  );
  const profileOpacity = useTransform(
    scrollYProgress,
    isDesktop? [0.55, 0.75] : [0.75, 0.90],
    ["0%", "100%"]
  );
  const translateX = useTransform(
    scrollYProgress,
    [0.40, 0.50],
    [320, 0]
  );
  const cameraOpacity = useTransform(
    scrollYProgress,
    isDesktop? [0.0, 0.2] : [0.55, 0.70],
    isDesktop? ["0%", "100%"] : ["0%", "100%"]
  );
  

  return (
    aboutBody && (
      <div ref={ref} className="w-screen snap-center mt-0 md:mt-32">
        <motion.section
          ref={sectionRef}
          style={{}}
          id="about"
        >
          <div className="flex flex-col md:flex-row md:justify-evenly w-screen h-max">
            <div className="relative w-full md:w-3/4 sticky px-10 md:px-5 h-full md:h-auto">
              <motion.div
                className="text-xl leading-10 md:text-3xl font-clash px-4"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                /*style={{ y: scrollY, translateY: '-100vh'}}*/
              >
                {aboutBody.split("%np%").map((p, i) => (
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
      </div>
    )
  );
}
