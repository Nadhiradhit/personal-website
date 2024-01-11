"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
    return (
        <motion.div className="bg-gradient-to-b from-blue-300 to-blue-100 my-24 h-16 w-1 
        rounded-full hidden sm:block"
        initial={{opacity:0, y:100}}
        animate={{opacity: 1, y: 0}}
        transition={{ delay: 0.125}}
        >
        </motion.div>
    )
}
