"use client"
import SectionHeading from "@/components/elements/section-heading"
import { useSectionInView } from "@/lib/hooks"
import { motion, useScroll, useTransform } from "framer-motion"
import React, {useRef} from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Contact() {
    const scroll = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: scroll,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const { ref } = useSectionInView("Contact", 0.5)
    return (
        <section ref={ref} id="contact" className="text-slate-950 z-10 mt-28 max-w-[53rem] w-full scroll-mt-28 sm:mb-40">
            <SectionHeading> Contact Me!</SectionHeading>
            <p className="text-md md:text-xl font-semibold dark:text-slate-50 text-center mb-5">You can reach me on Github or linkedIn 😉</p>
                <motion.div ref={scroll} className="flex justify-center items-center gap-5 my-3"
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                    }}
                >
                    <a href="https://www.linkedin.com/in/nadhiradhitt/" className="button-contact">
                        <BsLinkedin/>
                        My LinkedIn
                    </a>
                    <a href="https://github.com/Nadhiradhit" className="button-contact">
                        <BsGithub/>
                        My Github
                    </a>
                </motion.div>
        </section>
    )
}
