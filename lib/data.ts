import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import eventifyImg from "@/public/images/eventifyImg.png"
import audiobookImg from "@/public/images/audiobookImg.png"
import newsinImg from "@/public/images/newsinImg.png"
import techdabateImg from "@/public/images/techdabateImg.png"
import { HiHome } from "react-icons/hi"
import { SiAboutdotme, SiContactlesspayment, SiHomeadvisor, SiSaltproject, SiSkillshare } from "react-icons/si"
import { AiFillExperiment } from "react-icons/ai"



export const links = [
    {
        name: "Home",
        hash: "#home",
        icon: SiHomeadvisor
    },
    {
        name: "About",
        hash: "#about",
        icon: SiAboutdotme
    },
    {
        name: "Projects",
        hash: "#projects",
        icon: SiSaltproject
    },
    {
        name: "Skills",
        hash: "#skill",
        icon: SiSkillshare
    },
    {
        name: "Experience",
        hash: "#experience",
        icon: AiFillExperiment
    },
    {
        name: "Contact",
        hash: "#contact",
        icon: SiContactlesspayment
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
        description: "A web-based application that sells services such as catering, videography, photography, make-up artists, and events.",
        tags: ["Laravel","TailwindCSS","JavaScript","SQL"],
        linkUrl: "https://github.com/kelompok-1-Gitsid/Eventify",
        imageUrl: eventifyImg,
    },
    {
        title: "Audiobook Polimedia",
        description: "Web-based application as a web for reading while listening to stories.",
        tags: ["Laravel","TailwindCSS","DaisyUI","JavaScript","SQL"],
        linkUrl: "https://github.com/asyarbre/audiobook-web",
        imageUrl: audiobookImg,
    },
    {
        title: "NewsIn",
        description: "Simple web-based application as a web to input the latest news.",
        tags: ["Laravel","TailwindCSS","DaisyUI","JavaScript","SQL"],
        linkUrl: "https://github.com/Nadhiradhit/newsin-app",
        imageUrl: newsinImg,
    },
    {
        title: "Techdabate",
        description: "Web-based application as a web to provide information about the latest technology.",
        tags: ["HTML","JavaScript","TailwindCSS"],
        linkUrl: "https://github.com/Nadhiradhit/Tugas-UAS-ProjectWebsiteDinamis",
        imageUrl: techdabateImg,
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