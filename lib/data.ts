import React from "react"
import eventifyImg from "@/public/images/eventifyImg.png"
import audiobookImg from "@/public/images/audiobookImg.png"
import newsinImg from "@/public/images/newsinImg.png"
import techdabateImg from "@/public/images/techdabateImg.png"
import logoGits from "@/public/images/logoGits.jpg"
import logoPolimedia from "@/public/images/logoPolimedia.png"
import logoDigital from "@/public/images/logoDigital.png"
import logoTelkom from "@/public/images/logoTelkom.png"




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
        hash: "#projects",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    {
        name: "Skills",
        hash: "#skill",
    },
    {
        name: "Contact",
        hash: "#contact",
    }
] as const;

export const experiencesData = [
    {
        title: "Full-Stack Web Developer",
        type: "Studi Independen",
        location: "PT. Gits Indonesia",
        date: "August 2023 - December 2023",
        logoUrl: logoGits,
    },
    {
        title: "Junior Web Developer",
        type: "Bootcamp",
        location: "Digital Talent Scholarship",
        date: "July 2023 - August 2023",
        logoUrl: logoDigital,
    },
    {
        title: "Front-End Web Developer",
        type: "Part Time",
        location: "Politeknik Negeri Media Kreatif Jakarta",
        date: "June 2023 - August 2023",
        logoUrl: logoPolimedia,
    },
    {
        title: "High School Internship",
        type: "Intership",
        location: "PT. Telkom Akses Bogor",
        date: "January 2020 - March 2020",
        logoUrl: logoTelkom,
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
        tags: ["Laravel","TailwindCSS","DaisyUI","JavaScript"],
        linkUrl: "https://github.com/asyarbre/audiobook-web",
        imageUrl: audiobookImg,
    },
    {
        title: "NewsIn",
        description: "Simple web-based application as a web to input the latest news.",
        tags: ["Laravel","DaisyUI","JavaScript","SQL"],
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
    "TypeScript",
    "PHP",
    "Next.js",
    "Node.js",
    "Swiper.js",
    "DaisyUI",
    "Git",
    "Tailwind",
    "Boostrap",
    "Laravel",
    "SQL",
] as const;