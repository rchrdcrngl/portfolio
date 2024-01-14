"use client";

import { ProjectImage } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type LaptopGalleryProps = {
    images: ProjectImage[];
}

export default function LaptopGallery({ images }: LaptopGalleryProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-95%"]);
  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute h-full w-full px-4 flex justify-center items-center">
            <h1 className="text-6xl md:text-9xl font-clash font-bold text-outline opacity-20 uppercase">Sample Screenshots</h1>
        </div>
        <motion.div style={{ x }} className="flex gap-12 px-6">
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
        className="group relative w-[90vw] md:w-[calc(100vw/2)] px-4 py-2 overflow-hidden 
                   transition-transform duration-300 hover:scale-105"
      >
        <img src={"laptop.webp"} className="absolute inset-0 h-full w-full z-[5]" />
        <div className="relative h-full w-full pt-3 px-4 pb-12 md:pt-6 md:px-14 md:pb-24 z-0 overflow-hidden">
            <Image
            height={0}
            width={0}
            sizes="100%"
            src={image.url}
            className="relative h-full w-full object-cover object-center"
            alt={image.description||"Project gallery image"}
            />
            {/*
            <div className="absolute z-[3] pt-6 px-14 pb-24 h-full w-full opacity-0 group-hover:opacity-100 
                            flex justify-center items-center group-hover:bg-teal-500 inset-0">
                <p className="text-white font-clash font-bold text-xl">{image.description}</p>
            </div>
            */}
        </div>
      </div>
    );
  };