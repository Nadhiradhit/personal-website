"use client"
import React from 'react'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'

export default function Links() {
    return (
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ y: 100,  opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, ease: easeInOut, }}
        >
                <Link href="#contact"
                    className=" group button-primary flex items-center justify-center gap-2"
                > Contact me header <BsArrowRight  className="opacity-70 group-hover:translate-x-1 transition" /> {" "}
                </Link>
                <a href="https://bit.ly/cv-nadhir" 
                className="button-secondary flex items-center justify-center gap-2">
                    Download My CV <HiDownload className="opacity-60 group-hover:translate-y-2 transition"/>
                </a>
                <a href="https://www.linkedin.com/in/nadhiradhitt/" className="button-icon">
                    <BsLinkedin/>
                </a>
                <a href="https://github.com/Nadhiradhit" className="button-icon">
                    <BsGithub/>
                </a>
        </motion.div>
    )
}
