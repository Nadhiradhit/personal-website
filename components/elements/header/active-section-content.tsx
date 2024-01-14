"use client"
import React , { useState, createContext, useContext } from 'react'
import type { SectionLink } from '@/lib/type'

type ActiveSectionContentProviderProps ={
    children: React.ReactNode
}

type ActiveSectionContentType = {
    activeSection : SectionLink
    setActiveSection: React.Dispatch<React.SetStateAction<SectionLink>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContent = createContext<ActiveSectionContentType | null>(null)

export default function ActiveSectionContentProvider({children}: 
    ActiveSectionContentProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionLink>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)
    return <ActiveSectionContent.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick, 
        setTimeOfLastClick
    }}>
        {children}
    </ActiveSectionContent.Provider>
}

export function useActiveSectionContent() {
    const content = useContext(ActiveSectionContent)

    if (content === null){
        throw new Error(
            "useActiveSection must be used within an ActiveSectionContentProvider"
        )
    }

    return content
}
