"use client"
import React from 'react'
import Image from 'next/image'
import { motion,easeInOut } from 'framer-motion'
import  Links  from '@/components/elements/link-nav'

export default function Intro() {
    return (
        <section id="home" className="mb-12 max-w-[40rem] text-center scroll-mt-28">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <div>
                    <motion.div
                        initial={{ opacity: 0 , y: 100}}
                        animate={{ opacity: 1 , y: 0}}
                        transition={{ type: "spring", delay: 0.1, stiffness: 125, duration:0.7}}
                    >
                        <h1 className="text-4xl text-center">
                            <span className="font-poppins  font-semibold text-gradient">Hello Everyone! </span> 
                            👋
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
                            src="/images/profile.jpg"
                            alt="Profile Picture"
                            width="1000"
                            height="1000"
                            className="rounded-full w-60 h-60 shadow-black/[0.03] backdrop-blur-[0.5rem]"
                        />
                    </motion.div>                    
                </div>
            </div>
            <motion.h1 
                className="mb-8 mt-4 px-4 text-xl font-medium !leading[1.5] text-center"
                initial={{ y: 100, originZ: 0.5,  opacity: 0 }}
                animate={{ y: 0, originZ: 0, opacity: 1 }}
                transition={{ delay: 0.2, ease: easeInOut, }}
                >
                <span className="font-bold">I'm Nadhir Adhitya Zhalifunnas.{" "}</span>
                I'm a{" "}<span className="font-semibold">Full-Stack Web Developer And Front-End Web Developer </span>
                with{" "}<span className="font-bold">3 years </span>of experience. I enjoy building <span className="italic">
                Website with a powerfull design, and also i enjoy to design a website.</span>
                Right know i'm focus at {" "}<span className="text-blue-500">Next.js and Tailwind.</span>
            </motion.h1>

            <Links/>
        </section>
    )
}
