"use client"
import { useRef } from 'react'
import { experiencesData } from '@/lib/data'
import Image from 'next/image'
import { motion,useScroll, useTransform } from 'framer-motion'

type ExperienceProps = (typeof experiencesData)[number]
export default function Experience({ title, type, location, description, date, logoUrl}: ExperienceProps) {
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
            }}>
            <section className="flex items-center gap-3 bg-gray-100 max-w-[52rem] w-auto p-4 md:p-10 py-5 border border-black/5 rounded-lg overflow-hidden hover:bg-blue-100 transition cursor-text">  
            <Image 
                src={logoUrl}
                alt="Logo"
                width="50"
                height="50"
                quality={95}
                className="rounded-md"
            />
            <div className="space-y-1">
                <div className="flex gap-2 md:gap-4 space-y-1.5">              
                    <h3 className="font-bold">{title}</h3>
                    <span className="text-[0.75rem] text-gray-400">({type})</span>  
                </div>
                <div className="text-sm">
                    <p className="font-semibold text-xs mb-1">{date}</p>
                    <p className="">{description}</p>
                </div>
            </div>

            </section>
        </motion.div>
    )
}