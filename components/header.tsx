"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className={clsx("fixed top-0 left-1/2 h-[4.5rem] w-full", {
          "bg-white dark:bg-gray-950 bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.8rem] dark:bg-opacity-40":
            activeSection !== "Home",
        })}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <div className={clsx("fixed top-0 h-[4.5] pt-6 pl-5 hidden md:block cursor-default")}>RCHRD CRNGL</div>

      <nav className="flex fixed left-1/2 h-[4.5rem] -translate-x-1/2 py-2 sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 py-3">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-200 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-100":
                    activeSection === link.name,
                    "font-bold":
                    activeSection === 'Home' && link.name === 'Home',
                  }
                )}
                href={"/"+link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className={clsx("rounded-full absolute inset-0 -z-10", {
                      "bg-gray-100 dark:bg-gray-800": activeSection !== "Home",
                      "border-2 border-gray-900 dark:border-gray-100": activeSection === "Home",
                    })}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
