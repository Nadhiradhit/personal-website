"use client"
import SectionHeading from "@/components/elements/section-heading"
import { skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import React from "react"
import { motion } from "framer-motion"
import { once } from "events"

const fadeInAnimation = {
    initial : {
        opacity: 0,
        y: 100,
    },
    animate : (index: number) => ({
        opacity: 1,
        y: 0,
        transition:{
            delay: 0.05 * index,
        },
    }),
}

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5)
    return (
        <section ref={ref} id="skill" className="mt-28 max-w-[53rem] scroll-mt-28 sm:mb-40 text-slate-950 dark:text-slate-50 ">
            <SectionHeading> My Skills </SectionHeading>
            <div className="relative">
                <ul className="flex flex-wrap justify-center gap-2">
                    {
                        skillsData.map((skills, index) => (
                            <motion.li
                            variants={fadeInAnimation}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                                className="bg-gray-100 hover:bg-blue-200 border-black/[0.1] rounded-md py-2 px-3
                                dark:bg-slate-900 hover:dark:bg-indigo-700 cursor-pointer
                                "
                            >{skills}</motion.li>
                        ))
                    }
                </ul>
            <div className="bg-gradient-to-tl from-[#a1f19e] to-[#74bce6] absolute top-[-3rem] -z-10 left-[-30rem] h-[20.25rem] sm:h-[10.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
            dark:from-[#40295a] dark:to-[#6f4599]
            "></div>
            </div>
        </section>
    )
}
