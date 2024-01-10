import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import eventify from "@/public/eventify.png"



export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#project"
    },
    {
        name: "Skills",
        hash: "#skill"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Contact",
        hash: "#contact"
    }
] as const;

export const experiencesData = [
    {
        title: "Full-Stack Web Developer - Studi Independen Batch 5",
        location: "PT. Gits Indonesia",
        description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        date: "August 2023 - December 2023",
    },
    {
        title: "Junior Web Developer",
        location: "Digital Talent Scholarship",
        description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        date: "July 2023 - August 2023",
    },
    {
        title: "Freelance Front-End Web Developer",
        location: "Politeknik Negeri Media Kreatif Jakarta",
        description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        date: "July 2023 - August 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Eventify",
        description: "I Worked as a Front-End Web Developer on capstone project",
        tags: ["Laravel","TailwindCSS","JavaScript","SQL"]
    },
    {
        title: "Audiobook Polimedia",
        description: "",
        tags: ["Laravel","TailwindCSS","DaisyUI","JavaScript","SQL"]
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Next.js",
    "Git",
    "Tailwind",
    "Boostrap",
    "Laravel",
    "SQL",
] as const;