import SectionHeading from '@/components/elements/section-heading'
import React from 'react'
import { experiencesData } from '@/lib/data'
import Experience from '@/components/elements/card-experience'

export default function Experiences() {
    return (
        <section id="experience" className="z-10 mt-28 scroll-mt-28 ">
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
