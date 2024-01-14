"use client"
import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContent } from '../elements/header/active-section-content'


export function Header() {
    const { activeSection,setActiveSection, setTimeOfLastClick } = useActiveSectionContent()
    return (
    <header className="z-[999] relative">
        <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none  border-opacity-60 
            bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-[1.85rem] 
            sm:h-[2.5rem] sm:w-[36rem] sm:rounded-full
            dark:bg-slate-900 
            "
            initial={{ y: -100, x: "-50%", opacity: 0}}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ delay: 0.2, ease: easeInOut}}
        ></motion.div>
        
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                {links.map((link) =>(
                    <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        key={link.hash}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, ease: easeInOut}}
                    >
                        <Link 
                        className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 hover:dark:text-gray-50 transition",{
                            "text-gray-950 dark:text-gray-50": activeSection === link.name,
                        })}
                        href={link.hash}
                        onClick={() => {
                            setTimeOfLastClick(Date.now())
                            setActiveSection(link.name)
                            }}>
                            {link.name}
                            {
                                link.name === activeSection && (
                                    <motion.span className="bg-blue-100 rounded-full absolute inset-0 -z-10 dark:bg-[#342d77]"
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                    ></motion.span>
                                )
                            }
                                
                            </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    </header>
        
    )
}
