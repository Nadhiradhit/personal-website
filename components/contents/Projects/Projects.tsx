
import SectionHeading from '@/components/elements/section-heading'
import { projectsData } from '@/lib/data'
import React from 'react'
import Project from '@/components/elements/card-project'

export default function Projects() {
    return (
        <section id="projects" className="z-10 scroll-mt-28 mt-28">
            <SectionHeading> My Projects </SectionHeading>
            <div className="grid md:grid-cols-1 gap-5 lg:grid-cols-2">
                {
                    projectsData.map((project,index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

