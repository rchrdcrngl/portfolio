"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Contact } from "@/lib/types";
import Link from "next/link";

type ContactsProps = {
  contacts: Contact[];
}

export default function Contact({ contacts }: ContactsProps) {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-screen px-0 md:px-24"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="font-clash text-xl md:text-5xl border row-span-2 md:row-span-1 col-span-1 md:col-span-2 flex md:items-end p-8 bg-primary-500 text-primary-100">Contact me at</div>
        {contacts.map((contact,index)=>(
          <Link href={contact.url} className={`border w-full h-52 flex justify-center items-center text-xl md:text-3xl bg-secondary-${Math.max(500-index*100,100)} text-accent-${Math.min(500+index*100,900)}`}>{contact.name}</Link>
        ))}
      </div>
    </motion.section>
  );
}