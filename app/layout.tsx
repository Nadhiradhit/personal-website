import { Header } from "@/components/layouts/header";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "@/app/styles/globals.css";
import ActiveSectionContentProvider from "@/components/elements/header/active-section-content";
import Footer from "@/components/layouts/footer";
import ThemeSwitcher from "@/components/elements/header/theme-switcher";

const inter = Inter({ subsets: ["latin"] });

const plusJakarta = Plus_Jakarta_Sans({
	weight: ["200", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-plus",
});

const poppins = Poppins({
	weight: ["500"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Nadhir Adhitya Z",
	description: "Personal Portofolio Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${plusJakarta.variable} font-plus 
        bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 
          dark:bg-gray-950 dark:text-gray-50 transition-all
        `}>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

				<ActiveSectionContentProvider>
					<Header />
					{children}
					<Footer />
				</ActiveSectionContentProvider>

				<ThemeSwitcher />
			</body>
		</html>
	);
}
