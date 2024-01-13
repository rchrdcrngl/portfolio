"use client";

import clsx from "clsx";
import { MotionStyle, motion } from "framer-motion";

type ProfileCameraProps = {
  style?: string | null;
  motionStyle?: MotionStyle | undefined;
  path: string;
};

export default function ProfileCamera({
  path,
  style,
  motionStyle,
}: ProfileCameraProps) {
  return (
    <div className={clsx("relative flex justify-center", style)}>
      <img
        className="absolute z-[5] w-full"
        src={"camera-top.webp"}
        alt="Camera Icon"
      />

      <PolaroidImage motionStyle={motionStyle} style={"absolute w-4/5 z-[1]"} path={path} />
      <img className="absolute w-full" src={"camera.webp"} alt="Camera Icon" />
    </div>
  );
}

function PolaroidImage({
  motionStyle,
  style,
  path,
}: {
  motionStyle?: MotionStyle | undefined;
  style?: string | null;
  path: string;
}) {
  return (
    <motion.div className="absolute w-full flex justify-center" style={motionStyle}>
      <div className={clsx("", style)}>
        <img
          className="absolute z-[2] top-0 left-0"
          src={"polaroid.webp"}
          alt="Polaroid Frame"
        />
        <img
          className="absolute z-0 top-0 left-0 w-full"
          src={path}
          alt="Profile Image"
        />
      </div>
    </motion.div>
  );
}
