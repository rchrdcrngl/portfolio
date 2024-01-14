"use client";

import { ProjectImage } from "@/lib/types";
import Image from "next/image";
import { getWindowDimensions } from "@/lib/utils";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type PhoneGalleryProps = {
  images: ProjectImage[];
};

export default function PhoneGallery({ images }: PhoneGalleryProps) {
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
        <motion.div style={{ x }} className="flex gap-8">
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
        className="group relative h-max w-[90vw] md:w-[calc(100vw/7)] px-4 py-1 overflow-hidden 
                   transition-transform duration-300 hover:scale-110"
      >
        <img src={"phone.webp"} className="absolute inset-0 h-full w-full z-[5]" />
        <div className="relative h-full w-full px-2 md:px-0 py-4 md:py-3 z-0 rounded-[4rem] md:rounded-[2rem] overflow-hidden">
            <div className="z-[3] px-4 absolute h-full w-full opacity-0 group-hover:opacity-100 flex justify-center items-center group-hover:bg-teal-500">
                <p className="text-white font-clash font-bold text-xl">{image.description}</p>
            </div>
            <Image
            height={0}
            width={0}
            sizes="100%"
            src={image.url}
            className="relative h-full w-full object-cover object-center"
            alt={image.description||"Project gallery image"}
            />
        </div>
      </div>
    );
  };