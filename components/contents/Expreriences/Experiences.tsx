"use client"
import SectionHeading from "@/components/elements/section-heading"
import React, {useEffect} from "react"
import { experiencesData } from "@/lib/data"
import Experience from "@/components/elements/cards/card-experience"
import { useSectionInView } from "@/lib/hooks"

export default function Experiences() {
    const { ref } = useSectionInView("Experiences", 0.5)
    return (
        <section ref={ref} id="experience" className="mt-28 scroll-mt-28 text-slate-950">
            <SectionHeading> My Experiences </SectionHeading>
            <div className="flex flex-col gap-5">
                {
                    experiencesData.map((experience, index) => (
                        <React.Fragment key={index}>
                            <Experience {...experience}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}
