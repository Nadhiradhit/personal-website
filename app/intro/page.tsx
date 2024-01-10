import React from 'react'
import Image from 'next/image'

export default function Intro() {
    return (
        <section className="min-h-min">
            <div className="flex items-center justify-center gap-10">
                <div>
                    
                </div>
                <div className="relative">
                    <Image 
                        src="/images/profile.jpg"
                        alt="Profile Picture"
                        width="1000"
                        height="1000"
                        className="rounded-lg w-60 h-80 border-black border-4   "
                    />

                    <span className="text-5xl absolute bottom-0 -right-5">💿</span>
                    <span className="text-5xl absolute -top-6 -right-8 -z-10 rotate-12">💻</span>
                </div>
            </div>
        </section>
    )
}
