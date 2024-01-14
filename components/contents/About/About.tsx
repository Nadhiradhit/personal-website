"use client"
import React, { useEffect } from 'react'
import SectionHeading from '@/components/elements/section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView("About")
    return (
        <section className="mb-28 mt-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
            <motion.div className="relative"
                initial= {{y: 100, opacity:0}}
                animate= {{y: 0, opacity:1}}
                transition={{ delay: 0.175}}
                id="about"
                ref={ref}
            >
                <SectionHeading> About Me </SectionHeading>
                <p className="mb-3">
                    Experienced with {" "} 
                    <span className="font-bold">Full Stack Web Developer and Frontend Web Developer</span> , Skilled in a wide range of technologies including <span className="font-bold">HTML, CSS, Javascript, PHP, Laravel, Next.js, Node.js, Tailwindcss, Bootstrapcss.</span> 
                    {" "}My favorite part of programming is design website, and problem-solving aspect. Who has some value to build a creative and interactive Website. 
                    Able to effectively self-manage during independent projects, and weel to collaborate in a team. 
                    I am always looking to learn new technologies.{" "} 
                    I am currently looking for a <span className="font-bold"> full-time </span> position as a Full-Stack Web Developer and Front-End Web Developer.
                </p>
                <div className="bg-gradient-to-tr from-[#b3f0e8] to-[#ceecfd] absolute top-[-1rem] -z-10 left-[10rem] 
                h-[20.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
                dark:from-[#3f2d5f] dark:to-[#42155c]
                "></div>
            </motion.div>
        </section>
    )
}
