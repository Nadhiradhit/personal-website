"use client"
import React from 'react'
import SectionHeading from '@/components/elements/section-heading'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="mb-28 max-w-[45rem] text-justify leading-7 sm:mb-40 scroll-mt-28">
            <motion.div className="relative"
                initial= {{y: 100, opacity:0}}
                animate= {{y: 0, opacity:1}}
                transition={{ delay: 0.175}}
                id="about"
            >
                <SectionHeading> About Me </SectionHeading>
                <p className="mb-3 text-left">Experienced with <span className="text-blue-800 text-xl font-bold">Full Stack Web Developer</span> and 
                Frontend Web Developer, Skilled in a wide range of technologies including 
                <span className="font-semibold"> HTML, CSS, JavaScript, PHP, MySQL, Laravel, Frontend Framework.</span>
                <span className="font-bold text-lg"> My favorite part of programming is design website, and problem-solving aspect.</span>    
                </p>
                <p className="mt-3 text-right">Who has some value to build a creative and interactive 
                Website. Abble to effectively self-manage during independent projects, and weel to collaborate in a team. I am always looking to learn new technologies.
                I am currently looking for a full-tiem position as a <span className="font-bold text-xl">Full-Stack Web Developer.</span>
                </p>
                
                <div className="bg-gradient-to-tr from-[#b3f0e8] to-[#ceecfd] absolute top-[-1rem] -z-10 left-[10rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
            </motion.div>
        </section>
    )
}
