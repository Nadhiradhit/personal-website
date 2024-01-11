import { Header } from "@/components/layouts/header"

import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import '@/app/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['200','500','600','700'],
  subsets: ['latin'],
  variable: "--font-plus"
})

const poppins = Poppins({
  weight: ['500'],
  subsets:["latin"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: 'Nadhir Adhitya Z',
  description: 'Personal Portofolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body 
          className={`${plusJakarta.variable} font-plus 
        bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36 overflow-x-hidden`}
        > 
        <div className="bg-[#a1cdff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#c3f0f8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        
        <Header />
        {children}

      </body>
    </html>
  )
}
