import SectionHeading from '@/components/elements/section-heading'
import { skillsData } from '@/lib/data'
import React from 'react'


export default function Skills() {
    return (
        <section id="skill" className="z-10 mt-28 max-w-[53rem] scroll-mt-28">
            <SectionHeading> My Skills </SectionHeading>
            <div className="relative">
            <ul className="flex flex-wrap justify-center gap-2">
                {
                    skillsData.map((skills, index) => (
                        <li key={index}
                            className="bg-gray-100 hover:bg-blue-200 border-black/[0.1] rounded-md py-2 px-3"
                        >{skills}</li>
                    ))
                }
            </ul>
            <div className="bg-gradient-to-tl from-[#a1f19e] to-[#74bce6] absolute top-[-1rem] -z-10 left-[60rem] h-[20.25rem] sm:h-[10.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
            </div>
        </section>
    )
}
