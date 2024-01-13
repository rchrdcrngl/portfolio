"use client";

import { useFollowPointer } from "@/hooks/use-follow-mouse";
import { getWindowDimensions } from "@/lib/utils";
import clsx from "clsx";
import { animate, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type MouseAstronautProps = {
  style?: string | null;
  children?: React.ReactNode;
};

export default function MouseAstronaut({ style }: MouseAstronautProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { point, rotation } = useFollowPointer(ref);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);
  const [mouseLocation, setPoint] = useState({ x: 0, y: 0 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const x = clientX;
      const y = clientY;
      setPoint({ x, y });
      if (
        x > windowDimensions.innerWidth / 2 &&
        y > windowDimensions.innerHeight / 2 &&
        !startAnimation
      )
        setStartAnimation(true);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scale = Math.max(
    0.1,
    Math.min(
      mouseLocation.x / windowDimensions.innerWidth,
      mouseLocation.y / windowDimensions.innerHeight
    )
  );

  const divAnimationVariants = {
    initial: {
      x: 0,
      y: windowDimensions.innerHeight,
      scale: 1,
      rotate: 0,
      transition: {
        type: "tween",
        duration: 8,
      },
    },
    animate: {
      x: point.x,
      y: point.y,
      scale: scale,
      rotate: rotation,
      transition: {
        type: "tween",
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      className="relative"
      ref={ref}
      variants={divAnimationVariants}
      initial="initial"
      animate={startAnimation ? "animate" : "initial"}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 4,
      }}
    >
      <WavingAstronaut style={style} />
    </motion.div>
  );
}

export function WavingAstronaut({ style }: { style?: string | null }) {
  return (
    <div className="relative bottom-0 right-0">
      <img src="astronaut_body.webp" className={clsx("absolute", style)}></img>
      <motion.img
        className={clsx("absolute", style)}
        initial={{ rotate: 0, y: 0 }}
        animate={{ rotate: -5, y: 10 }}
        transition={{
          repeatType: "mirror",
          repeat: Infinity,
          duration: 2,
        }}
        src="astronaut_hand.webp"
      ></motion.img>
    </div>
  );
}
