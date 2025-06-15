import React from "react";
import eventifyImg from "@/public/images/eventifyImg.png";
import audiobookImg from "@/public/images/audiobookImg.png";
import newsinImg from "@/public/images/newsinImg.png";
import techdabateImg from "@/public/images/techdabateImg.png";
import personalImg from "@/public/images/personalImg.png";
import logoGits from "@/public/images/logoGits.jpg";
import logoPolimedia from "@/public/images/logoPolimedia.png";
import logoDigital from "@/public/images/logoDigital.png";
import logoTelkom from "@/public/images/logoTelkom.png";
import logoSolera from "@/public/images/logoSolera.png";
import PilihImg from "@/public/images/pilihImg.jpg";
import servicesHumas from "@/public/images/servicesHumas.png";
import locationApp from "@/public/images/locationImg.png";
import soleraImage from "@/public/images/soleraImg.png";

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
	},
] as const;

export const experiencesData = [
	{
		title: "Front-End Developer",
		type: "Freelance",
		location: "PT. Solera Crypto Network",
		date: "May 2025 - Present",
		logoUrl: logoSolera,
	},
	{
		title: "Full-Stack Web Developer",
		type: "Freelance",
		location: "Politeknik Negeri Media Kreatif Jakarta",
		date: "November 2024 - December 2024",
		logoUrl: logoPolimedia,
	},
	{
		title: "Front-End Web Developer",
		type: "Magang Merdeka Batch 6",
		location: "PT. Pilihanmu Indonesia Jaya",
		date: "February 2024 - June 2024",
		logoUrl: PilihImg,
	},
	{
		title: "Full-Stack Web Developer",
		type: "Studi Independen Batch 5",
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
		type: "Freelance",
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
		title: "Solera MarketPlace",
		description:
			"Solera is a school-focused exchange platform that uses Solera Tokens (SLRT) to streamline campus transactions.",
		tags: ["Next.js", "TailwindCSS", "TypeScript", "Axios"],
		linkUrl: "#",
		imageUrl: soleraImage,
	},
	{
		title: "LoCaption Web App",
		description:
			"web-based application that allows users to search for static locations and view their coordinates on a map.",
		tags: ["Next.js", "TailwindCSS", "Leaflet"],
		linkUrl: "https://github.com/Nadhiradhit/loction-app",
		imageUrl: locationApp,
	},
	{
		title: "Services Humas Polimedia",
		description:
			"Website base application as a web for Polimedia Public Relations Services",
		tags: ["Laravel", "TailwindCSS", "DaisyUI", "JavaScript", "MySQL"],
		linkUrl: "https://github.com/Nadhiradhit/humas-polimedia-web",
		imageUrl: servicesHumas,
	},
	{
		title: "Personal Web",
		description:
			"Web-base application as a portofolio web that's include an experience and skill",
		tags: ["Next.js", "TailwindCSS"],
		linkUrl: "https://porto-nadhir.vercel.app/",
		imageUrl: personalImg,
	},
	{
		title: "Eventify",
		description:
			"A web-based application that sells services such as catering, videography, photography, make-up artists, and events.",
		tags: ["Laravel", "TailwindCSS", "JavaScript", "MySQL"],
		linkUrl: "https://github.com/kelompok-1-Gitsid/Eventify",
		imageUrl: eventifyImg,
	},
	{
		title: "Audiobook Polimedia",
		description:
			"Web-based application as a web for reading while listening to stories.",
		tags: ["Laravel", "TailwindCSS", "DaisyUI", "JavaScript", "MySQL"],
		linkUrl: "https://github.com/asyarbre/audiobook-web",
		imageUrl: audiobookImg,
	},
	{
		title: "NewsIn",
		description:
			"Simple web-based application as a web to input the latest news. Trying to make CRUD On Laravel",
		tags: ["Laravel", "DaisyUI", "JavaScript", "MySQL"],
		linkUrl: "https://github.com/Nadhiradhit/newsin-app",
		imageUrl: newsinImg,
	},
	// {
	// 	title: "Techdabate",
	// 	description:
	// 		"Web-based application as a static web to provide information about the latest technology.",
	// 	tags: ["HTML", "JavaScript", "TailwindCSS"],
	// 	linkUrl: "https://github.com/Nadhiradhit/Tugas-UAS-ProjectWebsiteDinamis",
	// 	imageUrl: techdabateImg,
	// },
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
	"MySQL",
	"SWR",
	"TanStack",
	"Axios",
	"Framer Motion",
] as const;
