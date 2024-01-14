import { useActiveSectionContent } from "@/components/elements/header/active-section-content"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { SectionLink } from "./type"

export function useSectionInView(sectionLink: SectionLink, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    })
    const { setActiveSection, timeOfLastClick } = useActiveSectionContent()
    
    useEffect(()=>{
        if (inView && Date.now() - timeOfLastClick > 1000&& Date.now() - timeOfLastClick > 1000){
            setActiveSection(sectionLink)
        }
    }, [inView,setActiveSection, timeOfLastClick])

    return {
        ref
    }
}