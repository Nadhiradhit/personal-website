"use client"

import { projectsData } from '@/lib/data'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion,useScroll, useTransform } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]
export default function Project({ title,description,tags,linkUrl,imageUrl }: ProjectProps){
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <motion.div
            ref={ref} 
            style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <Link href={linkUrl} rel='noopener noreferrer' target='_blank'>
                <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-blue-100 transition sm:group-even:pl-8
                dark:bg-slate-900 dark:border-white/5 hover:dark:bg-indigo-950
                ">
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[15.5rem] cursor-pointer">
                    <h3 className="text-2xl font-semibold dark:text-slate-100">{title}</h3>
                    <p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-indigo-300">
                        {description}
                    </p>
                    
                    <ul className="flex flex-wrap mt-5 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                        <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full group-hover:bg-blue-500 dark:bg-indigo-400 group-hover:dark:bg-indigo-600"
                            key={index}
                        >
                            {tag}
                        </li>
                        ))}
                    </ul>
                    </div>

                    <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    className="absolute hidden sm:block top-16 -right-52 w-[28.25rem] rounded-t-lg shadow-2xl opacity-45 
                    transition 
                    group-hover:shadow-white
                    group-hover:opacity-100
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2

                    group-even:right-[initial] group-even:-left-52
                    dark:group-hover:shadow-indigo-600
                    "
                    />
                </section>
            </Link>
        </motion.div>
    )
}