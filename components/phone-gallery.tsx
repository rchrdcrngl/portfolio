"use client";

import { ProjectImage } from "@/lib/types";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type PhoneGalleryProps = {
  images: ProjectImage[];
};

export default function PhoneGallery({ images }: PhoneGalleryProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["95%", "-95%"]);
  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute h-full w-full px-4 flex justify-center items-center">
            <h1 className="text-6xl md:text-9xl font-clash font-bold text-outline opacity-20 uppercase">Sample Screenshots</h1>
        </div>
        <motion.div style={{ x }} className="flex gap-6">
          {images.map((image, index) => {
            return <Card image={image} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

const Card = ({ image, key }:{ image:ProjectImage, key:number }) => {
    return (
      <div
        key={key}
        className="group relative h-[85vmax] w-[55vmax] md:h-[65vmin] md:w-[35vmin] overflow-hidden flex justify-center items-center
                   transition-transform duration-300 hover:scale-110"
      >
        <div className="relative h-full w-auto">
          <img src={"phone.webp"} className="relative h-full w-auto z-[5]" />
          <div className="absolute top-[1.95vmin] left-[2.5vmax] md:left-[2.35vmin] right-[2.5vmax] md:right-[2.35vmin] bottom-[1.95vmax] md:bottom-[1.95vmin] rounded-[8vmax] md:rounded-[1.5vmin] z-0 overflow-hidden">
              <Image
              height={0}
              width={0}
              sizes="100%"
              src={image.url}
              className="relative h-full w-full object-cover object-center"
              alt={image.description||"Project gallery image"}
              />
              <div className="absolute z-[3] pt-6 px-14 pb-24 h-full w-full opacity-0 group-hover:opacity-100 
                              flex justify-center items-center group-hover:bg-teal-500 inset-0">
                  <p className="text-white font-clash font-bold text-xl">{image.description}</p>
              </div>
          </div>
        </div>
      </div>
    );
  };