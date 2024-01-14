"use client"
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark"

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>("light")

    const toggleTheme = () => {
        if (theme === "light")
        {
            setTheme("dark")
                window.localStorage.setItem("theme", "dark")
                document.documentElement.classList.add("dark")
            } else {
                setTheme("light")
                window.localStorage.setItem("theme", "light")
                document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null
        if (localTheme){
            setTheme(localTheme)
            
            if (localTheme === "dark"){
                document.documentElement.classList.add("dark")
            }

        }else if (window.matchMedia("(prefers-color-sheme:dark)").matches){
            setTheme("dark")
            document.documentElement.classList.add("dark")
        } else (
            document.documentElement.classList.remove("dark")
        )
    }, [])



    return (
        <button className="fixed bottom-5 right-5 button-theme"
        onClick={toggleTheme}
        >
            {
                theme === "light" ?(
                    <BsSun/>
                ) : (
                    <BsMoon/>
                )
            }
            
        </button>
    )
}
