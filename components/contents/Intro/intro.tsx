"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import { motion,easeInOut } from "framer-motion"
import  Links  from "@/components/elements/link-nav"
import { useSectionInView } from "@/lib/hooks"

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5)
    return (
        <section ref={ref} id="home" className="mb-24 max-w-[40rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <div>
                    <motion.div
                        initial={{ opacity: 0 , y: 100}}
                        animate={{ opacity: 1 , y: 0}}
                        transition={{ type: "spring", delay: 0.1, stiffness: 125, duration:0.7}}
                    >
                        <h1 className="text-4xl text-center">
                            <span className="font-poppins  font-semibold">Hello Everyone! </span> 
                        </h1>
                        
                    </motion.div>
                </div>
                <div className="relative">
                    <motion.div
                        initial={{ y: 100,  opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.1, stiffness: 125, duration:0.7}}
                    >                    
                        <Image 
                            src="/images/profile.png"
                            alt="Profile Picture"
                            width="1000"
                            height="1000"
                            className="rounded-full w-32 h-32 border-white border-4 shadow-black/[0.03] backdrop-blur-[0.5rem]"
                        />
                    </motion.div>                    
                </div>
            </div>
            <motion.h1 
                className="mb-8 mt-4 px-4 text-xl font-medium !leading[1.5] text-center text-slate-800 dark:text-gray-400"
                initial={{ y: 100, originZ: 0.5,  opacity: 0 }}
                animate={{ y: 0, originZ: 0, opacity: 1 }}
                transition={{ delay: 0.2, ease: easeInOut, }}
                >
                My name <span className="font-bold text-slate-950 dark:text-gray-200">Nadhir Adhitya Zhalifunnas.{" "}</span>
                I'm a{" "}<span className="font-bold text-slate-950 dark:text-gray-200">Full-Stack Web Developer </span>
                with 3 years of experience. I enjoy building websites with a powerfull design, i also enjoy to design a websites.
                Right now im focused at working in {" "}<span className="text-slate-950 dark:text-gray-200 font-semibold">Next.js and Tailwind.</span>
            </motion.h1>

            <Links/>
        </section>
    )
}
